import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishTrainingsComponent } from './english-trainings.component';

describe('EnglishTrainingsComponent', () => {
  let component: EnglishTrainingsComponent;
  let fixture: ComponentFixture<EnglishTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishTrainingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
