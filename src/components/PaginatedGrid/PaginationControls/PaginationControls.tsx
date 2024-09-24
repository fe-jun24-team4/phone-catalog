import style from './PaginationControls.module.scss';
import cn from 'classnames';

import React from 'react';

import { range } from '../../../utils/range';
import { ButtonRounded } from '../../buttons';
import { Direction } from '../../../enums/Direction';

type Props = {
  selected: number;
  pages: number;
  onPageChange?: (page: number) => void;
};

export const PaginationControls = ({ pages, selected, onPageChange = () => {} }: Props) => {
  const pagesRange = range(1, pages + 1);
  const isFirstPage = selected === 1;
  const isLastPage = selected === pages;

  const selectPage = (page: number) => {
    onPageChange(page);
  };

  const selectPrevPage = () => {
    selectPage(selected - 1);
  };

  const selectNextPage = () => {
    selectPage(selected + 1);
  };

  return (
    <div className={cn(style.controls)}>
      <div className={style.prev}>
        <ButtonRounded rotate={Direction.left} onClick={selectPrevPage} disabled={isFirstPage} />
      </div>

      {pagesRange.map(page => (
        <ButtonRounded
          title={`${page}`}
          key={page}
          onClick={() => selectPage(page)}
          selected={page === selected}
        />
      ))}

      <div className={style.next}>
        <ButtonRounded rotate={Direction.right} onClick={selectNextPage} disabled={isLastPage} />
      </div>
    </div>
  );
};
