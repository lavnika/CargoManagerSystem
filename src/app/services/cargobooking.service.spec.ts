import { TestBed } from '@angular/core/testing';

import { CargobookingService } from './cargobooking.service';

describe('CargobookingService', () => {
  let service: CargobookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargobookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
