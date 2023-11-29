import { createAction, props } from '@ngrx/store';
import { RouteModel } from '../../../domain/interfaces/route.interface';

export const loadRoutes = createAction('[Routes] Load Routes');
export const loadRoutesSuccess = createAction(
  '[Routes] Load Routes Success',
  props<{ list: RouteModel[] }>()
);
export const loadRoutesFailure = createAction(
  '[Routes] Load Routes Failure',
  props<{ error: Error }>()
);
