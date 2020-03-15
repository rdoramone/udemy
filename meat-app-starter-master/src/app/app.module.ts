import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsService } from './restaurants/restaurants.service';
import { RestaurantsDetailsComponent } from './restaurants-details/restaurants-details.component';
import { MenuComponent } from './restaurants-details/menu/menu.component';
import { ReviewsComponent } from './restaurants-details/reviews/reviews.component';
import { MenuItemComponent } from './restaurants-details/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurants-details/shopping-cart/shopping-cart.component';
import { ShoppingCartService } from './restaurants-details/shopping-cart/shopping-cart.service';
import { OrderComponent } from './order/order.component';
import { DeliveryCostComponent } from './order/delivery-cost/delivery-cost.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { OrderSummaryComponent } from './order/order-summary/order-summary.component';
import { LoginComponent } from './security/login/login.component';
import { UserDetailsComponent } from './header/user-details/user-details.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { OrderService } from './order/order.service';
import { RatingComponent } from './shared/rating/rating.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantsDetailsComponent,
    MenuComponent,
    ReviewsComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    OrderComponent,
    DeliveryCostComponent,
    OrderItemsComponent,
    OrderSummaryComponent,
    LoginComponent,
    UserDetailsComponent,
    InputComponent,
    RadioComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    RestaurantsService,
    ShoppingCartService,
    OrderService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
