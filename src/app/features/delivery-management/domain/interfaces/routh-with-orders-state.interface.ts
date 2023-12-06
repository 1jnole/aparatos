import { RoutesWithOrdersAndDriver } from './routes-with-orders-and-driver';

export interface DeliveryManagementState {
  routesWithOrdersAndDriver: RoutesWithOrdersAndDriver[];
  loading: boolean;
  isEditing: boolean;
}
