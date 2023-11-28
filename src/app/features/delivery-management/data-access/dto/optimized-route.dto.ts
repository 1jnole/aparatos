import { OrderDTO } from '../../../orders/data-access/dto/order.dto';

export interface OptimizedRouteDTO {
  routeId: string;
  driverId: string;
  productsToDeliver: OrderDTO[];
}
