import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CartItem } from './../restaurants-details/shopping-cart/cart-item.model';
import { Order } from './order-item.model';
import { MEAT_API } from './../app.api';
import { ShoppingCartService } from './../restaurants-details/shopping-cart/shopping-cart.service';
import { LoginService } from './../security/login/login.service';

@Injectable()
export class OrderService {
  constructor(
    private cartService: ShoppingCartService,
    private http: HttpClient,
    private loginService: LoginService
  ) { }

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  itemsValue(): number {
    return this.cartService.total();
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  removeItem(item: CartItem) {
    this.cartService.removeItem(item);
  }

  clear() {
    this.cartService.clear();
  }

  checkOrder(order: Order): Observable<string> {
    let headers = new HttpHeaders();

    if (this.loginService.isLoggedIn()) {
      headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`);
    }

    return this.http
      .post<Order>(`${MEAT_API}/orders`, order, { headers: headers })
      // tslint:disable-next-line: no-shadowed-variable
      .map(order => order.id);
  }
}
