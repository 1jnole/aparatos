export class RiderEntity {
  constructor(
    public id: string,
    public name: string,
    public location: { lat: number; lng: number }
  ) {}
}
