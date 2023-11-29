import { OrderEntity } from '../../../../../orders/domain/entities/order.entity';

export class RouteEntity {
  constructor(
    public id: string,
    public riderId: string,
    public path: { lat: number; lng: number }[],
    public orders: OrderEntity[]
  ) {}
}
