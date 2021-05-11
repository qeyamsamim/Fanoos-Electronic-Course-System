import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OurClass } from 'src/app/models/class.model';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-archived-trainings',
  templateUrl: './archived-trainings.component.html',
  styleUrls: ['./archived-trainings.component.css']
})
export class ArchivedTrainingsComponent implements OnInit, OnDestroy {
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
          this.classes = ClassData.slice(0, 5);
        }
      );
    this.classService.fetchClass().subscribe(() => {
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.classesSub.unsubscribe();
  }
}
