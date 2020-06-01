import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsDetailsComponent } from './restaurants-details/restaurants-details.component';
import { MenuComponent } from './restaurants-details/menu/menu.component';
import { ReviewsComponent } from './restaurants-details/reviews/reviews.component';
import { MenuItemComponent } from './restaurants-details/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurants-details/shopping-cart/shopping-cart.component';
import { OrderSummaryComponent } from './order/order-summary/order-summary.component';
import { LoginComponent } from './security/login/login.component';
import { UserDetailsComponent } from './header/user-details/user-details.component';

import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantsDetailsComponent,
    MenuComponent,
    ReviewsComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    OrderSummaryComponent,
    LoginComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
    /*
     Aqui o PreloadAllModules faz o carregamento dos módulos lazy loading logo após do primeiro carregamento.
    */
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }, // Usado para adicionar hash na url.
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
