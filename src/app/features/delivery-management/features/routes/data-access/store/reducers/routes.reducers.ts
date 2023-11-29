import { createReducer, on } from '@ngrx/store';
import * as RouteActions from '../actions/routes.actions';
import { initialRoutesState } from '../../../domain/entities/route.state';

export const routesReducer = createReducer(
  initialRoutesState,
  on(RouteActions.loadRoutes, (state) => ({ ...state, loading: true })),
  on(RouteActions.loadRoutesSuccess, (state, { routes }) => ({
    ...state,
    routes,
    loading: false
  })),
  on(RouteActions.loadRoutesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);
