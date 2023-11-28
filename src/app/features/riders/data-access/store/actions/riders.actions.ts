import { createAction, props } from '@ngrx/store';
import { RiderDTO } from '../../dto/rider.dto';

export const loadRiders = createAction('[Riders] Load Riders');
export const loadRidersSuccess = createAction(
  '[Riders] Load Riders Success',
  props<{ riders: RiderDTO[] }>()
);
export const loadRidersFailure = createAction(
  '[Riders] Load Riders Failure',
  props<{ error: any }>()
);
