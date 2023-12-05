import { OrderModel } from '../../../orders/domain/interfaces/order.interface';

export interface RoutesWithOrdersAndDriver {
  routeId: string;
  driverName?: string | undefined;
  driverId?: string | undefined;
  initialLocation?:
    | {
        lat: number;
        lng: number;
      }
    | undefined;
  orders: OrderModel[];
}
