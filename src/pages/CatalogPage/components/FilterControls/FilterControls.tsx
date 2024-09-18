import style from './FilterControls.module.scss';

import React from 'react';

import { Options } from '../../../../types/Option';
import { SortBy } from '../../../../enums/sortBy';
import { DropdownButton } from '../../../../components/DropdownButton';

type Props = {
  sortByOptions: Options<SortBy>;
  onSortByChange?: (value: SortBy) => void;
  perPageOptions: Options<number>;
  onPerPageChange?: (value: number) => void;
};

export const FilterControls = ({
  sortByOptions,
  onSortByChange = () => {},
  perPageOptions,
  onPerPageChange = () => {},
}: Props) => {
  return (
    <div className={style.container}>
      <div className={style.dropdowns}>
        <DropdownButton options={sortByOptions} onChange={onSortByChange} />
        <DropdownButton options={perPageOptions} onChange={onPerPageChange} />
      </div>
    </div>
  );
};
