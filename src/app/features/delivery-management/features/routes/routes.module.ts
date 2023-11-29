import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteListComponent } from './components/route-list/route-list.component';
import { RouteAssignmentComponent } from './components/route-assignment/route-assignment.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routesReducer } from './data-access/store/reducers/routes.reducers';
import { RoutesEffects } from './data-access/store/effects/routes.effects';
import {RoutesRoutingModule} from "./routes-routing.module";

@NgModule({
  declarations: [RouteListComponent, RouteAssignmentComponent],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    StoreModule.forFeature('routes', routesReducer),
    EffectsModule.forFeature([RoutesEffects]),

  ]
})
export class RoutesModule {}
