import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-admins',
  templateUrl: './register-admins.component.html',
  styleUrls: ['./register-admins.component.css', '../../../../app.component.css']
})
export class RegisterAdminsComponent implements OnInit {

  adminRegister: FormGroup;
  isLoading: boolean = false;
  message: string = "Registering";
  error: string = '';
  pattern = "^[a-zA-Z]{1,30}$";
  passwordPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$";

  constructor() { }

  ngOnInit(): void {
    this.adminRegister = new FormGroup({
      'firstName': new FormControl(null, [Validators.required, Validators.pattern(this.pattern)]),
      'lastName': new FormControl(null, [Validators.required, Validators.pattern(this.pattern)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.pattern(this.passwordPattern)]),
      'confirmPass': new FormControl(null, [Validators.required, Validators.pattern(this.passwordPattern)])
    });
  }

  onSubmit() {
    if (this.adminRegister) {
      return;
    }
  }

}
