import { createAction, props } from '@ngrx/store';
import { RoutesWithOrdersAndDriver } from '../../../domain/interfaces/routes-with-orders-and-driver';

export const loadDeliveryManagementData = createAction(
  '[Delivery Management] Load Data'
);
export const loadDeliveryManagementDataSuccess = createAction(
  '[Delivery Management] Load Data Success',
  props<{ routesWithOrdersAndDriver: RoutesWithOrdersAndDriver[] }>()
);
export const loadDeliveryManagementDataFailure = createAction(
  '[Delivery Management] Load Data Failure',
  props<{ error: any }>()
);
