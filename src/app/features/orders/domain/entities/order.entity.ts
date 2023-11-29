export class OrderEntity {
  constructor(
    public id: string,
    public productName: string,
    public price: number,
    public deliveryLocation: { lat: number; lng: number }
  ) {}
}
