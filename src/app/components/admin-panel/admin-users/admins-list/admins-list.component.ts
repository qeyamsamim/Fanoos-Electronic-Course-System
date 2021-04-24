import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admins-list',
  templateUrl: './admins-list.component.html',
  styleUrls: ['./admins-list.component.css', '../../../../app.component.css']
})
export class AdminsListComponent implements OnInit {
  isLoading: boolean = false;
  search: string = '';
  admins = [
    { id: '1', firstName: 'Admin', lastName: 'One', email: 'adminone@gmail.com', dateAdded: 'April 12, 2021' },
    { id: '2', firstName: 'Admin', lastName: 'Two', email: 'adminone@gmail.com', dateAdded: 'April 9, 2021' },
    { id: '2', firstName: 'Admin', lastName: 'Three', email: 'adminone@gmail.com', dateAdded: 'April 01, 2021' },
    { id: '2', firstName: 'Admin', lastName: 'Four', email: 'adminone@gmail.com', dateAdded: 'March 22, 2021' },
    { id: '2', firstName: 'Admin', lastName: 'Five', email: 'adminone@gmail.com', dateAdded: 'March 12, 2021' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(id: string) {

  }

}
