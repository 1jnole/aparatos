import { RidersState } from '../interfaces/rider-state.interface';

export const initialRidersState: RidersState = {
  list: [],
  loading: false,
  error: null,
  loaded: false
};
