import { getCartItems } from '../cart.selectors';

const state = {
  cart: {},
};

describe('cartSelectors', () => {
  it('should return the cart items', () => {
    const selectedState = getCartItems(state);
    expect(selectedState).toEqual(state.cart);
  });
});
