import style from './FilterControls.module.scss';
import cn from 'classnames';

import { DropdownButton } from '../../../common/DropdownButton/DropdownButton';
import { Option, Options } from '../../../../types/Option';

enum A {
  A,
  B,
  C,
}

type Props = {
  sortByOptions: A;
  onSortByChange?: (option: A) => void;
  perPageOptions: { [key: string]: number };
  onPerPageChange?: (option: number) => void;
};

export const FilterControls = ({
  sortByOptions,
  onSortByChange = () => {},
  perPageOptions,
  onPerPageChange = () => {},
}: Props) => {
  return (
    <div className={cn(style.container)}>
      <DropdownButton options={sortByOptions} onOptionChange={onSortByChange} />
      <DropdownButton options={perPageOptions} onOptionChange={onPerPageChange} />
    </div>
  );
};
