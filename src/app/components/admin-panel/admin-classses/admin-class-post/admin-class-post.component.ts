import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { OurClass } from '../../../../models/class.model';
import { ClassService } from '../../../../services/class.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-admin-class-post',
  templateUrl: './admin-class-post.component.html',
  styleUrls: ['./admin-class-post.component.css', '../../../../app.component.css']
})
export class AdminClassPostComponent implements OnInit {
  classPost: FormGroup;
  isLoading: boolean = false;
  message: string = "Adding Class";
  error: string = '';
  image: File;
  imagePreview: string;
  instrcutors: string[] = ['Mohammad Aman Ahmadi', 'Trainer A', 'Trainer B', 'Add a Trainer'];

  constructor(
    private classService: ClassService,
    private angularFireStorage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.classPost = new FormGroup({
      'className': new FormControl(null, Validators.required),
      'instructor': new FormControl('Mohammad Aman Ahmadi', Validators.required),
      'fee': new FormControl(null, Validators.required),
      'discount': new FormControl(null),
      'topics': new FormArray([new FormControl(null, Validators.required)]),
      'startDate': new FormControl(null, Validators.required),
      'schedule': new FormArray([new FormControl(null, Validators.required)]),
      'startTime': new FormControl(null, Validators.required),
      'endTime': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'image': new FormControl(null, {validators: [Validators.required]})
    });
  }

  onImagePicked(event: Event) {
    this.image = (event.target as HTMLInputElement).files[0];
    this.classPost.patchValue({image: this.image});
    this.classPost.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(this.image);
  }

  onSubmit() {
    if (this.classPost.invalid) {
      return;
    }
    this.isLoading = true;
    const value = this.classPost.value;
    const filePath = `Classes/${this.image.name}_${new Date().getTime()}`;
    const storageRef = this.angularFireStorage.ref(filePath);
    const uploadTask = this.angularFireStorage.upload(filePath, this.image);

    uploadTask.snapshotChanges().pipe(
      finalize(() =>{
        storageRef.getDownloadURL().subscribe(imageURL => {
          const newClass = new OurClass(
            value.className,
            value.instructor,
            value.fee,
            value.topics,
            value.startDate,
            value.schedule,
            value.startTime,
            value.endTime,
            value.description,
            imageURL,
            new Date(),
            value.discount
          );
          this.classService.addClasses(newClass).subscribe(() => {
            this.classPost.reset();
            this.isLoading = false;
          });
        })
      })
    ).subscribe();
  }

  onRemoveSchedule(index: number) {
    (<FormArray>this.classPost.get('schedule')).removeAt(index);
  }

  onRemoveTopics(index: number) {
    (<FormArray>this.classPost.get('topics')).removeAt(index);
  }

  onAddTopic() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.classPost.get('topics')).push(control);
  }

  onAddSchedule() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.classPost.get('schedule')).push(control);
  }

}
