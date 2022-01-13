import { IStore } from 'src/redux/rootReducer';

export const getCartItems = (state: IStore) => state.cart;
