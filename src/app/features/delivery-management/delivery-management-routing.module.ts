import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryManagementComponent } from './components/delivery-management/delivery-management.component';
import { RidersComponent } from './components/riders/riders.component';

const routes: Routes = [
  { path: '', component: DeliveryManagementComponent },
  { path: 'riders', component: RidersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryManagementRoutingModule {}
