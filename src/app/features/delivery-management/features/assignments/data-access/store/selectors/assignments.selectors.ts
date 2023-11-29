import { createSelector } from '@ngrx/store';
import { AssignmentState } from '../../../domain/interfaces/assignment-state.interface';

export const selectAssignmentsFeature = (state: AssignmentState) => state;

export const selectUpdatedRoute = createSelector(
  selectAssignmentsFeature,
  (state: AssignmentState) => state.list
);

export const selectAssignmentLoading = createSelector(
  selectAssignmentsFeature,
  (state: AssignmentState) => state.loading
);

export const selectAssignmentError = createSelector(
  selectAssignmentsFeature,
  (state: AssignmentState) => state.error
);
