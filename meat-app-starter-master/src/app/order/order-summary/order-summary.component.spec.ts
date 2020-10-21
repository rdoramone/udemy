import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummaryComponent } from './order-summary.component';
import { RatingComponent } from './../../shared/rating/rating.component';

describe('OrderSummaryComponent', () => {
  let component: OrderSummaryComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OrderSummaryComponent,
        RatingComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture: ComponentFixture<OrderSummaryComponent> = TestBed.createComponent(OrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
