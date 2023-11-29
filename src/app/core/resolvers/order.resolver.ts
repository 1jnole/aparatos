import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY, filter } from 'rxjs';
import { switchMap, take, catchError, map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { OrderDTO } from '../../features/orders/domain/dto/order.dto';
import { selectAllOrders } from '../../features/orders/data-access/store/selectors/orders.selectors';
import {
  loadOrders,
  selectOrder
} from '../../features/orders/data-access/store/actions/orders.actions';

/**
 * A resolver that ensures a specific order, based on the orderId from the route,
 * is available in the NgRx store before navigating to the component.
 * It checks if the orders are already loaded in the store, and if not,
 * dispatches an action to load them. Once the orders are available,
 * it finds the specific order and dispatches an action to select it.
 * Since we don't have getOrderById endpoint we have to do this workaround.
 */
export const orderResolver = (
  route: ActivatedRouteSnapshot
): Observable<OrderDTO | undefined> => {
  const store = inject(Store);
  const router = inject(Router);
  const orderId = route.paramMap.get('orderId');

  return store.pipe(
    select(selectAllOrders),
    take(1),
    switchMap((orders) => {
      if (orders.length === 0) {
        // Dispatches an action to load the orders if they are not already in the store.
        store.dispatch(loadOrders());
        return store.pipe(
          select(selectAllOrders),
          filter((loadedOrders) => loadedOrders.length > 0),
          take(1)
        );
      }
      return of(orders);
    }),
    map((orders) => orders.find((order) => order.orderId === orderId)),
    switchMap((orderToSelect) => {
      if (orderToSelect) {
        // Dispatches an action to select the specific order if it is found.
        store.dispatch(selectOrder({ order: orderToSelect }));
        return of(orderToSelect);
      } else {
        // Redirects to the home page if the specific order is not found.
        router.navigate(['/home']);
        return EMPTY;
      }
    }),
    catchError(() => {
      // Redirects to the home page in case of any error.
      router.navigate(['/home']);
      return EMPTY;
    })
  );
};
