import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTabsComponent } from './class-tabs.component';

describe('ClassTabsComponent', () => {
  let component: ClassTabsComponent;
  let fixture: ComponentFixture<ClassTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
