import { AssignmentModel } from './assignment-model';

export interface AssignmentState {
  list: AssignmentModel[];
  loading: boolean;
  error: Error | null;
}
