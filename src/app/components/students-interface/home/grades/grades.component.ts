import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css', '../../../../app.component.css']
})
export class GradesComponent implements OnInit {

  grades = [
    { number: '1', class: 'Basic Accounting Class', exam: 'Quize 1', grade: '98', date: 'February 3, 2021', remark: '' },
    { number: '2', class: 'Advanced QuickBooks', exam: 'Quize 1', grade: '83', date: 'February 15, 2021', remark: '' },
    { number: '3', class: 'Basic Accounting Class', exam: 'Final', grade: '91', date: 'March 21, 2021', remark: '' },
    { number: '4', class: 'Advanced QuickBooks', exam: 'Final', grade: '87', date: 'March 10, 2021', remark: '' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
