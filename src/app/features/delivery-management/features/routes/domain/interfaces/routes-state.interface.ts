import { RouteModel } from './route.interface';

export interface RoutesState {
  list: RouteModel[];
  loading: boolean;
  error: Error | null;
}
