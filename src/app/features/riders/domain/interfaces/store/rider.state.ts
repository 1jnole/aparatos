import { RiderDTO } from '../../../data-access/dto/rider.dto';

export interface RidersState {
  list: RiderDTO[];
  loading: boolean;
  error: Error | null;
}
