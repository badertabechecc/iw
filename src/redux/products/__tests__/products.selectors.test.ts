import { getProducts } from '../products.selectors';

const state = {
  products: {},
};

describe('productsSelectors', () => {
  it('should return the cart items', () => {
    const selectedState = getProducts(state);
    expect(selectedState).toEqual(state.products);
  });
});
