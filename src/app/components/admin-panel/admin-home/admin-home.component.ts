import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css', '../../../app.component.css']
})
export class AdminHomeComponent implements OnInit, OnDestroy {

  isLoading: boolean = false;
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
