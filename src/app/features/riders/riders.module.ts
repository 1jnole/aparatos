import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RidersListComponent } from './components/riders-list/riders-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ridersReducer } from './data-access/store/reducers/riders.reducer';
import { RidersEffects } from './data-access/store/effects/riders.effects';

@NgModule({
  declarations: [RidersListComponent],
  exports: [RidersListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('riders', ridersReducer),
    EffectsModule.forFeature([RidersEffects])
  ]
})
export class RidersModule {}
