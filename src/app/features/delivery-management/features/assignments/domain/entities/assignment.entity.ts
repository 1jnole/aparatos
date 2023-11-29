import { OrderEntity } from '../../../../../orders/domain/entities/order.entity';

export class AssignmentEntity {
  constructor(
    public routeId: string,
    public orders: OrderEntity[]
  ) {}
}
