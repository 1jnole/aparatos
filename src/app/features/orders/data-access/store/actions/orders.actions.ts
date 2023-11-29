import { createAction, props } from '@ngrx/store';
import { OrderDTO } from '../../../domain/dto/order.dto';

export const loadOrders = createAction('[Order] Load Orders');
export const loadOrdersSuccess = createAction(
  '[Order] Load Orders Success',
  props<{ orders: OrderDTO[] }>()
);
export const loadOrdersFailure = createAction(
  '[Order] Load Orders Failure',
  props<{ error: any }>()
);

export const selectOrder = createAction(
  '[Orders] Select Order',
  props<{ order: OrderDTO }>()
);

export const initiateAssignOrder = createAction(
  '[Orders] Initiate Assign Order',
  props<{ order: OrderDTO }>()
);
