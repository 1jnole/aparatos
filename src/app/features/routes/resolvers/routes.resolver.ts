// routes.resolver.ts
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, filter, first, switchMap, tap } from 'rxjs/operators';
import * as RouteActions from '../data-access/store/actions/routes.actions';
import * as RouteSelectors from '../data-access/store/selectors/routes.selectors';
export const routesResolver = () => {
  const store = inject(Store);

  return store.select(RouteSelectors.areRoutesLoaded).pipe(
    tap((loaded) => {
      if (!loaded) {
        store.dispatch(RouteActions.loadRoutes());
      }
    }),
    switchMap(() => store.select(RouteSelectors.selectAllRoutes)),
    filter((routes) => routes.length > 0),
    first(),
    catchError(() => of([]))
  );
};
