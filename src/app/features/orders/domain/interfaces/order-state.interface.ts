import { OrderDTO } from '../dto/order.dto';

export interface OrderState {
  orders: OrderDTO[];
  selectedOrder: OrderDTO | null;
  loading: boolean;
  error: Error | null;
}
