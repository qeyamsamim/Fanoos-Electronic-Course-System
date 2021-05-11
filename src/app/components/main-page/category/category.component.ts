import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css', '../../../app.component.css'],
  animations: [
    trigger('upcoming', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(300px)'
        }),
        animate(800)
      ]),
    ]),
    trigger('ongoing', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(300px)'
        }),
        animate(1400)
      ]),
    ]),
    trigger('archived', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(300px)'
        }),
        animate(1800)
      ]),
    ]),
    trigger('language', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(300px)'
        }),
        animate(2000)
      ]),
    ]),
    trigger('links', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(200px)'
        }),
        animate(2000)
      ]),
    ])
  ]
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
