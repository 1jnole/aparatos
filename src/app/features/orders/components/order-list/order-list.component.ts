import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OrdersFacade } from '../../data-access/store/facade/orders.facade';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderListComponent implements OnInit {
  orders$ = this.ordersFacade.orders$;

  constructor(private ordersFacade: OrdersFacade) {}

  ngOnInit(): void {
    this.ordersFacade.loadAllOrders();
  }

  onSelectOrder(orderId: string) {
    this.ordersFacade.assignOrder(orderId);
  }

  public trackByItems(index: number, _item: any): number {
    return index;
  }
}
