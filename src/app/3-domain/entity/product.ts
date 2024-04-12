export interface Product {
  id: number;
  name: string;
  price: number;
  typePrice: string;
  origin: string;
  imagePath: string;
  maxItems?: number;
}
