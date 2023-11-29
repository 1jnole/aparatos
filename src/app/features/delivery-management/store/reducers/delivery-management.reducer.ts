import { ActionReducer, combineReducers } from '@ngrx/store';
import { DeliveryManagementState } from '../../domain/interfaces/state/delivery-management.state';
import { ridersReducer } from '../../features/riders/data-access/store/reducers/riders.reducer';
import { routesReducer } from '../../features/routes/data-access/store/reducers/routes.reducers';
import { assignmentsReducer } from '../../features/assignments/data-access/store/reducers/assignments.reducers';

export const deliveryManagementReducers: ActionReducer<DeliveryManagementState> =
  combineReducers({
    riders: ridersReducer,
    routes: routesReducer,
    assignments: assignmentsReducer
  });
