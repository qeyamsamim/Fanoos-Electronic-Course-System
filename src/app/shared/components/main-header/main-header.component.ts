import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css', '../../../app.component.css']
})
export class MainHeaderComponent implements OnInit, OnDestroy {

  private studentSub: Subscription;
  isAuthenticated: boolean = false;
  isAdminAuthenticated: boolean = false;
  navItem = [
    { title: 'Classes', uRL: '/admin'},
    { title: 'Students', uRL: '/admin/students-list'},
    { title: 'Admins', uRL: '/admin/admin-users'}
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.studentSub = this.authService.student.subscribe(student => {
      this.isAuthenticated = !student ? false : true;
    });
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
