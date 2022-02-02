import {
  addItemAction,
  removeItemAction,
  clearItemsAction,
} from '../cart.actions';
import cartReducer from '../cart.reducer';

describe('cart reducer', () => {
  const initialState = {};
  it('should return the initial state', () => {
    expect(cartReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should add the product to the cart', () => {
    const payload = {
      id: '1',
    };
    expect(cartReducer(initialState, addItemAction(payload))).toEqual({
      '1': {
        id: '1',
        quantity: 1,
      },
    });
  });

  it('should remove a product from the cart', () => {
    const state = {
      '1': {
        id: '1',
        quantity: 1,
      },
    };
    const payload = { id: '1' };
    expect(cartReducer(state, removeItemAction(payload))).toEqual({});
  });

  it('should clear the cart', () => {
    const state = {
      '1': {
        id: '1',
        quantity: 2,
      },
      '2': {
        id: '2',
        quantity: 1,
      },
    };
    expect(cartReducer(state, clearItemsAction())).toEqual({});
  });
});
