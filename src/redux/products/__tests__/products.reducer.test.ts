import { addProductsAction } from '../products.actions';
import productsReducer from '../products.reducer';

describe('products reducer', () => {
  const initialState = {};
  it('should return the initial state', () => {
    expect(productsReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should add the products', () => {
    const payload = {
      '1': {
        Id: '1',
        Title: 'Estanterías Modulares Galvanizadas',
        Category: 'Herramientas',
        SubCategory: 'Equipos para organización del taller',
        Manufacturer: 'Pack',
        Contents: 'Equipos para organización del taller',
        Description: '',
        Organic: true,
        ImageUrl:
          'https://cdn.manomano.com/images/images_products/7195930/P/15633022_1.jpg',
        OrgPrice: 59,
        Price: 59,
      },
    };
    expect(productsReducer(initialState, addProductsAction(payload))).toEqual(
      payload
    );
  });
});
