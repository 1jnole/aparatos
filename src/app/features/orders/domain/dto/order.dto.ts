export interface OrderDTO {
  orderId: string;
  productName: string;
  price: number;
  deliveryLocation: {
    latitude: number;
    longitude: number;
  };
}
