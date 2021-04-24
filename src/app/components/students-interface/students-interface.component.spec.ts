import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsInterfaceComponent } from './students-interface.component';

describe('StudentsInterfaceComponent', () => {
  let component: StudentsInterfaceComponent;
  let fixture: ComponentFixture<StudentsInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
