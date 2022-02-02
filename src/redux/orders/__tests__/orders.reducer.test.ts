import { addOrderAction } from '../orders.actions';
import ordersReducer from '../orders.reducer';

describe('orders reducer', () => {
  const initialState = [];
  it('should return the initial state', () => {
    expect(ordersReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should add the order', () => {
    const payload = {
      order: {
        '1': {
          id: '1',
          quantity: 2,
        },
        '2': {
          id: '2',
          quantity: 1,
        },
      },
    };
    expect(ordersReducer(initialState, addOrderAction(payload))).toEqual([
      ...initialState,
      payload.order,
    ]);
  });
});
