import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../../core/domain/interfaces/app-state.interface';

import {
  selectDeliveryManagementEditing,
  selectDeliveryManagementLoading
} from '../selectors/delivery-management.selectors';

import {
  reassignOrderAction,
  updateRoutes
} from '../actions/delivery-management.actions';

@Injectable({
  providedIn: 'root'
})
export class DeliveryManagementFacade {
  constructor(private store: Store<AppState>) {}

  public isLoading$ = this.store.pipe(select(selectDeliveryManagementLoading));
  public isEditing$ = this.store.pipe(select(selectDeliveryManagementEditing));

  public reassignOrder(orderId: string, newRouteId: string): void {
    this.store.dispatch(reassignOrderAction({ orderId, newRouteId }));
  }

  public updateRoutes(): void {
    this.store.dispatch(updateRoutes());
  }
}
