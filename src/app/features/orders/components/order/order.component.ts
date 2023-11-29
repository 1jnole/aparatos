import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDTO } from '../../domain/dto/order.dto';
import { OrdersFacade } from '../../data-access/store/facade/orders.facade';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  selectedOrder$: Observable<OrderDTO | null>;

  constructor(private ordersFacade: OrdersFacade) {
    this.selectedOrder$ = this.ordersFacade.selectedOrder$;
  }
}
