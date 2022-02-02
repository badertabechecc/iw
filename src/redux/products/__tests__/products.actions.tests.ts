import { addProductsAction } from '../products.actions';
import { actionsTypes } from '../products.actionTypes';

describe('Products Actions', () => {
  it('addProductsAction', () => {
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
    const type = actionsTypes.add;
    expect(addProductsAction(payload)).toEqual({
      type,
      payload: { products: payload },
    });
  });
});
