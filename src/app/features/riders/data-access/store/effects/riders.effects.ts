import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, tap } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as RiderActions from '../actions/riders.actions';
import { RidersService } from '../../api/riders.service';

@Injectable()
export class RidersEffects {
  loadRiders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RiderActions.loadRiders),
      switchMap(() =>
        this.ridersService.getRiders().pipe(
          map((riders) => RiderActions.loadRidersSuccess({ riders })),
          catchError((error) => of(RiderActions.loadRidersFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private ridersService: RidersService
  ) {}
}
