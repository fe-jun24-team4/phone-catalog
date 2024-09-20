import styles from './Catalog.module.scss';

import { FilterControls } from '../FilterControls/FilterControls';

import React from 'react';
import { useMemo, useState } from 'react';
import { perPageOptions, sortByOptions } from '../../../../utils/constants/dropdownOptions';
import { Product } from '../../../../types/Product';
import { sortProducts } from '../../../../features/sortProducts';
import { PaginatedGrid } from '../../../../components/PaginatedGrid';

type Props = {
  products: Product[];
};

export const Catalog = ({ products }: Props) => {
  const [perPage, setPerPage] = useState(perPageOptions.default[1].value);
  const [sortBy, setSortBy] = useState(sortByOptions.default[1].value);

  const sortedProducts = useMemo(() => sortProducts(products, sortBy), [products, sortBy]);

  return (
    <div className={styles.container}>
      <FilterControls
        sortByOptions={sortByOptions}
        onSortByChange={setSortBy}
        perPageOptions={perPageOptions}
        onPerPageChange={setPerPage}
      />

      <PaginatedGrid perPage={perPage} products={sortedProducts} />
    </div>
  );
};
