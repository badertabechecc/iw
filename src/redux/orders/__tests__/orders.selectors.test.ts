import { getOrders } from '../orders.selectors';

const state = {
  orders: [],
};

describe('ordersSelectors', () => {
  it('should return the cart items', () => {
    const selectedState = getOrders(state);
    expect(selectedState).toEqual(state.orders);
  });
});
