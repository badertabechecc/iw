import { IItem } from 'redux/products/products.types';

export type IOrders = IOrder[];

export interface IOrder {
  [key: string]: IItem;
}
