import { createSelector } from '@ngrx/store';
import { AppState } from '../../../../../core/domain/interfaces/app-state.interface';
import { RidersState } from '../../../domain/interfaces/rider-state.interface';

export const selectRidersFeature = (state: AppState) => state.riders;

export const selectAllRiders = createSelector(
  selectRidersFeature,
  (state: RidersState) => state.list
);

export const selectRidersLoading = createSelector(
  selectRidersFeature,
  (state: RidersState) => state.loading
);

export const selectRidersError = createSelector(
  selectRidersFeature,
  (state: RidersState) => state.error
);

export const areRidersLoaded = createSelector(
  selectRidersFeature,
  (state: RidersState) => state.loaded
);
