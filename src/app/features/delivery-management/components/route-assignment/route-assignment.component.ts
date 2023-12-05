import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutesWithOrdersAndDriver } from '../../domain/interfaces/routes-with-orders-and-driver';
import { AppState } from '../../../../core/domain/interfaces/app-state.interface';
import { select, Store } from '@ngrx/store';
import { OrderModel } from '../../../orders/domain/interfaces/order.interface';
import { loadDeliveryManagementData } from '../../data-access/store/actions/delivery-management.actions';
import { selectCombinedData } from '../../data-access/store/selectors/delivery-management.selectors';
import {DeliveryManagementFacade} from "../../data-access/store/facade/delivery-management.facade";

@Component({
  selector: 'app-route-assignment',
  templateUrl: './route-assignment.component.html',
  styleUrl: './route-assignment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteAssignmentComponent implements OnInit {
  public routesWithOrdersAndDrivers$!: Observable<RoutesWithOrdersAndDriver[]>;
  public isLoading$ =  this.deliveryManagementFacade.isLoading$;

  constructor(private store: Store<AppState>, private deliveryManagementFacade: DeliveryManagementFacade) {
    this.store.dispatch(loadDeliveryManagementData());
  }

  reasignOrder(order: OrderModel, newRouteId: string): void {
    // Aquí va la lógica para actualizar la asignación de pedidos
    // Puedes hacer una llamada al servicio para actualizar el backend y luego actualizar el estado en el frontend.
  }

  ngOnInit() {
    this.routesWithOrdersAndDrivers$ = this.store.select(selectCombinedData);
  }

  saveAssignments() {
    // Implementa la lógica para guardar las asignaciones modificadas
  }

  openEditModal(order: OrderModel) {}

  reassignOrder(order: OrderModel, target: any) {
    console.log('Reasignar pedido', order)
    console.log('Reasignar pedido id', target.value)
  }
}
