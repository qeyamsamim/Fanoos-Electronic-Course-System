import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css', '../../../app.component.css']
})
export class AdminHeaderComponent implements OnInit {
  navItem = [
    { title: 'Classes', uRL: '/admin'},
    { title: 'Students', uRL: '/admin/students-list'},
    { title: 'Admins', uRL: '/admin/admin-users'}
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  hasRoute (route: string) {
    return this.router.url.includes(route);
  }

}
