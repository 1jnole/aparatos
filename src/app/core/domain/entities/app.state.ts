import { ActionReducerMap } from '@ngrx/store';
import { ordersReducer } from '../../../features/orders/data-access/store/reducers/orders.reducers';
import { ridersReducer } from '../../../features/riders/data-access/store/reducers/riders.reducer';
import { routesReducer } from '../../../features/routes/data-access/store/reducers/routes.reducers';
import { AppState } from '../interfaces/app-state.interface';
import { deliveryManagementReducer } from '../../../features/delivery-management/data-access/store/reducers/delivery-management.reducers';

export const reducers: ActionReducerMap<AppState> = {
  orders: ordersReducer,
  riders: ridersReducer,
  routes: routesReducer,
  deliveryManagement: deliveryManagementReducer
};
