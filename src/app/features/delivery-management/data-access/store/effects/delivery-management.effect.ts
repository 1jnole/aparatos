import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, of, withLatestFrom } from 'rxjs';
import {catchError, filter, map, tap} from 'rxjs/operators';
import * as RiderSelectors from '../../../../riders/data-access/store/selectors/riders.selectors';
import * as RouteSelectors from '../../../../routes/data-access/store/selectors/routes.selectors';
import * as OrderSelectors from '../../../../orders/data-access/store/selectors/orders.selectors';
import {
  loadDeliveryManagementData,
  loadDeliveryManagementDataFailure,
  loadDeliveryManagementDataSuccess,
  updateRoutes,
  updateRoutesFailure,
  updateRoutesSuccess
} from '../actions/delivery-management.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../core/domain/interfaces/app-state.interface';
import { combineData } from '../../../utils/utils';
import { DeliveryManagementService } from '../../api/delivery-management.service';
import { RoutesWithOrdersAndDriver } from '../../../domain/interfaces/routes-with-orders-and-driver';
import { selectRoutesWithOrdersAndDrivers } from '../selectors/delivery-management.selectors';
import {ToastrService} from "ngx-toastr";

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

  updateRoutes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateRoutes),
      withLatestFrom(this.store.select(selectRoutesWithOrdersAndDrivers)),
      mergeMap(([action, currentRoutes]) => {
        const transformedRoutes = currentRoutes.map(
          (route: RoutesWithOrdersAndDriver) => ({
            routeId: route.routeId,
            driverId: route.driverId as string,
            productsToDeliver: route.orders.map((order) => ({
              orderId: order.orderId
            }))
          })
        );
        return this.deliveryManagementService.updateRoutes(transformedRoutes).pipe(
          map(() => updateRoutesSuccess()),
          tap(() => {
            this.toastr.success('Rutas actualizadas correctamente');
          }),
          catchError((error) => of(updateRoutesFailure({ error })))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private deliveryManagementService: DeliveryManagementService,
    private toastr: ToastrService
  ) {}
}
