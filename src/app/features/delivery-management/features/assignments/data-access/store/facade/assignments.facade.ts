import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateRoute } from '../actions/assignments.actions';
import {
  selectAssignmentError,
  selectAssignmentLoading,
  selectUpdatedRoute
} from '../selectors/assignments.selectors';

@Injectable({ providedIn: 'root' })
export class AssignmentsFacade {
  updatedRoute$ = this.store.select(selectUpdatedRoute);
  loading$ = this.store.select(selectAssignmentLoading);
  error$ = this.store.select(selectAssignmentError);

  constructor(private store: Store) {}

  updateRoute(route: any) {
    this.store.dispatch(updateRoute({ route }));
  }
}
