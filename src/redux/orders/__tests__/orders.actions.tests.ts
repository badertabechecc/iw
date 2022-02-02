import { addOrderAction } from '../orders.actions';
import { actionsTypes } from '../orders.actionTypes';

describe('Orders Actions', () => {
  it('addOrderAction', () => {
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
    const type = actionsTypes.add;
    expect(addOrderAction(payload)).toEqual({ type, payload });
  });
});
