import { Injectable } from '@angular/core';
import { RidersFacade } from '../../../../riders/data-access/store/facade/riders.facade';
import { RoutesFacade } from '../../../../routes/data-access/store/facade/routes.facade';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../core/domain/interfaces/app-state.interface';
import { OrdersFacade } from '../../../../orders/data-access/store/facade/orders.facade';
import { loadDeliveryManagementData } from '../actions/delivery-management.actions';
@Injectable({
  providedIn: 'root'
})
export class DeliveryManagementFacade {
  riders$ = this.ridersFacade.riders$;
  routes$ = this.routesFacade.routes$;
  orders$ = this.ordersFacade.orders$;

  constructor(
    private store: Store<AppState>,
    private ridersFacade: RidersFacade,
    private routesFacade: RoutesFacade,
    private ordersFacade: OrdersFacade
  ) {}

  loadAllData() {
    this.ridersFacade.loadRiders();
    this.routesFacade.loadAllRoutes();
    this.ordersFacade.loadAllOrders();
  }

  loadRoutesWithOrders() {
    this.store.dispatch(loadDeliveryManagementData());
  }
}
