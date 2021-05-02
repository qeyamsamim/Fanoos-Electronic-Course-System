import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student.model';
import { map, switchMap, tap, take } from 'rxjs/operators';
import { BehaviorSubject, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private _students = new BehaviorSubject<Student[]>([]);
  private studentsAPI = 'https://fanoos-ecourse-system-default-rtdb.firebaseio.com/students.json';

  constructor(
    private http: HttpClient
  ) { }

  get students() {
    return this._students.asObservable();
  }

  getStudentId(studentId: string) {
    return this.http
    .get<Student>(
      `https://fanoos-ecourse-system-default-rtdb.firebaseio.com/students/${studentId}.json`
    )
    .pipe(
      map(resData => {
        return new Student(
          resData.firstName,
          resData.lastName,
          resData.gender,
          resData.email,
          resData.contactNum,
          resData.occupation,
          resData.company,
          resData.skype,
          resData.facebook,
          resData.imageURL,
          studentId
        );
      })
    );
  }

  fetchStudents() {
    return this.http
      .get<{ [key: string]: Student}>(this.studentsAPI)
      .pipe(
        map(resData => {
          const studentsArray: Student[] = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              studentsArray.push({...resData[key], id: key });
            }
          }
          return studentsArray;
        }),
        tap(students => {
          this._students.next(students);
        })
      );
  }

  fetchStudent(email: string) {
    return this.http
      .get<{ [key: string]: Student}>(this.studentsAPI)
      .pipe(
        map(resData => {
          const myItems: Student[] = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              myItems.push({...resData[key], id: key });
            }
          }
          return myItems.filter(students => students.email === email);
        }),
        tap(students => {
          this._students.next(students);
        })
      );
  }


  addStudents(newStudent: Student) {
    let generatedId: string;
    return this.http
      .post<{ name: string }> (
        this.studentsAPI, { ...newStudent, id: null}
      )
      .pipe(
        switchMap(resData => {
          generatedId = resData.name;
          return this.students;
        }),
        take(1),
        tap(student => {
          newStudent.id = generatedId;
          this._students.next(student.concat(newStudent));
        })
      );
  }

  updateStudents(
    firstName: string,
    lastName: string,
    contactNumber: string,
    occupation: string,
    company: string,
    skype: string,
    facebook: string,
    imageURL: string,
    studentId: string
  ) {
    let updatedProfile: Student[];
    return this.students.pipe(
      take(1),
      switchMap(studentsProfile => {
        if (!studentsProfile || studentsProfile.length <= 0) {
          return this.fetchStudents();
        } else {
          return of(studentsProfile);
        }
      }),
      switchMap(studentsProfile => {
        const updatedProfileIndex = studentsProfile.findIndex(i => i.id === studentId);
        updatedProfile = [...studentsProfile];
        const oldProfile = updatedProfile[updatedProfileIndex];
        updatedProfile[updatedProfileIndex] = new Student(
          firstName,
          lastName,
          oldProfile.gender,
          oldProfile.email,
          contactNumber,
          occupation,
          company,
          skype,
          facebook,
          imageURL,
          oldProfile.id
        );
        return this.http
          .put(
            `https://fanoos-ecourse-system-default-rtdb.firebaseio.com/students/${studentId}.json`,
          { ...updatedProfile[updatedProfileIndex], id: null }
        );
      }),
      tap(() => {
        this._students.next(updatedProfile);
      })
    );
  }
}
