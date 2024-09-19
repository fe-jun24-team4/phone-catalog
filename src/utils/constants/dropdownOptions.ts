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

export const sortByOptions = Object.freeze(
  new Options<SortBy>({
    Newest: { value: SortBy.newest },
    'Best rated': { value: SortBy.topRated },
    'Top sales': { value: SortBy.topSales },
    'Best deal': { value: SortBy.biggestDiscount },
  }),
);

export const shippingOptions = Object.freeze(
  new Options<ShippingDestinations>({
    Ukraine: { value: ShippingDestinations.Ukraine },
    Poland: { value: ShippingDestinations.Poland },
    Moldova: { value: ShippingDestinations.Moldova },
  }),
);
