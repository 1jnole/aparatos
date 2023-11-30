import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteAssignmentComponent } from './components/route-assignment/route-assignment.component';
import {routeAssignmentResolver} from "./resolvers/route-assignment.resolver";

const routes: Routes = [
  {
    path: 'assignments',
    component: RouteAssignmentComponent,
    resolve: {
      routes: routeAssignmentResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryManagementRoutingModule {}
