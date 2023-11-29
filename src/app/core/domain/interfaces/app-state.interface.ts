import { OrderState } from '../../../features/orders/data-access/store/reducers/orders.reducers';
import { DeliveryManagementState } from '../../../features/delivery-management/domain/interfaces/state/delivery-management.state';

export interface AppState {
  deliveryManagement: DeliveryManagementState;
  orders: OrderState;
}
