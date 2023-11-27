import { RidersState } from '../../../data-access/state/riders/reducers/riders.reducer';
import { OptimizedRoutesState } from './optimized-route-state.interface';

export interface DeliveryManagementState {
  riders: RidersState;
  optimizedRoutes: OptimizedRoutesState;
}
