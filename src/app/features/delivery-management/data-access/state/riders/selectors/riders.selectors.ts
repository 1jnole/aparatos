import { createSelector } from '@ngrx/store';
import { RidersState } from '../reducers/riders.reducer';
import { AppState } from '../../../../../../core/state/app.state';

export const selectRidersFeature = (state: AppState) =>
  state.deliveryManagement.riders;

export const selectRiderList = createSelector(
  selectRidersFeature,
  (state: RidersState) => state.list
);
