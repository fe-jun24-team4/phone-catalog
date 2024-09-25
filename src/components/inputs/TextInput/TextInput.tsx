import styles from './TextInput.module.scss';
import cn from 'classnames';

import { ChangeEvent, useRef, useState } from 'react';
import React from 'react';
import { Validator } from '../../../types/Validator';

type TextInputProps = {
  label?: string;
  validator?: Validator;
  email?: boolean;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

export const TextInput = ({
  label = '',
  validator = new Validator(() => null, 0),
  email,
  placeholder,
  defaultValue = '',
  onChange = () => {},
}: TextInputProps) => {
  const [value, setValue] = useState(defaultValue);
  const ref = useRef<HTMLInputElement>(null);

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    validator.setValue(event.target.value);
    onChange(event.target.value);
  };

  const focusInput = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return (
    <div
      className={cn(styles.container, { [styles.isError]: validator.isError() })}
      onClick={focusInput}
    >
      {label && <label className={styles.label}>{label}</label>}

      <input
        type={email ? 'email' : 'text'}
        ref={ref}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={handleValueChange}
        onSubmit={event => event.preventDefault()}
        onBlur={() => onChange(value)}
      />

      <span className={styles.error}>{validator.error}</span>
    </div>
  );
};
