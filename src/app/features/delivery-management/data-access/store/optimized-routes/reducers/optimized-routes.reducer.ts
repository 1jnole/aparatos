import { createReducer, on } from '@ngrx/store';

import * as OptimizedRoutesActions from '../actions/optimized-routes.actions';
import { OptimizedRoutesState } from '../../../../domain/interfaces/store/optimized-route.state';

export const initialOptimizedRoutesState: OptimizedRoutesState = {
  optimizedRoutes: [],
  loading: false,
  error: null
};

export const optimizedRoutesReducer = createReducer(
  initialOptimizedRoutesState,
  on(OptimizedRoutesActions.loadOptimizedRoutes, (state) => ({
    ...state,
    loading: true
  })),
  on(
    OptimizedRoutesActions.loadOptimizedRoutesSuccess,
    (state, { routes }) => ({ ...state, routes, loading: false })
  ),
  on(OptimizedRoutesActions.loadOptimizedRoutesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);
