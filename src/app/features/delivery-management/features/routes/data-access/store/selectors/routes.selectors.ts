import { createSelector } from '@ngrx/store';
import { AppState } from '../../../../../../../core/domain/interfaces/app-state.interface';
import { RoutesState } from '../../../domain/interfaces/routes-state.interface';

export const selectRoutesFeature = (state: AppState) =>
  state.deliveryManagement.routes;

export const selectAllRoutes = createSelector(
  selectRoutesFeature,
  (routesState: RoutesState) => routesState.list
);

export const selectRoutesLoading = createSelector(
  selectRoutesFeature,
  (routesState: RoutesState) => routesState.loading
);

export const selectRoutesError = createSelector(
  selectRoutesFeature,
  (routesState: RoutesState) => routesState.error
);
