import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-class-list',
  templateUrl: './admin-class-list.component.html',
  styleUrls: ['./admin-class-list.component.css']
})
export class AdminClassListComponent implements OnInit {

  search: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
