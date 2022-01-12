import { IStore } from '@redux/rootReducer';

export const getProducts = (state: IStore) => state.products;
