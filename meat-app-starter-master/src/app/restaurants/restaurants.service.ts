import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MEAT_API } from './../app.api';
import { ErrorHandler } from "./../app.error-handler";
import { RestaurantModel } from "./restaurant/restaurant.model";
import { MenuItemModel } from './../restaurants-details/menu-item/menu-item.model';
import { ReviewsModel } from "./../restaurants-details/reviews/reviews.model";

@Injectable()
export class RestaurantsService {
 constructor(private http: Http) { }

 restaurants(): Observable<RestaurantModel[]> {
   return this.http.get(`${MEAT_API}/restaurants`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
 }

 restaurantById(id: string): Observable<RestaurantModel> {
   return this.http.get(`${MEAT_API}/restaurants/${id}`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
 }

 menuOfRestaurant(id: string): Observable<MenuItemModel[]> {
   return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
   .map(response => response.json())
   .catch(ErrorHandler.handleError);
 }

 reviewsOfRestaurant(id: string): Observable<ReviewsModel> {
  return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
  .map(response => response.json())
  .catch(ErrorHandler.handleError);
 }
}
