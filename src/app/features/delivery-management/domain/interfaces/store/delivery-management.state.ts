import { OptimizedRoutesState } from './optimized-route.state';
import { RidersState } from '../../../../riders/domain/interfaces/store/rider.state';

export interface DeliveryManagementState {
  riders: RidersState;
  optimizedRoutes: OptimizedRoutesState;
}
