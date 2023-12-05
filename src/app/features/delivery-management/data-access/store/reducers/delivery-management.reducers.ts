import { createReducer, on } from '@ngrx/store';
import { initialDeliveryManagementState } from '../../../domain/entities/delivery-management.state';
import {
  loadDeliveryManagementData,
  loadDeliveryManagementDataFailure,
  loadDeliveryManagementDataSuccess,
  reassignOrderAction,
  updateRoutes,
  updateRoutesFailure,
  updateRoutesSuccess
} from '../actions/delivery-management.actions';

export const deliveryManagementReducer = createReducer(
  initialDeliveryManagementState,
  on(loadDeliveryManagementData, (state) => ({ ...state, loading: true })),
  on(
    loadDeliveryManagementDataSuccess,
    (state, { routesWithOrdersAndDriver }) => ({
      ...state,
      routesWithOrdersAndDriver,
      loading: false
    })
  ),
  on(loadDeliveryManagementDataFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(updateRoutes, (state) => ({
    ...state,
    loading: true
  })),
  on(updateRoutesSuccess, (state) => ({
    ...state,
    loading: false
  })),
  on(updateRoutesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(reassignOrderAction, (state, { orderId, newRouteId }) => {
    // Find the order to move
    const orderToMove = state.routesWithOrdersAndDriver
      .flatMap((route) => route.orders)
      .find((order) => order.orderId === orderId);

    if (!orderToMove) {
      return state; // If the order is not found, do nothing
    }

    const updatedRoutes = state.routesWithOrdersAndDriver.map((route) => {
      if (route.routeId === newRouteId) {
        // Add the order to the new route
        const updatedOrders = [...route.orders, orderToMove];
        return { ...route, orders: updatedOrders };
      } else {
        // Delete the order from the old route
        const updatedOrders = route.orders.filter(
          (order) => order.orderId !== orderId
        );
        return { ...route, orders: updatedOrders };
      }
    });

    return {
      ...state,
      routesWithOrdersAndDriver: updatedRoutes,
      isEditing: true
    };
  })
);
