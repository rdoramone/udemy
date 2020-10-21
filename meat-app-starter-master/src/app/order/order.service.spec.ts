import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OrderService } from './order.service';
import { NotificationService } from './../shared/messages/notification.service';
import { ShoppingCartService } from './../restaurants-details/shopping-cart/shopping-cart.service';
import { CartItem } from '../restaurants-details/shopping-cart/cart-item.model';
import { Order } from './order-item.model';

describe('OrderService', () => {
  let orderService: OrderService;
  let cartService: ShoppingCartService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        NotificationService,
        OrderService,
        ShoppingCartService
      ]
    });

    orderService = TestBed.get(OrderService);
    cartService = TestBed.get(ShoppingCartService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(orderService).toBeTruthy();
  });

  it('should to save items in cartItems', () => {
    const cartItems: CartItem[] = [{
      menuItem: {
        id: '1',
        imagePath: 'image-path',
        name: 'Pão de queijo',
        description: 'pão recheado com queijo',
        price: 10,
        restaurantId: 'id do restaurante'
      },
      quantity: 1,
      value: () => 1
    }];

    cartService.items = cartItems;

    expect(orderService.cartItems()).toEqual(cartItems);
    expect(orderService.cartItems().length).toEqual(1);
  });

  it('should to into total value of items in cart items', () => {
    const totalSpy = spyOn(cartService, 'total').and.returnValue(20);

    orderService.itemsValue();

    expect(totalSpy).toHaveBeenCalled();
    expect(orderService.itemsValue()).toEqual(20);
  });

  it('should increase a item in quantity', () => {
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

    const increaseSpy = spyOn(cartService, 'increaseQty');

    orderService.increaseQty(item);

    expect(increaseSpy).toHaveBeenCalledWith(item);
  });

  it('should decrease a item in quantity', () => {
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

    const decreaseSpy = spyOn(cartService, 'decreaseQty');

    orderService.decreaseQty(item);

    expect(decreaseSpy).toHaveBeenCalledWith(item);
  });

  it('should to remove item', () => {
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

    const removeSpy = spyOn(cartService, 'removeItem');

    orderService.removeItem(item);

    expect(removeSpy).toHaveBeenCalledWith(item);
  });

  it('should to clear cart', () => {
    const clearSpy = spyOn(cartService, 'clear');

    orderService.clear();

    expect(clearSpy).toHaveBeenCalled();
  });

  it('should to check order', fakeAsync(() => {
    const fakeBody: Order = {
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

    orderService.checkOrder(fakeBody).subscribe((response) => {
      expect(response).toEqual('1');
    });

    const request = httpMock.expectOne((req) => req.method === 'POST');

    request.flush(fakeBody);

    tick();
  }));

  afterEach(() => {
    cartService.clear();
  });
});
