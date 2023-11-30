import { createReducer, on } from '@ngrx/store';
import * as RouteActions from '../actions/routes.actions';
import { initialRoutesState } from '../../../domain/entities/route.state';

export const routesReducer = createReducer(
  initialRoutesState,
  on(RouteActions.loadRoutes, (state) => ({ ...state, loading: true })),
  on(RouteActions.loadRoutesSuccess, (state, { list }) => ({
    ...state,
    list,
    loading: false,
    loaded: true
  })),
  on(RouteActions.loadRoutesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
    loaded: false
  }))
);
