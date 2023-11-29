import { createReducer, on } from '@ngrx/store';
import * as OrderActions from '../actions/orders.actions';
import { initialOrdersState } from '../../../domain/entities/store/orders.state';

export const ordersReducer = createReducer(
  initialOrdersState,
  on(OrderActions.loadOrders, (state) => ({ ...state, loading: true })),
  on(OrderActions.loadOrdersSuccess, (state, { orders }) => ({
    ...state,
    orders,
    loading: false
  })),
  on(OrderActions.loadOrdersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(OrderActions.selectOrder, (state, { order }) => ({
    ...state,
    selectedOrder: order
  }))
);
