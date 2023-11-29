import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'routes',
    pathMatch: 'full'
  },
  {
    path: 'riders',
    loadChildren: () =>
      import('./features/riders/riders.module').then((m) => m.RidersModule)
  },
  {
    path: 'routes',
    loadChildren: () =>
      import('./features/routes/routes.module').then((m) => m.RoutesModule)
  },
  {
    path: 'assignments',
    loadChildren: () =>
      import('./features/assignments/assignments.module').then(
        (m) => m.AssignmentsModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryManagementRoutingModule {}
