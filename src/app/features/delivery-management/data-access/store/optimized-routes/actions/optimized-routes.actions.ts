import { createAction, props } from '@ngrx/store';
import { OptimizedRouteDTO } from '../../../dto/optimized-route.dto';

export const loadOptimizedRoutes = createAction(
  '[Optimized Routes] Load Optimized Routes'
);

export const loadOptimizedRoutesSuccess = createAction(
  '[Optimized Routes] Load Optimized Routes Success',
  props<{ routes: OptimizedRouteDTO[] }>()
);

export const loadOptimizedRoutesFailure = createAction(
  '[Optimized Routes] Load Optimized Routes Failure',
  props<{ error: any }>()
);

export const updateRoute = createAction(
  '[Optimized Routes] Update Route',
  props<{ route: OptimizedRouteDTO }>()
);

export const updateRouteSuccess = createAction(
  '[Optimized Routes] Update Route Success',
  props<{ route: OptimizedRouteDTO }>()
);

export const updateRouteFailure = createAction(
  '[Optimized Routes] Update Route Failure',
  props<{ error: any }>()
);
