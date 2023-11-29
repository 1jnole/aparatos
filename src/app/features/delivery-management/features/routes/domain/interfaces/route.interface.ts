export interface RouteModel {
  id: string;
  riderId: string;
  path: { lat: number; lng: number }[];
  orders: string[];
}
