import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  selectAllOrders,
  selectOrderLoading,
  selectOrdersError
} from '../selectors/orderes.selectors';
import { AppState } from '../../../../../core/domain/interfaces/store/app.state';
import { loadOrders } from '../actions/orders.actions';

@Injectable({ providedIn: 'root' })
export class OrdersFacade {
  orders$ = this.store.pipe(select(selectAllOrders));
  loading$ = this.store.pipe(select(selectOrderLoading));
  error$ = this.store.pipe(select(selectOrdersError));

  constructor(private store: Store<AppState>) {}

  loadAllOrders() {
    this.store.dispatch(loadOrders());
  }
}
