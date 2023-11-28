import { createSelector } from '@ngrx/store';
import { AppState } from '../../../../../core/domain/interfaces/store/app.state';
import { OrderState } from '../reducers/orders.reducers';

export const selectOrderFeature = (state: AppState) => state.orders;

export const selectAllOrders = createSelector(
  selectOrderFeature,
  (state: OrderState) => state.orders
);

export const selectOrderLoading = createSelector(
  selectOrderFeature,
  (state: OrderState) => state.loading
);

export const selectOrdersError = createSelector(
  selectOrderFeature,
  (state: OrderState) => state.error
);
