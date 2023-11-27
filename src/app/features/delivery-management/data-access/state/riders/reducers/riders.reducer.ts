import { createReducer, on } from '@ngrx/store';

import {
  loadRiders,
  loadRidersFailure,
  loadRidersSuccess
} from '../actions/riders.actions';
import { RiderDTO } from '../../../dto/rider.dto';

export interface RidersState {
  riders: RiderDTO[];
  loading: boolean;
  error: Error | null;
}

export const initialRidersState: RidersState = {
  riders: [],
  loading: false,
  error: null
};

export const ridersReducer = createReducer(
  initialRidersState,
  on(loadRiders, (state) => ({ ...state, loading: true })),
  on(loadRidersSuccess, (state, { riders }) => ({
    ...state,
    riders,
    loading: false
  })),
  on(loadRidersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
