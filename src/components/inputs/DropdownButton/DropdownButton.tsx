import styles from './DropdownButton.module.scss';
import cn from 'classnames';

import { useRef, useState } from 'react';
import { Options } from '../../../types/Option';
import React from 'react';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';

type DropdownProps<T> = {
  label?: string;
  error?: string;
  options: Options<T>;
  onChange?: (value: T) => void;
};

export const DropdownButton = <T,>({
  label,
  error,
  options,
  onChange = () => {},
}: DropdownProps<T>) => {
  const [selectedOption, setSelectedOption] = useState(options.default[0]);
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(() => setIsOpen(false), ref);

  const handleOptionSelect = (option: string) => {
    if (option !== selectedOption) {
      setSelectedOption(option);
      onChange(options.items[option].value);
    }

    setIsOpen(false);
  };

  return (
    <div ref={ref} className={cn(styles.dropdown, { [styles.isOpen]: isOpen })}>
      {label && <p className={styles.label}>{label}</p>}

      <button type="button" className={styles.trigger} onClick={() => setIsOpen(!isOpen)}>
        <p className={styles.selectedOption}>{selectedOption}</p>
        <div className={cn('icon-chevron-up', styles.chevron)} />
      </button>

      <div className={styles.menu}>
        {options.visible.map(([option]) => (
          <div key={option} className={styles.option} onClick={() => handleOptionSelect(option)}>
            {option}
          </div>
        ))}
      </div>

      <span className={styles.error}>{error}</span>
    </div>
  );
};
