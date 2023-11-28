import { createSelector } from '@ngrx/store';
import { AppState } from '../../../../../../core/domain/interfaces/store/app.state';

export const selectOptimizedRoutesFeature = (state: AppState) =>
  state.deliveryManagement.optimizedRoutes;

export const selectAllOptimizedRoutes = createSelector(
  selectOptimizedRoutesFeature,
  (optimizedRoutesState) => optimizedRoutesState.optimizedRoutes
);

export const selectOptimizedRoutesLoading = createSelector(
  selectOptimizedRoutesFeature,
  (optimizedRoutesState) => optimizedRoutesState.loading
);

export const selectOptimizedRoutesError = createSelector(
  selectOptimizedRoutesFeature,
  (optimizedRoutesState) => optimizedRoutesState.error
);
