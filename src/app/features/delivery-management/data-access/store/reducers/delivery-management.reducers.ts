import { createReducer, on } from '@ngrx/store';
import { initialDeliveryManagementState } from '../../../domain/entities/delivery-management.state';
import {
  loadDeliveryManagementData,
  loadDeliveryManagementDataFailure,
  loadDeliveryManagementDataSuccess
} from '../actions/delivery-management.actions';

export const deliveryManagementReducer = createReducer(
  initialDeliveryManagementState,
  on(loadDeliveryManagementData, (state) => ({ ...state, loading: true })),
  on(
    loadDeliveryManagementDataSuccess,
    (state, { routesWithOrdersAndDriver }) => ({
      ...state,
      routesWithOrdersAndDriver,
      loading: false
    })
  ),
  on(loadDeliveryManagementDataFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);
