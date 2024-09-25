import styles from './PaginateGrid.module.scss';

import React from 'react';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard';
import { PaginationControls } from './PaginationControls';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSearchParams } from 'react-router-dom';
import { updateSearchParams } from '../../utils/updateSearchParams';
import { PAGE } from '../../utils/constants/urlSearchParams';

type Props = {
  products: Product[];
  perPage: number;
};

export const PaginatedGrid = ({ products, perPage }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get(PAGE) ?? 1);

  const pages = Math.ceil(products.length / perPage);
  const pageStart = (currentPage - 1) * perPage;
  const pageEnd = currentPage * perPage;
  const productsOnPage = products.slice(pageStart, pageEnd);
  const fitsOnOnePage = products.length <= perPage;

  const handlePageChange = (page: number) => {
    scrollTo(0, 0);

    const newPageQuery = page === 1 ? null : `${page}`;

    setSearchParams(updateSearchParams(searchParams, { [PAGE]: newPageQuery }));
  };

  if (currentPage > pages) {
    handlePageChange(pages);
  }

  return (
    <div className={styles.container}>
      <ol className={styles.grid}>
        <TransitionGroup component={null}>
          {productsOnPage.map(product => (
            <CSSTransition
              key={product.id}
              timeout={500}
              classNames={{
                enter: styles.productEnter,
                enterActive: styles.productEnterActive,
                exit: styles.productExit,
                exitActive: styles.productExitActive,
              }}
            >
              <li className={styles.gridItem}>
                <ProductCard product={product} />
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ol>

      {!fitsOnOnePage && (
        <div className={styles.controlsContainer}>
          <PaginationControls
            pages={pages}
            selected={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};
