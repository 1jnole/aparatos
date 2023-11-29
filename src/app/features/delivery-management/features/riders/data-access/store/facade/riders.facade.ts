import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { loadRiders } from '../actions/riders.actions';

import { RidersState } from '../../../domain/interfaces/rider-state.interface';

@Injectable({ providedIn: 'root' })
export class RidersFacade {
  riders$: Observable<any[]> = this.store.pipe(
    select((state) => state.deliveryManagement.list)
  );
  loading$: Observable<boolean> = this.store.pipe(
    select((state) => state.deliveryManagement.loading)
  );

  constructor(private store: Store<{ deliveryManagement: RidersState }>) {}

  loadRiders() {
    this.store.dispatch(loadRiders());
  }
}
