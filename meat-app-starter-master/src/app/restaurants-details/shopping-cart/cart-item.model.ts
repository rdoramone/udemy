import { MenuItemModel } from '../menu-item/menu-item.model';

export class CartItem {
  constructor(
    public menuItem: MenuItemModel,
    public quantity = 1
  ) { }

  value(): number {
    return this.menuItem.price * this.quantity;
  }
}
