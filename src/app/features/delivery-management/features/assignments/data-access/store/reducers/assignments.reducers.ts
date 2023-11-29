import { createReducer, on } from '@ngrx/store';
import * as AssignmentsActions from '../actions/assignments.actions';
import { AssignmentState } from '../../../domain/interfaces/assignment-state.interface';

export const initialState: AssignmentState = {
  list: [],
  loading: false,
  error: null
};

export const assignmentsReducer = createReducer(
  initialState,
  on(AssignmentsActions.updateRoute, (state) => ({ ...state, loading: true })),
  on(AssignmentsActions.updateRouteSuccess, (state, { route }) => ({
    ...state,
    updatedRoute: route,
    loading: false
  })),
  on(AssignmentsActions.updateRouteFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);
