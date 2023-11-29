import { DeliveryManagementState } from '../../../features/delivery-management/domain/interfaces/state/delivery-management.state';
import { OrderState } from '../../../features/orders/domain/interfaces/order-state.interface';

export interface AppState {
  deliveryManagement: DeliveryManagementState;
  orders: OrderState;
}
