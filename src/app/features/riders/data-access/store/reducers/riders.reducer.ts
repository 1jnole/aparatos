import { createReducer, on } from '@ngrx/store';
import {
  loadRiders,
  loadRidersFailure,
  loadRidersSuccess
} from '../actions/riders.actions';
import { initialRidersState } from '../../../domain/entities/rider.state';

export const ridersReducer = createReducer(
  initialRidersState,
  on(loadRiders, (state) => ({ ...state, loading: true })),
  on(loadRidersSuccess, (state, { riders }) => ({
    ...state,
    list: riders,
    loading: false,
    loaded: true
  })),
  on(loadRidersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    loaded: false
  }))
);
