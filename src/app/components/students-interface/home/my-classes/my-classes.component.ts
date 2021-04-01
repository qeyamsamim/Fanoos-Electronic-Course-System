import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-classes',
  templateUrl: './my-classes.component.html',
  styleUrls: ['./my-classes.component.css']
})
export class MyClassesComponent implements OnInit {

  search = '';
  myClasses = [
    {
      name: 'Basic Accounting Class',
      price: '200$',
      btnText: 'View Class',
      imgURL: 'https://digitaldefynd.com/wp-content/uploads/2019/01/best-accounting-course-class-certification-training-online.jpg'
    },
    {
      name: 'Advanced QuickBooks',
      price: '200$',
      btnText: 'View Class',
      imgURL: 'https://www.hostdocket.com/wp-content/uploads/2019/10/QuickBooks-Desktop-2020-Whats-new-and-improved.png'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
