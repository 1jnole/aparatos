import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as RouteActions from '../actions/routes.actions';
import { RoutesService } from '../../api/routes.service';

@Injectable()
export class RoutesEffects {
  loadRoutes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RouteActions.loadRoutes),
      switchMap(() =>
        this.routesService.getRoutes().pipe(
          map((routes) => RouteActions.loadRoutesSuccess({ routes })),
          catchError((error) => of(RouteActions.loadRoutesFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private routesService: RoutesService
  ) {}
}
