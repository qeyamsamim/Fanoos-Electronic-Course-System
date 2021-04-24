import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-classes',
  templateUrl: './all-classes.component.html',
  styleUrls: ['./all-classes.component.css', '../../../../app.component.css']
})
export class AllClassesComponent implements OnInit {

  search = '';
  classNames = [
    {
      name: 'QuickBooks Pro',
      price: '100$',
      btnText: 'Enroll Class',
      url: '/home/class-payment',
      imgURL: 'https://digitaldefynd.com/wp-content/uploads/2019/01/best-accounting-course-class-certification-training-online.jpg'
    },
    {
      name: 'Basics of QuickBooks',
      price: '130$',
      btnText: 'Enroll Class',
      url: '/home/class-payment',
      imgURL: 'https://www.fnu.edu/wp-content/uploads/2016/01/shutterstock_338731511-300x202.jpg'
    },
    {
      name: 'Advanced QuickBooks',
      price: '200$',
      btnText: 'Enroll Class',
      url: '/home/class-payment',
      imgURL: 'https://www.hostdocket.com/wp-content/uploads/2019/10/QuickBooks-Desktop-2020-Whats-new-and-improved.png'
    },
    {
      name: 'Accounting Basics',
      price: '80$',
      btnText: 'Enroll Class',
      url: '/home/class-payment',
      imgURL: 'https://www.hostdocket.com/wp-content/uploads/2019/04/How-to-Change-Service-or-Inventory-Item-Types-in-QuickBooks.png'
    },
    {
      name: 'QuickBooks Enterprise',
      price: '50$',
      btnText: 'Enroll Class',
      url: '/home/class-payment',
      imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIXXkw04VWiCvs6DQ3kDBMjlEboNIWBxdLEFa_rx9vgZ5zBMd8U6yEfliHH_NVMigKjhw&usqp=CAU'
    },
    {
      name: 'QuickBooks Online',
      price: '150$',
      btnText: 'Enroll Class',
      url: '/home/class-payment',
      imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7T_Q46NgVGQG3u05Y6qI_SMJBXskT6V1c7122y2WUZArc_vhHwMktxus-8f0YsNXK6e4&usqp=CAU'
    },
    {
      name: 'QuickBooks Intermediate',
      price: '100$',
      btnText: 'Enroll Class',
      url: '/home/class-payment',
      imgURL: 'https://www.codespaces.com/wp-content/uploads/2020/01/Accounting4.jpg'
    },
    {
      name: 'Taxation',
      price: '100$',
      btnText: 'Enroll Class',
      url: '/home/class-payment',
      imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXz9ve0OW2AF8IJ8zVQDgQkXCrJ6kHCFacCxOqC2ZT_-xjDMpOIjvU0-Zh08q7txUG05Y&usqp=CAU'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
