import { createReducer, on } from '@ngrx/store';
import * as AssignmentActions from '../actions/assignments.actions';
import { initialAssignmentState } from '../../../domain/entities/asssignment.state';

export const assignmentsReducer = createReducer(
  initialAssignmentState,
  on(AssignmentActions.loadAssignments, (state) => ({
    ...state,
    loading: true
  })),
  on(AssignmentActions.loadAssignmentsSuccess, (state, { assignments }) => ({
    ...state,
    assignments,
    loading: false
  })),
  on(AssignmentActions.loadAssignmentsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);
