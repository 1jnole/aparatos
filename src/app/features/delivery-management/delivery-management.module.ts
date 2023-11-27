import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryManagementComponent } from './components/delivery-management/delivery-management.component';
import { DeliveryManagementRoutingModule } from './delivery-management-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { RidersEffects } from './data-access/state/riders/effects/riders.effects';

@NgModule({
  declarations: [DeliveryManagementComponent],
  imports: [
    CommonModule,
    DeliveryManagementRoutingModule,
    EffectsModule.forFeature([RidersEffects])
  ]
})
export class DeliveryManagementModule {}
