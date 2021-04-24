import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyClassesComponent } from './my-classes.component';

describe('MyClassesComponent', () => {
  let component: MyClassesComponent;
  let fixture: ComponentFixture<MyClassesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
