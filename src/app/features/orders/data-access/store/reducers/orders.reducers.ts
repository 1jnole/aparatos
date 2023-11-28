import { createReducer, on } from '@ngrx/store';
import { OrderDTO } from '../../dto/order.dto';
import * as OrderActions from '../actions/orders.actions';
export interface OrderState {
  orders: OrderDTO[];
  loading: boolean;
  error: Error | null;
}

export const initialOrdersState: OrderState = {
  orders: [],
  loading: false,
  error: null
};

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
  }))
);
