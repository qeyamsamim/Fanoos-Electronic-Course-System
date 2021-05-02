import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-class-payment-method',
  templateUrl: './class-payment-method.component.html',
  styleUrls: ['./class-payment-method.component.css', '../../../../app.component.css']
})
export class ClassPaymentMethodComponent implements OnInit {

  message: string = 'This training policy is developed to establish a high quality training management system to provide a professional '+
  'training courses for the applicants.  This policy covers the following criteria.';
  isClicked: boolean = false;
  payment: boolean = false;
  trainingform: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.trainingform = new FormGroup({
      'agree': new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    if (!this.trainingform) {
      return;
    }
  }

  onClick() {
    this.isClicked = true;
  }

  onPayment() {
    this.payment = true;
  }

  onHandleClose() {
    this.isClicked = false;
  }

}
