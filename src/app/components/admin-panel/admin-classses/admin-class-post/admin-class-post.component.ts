import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-class-post',
  templateUrl: './admin-class-post.component.html',
  styleUrls: ['./admin-class-post.component.css', '../../../../app.component.css']
})
export class AdminClassPostComponent implements OnInit {
  classPost: FormGroup;
  isLoading: boolean = false;
  message: string = "Registering";
  error: string = '';

  constructor() { }

  ngOnInit(): void {
    this.classPost = new FormGroup({
      'className': new FormControl(null, Validators.required),
      'instructor': new FormControl(null, Validators.required),
      'fee': new FormControl(null, Validators.required),
      'topics': new FormArray([new FormControl(null, Validators.required)]),
      'startDate': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.classPost.invalid) {
      return;
    }
    const value = this.classPost.value;
    console.log(value);
  }

  onAddTopic() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.classPost.get('topics')).push(control);
  }

}
