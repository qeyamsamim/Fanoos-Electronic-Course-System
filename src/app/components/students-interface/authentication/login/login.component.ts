import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';

import { AuthService } from 'src/app/services/auth.service';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../../app.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoading: boolean = false;
  message: string = 'Logging in'
  error: string = '';
  student: Student;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if(!this.loginForm.valid) {
      return;
    }

    const value = this.loginForm.value;
    this.isLoading = true;

    this.authService.login(value.email, value.password).subscribe(responseData => {
      this.isLoading = false;
      this.router.navigate(['/home']);
      this.loginForm.reset();
    }, errorMessage => {
      console.log(errorMessage);
      this.error = errorMessage;
      this.isLoading = false;
    });
  }

}
