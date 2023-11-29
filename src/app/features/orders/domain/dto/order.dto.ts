export interface OrderDTO {
  orderId: string;
  productName: string;
  price: number;
  deliveryLocation: {
    lat: number;
    lng: number;
  };
}
