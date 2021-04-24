import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClasssesComponent } from './admin-classses.component';

describe('AdminClasssesComponent', () => {
  let component: AdminClasssesComponent;
  let fixture: ComponentFixture<AdminClasssesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminClasssesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClasssesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
