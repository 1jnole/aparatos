import { RiderModel } from './rider-model.interface';

export interface RidersState {
  list: RiderModel[];
  loading: boolean;
  error: Error | null;
  loaded: boolean;
}
