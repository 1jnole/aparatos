import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteAssignmentComponent } from './components/route-assignment/route-assignment.component';
import { routesResolver } from '../routes/resolvers/routes.resolver';
import { ridersResolver } from '../riders/resolvers/riders.resolver';
import { ordersResolver } from '../orders/resolvers/orders.resolver';

const routes: Routes = [
  {
    path: 'assignments',
    component: RouteAssignmentComponent,
    resolve: {
      riders: ridersResolver,
      routes: routesResolver,
      orders: ordersResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryManagementRoutingModule {}
