import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../../../app.component.css']
})
export class RegisterComponent implements OnInit {

  gender = ['Male', 'Female'];
  registerForm: FormGroup;
  isLoading: boolean = false;
  message: string = "Registering";
  error: string = '';
  pattern = "^[a-zA-Z]{1,30}$";
  passwordPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$";

  constructor(
    private authService: AuthService,
    private studentsService: StudentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required, Validators.pattern(this.pattern)]),
      'lastName': new FormControl(null, [Validators.required, Validators.pattern(this.pattern)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'contactNumber': new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{10,10}$')]),
      'gender': new FormControl('Male', Validators.required),
      'password': new FormControl(null, [Validators.required, Validators.pattern(this.passwordPattern)]),
      'confirmPass': new FormControl(null, [Validators.required, Validators.pattern(this.passwordPattern)])
    })
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    const value = this.registerForm.value;
    this.isLoading = true;

    this.authService.singUp(value.email, value.password).subscribe(responseData => {
      console.log(responseData);
      const newStudent = new Student(
        value.firstName,
        value.lastName,
        value.email,
        value.contactNumber,
        value.gender
      );
      this.studentsService.addStudents(newStudent).subscribe(() => {
        this.router.navigate(['/home']);
        this.registerForm.reset();
        this.isLoading = false;
      });

    }, errorMessage => {
      console.log(errorMessage);
      this.error = errorMessage;
      this.isLoading = false;
    });
  }

}
