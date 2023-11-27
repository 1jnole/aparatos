import {
  deliveryManagementReducer,
  DeliveryManagementState
} from '../../features/delivery-management/domain/interfaces/state/delivery-management-state.interface';
import { ActionReducerMap } from '@ngrx/store';
import { deliveryManagementReducers } from '../../features/delivery-management/data-access/state/delivery-management/reducers/delivery-management.reducer';

export interface AppState {
  deliveryManagement: DeliveryManagementState;
}

export const reducers: ActionReducerMap<AppState> = {
  deliveryManagement: deliveryManagementReducers
};
