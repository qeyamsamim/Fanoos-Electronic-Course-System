import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OurClass } from 'src/app/models/class.model';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-top-discounts',
  templateUrl: './top-discounts.component.html',
  styleUrls: ['./top-discounts.component.css', '../../../../app.component.css']
})
export class TopDiscountsComponent implements OnInit, OnDestroy {

  isLoading: boolean = false;
  classes: OurClass[] = [];
  classSub: Subscription;

  constructor(
    private classService: ClassService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.classSub = this.classService.classes
      .subscribe(
        (classData: OurClass[]) => {
          this.classes = classData.filter(ourClass => ourClass.discount > 10).slice(0, 3);
        }
      )
    this.classService.fetchClass().subscribe(() => {
      this.isLoading = false;
    })
  }

  ngOnDestroy() {
    this.classSub.unsubscribe();
  }

}
