import { createAction, props } from '@ngrx/store';
import { RiderEntity } from '../../../domain/entities/rider.entity';

export const loadRiders = createAction('[Riders] Load Riders');
export const loadRidersSuccess = createAction(
  '[Riders] Load Riders Success',
  props<{ riders: RiderEntity[] }>()
);
export const loadRidersFailure = createAction(
  '[Riders] Load Riders Failure',
  props<{ error: any }>()
);
