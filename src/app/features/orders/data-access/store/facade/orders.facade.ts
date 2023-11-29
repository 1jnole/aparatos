import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  selectOrderLoading,
  selectOrdersError
} from '../selectors/orders.selectors';
import { loadOrders, navigateToAssignOrder } from '../actions/orders.actions';
import * as ordersSelectors from '../selectors/orders.selectors';
import { AppState } from '../../../../../core/domain/interfaces/app-state.interface';

@Injectable({ providedIn: 'root' })
export class OrdersFacade {
  orders$ = this.store.pipe(select(ordersSelectors.selectAllOrders));
  loading$ = this.store.pipe(select(selectOrderLoading));
  error$ = this.store.pipe(select(selectOrdersError));

  constructor(private store: Store<AppState>) {}

  loadAllOrders() {
    this.store.dispatch(loadOrders());
  }

  assignOrder(orderId: string) {
    this.store.dispatch(navigateToAssignOrder({ orderId }));
  }
}
