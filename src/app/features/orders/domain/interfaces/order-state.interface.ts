import { OrderDTO } from '../dto/order.dto';

export interface OrderState {
  list: OrderDTO[];
  selectedOrder: OrderDTO | null;
  loading: boolean;
  error: Error | null;
  loaded: boolean;
}
