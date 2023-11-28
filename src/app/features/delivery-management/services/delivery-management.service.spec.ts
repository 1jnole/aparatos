import { TestBed } from '@angular/core/testing';

import { DeliveryManagementService } from './delivery-management.service';

describe('DeliveryManagementService', () => {
  let service: DeliveryManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
