import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MEAT_API } from './../app.api';
import { RestaurantModel } from './restaurant/restaurant.model';
import { MenuItemModel } from './../restaurants-details/menu-item/menu-item.model';
import { ReviewsModel } from './../restaurants-details/reviews/reviews.model';

@Injectable()
export class RestaurantsService {
 constructor(private http: HttpClient) { }

 restaurants(search?: string): Observable<RestaurantModel[]> {
   let params: HttpParams = undefined;

   if (search) {
     params = new HttpParams().set('q', search);
   }

   return this.http.get<RestaurantModel[]>(`${MEAT_API}/restaurants`, { params: params });
 }

 restaurantById(id: string): Observable<RestaurantModel> {
   return this.http.get<RestaurantModel>(`${MEAT_API}/restaurants/${id}`);
 }

 menuOfRestaurant(id: string): Observable<MenuItemModel[]> {
   return this.http.get<MenuItemModel[]>(`${MEAT_API}/restaurants/${id}/menu`);
 }

 reviewsOfRestaurant(id: string): Observable<ReviewsModel> {
  return this.http.get<ReviewsModel>(`${MEAT_API}/restaurants/${id}/reviews`);
 }
}
