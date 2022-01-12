export type IItems = {
  [key: string]: IItem;
};

export interface IItem {
  item: Item;
  quantity: number;
}

export type Item = {
  Id: string;
  Title: string;
  Category: string;
  SubCategory: string;
  Manufacturer: string;
  Contents: string;
  Description: string;
  Organic: boolean;
  ImageUrl: string;
  OrgPrice: number;
  Price: number;
};
