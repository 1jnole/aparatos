import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryManagementComponent } from './components/delivery-management/delivery-management.component';

const routes: Routes = [{ path: '', component: DeliveryManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryManagementRoutingModule {}
