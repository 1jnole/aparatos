import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./features/orders/orders.module').then((m) => m.OrdersModule)
  },
  {
    path: 'delivery-management',
    loadChildren: () =>
      import('./features/delivery-management/delivery-management.module').then(
        (m) => m.DeliveryManagementModule
      )
  },
  {
    path: 'riders',
    loadChildren: () =>
      import('./features/riders/riders.module').then((m) => m.RidersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
