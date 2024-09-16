import style from './PaginationControls.module.scss';
import '../../../../styles/generals/buttons.scss';

import { useState } from 'react';

import cn from 'classnames';
import { range } from '../../../../utils/range';

type Props = {
  itemsCount: number;
  perPage: number;
  startPage?: number;
  onPageChange?: (page: number) => void;
};

export const PaginationControls = ({ itemsCount, perPage, startPage = 1, onPageChange }: Props) => {
  const [currentPage, setCurrentPage] = useState(startPage);

  const pagesCount = Math.ceil(itemsCount / perPage);
  const pagesRange = range(1, pagesCount + 1);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesCount;

  const selectPage = (page: number) => {
    setCurrentPage(page);

    if (onPageChange) {
      onPageChange(page);
    }
  };

  const selectPrevPage = () => {
    selectPage(currentPage - 1);
  };

  const selectNextPage = () => {
    selectPage(currentPage + 1);
  };

  return (
    <div className={cn(style.controls)}>
      <button
        className={cn('button-round', 'button-round--chevron', style.prev)}
        onClick={selectPrevPage}
        disabled={isFirstPage}
      />
      {pagesRange.map(page => (
        <button
          key={page}
          className={cn('button-round', { 'button-round--selected': page === currentPage })}
          onClick={() => selectPage(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={cn('button-round', 'button-round--chevron', style.next)}
        onClick={selectNextPage}
        disabled={isLastPage}
      />
    </div>
  );
};
