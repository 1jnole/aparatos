import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { routeAssignmentResolver } from './route-assignment.resolver';

describe('routeAssignmentResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => routeAssignmentResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
