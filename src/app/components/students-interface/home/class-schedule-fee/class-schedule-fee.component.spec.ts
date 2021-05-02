import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassScheduleFeeComponent } from './class-schedule-fee.component';

describe('ClassScheduleFeeComponent', () => {
  let component: ClassScheduleFeeComponent;
  let fixture: ComponentFixture<ClassScheduleFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassScheduleFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassScheduleFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
