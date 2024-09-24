import { ShippingDestinations } from '../../enums/ShippingDestination';
import { SortBy } from '../../enums/sortBy';
import { Options, OptionType } from '../../types/Option';

export const perPageOptions = Object.freeze(
  new Options<number>({
    '8': { value: 8 },
    '16': { value: 16, type: OptionType.default },
    '24': { value: 24 },
  }),
);

export const createSortByOptions = (t: (key: string) => string) => {
  return Object.freeze(
    new Options<SortBy>({
      [t('catalog.sortBy.newest')]: { value: SortBy.newest },
      [t('catalog.sortBy.topRated')]: { value: SortBy.topRated },
      [t('catalog.sortBy.topSales')]: { value: SortBy.topSales },
      [t('catalog.sortBy.biggestDiscount')]: { value: SortBy.biggestDiscount },
    }),
  );
};

export const shippingOptions = Object.freeze(
  new Options<ShippingDestinations>({
    Ukraine: { value: ShippingDestinations.Ukraine },
    Poland: { value: ShippingDestinations.Poland },
    Moldova: { value: ShippingDestinations.Moldova },
  }),
);
