import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../../core/domain/interfaces/app-state.interface';
import { loadRoutes } from '../actions/routes.actions';
import {
  selectAllRoutes,
  selectRoutesError,
  selectRoutesLoading
} from '../selectors/routes.selectors';

@Injectable({ providedIn: 'root' })
export class RoutesFacade {
  routes$ = this.store.pipe(select(selectAllRoutes));
  loading$ = this.store.pipe(select(selectRoutesLoading));
  error$ = this.store.pipe(select(selectRoutesError));

  constructor(private store: Store<AppState>) {}

  loadAllRoutes() {
    this.store.dispatch(loadRoutes());
  }
}
