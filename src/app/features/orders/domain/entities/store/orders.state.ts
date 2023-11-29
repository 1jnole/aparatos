import { OrderState } from '../../interfaces/order-state.interface';

export const initialOrdersState: OrderState = {
  orders: [],
  selectedOrder: null,
  loading: false,
  error: null
};
