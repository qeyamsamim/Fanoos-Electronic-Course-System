import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import { AuthService } from 'src/app/services/auth.service';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css', '../../../app.component.css']
})
export class MainHeaderComponent implements OnInit, OnDestroy {

  private studentSub: Subscription;
  isAuthenticated: boolean = false;
  isAdminAuthenticated: boolean = false;
  student: Student[];
  studentId: string;
  isLoading: boolean = false;

  navItem = [
    { title: 'Classes', uRL: '/admin'},
    { title: 'Students', uRL: '/admin/students-list'},
    { title: 'Admins', uRL: '/admin/admin-users'}
  ];

  constructor(
    private authService: AuthService,
    private router: Router,
    private studentsService: StudentsService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.studentSub = this.authService.student.subscribe(student => {
      this.isAuthenticated = !student ? false : true;
    });
    this.studentsService.fetchStudent(this.authService.student.value.email)
      .subscribe(student => {
        this.student = student;
        this.isLoading = false;
      })
  }

  hasRoute (route: string) {
    return this.router.url.includes(route);
  }

  onLogout () {
    this.authService.logout();
  }

  ngOnDestroy () {
    this.studentSub.unsubscribe();
  }

}
