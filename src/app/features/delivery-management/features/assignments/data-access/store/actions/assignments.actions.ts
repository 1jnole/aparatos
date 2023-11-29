import { createAction, props } from '@ngrx/store';

export const updateRoute = createAction(
  '[Assignments] Update Route',
  props<{ route: any }>()
);

export const updateRouteSuccess = createAction(
  '[Assignments] Update Route Success',
  props<{ route: any }>()
);

export const updateRouteFailure = createAction(
  '[Assignments] Update Route Failure',
  props<{ error: any }>()
);
