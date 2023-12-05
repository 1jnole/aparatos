import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutesWithOrdersAndDriver } from '../../domain/interfaces/routes-with-orders-and-driver';
import { AppState } from '../../../../core/domain/interfaces/app-state.interface';
import { Store } from '@ngrx/store';
import { OrderModel } from '../../../orders/domain/interfaces/order.interface';
import { loadDeliveryManagementData } from '../../data-access/store/actions/delivery-management.actions';
import { selectRoutesWithOrdersAndDrivers } from '../../data-access/store/selectors/delivery-management.selectors';
import { DeliveryManagementFacade } from '../../data-access/store/facade/delivery-management.facade';

@Component({
  selector: 'app-route-assignment',
  templateUrl: './route-assignment.component.html',
  styleUrl: './route-assignment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteAssignmentComponent implements OnInit {
  public routesWithOrdersAndDrivers$!: Observable<RoutesWithOrdersAndDriver[]>;
  public isLoading$ = this.deliveryManagementFacade.isLoading$;
  public isEditing$ = this.deliveryManagementFacade.isEditing$;

  constructor(
    private store: Store<AppState>,
    private deliveryManagementFacade: DeliveryManagementFacade
  ) {
    this.store.dispatch(loadDeliveryManagementData());
  }

  ngOnInit() {
    this.routesWithOrdersAndDrivers$ = this.store.select(
      selectRoutesWithOrdersAndDrivers
    );
  }

  reassignOrder(order: OrderModel, target: any) {
    const newRouteId = target.value;
    this.deliveryManagementFacade.reassignOrder(order.orderId, newRouteId);
  }

  onSaveChanges() {
    this.deliveryManagementFacade.updateRoutes();
  }
}
