import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as OptimizedRoutesActions from '../actions/optimized-routes.actions';
import { DeliveryManagementService } from '../../../../services/delivery-management.service';

@Injectable()
export class OptimizedRoutesEffects {
  loadOptimizedRoutes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OptimizedRoutesActions.loadOptimizedRoutes),
      mergeMap(() =>
        this.deliveryManagementService.getOptimizedRoutes().pipe(
          map((routes) =>
            OptimizedRoutesActions.loadOptimizedRoutesSuccess({ routes })
          ),
          catchError((error) =>
            of(OptimizedRoutesActions.loadOptimizedRoutesFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private deliveryManagementService: DeliveryManagementService
  ) {}
}
