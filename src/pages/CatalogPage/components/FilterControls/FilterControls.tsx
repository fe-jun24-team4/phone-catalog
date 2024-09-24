import style from './FilterControls.module.scss';

import React from 'react';

import { Options } from '../../../../types/Option';
import { SortBy } from '../../../../enums/sortBy';
import { Input } from '../../../../components/inputs';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <div className={style.dropdowns}>
        <Input.Dropdown
          label={t('catalog.sortBy.title')}
          options={sortByOptions}
          onChange={onSortByChange}
        />
        <Input.Dropdown
          label={t('catalog.itemsOnPage')}
          options={perPageOptions}
          onChange={onPerPageChange}
        />
      </div>
    </div>
  );
};
