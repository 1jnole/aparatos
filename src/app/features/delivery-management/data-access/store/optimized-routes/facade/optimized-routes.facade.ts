import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as OptimizedRoutesActions from '.././actions/optimized-routes.actions';
import * as fromOptimizedRoutes from '.././selectors/optimized-routes.selectors';
import { OptimizedRouteDTO } from '../../../dto/optimized-route.dto';
import { AppState } from '../../../../../../core/domain/interfaces/store/app.state';

@Injectable({ providedIn: 'root' })
export class OptimizedRoutesFacade {
  optimizedRoutes$: Observable<OptimizedRouteDTO[]> = this.store.pipe(
    select(fromOptimizedRoutes.selectAllOptimizedRoutes)
  );
  loading$: Observable<boolean> = this.store.pipe(
    select(fromOptimizedRoutes.selectOptimizedRoutesLoading)
  );
  error$: Observable<Error | null> = this.store.pipe(
    select(fromOptimizedRoutes.selectOptimizedRoutesError)
  );

  constructor(private store: Store<AppState>) {}

  loadOptimizedRoutes() {
    this.store.dispatch(OptimizedRoutesActions.loadOptimizedRoutes());
  }

  updateRoute(route: OptimizedRouteDTO) {
    this.store.dispatch(OptimizedRoutesActions.updateRoute({ route }));
  }
}
