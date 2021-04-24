import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoginSignupTabsComponent } from './login-signup-tabs.component';

describe('LoginSignupTabsComponent', () => {
  let component: LoginSignupTabsComponent;
  let fixture: ComponentFixture<LoginSignupTabsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSignupTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSignupTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
