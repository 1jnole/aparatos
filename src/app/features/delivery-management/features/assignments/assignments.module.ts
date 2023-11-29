import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { assignmentsReducer } from './data-access/store/reducers/assignments.reducers';
import { AssignmentsEffects } from './data-access/store/effects/assignments.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('assignments', assignmentsReducer),
    EffectsModule.forFeature([AssignmentsEffects])
  ]
})
export class AssignmentsModule {}
