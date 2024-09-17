import { FC, useState } from 'react';
import styles from './DropdownButton.module.scss';
import React = require('react');

interface DropdownProps {
  description: string;
  options: string[];
  onChange: (option: string) => void;
}

export const Dropdown: FC<DropdownProps> = ({ description, options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    if (option !== selectedOption) {
      setSelectedOption(option);
      onChange(option);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.containerDropdown}>
      <label htmlFor="dropdown">{description}</label>
      <select id="dropdown" name="dropdown" onChange={handleChange}>
        {options.map(option => (
          <option key={option} value={option} onClick={() => handleSelect(option)}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
