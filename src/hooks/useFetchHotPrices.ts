import { useMemo } from 'react';
import { Product } from '../types/Product';
import { HOST } from '../utils/constants/host';
import { useFetchData } from './useFetch';
import { sortByDiscount } from '../features/sortProducts';
import { Category } from '../types/Category';

export function useFetchHotPrices(category: Category, count: number = 10) {
  const { data: products } = useFetchData<Product>(`${HOST}/api/products.json`);

  const hotProducts = useMemo(() => {
    const productsFromCategory = products.filter(product => product.category === category);
    const sortedProducts = sortByDiscount(productsFromCategory);

    return sortedProducts.slice(0, count);
  }, [category, count, products]);

  return hotProducts;
}
