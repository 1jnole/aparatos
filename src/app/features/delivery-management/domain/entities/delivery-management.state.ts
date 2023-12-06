import { DeliveryManagementState } from '../interfaces/routh-with-orders-state.interface';

export const initialDeliveryManagementState: DeliveryManagementState = {
  routesWithOrdersAndDriver: [],
  loading: false,
  isEditing: false
};
