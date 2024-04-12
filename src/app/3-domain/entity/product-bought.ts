export interface ProductBought {
  id: number;
  name: string;
  price: number;
  imagePath: string;
  typePrice: string;
  numberItems: number;
  maxItems?: number;
}
