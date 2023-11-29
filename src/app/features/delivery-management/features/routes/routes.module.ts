import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteListComponent } from './components/route-list/route-list.component';
import { RouteAssignmentComponent } from './components/route-assignment/route-assignment.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routesReducer } from './data-access/store/reducers/routes.reducers';
import { RoutesEffects } from './data-access/store/effects/routes.effects';
import { RoutesRoutingModule } from './routes-routing.module';
import { RouteDetailComponent } from './components/route-detail/route-detail.component';
import { OrdersModule } from '../../../orders/orders.module';

@NgModule({
  declarations: [
    RouteListComponent,
    RouteAssignmentComponent,
    RouteDetailComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    StoreModule.forFeature('routes', routesReducer),
    EffectsModule.forFeature([RoutesEffects]),
    OrdersModule
  ]
})
export class RoutesModule {}
