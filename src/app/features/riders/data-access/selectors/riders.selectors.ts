import { createSelector } from '@ngrx/store';
import { AppState } from '../../../../core/domain/interfaces/store/app.state';
import { RidersState } from '../../domain/interfaces/store/rider-state.interface';

export const selectRidersFeature = (state: AppState) =>
  state.deliveryManagement.riders;

export const selectRiderList = createSelector(
  selectRidersFeature,
  (state: RidersState) => state.list
);
