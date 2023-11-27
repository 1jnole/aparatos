import { TestBed } from '@angular/core/testing';

import { RidersService } from './riders.service';

describe('RidersServiceService', () => {
  let service: RidersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RidersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
