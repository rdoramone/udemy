import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { OrderComponent } from './order.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { RadioComponent } from '../shared/radio/radio.component';
import { DeliveryCostComponent } from './delivery-cost/delivery-cost.component';
import { InputComponent } from '../shared/input/input.component';

import { OrderService } from './order.service';
import { NotificationService } from '../shared/messages/notification.service';
import { ShoppingCartService } from '../restaurants-details/shopping-cart/shopping-cart.service';
import { CartItem } from './../restaurants-details/shopping-cart/cart-item.model';
import { of } from 'rxjs';
import { Order } from './order-item.model';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let orderService: OrderService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DeliveryCostComponent,
        OrderComponent,
        OrderItemsComponent,
        InputComponent,
        RadioComponent
      ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        OrderService,
        NotificationService,
        ShoppingCartService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    orderService = TestBed.get(OrderService);

    const fixture: ComponentFixture<OrderComponent> = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should register order', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const orderClearSpy = spyOn(orderService, 'clear');

    const fakeOrder: Order = {
      address: 'Av. Xpto',
      number: 22,
      complement: 'apto 33',
      paymentOptions: 'DEB',
      orderItens: [{
        quantity: 1,
        menuId: 'xptoid'
      }],
      id: '1'
    }

    spyOn(orderService, 'checkOrder').and.returnValue(of(null));

    component.orderForm.get('name').setValue('Ricardo');
    component.orderForm.get('email').setValue('ricardo@gmail.com');
    component.orderForm.get('emailConfirmation').setValue('ricardo@gmail.com');
    component.orderForm.get('address').setValue('Av. Xpto da Silva');
    component.orderForm.get('number').setValue('33');
    component.orderForm.get('complement').setValue('apto 33');
    component.orderForm.get('paymentOption').setValue('DEB');
    component.checkOrder(fakeOrder);

    expect(navigateSpy).toHaveBeenCalledWith(['/order-summary']);
    expect(orderClearSpy).toHaveBeenCalled();
  });

  it('should to into total value of items', () => {
    const itemsValueSpy = spyOn(orderService, 'itemsValue').and.returnValue(20);

    expect(component.itemsValue()).toEqual(20);
    expect(itemsValueSpy).toHaveBeenCalled();
  });

  it('should to save items in cartItems', () => {
    const cartItemsSpy = spyOn(orderService, 'cartItems').and.returnValue([]);

    expect(component.cartItems()).toEqual([]);
    expect(cartItemsSpy).toHaveBeenCalled();
  });

  it('should increased item', () => {
    const increaseQtySpy = spyOn(orderService, 'increaseQty');
    const item: CartItem = {
      menuItem: {
        id: '1',
        imagePath: 'image-path',
        name: 'Pão de queijo',
        description: 'pão recheado com queijo',
        price: 10,
        restaurantId: 'id do restaurante'
      },
      quantity: 1,
      value: () => 0
    };

    component.increaseQty(item);

    expect(increaseQtySpy).toHaveBeenCalled();
  });

  it('should decreased item', () => {
    const decreaseQtySpy = spyOn(orderService, 'decreaseQty');
    const item: CartItem = {
      menuItem: {
        id: '1',
        imagePath: 'image-path',
        name: 'Pão de queijo',
        description: 'pão recheado com queijo',
        price: 10,
        restaurantId: 'id do restaurante'
      },
      quantity: 1,
      value: () => 0
    };

    component.decreaseQty(item);

    expect(decreaseQtySpy).toHaveBeenCalled();
  });

  it('should remove item', () => {
    const removeSpy = spyOn(orderService, 'removeItem');
    const item: CartItem = {
      menuItem: {
        id: '1',
        imagePath: 'image-path',
        name: 'Pão de queijo',
        description: 'pão recheado com queijo',
        price: 10,
        restaurantId: 'id do restaurante'
      },
      quantity: 1,
      value: () => 0
    };

    component.remove(item);

    expect(removeSpy).toHaveBeenCalled();
  });

  it('should be an order completed', () => {
    component.orderId = '1';

    expect(component.orderId).toBeTruthy();
  });

  it('should be an order not completed', () => {
    component.orderId = undefined;

    expect(component.orderId).toBeFalsy();
  });

  it('should have equals emails', () => {
    component.orderForm.get('email').setValue('ricardo@gmail.com');
    component.orderForm.get('emailConfirmation').setValue('ricardo@gmail.com');

    expect(OrderComponent.equalsTo(component.orderForm)).toBeFalsy();
  });

  it('not should have equals emails', () => {
    component.orderForm.get('email').setValue('ricardo@gmail.com');
    component.orderForm.get('emailConfirmation').setValue('joao@gmail.com');

    expect(OrderComponent.equalsTo(component.orderForm)).toEqual({emailsNoMatch: true});
  });
});
