import { CartItem } from './../restaurants-details/shopping-cart/cart-item.model';
import { Component, OnInit } from '@angular/core';
import { RadioOption } from './../shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { Order, OrderItem } from './order-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão de Refeição', value: 'REF' }
  ];

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.orderService.removeItem(item);
  }

  checkOrder(order: Order) {
    order.orderItens = this.cartItems().map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService
      .checkOrder(order)
      .subscribe((orderId: string) => {
        this.router.navigate(['/order-summary'])

        this.orderService.clear();
      })
  }
}
