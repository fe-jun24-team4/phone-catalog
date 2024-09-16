import { SortBy } from '../enums/sortBy';
import { ProductShort as Product } from '../types/Product';

export function sortProducts(products: Product[], sortBy: SortBy) {
  const result = [...products];

  switch (sortBy) {
    case SortBy.newest:
      result.sort(({ year: a }, { year: b }) => b - a);
      break;
    case SortBy.topRated:
      throw new Error('Not implemented');
    case SortBy.topSales:
      throw new Error('Not implemented');
    case SortBy.biggestDiscount:
      result.sort((a, b) => {
        const aDiscount = 1 - a.price / a.fullPrice;
        const bDiscount = 1 - b.price / b.fullPrice;

        return bDiscount - aDiscount;
      });
      break;
  }

  return result;
}
