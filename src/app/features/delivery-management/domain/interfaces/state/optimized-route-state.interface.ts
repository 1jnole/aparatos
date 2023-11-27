import { RouteDTO } from '../../../data-access/dto/route.dto';

export interface OptimizedRoutesState {
  routes: RouteDTO[];
  loading: boolean;
  error: Error | null;
}
