import { MenuItemModel } from './menu-item.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemComponent } from './menu-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const menuItemMock: MenuItemModel = {
  id: 'id',
  imagePath: 'imagePath/src',
  name: 'Fulano',
  description: 'Description text',
  price: 1000,
  restaurantId: 'restaurant'
}

describe('MenuItemComponent', () => {
  let component: MenuItemComponent;
  let fixture: ComponentFixture<MenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemComponent ],
      imports: [ BrowserAnimationsModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemComponent);
    component = fixture.componentInstance;
    component.menuItem = menuItemMock;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
