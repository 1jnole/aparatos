import { createSelector } from '@ngrx/store';
import { AppState } from '../../../../../../../core/domain/interfaces/app-state.interface';
import { AssignmentState } from '../../../domain/interfaces/assignment-state.interface';

export const selectAssignmentsState = (state: AppState) =>
  state.deliveryManagement.assignments;

export const selectAllAssignments = createSelector(
  selectAssignmentsState,
  (state: AssignmentState) => state.list
);

export const selectAssignmentsLoading = createSelector(
  selectAssignmentsState,
  (state: AssignmentState) => state.loading
);

export const selectAssignmentsError = createSelector(
  selectAssignmentsState,
  (state: AssignmentState) => state.error
);
