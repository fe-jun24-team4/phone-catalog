import { useMemo } from 'react';
import { Product } from '../types/Product';
import { HOST } from '../utils/constants/host';
import { useFetchData } from './useFetch';
import { sortByRating } from '../features/sortProducts';
import { Category } from '../types/Category';

export function useFetchRecommended(category: Category, count: number = 10) {
  const { data: products } = useFetchData<Product>(`${HOST}/api/products.json`);

  const recommendedProducts = useMemo(() => {
    const productsFromCategory = products.filter(product => product.category === category);
    const sortedProducts = sortByRating(productsFromCategory);

    return sortedProducts.slice(0, count);
  }, [category, count, products]);

  return recommendedProducts;
}
