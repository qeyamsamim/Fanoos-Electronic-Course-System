import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsInterfaceComponent } from './instructors-interface.component';

describe('InstructorsInterfaceComponent', () => {
  let component: InstructorsInterfaceComponent;
  let fixture: ComponentFixture<InstructorsInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorsInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorsInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
