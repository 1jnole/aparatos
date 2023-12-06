import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, filter, first, switchMap, tap } from 'rxjs/operators';
import * as RiderActions from '../data-access/store/actions/riders.actions';
import * as RiderSelectors from '../data-access/store/selectors/riders.selectors';

export const ridersResolver = () => {
  const store = inject(Store);

  return store.select(RiderSelectors.areRidersLoaded).pipe(
    tap((loaded) => {
      if (!loaded) {
        store.dispatch(RiderActions.loadRiders());
      }
    }),
    switchMap(() => store.select(RiderSelectors.selectAllRiders)),
    filter((riders) => riders.length > 0),
    first(),
    catchError(() => of([]))
  );
};
