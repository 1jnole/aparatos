import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OrdersFacade } from '../../data-access/store/facade/orders.facade';
import { OrderDTO } from '../../domain/dto/order.dto';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderListComponent implements OnInit {
  orders$ = this.ordersFacade.orders$;
  isLoading$ = this.ordersFacade.isLoading$;

  constructor(private ordersFacade: OrdersFacade) {}

  ngOnInit(): void {
    this.ordersFacade.loadAllOrders();
  }

  onSelectOrder(order: OrderDTO) {
    this.ordersFacade.assignSelectedOrder(order);
  }

  public trackByItems(index: number, _item: any): number {
    return index;
  }
}
