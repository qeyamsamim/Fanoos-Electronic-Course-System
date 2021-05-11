import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', '../../../../app.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  profileForm: FormGroup;
  student: Student;
  imagePreview: string;
  image: File;
  private studentId: string;
  private studentsSub: Subscription;
  isLoading: boolean = false;
  isUpdating: boolean = false;
  message: string = 'Updating';

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private angularFireStorage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('studentId')) {
        this.isLoading = true;
        this.studentId = paramMap.get('studentId');
        this.studentsSub = this.studentsService
          .getStudentId(this.studentId)
          .subscribe(student => {
            this.student = student;
            this.profileForm = new FormGroup({
              'firstName': new FormControl(this.student.firstName, Validators.required),
              'lastName': new FormControl(this.student.lastName, Validators.required),
              'gender': new FormControl(this.student.gender),
              'email': new FormControl(this.student.email),
              'contactNumber': new FormControl(this.student.contactNum, Validators.required),
              'occupation': new FormControl(this.student.occupation),
              'company': new FormControl(this.student.company),
              'skype': new FormControl(this.student.skype),
              'facebook': new FormControl(this.student.facebook),
              'image': new FormControl(null)
            });
            this.isLoading = false;
          });
      }
    });
  }

  onImagePicked(event: Event) {
    this.image = (event.target as HTMLInputElement).files[0];
    this.profileForm.patchValue({image: this.image});
    this.profileForm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(this.image);
  }

  onSubmit() {
    if (this.profileForm.invalid) {
      return;
    }
    this.isUpdating = true;
    const value = this.profileForm.value;
    const filePath = `Students/${this.studentId}/${new Date().getTime()}`;
    const storageRef = this.angularFireStorage.ref(filePath);
    const uploadTask = this.angularFireStorage.upload(filePath, this.image);

    uploadTask.snapshotChanges().pipe(
      finalize(() =>{
        storageRef.getDownloadURL().subscribe(imageURL => {
          this.studentsService.updateStudents(
            value.firstName,
            value.lastName,
            value.contactNumber,
            value.occupation,
            value.company,
            value.skype,
            value.facebook,
            imageURL,
            this.studentId
          ).subscribe(() => {
            this.isUpdating = false;
          });
        })
      })
    ).subscribe();
  }

  ngOnDestroy() {
    this.studentsSub.unsubscribe();
  }

}
