import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsPostComponent } from './instructors-post.component';

describe('InstructorsPostComponent', () => {
  let component: InstructorsPostComponent;
  let fixture: ComponentFixture<InstructorsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorsPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
