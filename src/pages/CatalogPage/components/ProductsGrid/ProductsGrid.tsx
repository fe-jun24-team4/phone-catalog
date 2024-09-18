import style from './ProductsGrid.module.scss';

import cn from 'classnames';

import { FilterControls } from '../FilterControls/FilterControls';
import { PaginationControls } from '../PaginationControls';
import { ProductsGridPage } from '../ProductsGridPage/ProductsGridPage';

import React from 'react';
import { useMemo, useState } from 'react';
import { perPageOptions, sortByOptions } from '../../../../utils/constants/dropdownOptions';
import { ProductShort as Product } from '../../../../types/Product';
import { sortProducts } from '../../../../features/sortProducts';

type Props = {
  products: Product[];
};

export const ProductsGrid = ({ products }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(perPageOptions.default[1].value);
  const [sortBy, setSortBy] = useState(sortByOptions.default[1].value);

  const pageStart = (currentPage - 1) * perPage;
  const pageEnd = currentPage * perPage;

  const sortedProducts = useMemo(() => sortProducts(products, sortBy), [products, sortBy]);

  return (
    <div className={cn(style.gridContainer)}>
      <FilterControls
        sortByOptions={sortByOptions}
        onSortByChange={setSortBy}
        perPageOptions={perPageOptions}
        onPerPageChange={setPerPage}
      />

      <div className={cn(style.paginatedGridContainer)}>
        <ProductsGridPage products={sortedProducts.slice(pageStart, pageEnd)} />

        <div className={style.paginationControlsContainer}>
          <PaginationControls
            itemsCount={sortedProducts.length}
            perPage={perPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};
