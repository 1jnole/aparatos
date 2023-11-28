import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, exhaustMap } from 'rxjs/operators';

import * as OrderActions from '../actions/orders.actions';
import { OrdersService } from '../../../services/orders-service.service';

@Injectable()
export class OrderEffects {
  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.loadOrders),
      exhaustMap(() =>
        this.ordersService.getOrders().pipe(
          map((orders) => OrderActions.loadOrdersSuccess({ orders })),
          catchError((error) => of(OrderActions.loadOrdersFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private ordersService: OrdersService
  ) {}
}
