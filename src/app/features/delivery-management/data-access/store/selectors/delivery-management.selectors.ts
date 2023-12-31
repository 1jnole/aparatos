import { createSelector } from '@ngrx/store';
import { AppState } from '../../../../../core/domain/interfaces/app-state.interface';
import { DeliveryManagementState } from '../../../domain/interfaces/routh-with-orders-state.interface';

export const selectDeliveryManagementState = (state: AppState) =>
  state.deliveryManagement;

export const selectRoutesWithOrdersAndDrivers = createSelector(
  selectDeliveryManagementState,
  (state: DeliveryManagementState) => state.routesWithOrdersAndDriver
);

export const selectDeliveryManagementLoading = createSelector(
  selectDeliveryManagementState,
  (state: DeliveryManagementState) => state.loading
);

export const selectDeliveryManagementEditing = createSelector(
  selectDeliveryManagementState,
  (state: DeliveryManagementState) => state.isEditing
);
