import { IOrder } from '../interfaces/order.interface';

export class Order implements IOrder {
  constructor(
    public orderId: string,
    public productName: string,
    public price: number,
    public deliveryLocation: {
      lat: number;
      lng: number;
    }
  ) {}
}
