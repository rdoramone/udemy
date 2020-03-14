import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { ShoppingCartService } from "./../restaurants-details/shopping-cart/shopping-cart.service";
import { CartItem } from './../restaurants-details/shopping-cart/cart-item.model';
import { Order } from "./order-item.model";
import { MEAT_API } from "./../app.api";

@Injectable()
export class OrderService {
  constructor(
    private cartService: ShoppingCartService,
    private http: Http
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
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http
      .post(
        `${MEAT_API}/orders`,
        JSON.stringify(order),
        new RequestOptions({ headers: headers }))
      .map(response => response.json())
      .map(order => order.id);
  }
}
