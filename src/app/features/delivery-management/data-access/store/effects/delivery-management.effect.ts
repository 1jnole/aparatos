import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, withLatestFrom } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as RiderSelectors from '../../../../riders/data-access/store/selectors/riders.selectors';
import * as RouteSelectors from '../../../../routes/data-access/store/selectors/routes.selectors';
import * as OrderSelectors from '../../../../orders/data-access/store/selectors/orders.selectors';
import {
  loadDeliveryManagementData,
  loadDeliveryManagementDataFailure,
  loadDeliveryManagementDataSuccess
} from '../actions/delivery-management.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../core/domain/interfaces/app-state.interface';
import { combineData } from '../../../utils/utils';

@Injectable()
export class DeliveryManagementEffects {
  loadCombinedData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDeliveryManagementData),
      withLatestFrom(
        this.store.select(RiderSelectors.selectAllRiders),
        this.store.select(RouteSelectors.selectAllRoutes),
        this.store.select(OrderSelectors.selectAllOrders)
      ),
      map(([action, riders, routes, orders]) => {
        const routesWithOrdersAndDriver = combineData(routes, riders, orders);
        return loadDeliveryManagementDataSuccess({ routesWithOrdersAndDriver });
      }),
      catchError((error) => of(loadDeliveryManagementDataFailure({ error })))
    )
  );
  constructor(
    private actions$: Actions,
    private store: Store<AppState>
  ) {}
}
