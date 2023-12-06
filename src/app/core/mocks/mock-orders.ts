import { OrderDTO } from '../../features/orders/domain/dto/order.dto';

export const mockOrders: OrderDTO[] = [
  {
    orderId: '1',
    productName: 'Product 1',
    price: 100,
    deliveryLocation: { latitude: 50, longitude: 60 }
  },
  {
    orderId: '2',
    productName: 'Product 2',
    price: 200,
    deliveryLocation: { latitude: 70, longitude: 80 }
  },
  {
    orderId: '3',
    productName: 'Product 3',
    price: 300,
    deliveryLocation: { latitude: 90, longitude: 100 }
  }
];
