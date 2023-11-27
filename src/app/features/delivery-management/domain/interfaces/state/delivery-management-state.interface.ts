import {
  ridersReducer,
  RidersState
} from '../../../data-access/state/riders/reducers/riders.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { OptimizedRoutesState } from './optimized-route-state.interface';
import { optimizedRoutesReducer } from '../../../data-access/state/optimized-routes/reducers/optimized-routes.reducer';

export interface DeliveryManagementState {
  riders: RidersState;
  optimizedRoutes: OptimizedRoutesState;
}

export const deliveryManagementReducer: ActionReducerMap<DeliveryManagementState> =
  {
    riders: ridersReducer,
    optimizedRoutes: optimizedRoutesReducer
  };
