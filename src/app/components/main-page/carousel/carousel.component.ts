import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('carouselTitle', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-300px)'
        }),
        animate(1500)
      ]),
    ]),
    trigger('carouselText', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(300px)'
        }),
        animate(1500)
      ]),
    ])
  ]
})
export class CarouselComponent implements OnInit {

  carouselItems = [
    {
      title: 'Best Trainings Offered by Our Professional trainers',
      text: 'After attending our trainings, you will receive a certificate for the completion of the training.',
      image: '../../../assets/images/1.jpg',
      alt: 'students'
    },
    {
      title: 'Business Practice Competions',
      text: 'We held competitions for students to improve their skills and advance their knowledge.',
      image: '../../../assets/images/2.jpg',
      alt: 'library'
    },
    {
      title: 'Visit Our Office Today!',
      text: 'Join us and expercience the difference and improvement in your business and professional life.',
      image: '../../../assets/images/3.jpg',
      alt: 'classes'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
