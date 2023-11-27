import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryManagementComponent } from './components/delivery-management/delivery-management.component';
import { DeliveryManagementRoutingModule } from './delivery-management-routing.module';

@NgModule({
  declarations: [DeliveryManagementComponent],
  imports: [CommonModule, DeliveryManagementRoutingModule]
})
export class DeliveryManagementModule {}
