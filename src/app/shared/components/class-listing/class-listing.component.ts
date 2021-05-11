import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-listing',
  templateUrl: './class-listing.component.html',
  styleUrls: ['./class-listing.component.css', '../../../app.component.css'],
  animations: [
    trigger('classes', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(300px)'
        }),
        animate(900)
      ]),
    ]),
  ]
})
export class ClassListingComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
