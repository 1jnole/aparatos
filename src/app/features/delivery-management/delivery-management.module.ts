import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryManagementRoutingModule } from './delivery-management-routing.module';
import { DeliveryListComponent } from './components/delivery-list/delivery-list.component';
import { deliveryManagementReducers } from './data-access/store/delivery-management/reducers/delivery-management.reducer';
import { StoreModule } from '@ngrx/store';
import { AssignmentPageComponent } from './components/assignment-page/assignment-page.component';
import { PackageAssignmentComponent } from './components/package-assignment/package-assignment.component';
import { RouteDetailComponent } from './components/route-detail/route-detail.component';
import { RouteListComponent } from './components/route-list/route-list.component';

@NgModule({
  declarations: [
    DeliveryListComponent,
    AssignmentPageComponent,
    PackageAssignmentComponent,
    RouteDetailComponent,
    RouteListComponent
  ],
  imports: [
    CommonModule,
    DeliveryManagementRoutingModule,
    StoreModule.forFeature('deliveryManagement', deliveryManagementReducers)
  ]
})
export class DeliveryManagementModule {}
