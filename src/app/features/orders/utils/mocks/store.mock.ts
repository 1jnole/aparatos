import { BehaviorSubject } from 'rxjs';
import { areOrdersLoaded, selectAllOrders } from "../../data-access/store/selectors/orders.selectors";
import {OrderDTO} from "../../domain/dto/order.dto";

export const ordersLoaded$ = new BehaviorSubject<boolean>(false);
export const allOrders$ = new BehaviorSubject<OrderDTO[]>([]);

export const mockStore = {
  select: jasmine.createSpy('select').and.callFake((selector: any) => {
    if (selector === areOrdersLoaded) {
      return ordersLoaded$.asObservable();
    } else if (selector === selectAllOrders) {
      return allOrders$.asObservable();
    }
    throw new Error('Selector not implemented in mockStore');
  }),
  dispatch: jasmine.createSpy('dispatch')
};
