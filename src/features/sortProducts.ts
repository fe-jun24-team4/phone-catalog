import { SortBy } from '../enums/sortBy';
import { Product } from '../types/Product';

export function sortProducts(products: Product[], sortBy: SortBy) {
  const result = [...products];

  switch (sortBy) {
    case SortBy.newest:
      //result.sort(({ year: a }, { year: b }) => b - a);
      break;
    case SortBy.topRated:
      //throw new Error('Not implemented');
      break;
    case SortBy.topSales:
      //throw new Error('Not implemented');
      break;
    case SortBy.biggestDiscount:
      result.sort((a, b) => {
        const aDiscount = 1 - a.priceDiscount / a.priceRegular;
        const bDiscount = 1 - b.priceDiscount / b.priceRegular;

        return bDiscount - aDiscount;
      });
      break;
  }

  return result;
}
