import { FC } from 'react';
import styles from '../styles/DropdownButton.module.scss';

interface DropdownProps {
  description: string;
  options: string[];
  onChange: (option: string) => void;
}

export const Dropdown: FC<DropdownProps> = ({}) => {
  // const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // const handleSelect = (option: string) => {
  //   if (option !== selectedOption) {
  //     setSelectedOption(option);
  //     onChange(option);
  //   }
  // };

  // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   onChange(event.target.value);
  // };

  return (
    <div className={styles.containerDropdown}>
      {/* <label htmlFor="dropdown">{description}</label>
      <select id="dropdown" name="dropdown" onChange={handleChange}>
        {options.map(option => (
          <option key={option} value={option} onClick={() => handleSelect(option)}>
            {option}
          </option>
        ))}
      </select> */}
      <label htmlFor="dropdown" className={styles.text}>
        Sort by
      </label>
      <select id="dropdown" name="dropdown" className={styles.button}>
        <option value="value" className={styles.option}>
          Newest
        </option>
      </select>
    </div>
  );
};
