import { IStore } from '@redux/rootReducer';

export const getCartItems = (state: IStore) => state.cart;
