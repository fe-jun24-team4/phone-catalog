import { Product } from './Product';

export type OrderItem = {
  product: Product;
  amount: number;
};

export type OrderRecord = {
  productId: string;
  amount: number;
};
