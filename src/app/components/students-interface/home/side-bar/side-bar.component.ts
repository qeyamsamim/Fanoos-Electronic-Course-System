import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css', '../../../../app.component.css']
})
export class SideBarComponent implements OnInit {

  viewDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
