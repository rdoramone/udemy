import { TestBed } from '@angular/core/testing';

import { NotificationService } from './../../shared/messages/notification.service';
import { ShoppingCartService } from './shopping-cart.service';

describe('ShoppingCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ShoppingCartService,
        NotificationService
      ]
    })
  })

  it('should be created', () => {
    const service: ShoppingCartService = TestBed.get(ShoppingCartService);

    expect(service).toBeTruthy();
  });
});
