import { createSelector } from '@ngrx/store';
import { AppState } from '../../../../../core/domain/interfaces/app-state.interface';
import { OrderState } from '../../../domain/interfaces/order-state.interface';
import { RidersState } from '../../../../riders/domain/interfaces/rider-state.interface';
import { selectRidersFeature } from '../../../../riders/data-access/store/selectors/riders.selectors';

export const selectOrderFeature = (state: AppState) => state.orders;

export const selectAllOrders = createSelector(
  selectOrderFeature,
  (state: OrderState) => state.list
);

export const selectOrderLoading = createSelector(
  selectOrderFeature,
  (state: OrderState) => state.loading
);

export const selectOrdersError = createSelector(
  selectOrderFeature,
  (state: OrderState) => state.error
);

export const selectSelectedOrder = createSelector(
  selectOrderFeature,
  (state: OrderState) => state.selectedOrder
);

export const areOrdersLoaded = createSelector(
  selectOrderFeature,
  (state: OrderState) => state.loaded
);
