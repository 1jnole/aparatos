import { ActionReducerMap } from '@ngrx/store';
import { ordersReducer } from '../../../features/orders/data-access/store/reducers/orders.reducers';
import { AppState } from '../interfaces/app-state.interface';
import { deliveryManagementReducers } from '../../../features/delivery-management/store/reducers/delivery-management.reducer';

export const reducers: ActionReducerMap<AppState> = {
  deliveryManagement: deliveryManagementReducers,
  orders: ordersReducer
};
