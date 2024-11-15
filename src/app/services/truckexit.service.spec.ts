import { TestBed } from '@angular/core/testing';

import { TruckexitService } from './truckexit.service';

describe('TruckexitService', () => {
  let service: TruckexitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TruckexitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
