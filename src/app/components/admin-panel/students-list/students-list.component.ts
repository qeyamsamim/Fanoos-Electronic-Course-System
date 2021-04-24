import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css', '../../../app.component.css']
})
export class StudentsListComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  search: string = '';
  studentsSub: Subscription;
  students: Student[] = [];

  constructor(
    private studentsService: StudentsService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.studentsSub = this.studentsService.getStudentsChangedListener()
      .subscribe(
        (studentsData: Student[]) => {
          this.students = studentsData;
        }
      );
    this.studentsService.fetchStudents().subscribe(() => {
      this.isLoading = false;
    });
  }

  onDelete(id: string) {

  }
  ngOnDestroy() {
    this.studentsSub.unsubscribe();
  }
}
