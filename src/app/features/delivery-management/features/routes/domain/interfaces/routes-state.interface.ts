import { RouteEntity } from '../entities/route.entity';

export interface RoutesState {
  list: RouteEntity[];
  loading: boolean;
  error: Error | null;
}
