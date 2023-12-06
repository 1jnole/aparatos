import { OrderModel } from '../../../orders/domain/interfaces/order.interface';

export interface RouteWithOrders {
  routeId: string;
  driverId: string;
  orders: OrderModel[];
}
