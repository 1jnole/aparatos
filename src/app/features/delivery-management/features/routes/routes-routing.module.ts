import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteListComponent } from './components/route-list/route-list.component';
import { RouteAssignmentComponent } from './components/route-assignment/route-assignment.component';
import { orderResolver } from '../../../../core/resolvers/order.resolver';

const routes: Routes = [
  { path: '', component: RouteListComponent },
  {
    path: 'route-assignment/:orderId',
    component: RouteAssignmentComponent,
    resolve: { order: orderResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule {}
