import { OrderState } from '../../interfaces/order-state.interface';

export const initialOrdersState: OrderState = {
  list: [],
  selectedOrder: null,
  loading: false,
  error: null,
  loaded: false
};
