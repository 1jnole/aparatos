import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';
import { RiderDTO } from '../../../dto/rider.dto';
import { RidersState } from '../reducers/riders.reducer';
import { loadRiders } from '../actions/riders.actions';
@Injectable({ providedIn: 'root' })
export class RidersFacade {
  riders$: Observable<RiderDTO[]> = this.store.pipe(
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
