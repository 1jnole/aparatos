import { AssignmentEntity } from '../entities/assignment.entity';

export interface AssignmentState {
  list: AssignmentEntity[];
  loading: boolean;
  error: Error | null;
}
