import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassPaymentComponent } from './class-payment.component';

describe('ClassPaymentComponent', () => {
  let component: ClassPaymentComponent;
  let fixture: ComponentFixture<ClassPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
