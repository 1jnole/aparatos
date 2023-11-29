import { OrderModel } from '../../../../../orders/domain/interfaces/order.interface';

export interface AssignmentModel {
  routeId: string;
  orders: OrderModel[];
}
