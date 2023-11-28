import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentPageComponent } from './components/assignment-page/assignment-page.component';
import { RouteListComponent } from './components/route-list/route-list.component';

const routes: Routes = [
  { path: '', component: AssignmentPageComponent },
  { path: 'routes', component: RouteListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryManagementRoutingModule {}
