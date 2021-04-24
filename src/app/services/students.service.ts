import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student.model';
import { map, switchMap, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students: Student[] = [];
  private studentsChanged = new Subject<Student[]>();
  private studentsAPI = 'https://fanoos-ecourse-system-default-rtdb.firebaseio.com/students.json';

  constructor(
    private http: HttpClient
  ) { }

  setStudents(studentsData: Student[]) {
    this.students = studentsData;
    this.studentsChanged.next(this.students.slice());
  }

  getItems() {
    return this.students.slice();
  }

  fetchStudents() {
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
          return myItems;
        }),
        tap(items => {
          this.setStudents(items);
        })
      );
  }


  addStudents(newStudent: Student) {
    return this.http
      .post<{ name: string }>(this.studentsAPI, newStudent )
      .pipe(
        tap(resData => {
          console.log(resData);
        })
      );
  }

  getStudentsChangedListener() {
    return this.studentsChanged.asObservable();
  }
}
