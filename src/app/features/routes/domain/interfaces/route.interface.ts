export interface RouteModel {
  routeId: string;
  driverId: string;
  productsToDeliver:ProductToDeliver[];
}

interface ProductToDeliver {
  orderId: string;
}
