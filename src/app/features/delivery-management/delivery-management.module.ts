import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryManagementRoutingModule } from './delivery-management-routing.module';
import { DeliveryListComponent } from './components/delivery-list/delivery-list.component';
import { deliveryManagementReducers } from './data-access/store/delivery-management/reducers/delivery-management.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [DeliveryListComponent],
  imports: [
    CommonModule,
    DeliveryManagementRoutingModule,
    StoreModule.forFeature('deliveryManagement', deliveryManagementReducers)
  ]
})
export class DeliveryManagementModule {}
