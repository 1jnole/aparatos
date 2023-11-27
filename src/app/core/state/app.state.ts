import {
  initialRidersState,
  RidersState
} from "../../features/delivery-management/data-access/state/riders/reducers/riders.reducer";

export interface AppState {
  deliveryManagement: {
    riders: RidersState;
  };

}

export const initialAppState: AppState = {
  deliveryManagement: {
    riders: initialRidersState
  }
};
