import { createAction, props } from '@ngrx/store';

export const loadAssignments = createAction('[Assignments] Load Assignments');
export const loadAssignmentsSuccess = createAction(
  '[Assignments] Load Assignments Success',
  props<{ assignments: any[] }>()
);
export const loadAssignmentsFailure = createAction(
  '[Assignments] Load Assignments Failure',
  props<{ error: any }>()
);
