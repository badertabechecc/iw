export type IProducts = {
  [key: string]: IProduct;
};

export interface IProduct {
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
