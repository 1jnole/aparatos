import { ActionReducerMap } from '@ngrx/store';
import { deliveryManagementReducers } from '../../../../features/delivery-management/data-access/store/delivery-management/reducers/delivery-management.reducer';

import {
  ordersReducer,
  OrderState
} from '../../../../features/orders/data-access/store/reducers/orders.reducers';
import { DeliveryManagementState } from '../../../../features/delivery-management/domain/interfaces/store/delivery-management.state';

export interface AppState {
  deliveryManagement: DeliveryManagementState;
  orders: OrderState;
}

export const reducers: ActionReducerMap<AppState> = {
  deliveryManagement: deliveryManagementReducers,
  orders: ordersReducer
};
