import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-box',
  templateUrl: './spinner-box.component.html',
  styleUrls: ['./spinner-box.component.css']
})
export class SpinnerBoxComponent implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
