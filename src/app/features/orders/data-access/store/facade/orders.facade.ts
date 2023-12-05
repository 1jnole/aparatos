import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  selectOrderLoading,
  selectOrdersError
} from '../selectors/orders.selectors';
import { initiateAssignOrder, loadOrders } from '../actions/orders.actions';
import * as ordersSelectors from '../selectors/orders.selectors';
import { AppState } from '../../../../../core/domain/interfaces/app-state.interface';
import { OrderDTO } from '../../../domain/dto/order.dto';

@Injectable({ providedIn: 'root' })
export class OrdersFacade {
  orders$ = this.store.pipe(select(ordersSelectors.selectAllOrders));
  selectedOrder$ = this.store.pipe(select(ordersSelectors.selectSelectedOrder));
  isLoading$ = this.store.pipe(select(selectOrderLoading));
  error$ = this.store.pipe(select(selectOrdersError));

  constructor(private store: Store<AppState>) {}

  loadAllOrders() {
    this.store.dispatch(loadOrders());
  }

  assignSelectedOrder(order: OrderDTO) {
    this.store.dispatch(initiateAssignOrder({ order }));
  }
}
