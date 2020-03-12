import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
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
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
