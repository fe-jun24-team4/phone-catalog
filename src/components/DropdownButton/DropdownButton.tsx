import style from './DropdownButton.module.scss';

import cn from 'classnames';

type Props<T> = {
  options: { [key: string]: T };
  onOptionChange?: (option: T) => void;
};

export const DropdownButton = <T,>({}: Props<T>) => {
  return <div className={cn(style.dropdownButton)}>Dropdown placeholder</div>;
};
