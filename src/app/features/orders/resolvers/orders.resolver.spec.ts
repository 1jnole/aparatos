import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { ordersResolver } from './orders.resolver';

describe('ordersResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => ordersResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
