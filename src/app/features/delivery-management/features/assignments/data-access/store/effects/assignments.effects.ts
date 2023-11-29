import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as AssignmentsActions from '../actions/assignments.actions';
import { AssignmentService } from '../../api/assignment.service';

@Injectable()
export class AssignmentsEffects {
  updateRoute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AssignmentsActions.updateRoute),
      mergeMap((action) =>
        this.assignmentService.updateRoute(action.route).pipe(
          map((route) => AssignmentsActions.updateRouteSuccess({ route })),
          catchError((error) =>
            of(AssignmentsActions.updateRouteFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private assignmentService: AssignmentService
  ) {}
}
