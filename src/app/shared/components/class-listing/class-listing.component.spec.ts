import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClassListingComponent } from './class-listing.component';

describe('ClassListingComponent', () => {
  let component: ClassListingComponent;
  let fixture: ComponentFixture<ClassListingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
