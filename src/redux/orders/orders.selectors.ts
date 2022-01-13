import { IStore } from 'src/redux/rootReducer';

export const getOrders = (state: IStore) => state.orders;
