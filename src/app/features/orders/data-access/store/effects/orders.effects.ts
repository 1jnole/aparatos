import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, of, tap } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as OrderActions from '../actions/orders.actions';
import { OrdersService } from '../../api/orders-service.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Injectable()
export class OrderEffects {
  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.loadOrders),
      switchMap(() =>
        this.ordersService.getOrders().pipe(
          map((orders) => OrderActions.loadOrdersSuccess({ orders })),
          catchError((error) => of(OrderActions.loadOrdersFailure({ error })))
        )
      )
    )
  );

  assignOrder$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(OrderActions.initiateAssignOrder),
        map((action) => {
          this.store.dispatch(
            OrderActions.selectOrder({ order: action.order })
          );
          return action.order;
        }),
        tap((order) => {
          this.router.navigate(['delivery-management/assignments']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private ordersService: OrdersService,
    private router: Router
  ) {}
}
