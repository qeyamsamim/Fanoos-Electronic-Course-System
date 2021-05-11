import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedTrainingsComponent } from './archived-trainings.component';

describe('ArchivedTrainingsComponent', () => {
  let component: ArchivedTrainingsComponent;
  let fixture: ComponentFixture<ArchivedTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivedTrainingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
