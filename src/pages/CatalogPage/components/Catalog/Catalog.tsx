import styles from './Catalog.module.scss';

import { FilterControls } from '../FilterControls/FilterControls';

import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';
import { perPageOptions, createSortByOptions } from '../../../../utils/constants/dropdownOptions';
import { Product } from '../../../../types/Product';
import { sortProducts } from '../../../../features/sortProducts';
import { PaginatedGrid } from '../../../../components/PaginatedGrid';
import { useSearchParams } from 'react-router-dom';
import { PER_PAGE, SORT_BY } from '../../../../utils/constants/urlSearchParams';
import { SortBy } from '../../../../enums/sortBy';
import { updateSearchParams } from '../../../../utils/updateSearchParams';
import { useTranslation } from 'react-i18next';

type Props = {
  products: Product[];
};

export const Catalog = ({ products }: Props) => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  const sortByOptions = useMemo(() => createSortByOptions(t), [t]);

  const sortBy = (searchParams.get(SORT_BY) ?? sortByOptions.defaultValue) as SortBy;
  const perPage = Number(searchParams.get(PER_PAGE) ?? perPageOptions.defaultValue);
  const sortByLocalOptions = sortByOptions.clone(sortBy);
  const perPageLocalOptions = perPageOptions.clone(perPage);

  const setSortBy = (newSortBy: SortBy) => {
    setSearchParams(
      updateSearchParams(searchParams, {
        [SORT_BY]: newSortBy === sortByOptions.defaultValue ? null : newSortBy,
      }),
    );
  };

  const setPerPage = (newPerPage: number) => {
    setSearchParams(
      updateSearchParams(searchParams, {
        [PER_PAGE]: newPerPage === perPageOptions.defaultValue ? null : newPerPage.toString(),
      }),
    );
  };

  const sortedProducts = useMemo(() => sortProducts(products, sortBy), [products, sortBy]);

  return (
    <div className={styles.container}>
      <FilterControls
        sortByOptions={sortByLocalOptions}
        onSortByChange={setSortBy}
        perPageOptions={perPageLocalOptions}
        onPerPageChange={setPerPage}
      />

      <PaginatedGrid perPage={perPage} products={sortedProducts} />
    </div>
  );
};
