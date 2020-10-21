import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ReviewsComponent } from './reviews.component';
import { RestaurantsService } from './../../restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

const routeStub = {
  parent: {
    snapshot: {
      params: 'id'
    }
  }
}

describe('ReviewsComponent', () => {
  let component: ReviewsComponent;
  let fixture: ComponentFixture<ReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        RestaurantsService,
        { provide: ActivatedRoute, useValue: routeStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
