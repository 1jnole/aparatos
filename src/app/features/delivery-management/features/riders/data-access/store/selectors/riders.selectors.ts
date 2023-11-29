import { createSelector } from '@ngrx/store';
import { AppState } from '../../../../../../../core/domain/entities/app.state';
import { RidersState } from '../../../domain/interfaces/store/rider.state';

export const selectRidersFeature = (state: AppState) =>
  state.deliveryManagement.riders;

export const selectRiderList = createSelector(
  selectRidersFeature,
  (state: RidersState) => state.list
);
