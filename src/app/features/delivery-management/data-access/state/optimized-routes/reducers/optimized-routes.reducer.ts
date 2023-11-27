import { createReducer, on } from '@ngrx/store';
import { OptimizedRoutesState } from '../../../../domain/interfaces/state/optimized-route-state.interface';
import * as OptimizedRoutesActions from '../actions/optimized-routes.actions'; // Asegúrate de importar las acciones correctamente

export const initialOptimizedRoutesState: OptimizedRoutesState = {
  routes: [],
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
