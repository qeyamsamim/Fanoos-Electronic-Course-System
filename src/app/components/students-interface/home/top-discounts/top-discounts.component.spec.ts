import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDiscountsComponent } from './top-discounts.component';

describe('TopDiscountsComponent', () => {
  let component: TopDiscountsComponent;
  let fixture: ComponentFixture<TopDiscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDiscountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
