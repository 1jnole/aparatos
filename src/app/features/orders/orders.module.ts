import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { StoreModule } from '@ngrx/store';
import { ordersReducer } from './data-access/store/reducers/orders.reducers';
import { OrdersService } from './services/orders-service.service';
import { OrdersFacade } from './data-access/store/facade/orders.facade';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';

@NgModule({
  declarations: [OrderListComponent, OrderDetailComponent],
  imports: [
    StoreModule.forFeature('orders', ordersReducer),
    CommonModule,
    OrdersRoutingModule
  ],
  providers: [OrdersService, OrdersFacade]
})
export class OrdersModule {}
