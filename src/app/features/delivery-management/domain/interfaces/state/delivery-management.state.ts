import { RoutesState } from '../../../features/routes/domain/interfaces/routes-state.interface';
import { RidersState } from '../../../features/riders/domain/interfaces/rider-state.interface';
import { AssignmentState } from '../../../features/assignments/domain/interfaces/assignment-state.interface';

export interface DeliveryManagementState {
  riders: RidersState;
  routes: RoutesState;
  assignments: AssignmentState;
}
