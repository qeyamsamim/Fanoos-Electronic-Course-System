import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-listing',
  templateUrl: './class-listing.component.html',
  styleUrls: ['./class-listing.component.css', '../../../app.component.css']
})
export class ClassListingComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
