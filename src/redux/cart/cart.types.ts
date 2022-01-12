export type ICartItems = {
  [key: string]: ICartItem;
};

export interface ICartItem {
  id: string;
  quantity: number;
}
