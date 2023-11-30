import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../core/domain/interfaces/app-state.interface';
import { inject } from '@angular/core';
import { RoutesFacade } from '../../routes/data-access/store/facade/routes.facade';
import { RidersFacade } from '../../riders/data-access/store/facade/riders.facade';
import { OrdersFacade } from '../../orders/data-access/store/facade/orders.facade';
import {combineLatest, Observable, of} from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import * as RoutesSelectors from '../../routes/data-access/store/selectors/routes.selectors';
import * as RidersSelectors from '../../riders/data-access/store/selectors/riders.selectors';
import * as OrderSelectors from '../../orders/data-access/store/selectors/orders.selectors';
import { loadOrders } from '../../orders/data-access/store/actions/orders.actions';
import { loadRiders } from '../../riders/data-access/store/actions/riders.actions';
import { loadRoutes } from '../../routes/data-access/store/actions/routes.actions';
import { RouteModel } from '../../routes/domain/interfaces/route.interface';
import { RiderModel } from '../../riders/domain/interfaces/rider-model.interface';
import { OrderDTO } from '../../orders/domain/dto/order.dto';
import { RoutesWithOrdersAndDriver } from '../domain/interfaces/routes-with-orders-and-driver';
import {loadDeliveryManagementDataSuccess} from "../data-access/store/actions/delivery-management.actions";
import {OrderModel} from "../../orders/domain/interfaces/order.interface";

export const routeAssignmentResolver = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  const store = inject(Store) as Store<AppState>;
  const routesFacade = inject(RoutesFacade);
  const ridersFacade = inject(RidersFacade);
  const ordersFacade = inject(OrdersFacade);
  const router = inject(Router);

  return combineLatest([
    store.pipe(select(RoutesSelectors.areRoutesLoaded), take(1)),
    store.pipe(select(RidersSelectors.areRidersLoaded), take(1)),
    store.pipe(select(OrderSelectors.areOrdersLoaded), take(1))
  ]).pipe(
    take(1),
    switchMap(([routesLoaded, ridersLoaded, ordersLoaded]) => {
      if (!routesLoaded) store.dispatch(loadRoutes());
      if (!ridersLoaded) store.dispatch(loadRiders());
      if (!ordersLoaded) store.dispatch(loadOrders());

      return combineLatest([
        routesFacade.routes$,
        ridersFacade.riders$,
        ordersFacade.orders$
      ]).pipe(
        take(1),
      );
    }),
    map(([routes, riders, orders]) => {
      console.log(routes)
      console.log(riders)
      console.log(orders)
      const routesWithOrdersAndDriver = combineData(routes, riders, orders);
console.log(routesWithOrdersAndDriver)
      store.dispatch(loadDeliveryManagementDataSuccess({ routesWithOrdersAndDriver }));
      return true;
    }),
    catchError(error => {
      router.navigate(['/home']);
      return of(false);
    })
  );
};


function combineData(
  routes: RouteModel[],
  riders: RiderModel[],
  orders: OrderDTO[]
): RoutesWithOrdersAndDriver[] {

  return routes.map(route => {
    const driver = riders.find(rider => rider.driverId === route.driverId);
    const driverName = driver ? driver.driverName : undefined;

    const assignedOrders: OrderModel[] = route.productsToDeliver
      .map(productToDeliver => {
        const foundOrder = orders.find(order => order.orderId === productToDeliver.orderId);
        return foundOrder ? {
          orderId: foundOrder.orderId,
          productName: foundOrder.productName,
          price: foundOrder.price,
          deliveryLocation: {
            lat: foundOrder.deliveryLocation.latitude,
            lng: foundOrder.deliveryLocation.longitude
          }
        } : undefined;
      })
      .filter((order): order is OrderModel => order !== undefined);

    return {
      routeId: route.routeId,
      driverName: driverName,
      orders: assignedOrders
    };
  });
}
