import { OrderModel } from '../../../orders/domain/interfaces/order.interface';

export interface RoutesWithOrdersAndDriver {
  routeId: string;
  driverName?: string;
  orders: OrderModel[];
}
