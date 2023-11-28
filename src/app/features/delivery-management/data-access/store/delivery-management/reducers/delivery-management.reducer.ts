import { ActionReducer, combineReducers } from '@ngrx/store';
import { optimizedRoutesReducer } from '../../optimized-routes/reducers/optimized-routes.reducer';

import { ridersReducer } from '../../../../../riders/data-access/reducers/riders.reducer';
import { DeliveryManagementState } from '../../../../domain/interfaces/store/delivery-management.state';

export const deliveryManagementReducers: ActionReducer<DeliveryManagementState> =
  combineReducers({
    riders: ridersReducer,
    optimizedRoutes: optimizedRoutesReducer
  });
