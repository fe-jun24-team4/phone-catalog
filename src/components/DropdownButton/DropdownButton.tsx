import styles from './DropdownButton.module.scss';
import cn from 'classnames';

import { useEffect, useRef, useState } from 'react';
import { Options } from '../../types/Option';
import React from 'react';

interface DropdownProps<T> {
  options: Options<T>;
  onChange: (value: T) => void;
}

export const DropdownButton = <T,>({ options, onChange }: DropdownProps<T>) => {
  const description = options.label;
  const [selectedOption, setSelectedOption] = useState(options.default[0]);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isOpen && ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.addEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, ref]);

  const handleOptionSelect = (option: string) => {
    if (option !== selectedOption) {
      setSelectedOption(option);
      onChange(options.items[option].value);
    }

    setIsOpen(false);
  };

  return (
    <div ref={ref} className={cn(styles.dropdown, { [styles.isOpen]: isOpen })}>
      <p className={styles.description}>{description}</p>

      <button className={styles.trigger} onClick={() => setIsOpen(!isOpen)}>
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
    </div>
  );
};
