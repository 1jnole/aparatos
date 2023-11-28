import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { loadRiders } from '../store/actions/riders.actions';
import { RiderDTO } from '../dto/rider.dto';
import { RidersState } from '../../domain/interfaces/store/rider.state';

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
