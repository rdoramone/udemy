import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RestaurantsDetailsComponent } from './restaurants-details.component';
import { RestaurantsService } from './../restaurants/restaurants.service';

describe('RestaurantsDetailsComponent', () => {
  let component: RestaurantsDetailsComponent;
  let fixture: ComponentFixture<RestaurantsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsDetailsComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [ RestaurantsService ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
