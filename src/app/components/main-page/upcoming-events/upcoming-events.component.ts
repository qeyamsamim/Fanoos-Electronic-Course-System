import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent implements OnInit {

  comingEvents = [
    {
      name: 'Event One',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShn8SSbElqDuqIKaKHXDqw1Id66h9hMeWJCFrV6CIzgbmw45eJuZw5a3ly55u0LaQk-gc&usqp=CAU',
      date: new Date(),
      time: '13:00',
      location: 'Fanoos Accounting Services'
    },
    {
      name: 'Event Two',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8I1meUA1mGbuqMw9wAp5AMvfTvq8LRHkDKj8jZCZ8RD9bIxL4sdYcEIaf6a5GBTr0WBs&usqp=CAU',
      date: new Date(),
      time: '08:00',
      location: 'Fanoos Accounting Services'
    },
    {
      name: 'Event Three',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHK1alpk9I07gZOJroh-ScLWUgOnjAsqwZf7h2I3wknw2kDSjZHebQn7ZOhDo2nELbutQ&usqp=CAU',
      date: new Date(),
      time: '16:00',
      location: 'Fanoos Accounting Services'
    },
    {
      name: 'Event Four',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR37s8_OBcqUfXJIT33vUZ4ncW__-Bv-tepui_AXC4dOz7uGPqFREsfHnSnAxUIi2ltGqc&usqp=CAU',
      date: new Date(),
      time: '14:00',
      location: 'Fanoos Accounting Services'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
