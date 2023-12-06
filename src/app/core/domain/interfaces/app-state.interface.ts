import { OrderState } from '../../../features/orders/domain/interfaces/order-state.interface';
import { RidersState } from '../../../features/riders/domain/interfaces/rider-state.interface';
import { RoutesState } from '../../../features/routes/domain/interfaces/routes-state.interface';
import { DeliveryManagementState } from '../../../features/delivery-management/domain/interfaces/routh-with-orders-state.interface';

export interface AppState {
  orders: OrderState;
  riders: RidersState;
  routes: RoutesState;
  deliveryManagement: DeliveryManagementState;
}
