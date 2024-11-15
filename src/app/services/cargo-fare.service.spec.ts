import { TestBed } from '@angular/core/testing';

import { CargoFareService } from './cargo-fare.service';

describe('CargoFareService', () => {
  let service: CargoFareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargoFareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
