import { ActionReducer, combineReducers } from '@ngrx/store';
import { DeliveryManagementState } from '../../../../domain/interfaces/state/delivery-management-state.interface';
import { ridersReducer } from '../../riders/reducers/riders.reducer';
import { optimizedRoutesReducer } from '../../optimized-routes/reducers/optimized-routes.reducer';

export const deliveryManagementReducers: ActionReducer<DeliveryManagementState> =
  combineReducers({
    riders: ridersReducer,
    optimizedRoutes: optimizedRoutesReducer
  });
