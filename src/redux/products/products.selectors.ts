import { IStore } from 'src/redux/rootReducer';

export const getProducts = (state: IStore) => state.products;
