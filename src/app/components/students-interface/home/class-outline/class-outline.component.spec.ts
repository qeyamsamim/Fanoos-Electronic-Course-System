import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassOutlineComponent } from './class-outline.component';

describe('ClassOutlineComponent', () => {
  let component: ClassOutlineComponent;
  let fixture: ComponentFixture<ClassOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassOutlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
