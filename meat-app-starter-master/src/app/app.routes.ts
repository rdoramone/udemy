import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsDetailsComponent } from './restaurants-details/restaurants-details.component';
import { MenuComponent } from './restaurants-details/menu/menu.component';
import { ReviewsComponent } from './restaurants-details/reviews/reviews.component';
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from './order/order-summary/order-summary.component';
import { AboutModule } from './about/about.module';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: 'restaurants/:id',
    component: RestaurantsDetailsComponent,
    children: [
      {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
      },
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'reviews',
        component: ReviewsComponent
      }
    ]
  },
  {
    path: 'restaurants',
    component: RestaurantsComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'order-summary',
    component: OrderSummaryComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
