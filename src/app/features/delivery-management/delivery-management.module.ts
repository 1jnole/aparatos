import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteAssignmentComponent } from './components/route-assignment/route-assignment.component';
import { DeliveryManagementRoutingModule } from './delivery-management-routing.module';
import { DeliveryManagementFacade } from './data-access/store/facade/delivery-management.facade';
import { RidersModule } from '../riders/riders.module';
import { RoutesModule } from '../routes/routes.module';
import { FormsModule } from '@angular/forms';
import { OrdersModule } from '../orders/orders.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { deliveryManagementReducer } from './data-access/store/reducers/delivery-management.reducers';
import { DeliveryManagementEffects } from './data-access/store/effects/delivery-management.effect';

@NgModule({
  declarations: [RouteAssignmentComponent],
  imports: [
    StoreModule.forFeature('deliveryManagement', deliveryManagementReducer),
    EffectsModule.forFeature([DeliveryManagementEffects]),
    CommonModule,
    DeliveryManagementRoutingModule,
    RidersModule,
    RoutesModule,
    OrdersModule,
    FormsModule,
    DragDropModule
  ],
  providers: [DeliveryManagementFacade]
})
export class DeliveryManagementModule {}
