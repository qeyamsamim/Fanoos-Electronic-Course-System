import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DescriptionAuthComponent } from './description-auth.component';

describe('DescriptionAuthComponent', () => {
  let component: DescriptionAuthComponent;
  let fixture: ComponentFixture<DescriptionAuthComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
