import { RouteModel } from '../../routes/domain/interfaces/route.interface';
import { RiderModel } from '../../riders/domain/interfaces/rider-model.interface';
import { OrderDTO } from '../../orders/domain/dto/order.dto';
import { RoutesWithOrdersAndDriver } from '../domain/interfaces/routes-with-orders-and-driver';
import { OrderModel } from '../../orders/domain/interfaces/order.interface';

export function combineData(
  routes: RouteModel[],
  riders: RiderModel[],
  orders: OrderDTO[]
): RoutesWithOrdersAndDriver[] {
  return routes.map((route) => {
    const driver = riders.find((rider) => rider.driverId === route.driverId);
    const driverName = driver ? driver.driverName : undefined;
    const initialLocation = driver
      ? {
          lat: driver?.initialLocation?.latitude,
          lng: driver?.initialLocation?.longitude
        }
      : undefined;

    const assignedOrders: OrderModel[] = route.productsToDeliver
      .map((productToDeliver) => {
        const foundOrder = orders.find(
          (order) => order.orderId === productToDeliver.orderId
        );
        return foundOrder
          ? {
              orderId: foundOrder.orderId,
              productName: foundOrder.productName,
              price: foundOrder.price,
              deliveryLocation: {
                lat: foundOrder.deliveryLocation.latitude,
                lng: foundOrder.deliveryLocation.longitude
              }
            }
          : undefined;
      })
      .filter((order): order is OrderModel => order !== undefined);

    return {
      routeId: route.routeId,
      driverName: driverName,
      initialLocation,
      orders: assignedOrders
    };
  });
}
