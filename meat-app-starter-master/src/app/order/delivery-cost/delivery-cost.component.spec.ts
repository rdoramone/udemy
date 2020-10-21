import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryCostComponent } from './delivery-cost.component';

describe('DeliveryCostComponent', () => {
  let component: DeliveryCostComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryCostComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture: ComponentFixture<DeliveryCostComponent> = TestBed.createComponent(DeliveryCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should to receive delivery value', () => {
    component.delivery = 50;

    expect(component.delivery).toEqual(50);
  });

  it('should to receive itemsValue', () => {
    component.itemsValue = 30;

    expect(component.itemsValue).toEqual(30);
  });

  it('should to calc total value', () => {
    component.delivery = 50;
    component.itemsValue = 30;

    expect(component.total()).toEqual(80);
  });
});
