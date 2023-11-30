import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DeliveryManagementFacade } from '../../data-access/store/facade/delivery-management.facade';
import { Observable } from 'rxjs';
import { RoutesWithOrdersAndDriver } from '../../domain/interfaces/routes-with-orders-and-driver';
import {AppState} from "../../../../core/domain/interfaces/app-state.interface";
import {Store} from "@ngrx/store";
import {selectCombinedData} from "../../data-access/store/selectors/delivery-management.selectors";
import {OrderDTO} from "../../../orders/domain/dto/order.dto";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {RouteDTO} from "../../../routes/domain/dto/routes.dto";
import {OrderModel} from "../../../orders/domain/interfaces/order.interface";
@Component({
  selector: 'app-route-assignment',
  templateUrl: './route-assignment.component.html',
  styleUrl: './route-assignment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteAssignmentComponent implements OnInit {
  routesWithOrdersAndDrivers$!: Observable<RoutesWithOrdersAndDriver[]>;

  constructor(private store: Store<AppState>) {

  }

  reasignOrder(order: OrderModel, newRouteId: string): void {
    // Aquí va la lógica para actualizar la asignación de pedidos
    // Puedes hacer una llamada al servicio para actualizar el backend y luego actualizar el estado en el frontend.
  }

  ngOnInit() {
    this.routesWithOrdersAndDrivers$ = this.store.select(selectCombinedData)
  }

  saveAssignments() {
    // Implementa la lógica para guardar las asignaciones modificadas
  }
}
