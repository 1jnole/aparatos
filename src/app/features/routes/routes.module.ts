import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routesReducer } from './data-access/store/reducers/routes.reducers';
import { RoutesEffects } from './data-access/store/effects/routes.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('routes', routesReducer),
    EffectsModule.forFeature([RoutesEffects])
  ]
})
export class RoutesModule {}
