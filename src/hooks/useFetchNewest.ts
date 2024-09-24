import { useMemo } from 'react';
import { Product } from '../types/Product';
import { HOST } from '../utils/constants/host';
import { useFetchData } from './useFetch';
import { sortByNewest } from '../features/sortProducts';
import { Category } from '../types/Category';

export function useFetchNewest(category: Category, count: number = 10) {
  const { data: products } = useFetchData<Product>(`${HOST}/api/products.json`);

  const newestProducts = useMemo(() => {
    const productsFromCategory = products.filter(product => product.category === category);
    const sortedProducts = sortByNewest(productsFromCategory);

    return sortedProducts.slice(0, count);
  }, [category, count, products]);

  return newestProducts;
}
