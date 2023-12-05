import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../../core/domain/interfaces/app-state.interface';
import { Observable } from 'rxjs';
import { RoutesWithOrdersAndDriver } from '../../../domain/interfaces/routes-with-orders-and-driver';
import {selectCombinedData, selectDeliveryManagementLoading} from '../selectors/delivery-management.selectors';

@Injectable({
  providedIn: 'root'
})
export class DeliveryManagementFacade {
  constructor(private store: Store<AppState>) {}

  getCombinedData(): Observable<RoutesWithOrdersAndDriver[]> {
    return this.store.pipe(select(selectCombinedData));
  }

  isLoading$ = this.store.pipe(select(selectDeliveryManagementLoading));
}
