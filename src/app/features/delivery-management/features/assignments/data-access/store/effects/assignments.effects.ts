import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as AssignmentActions from '../actions/assignments.actions';
import { AssignmentsService } from '../../api/assignment.service';

@Injectable()
export class AssignmentsEffects {
  loadAssignments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AssignmentActions.loadAssignments),
      switchMap(() =>
        this.assignmentsService.getAssignments().pipe(
          map((assignments) =>
            AssignmentActions.loadAssignmentsSuccess({ assignments })
          ),
          catchError((error) =>
            of(AssignmentActions.loadAssignmentsFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private assignmentsService: AssignmentsService
  ) {}
}
