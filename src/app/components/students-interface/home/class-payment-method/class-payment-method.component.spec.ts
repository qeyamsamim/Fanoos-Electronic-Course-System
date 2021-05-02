import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassPaymentMethodComponent } from './class-payment-method.component';

describe('ClassPaymentMethodComponent', () => {
  let component: ClassPaymentMethodComponent;
  let fixture: ComponentFixture<ClassPaymentMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassPaymentMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
