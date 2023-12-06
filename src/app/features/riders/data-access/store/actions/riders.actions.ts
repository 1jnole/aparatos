import { createAction, props } from '@ngrx/store';
import { RiderModel } from '../../../domain/interfaces/rider-model.interface';

export const loadRiders = createAction('[Riders] Load Riders');
export const loadRidersSuccess = createAction(
  '[Riders] Load Riders Success',
  props<{ riders: RiderModel[] }>()
);
export const loadRidersFailure = createAction(
  '[Riders] Load Riders Failure',
  props<{ error: any }>()
);
