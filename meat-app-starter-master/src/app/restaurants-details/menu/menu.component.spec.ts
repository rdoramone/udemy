import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

import { MenuComponent } from './menu.component';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { NotificationService } from './../../shared/messages/notification.service';
import { RestaurantsService } from './../../restaurants/restaurants.service';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

const routeStub = {
  parent: {
    snapshot: {
      params: 'id'
    }
  }
}

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuComponent,
        MenuItemComponent,
        ShoppingCartComponent
      ],
      imports: [ HttpClientTestingModule ],
      providers: [
        NotificationService,
        RestaurantsService,
        ShoppingCartService,
        { provide: ActivatedRoute, useValue: routeStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
