import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPolicyComponent } from './training-policy.component';

describe('TrainingPolicyComponent', () => {
  let component: TrainingPolicyComponent;
  let fixture: ComponentFixture<TrainingPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
