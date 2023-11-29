import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, tap } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as OrderActions from '../actions/orders.actions';
import { OrdersService } from '../../api/orders-service.service';
import { Router } from '@angular/router';

@Injectable()
export class OrderEffects {
  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.loadOrders),
      switchMap(() =>
        this.ordersService.getOrders().pipe(
          tap((orders) => console.log('orders', orders)),
          map((orders) => OrderActions.loadOrdersSuccess({ orders })),
          catchError((error) => of(OrderActions.loadOrdersFailure({ error })))
        )
      )
    )
  );

  navigateToAssignOrder$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(OrderActions.navigateToAssignOrder),
        tap(({ orderId }) => {
          this.router.navigate(['delivery-management/routes/route-assignment', orderId]);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private ordersService: OrdersService,
    private router: Router
  ) {}
}
