import { RestaurantModel } from './restaurant.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RestaurantComponent } from './restaurant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const restaurantMock: RestaurantModel = {
  id: 'id',
  name: 'Fulano',
  category: 'restaurant',
  deliveryEstimate: '40',
  rating: 3,
  imagePath: 'path/to/src',
  about: 'estabelecimento xpto',
  hours: '1 hora'
}

describe('RestaurantComponent', () => {
  let component: RestaurantComponent;
  let fixture: ComponentFixture<RestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantComponent ],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantComponent);
    component = fixture.componentInstance;
    component.restaurant = restaurantMock;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
