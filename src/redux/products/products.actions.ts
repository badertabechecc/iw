import { IProducts } from 'src/redux/products/products.types';
import { actionsTypes } from './products.actionTypes';

//ACTION TYPES
export type IAddProductsAction = (products: IProducts) => {
  type: typeof actionsTypes.add;
  payload: {
    products: IProducts;
  };
};

//ACTIONS
export const addProductsAction = (products: IProducts) => ({
  type: actionsTypes.add,
  payload: { products },
});
