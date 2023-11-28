import { OptimizedRouteDTO } from '../../../data-access/dto/optimized-route.dto';

export interface OptimizedRoutesState {
  optimizedRoutes: OptimizedRouteDTO[];
  loading: boolean;
  error: Error | null;
}
