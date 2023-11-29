import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteListComponent } from './components/route-list/route-list.component';
import { RouteAssignmentComponent } from './components/route-assignment/route-assignment.component';

const routes: Routes = [
  { path: '', component: RouteListComponent },
  { path: 'route-assignment/:orderId', component: RouteAssignmentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule {}
