import { TestBed } from '@angular/core/testing';

import { CargoorderService } from './cargoorder.service';

describe('CargoorderService', () => {
  let service: CargoorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargoorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
