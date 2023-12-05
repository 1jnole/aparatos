import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, filter, first, switchMap, tap } from 'rxjs/operators';
import * as OrderActions from '../data-access/store/actions/orders.actions';
import * as OrderSelectors from '../data-access/store/selectors/orders.selectors';

export const ordersResolver = () => {
  const store = inject(Store);

  return store.select(OrderSelectors.areOrdersLoaded).pipe(
    tap((loaded) => {
      if (!loaded) {
        store.dispatch(OrderActions.loadOrders());
      }
    }),
    switchMap(() => store.select(OrderSelectors.selectAllOrders)),
    filter((orders) => orders.length > 0),
    first(),
    catchError(() => of([]))
  );
};
