import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-schedule-fee',
  templateUrl: './class-schedule-fee.component.html',
  styleUrls: ['./class-schedule-fee.component.css', '../../../../app.component.css']
})
export class ClassScheduleFeeComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
