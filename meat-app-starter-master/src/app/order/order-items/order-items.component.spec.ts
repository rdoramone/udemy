import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuItemModel } from './../../restaurants-details/menu-item/menu-item.model';

import { OrderItemsComponent } from './order-items.component';
import { CartItem } from './../../restaurants-details/shopping-cart/cart-item.model';

const menuItemMock: MenuItemModel = {
  id: 'id',
  imagePath: 'imagePath/src',
  name: 'Fulano',
  description: 'Description text',
  price: 1000,
  restaurantId: 'restaurant'
}

const menuItemMock2: MenuItemModel = {
  id: 'id',
  imagePath: 'imagePath/src',
  name: 'Siclano',
  description: 'Description text',
  price: 200,
  restaurantId: 'restaurant'
}

const items: CartItem[] = [{
  menuItem: menuItemMock,
  quantity: 1,
  value: () => 5
},
{
  menuItem: menuItemMock2,
  quantity: 2,
  value: () => 3
}];

describe('OrderItemsComponent', () => {
  let component: OrderItemsComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderItemsComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    let fixture: ComponentFixture<OrderItemsComponent> = TestBed.createComponent(OrderItemsComponent);
    component = fixture.componentInstance;
    component.items = items;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should emit increased item', () => {
    const item: CartItem = {
      menuItem: menuItemMock,
      quantity: 3,
      value: () => 1
    };

    const increaseQtySpy = spyOn(component.increaseQty, 'emit');

    component.emitIncreaseQty(item);

    expect(increaseQtySpy).toHaveBeenCalledWith(item);
  });

  it('should emit decreased item', () => {
    const item: CartItem = {
      menuItem: menuItemMock,
      quantity: 3,
      value: () => 1
    };

    const decreaseQtySpy = spyOn(component.decreaseQty, 'emit');

    component.emitDecreaseQty(item);

    expect(decreaseQtySpy).toHaveBeenCalledWith(item);
  });

  it('should emit removed item', () => {
    const item: CartItem = {
      menuItem: menuItemMock,
      quantity: 3,
      value: () => 1
    };

    const removeSpy = spyOn(component.remove, 'emit');

    component.emitRemove(item);

    expect(removeSpy).toHaveBeenCalledWith(item);
  });
});
