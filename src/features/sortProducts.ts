import { SortBy } from '../enums/sortBy';
import { ProductShort as Product } from '../types/Product';

export function sortByNewest(products: Product[]) {
  return [...products].sort(({ year: a }, { year: b }) => b - a);
}

export function sortByRating(products: Product[]) {
  return [...products].sort(({ rating: a }, { rating: b }) => b - a);
}

export function sortBySales(products: Product[]) {
  return [...products].sort(({ sold: a }, { sold: b }) => b - a);
}

export function sortByDiscount(products: Product[]) {
  return [...products].sort((a, b) => {
    const aDiscountPercent = 1 - a.price / a.fullPrice;
    const bDiscountPercent = 1 - b.price / b.fullPrice;

    return bDiscountPercent - aDiscountPercent;
  });
}

export function sortProducts(products: Product[], sortBy: SortBy) {
  switch (sortBy) {
    case SortBy.newest:
      return sortByNewest(products);
    case SortBy.topRated:
      return sortByRating(products);
    case SortBy.topSales:
      return sortBySales(products);
    case SortBy.biggestDiscount:
      return sortByDiscount(products);
  }
}
