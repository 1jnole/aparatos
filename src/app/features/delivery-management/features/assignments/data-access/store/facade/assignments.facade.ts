import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectAllAssignments,
  selectAssignmentsError,
  selectAssignmentsLoading
} from '../selectors/assignments.selectors';
import { AppState } from '../../../../../../../core/domain/interfaces/app-state.interface';
import { loadAssignments } from '../actions/assignments.actions';

@Injectable({ providedIn: 'root' })
export class AssignmentsFacade {
  assignments$: Observable<any[]> = this.store.pipe(
    select(selectAllAssignments)
  );
  loading$: Observable<boolean> = this.store.pipe(
    select(selectAssignmentsLoading)
  );
  error$: Observable<any> = this.store.pipe(select(selectAssignmentsError));

  constructor(private store: Store<AppState>) {}

  loadAllAssignments() {
    this.store.dispatch(loadAssignments());
  }
}
