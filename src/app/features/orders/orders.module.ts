import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ordersReducer } from './data-access/store/reducers/orders.reducers';
import { OrdersService } from './data-access/api/orders-service.service';
import { OrdersFacade } from './data-access/store/facade/orders.facade';
import { EffectsModule } from '@ngrx/effects';
import { OrderEffects } from './data-access/store/effects/orders.effects';
import { OrderListComponent } from './components/order-list/order-list.component';

@NgModule({
  declarations: [OrderListComponent],
  imports: [
    StoreModule.forFeature('orders', ordersReducer),
    EffectsModule.forFeature([OrderEffects]),
    CommonModule
  ],
  exports: [OrderListComponent],
  providers: [OrdersService, OrdersFacade]
})
export class OrdersModule {}
