import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RestaurantsService } from './restaurants.service';

describe('RestaurantsService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ RestaurantsService ]
    })
  });

  it('should be created', () => {
    const service: RestaurantsService = TestBed.get(RestaurantsService);

    expect(service).toBeTruthy();
  });
});
