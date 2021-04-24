import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClassPostComponent } from './admin-class-post.component';

describe('AdminClassPostComponent', () => {
  let component: AdminClassPostComponent;
  let fixture: ComponentFixture<AdminClassPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminClassPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClassPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
