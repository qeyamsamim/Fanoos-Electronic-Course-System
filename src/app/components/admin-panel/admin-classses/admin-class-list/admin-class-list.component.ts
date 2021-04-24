import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OurClass } from 'src/app/models/class.model';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-admin-class-list',
  templateUrl: './admin-class-list.component.html',
  styleUrls: ['./admin-class-list.component.css']
})
export class AdminClassListComponent implements OnInit {

  search: string = '';
  classes: OurClass[] = [];
  classesSub: Subscription;
  isLoading: boolean = false;

  constructor(
    private classService: ClassService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.classesSub = this.classService.classes
      .subscribe(
        (ClassData: OurClass[]) => {
          this.classes = ClassData;
        }
      );
    this.classService.fetchClass().subscribe(() => {
      this.isLoading = false;
    });
  }

}
