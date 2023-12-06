import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadRiders } from '../actions/riders.actions';
import { RiderModel } from '../../../domain/interfaces/rider-model.interface';
import { AppState } from '../../../../../core/domain/interfaces/app-state.interface';
import * as ridersSelectors from '../selectors/riders.selectors';

@Injectable({ providedIn: 'root' })
export class RidersFacade {
  riders$: Observable<RiderModel[]> = this.store.pipe(
    select(ridersSelectors.selectAllRiders)
  );
  loading$: Observable<boolean> = this.store.pipe(
    select((state) => state.riders.loading)
  );

  constructor(private store: Store<AppState>) {}

  loadRiders() {
    this.store.dispatch(loadRiders());
  }
}
