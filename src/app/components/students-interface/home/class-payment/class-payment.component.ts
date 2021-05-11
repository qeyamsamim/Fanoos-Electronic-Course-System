import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OurClass } from 'src/app/models/class.model';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-class-payment',
  templateUrl: './class-payment.component.html',
  styleUrls: ['./class-payment.component.css', '../../../../app.component.css']
})
export class ClassPaymentComponent implements OnInit, OnDestroy {

  isLoading: boolean = false;
  classSub: Subscription;
  currentClass: OurClass;

  constructor(
    private route: ActivatedRoute,
    private classService: ClassService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('classId')) {
        this.router.navigate(['/home']);
        return;
      }
      this.isLoading = true;
      this.classSub = this.classService
        .getClassId(paramMap.get('classId'))
        .subscribe(ourClass => {
          this.currentClass = ourClass;
          this.isLoading = false;
        });
      });
  }

  ngOnDestroy() {
    this.classSub.unsubscribe();
  }

}
