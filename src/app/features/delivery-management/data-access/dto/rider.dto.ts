export interface RiderDTO {
  riderId: string;
  riderName: string;
  initialLocation: {
    lat: number;
    lng: number;
  };
}
