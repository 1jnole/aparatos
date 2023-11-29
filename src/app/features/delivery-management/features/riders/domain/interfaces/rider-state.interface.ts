import { RiderEntity } from '../entities/rider.entity';

export interface RidersState {
  list: RiderEntity[];
  loading: boolean;
  error: Error | null;
}
