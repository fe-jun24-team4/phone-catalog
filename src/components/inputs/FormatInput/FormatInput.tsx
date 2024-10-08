import styles from './FormatImput.module.scss';
import cn from 'classnames';

import React, { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';

type Props = {
  format: string;
  placeholder: string;
  charset?: RegExp;
  label?: string;
  error?: string;
  onChange?: (value: string) => void;
};

type CharData = [string, boolean, boolean];

export const FormatInput = ({
  format,
  placeholder,
  charset = /^.$/,
  label,
  error = '',
  onChange = () => {},
}: Props) => {
  const formatArr: CharData[] = format.split('').map(char => {
    const isInput = char === '.';
    const value = isInput ? placeholder : char;

    return [value, isInput, false];
  });

  const [data, setData] = useState<CharData[]>(formatArr);
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const firstNotEnteredIndex = isFocused
    ? data.findIndex(([_, isInput, isEntered]) => isInput && !isEntered)
    : -1;

  const lastEnteredIndex = isFocused
    ? data.findLastIndex(([_, isInput, isEntered]) => isInput && isEntered)
    : -1;

  const handleValueChange = (finalData: CharData[]) => {
    const joinedData = finalData.map(([char]) => char).join('');

    onChange(joinedData);
  };

  useEffect(() => {
    handleValueChange(data);
  }, []);

  const focusInput = () => {
    if (!isFocused) {
      setIsFocused(true);
    }
  };

  const blurInput = () => {
    if (isFocused) {
      setIsFocused(false);

      handleValueChange(data);
    }
  };

  useOnClickOutside(blurInput, ref);

  const handleKeydown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = event;

    const changePromise = new Promise<typeof data>((resolve, reject) => {
      if (key.match(charset)) {
        setData(prev => {
          const next = [...prev];

          if (firstNotEnteredIndex >= 0) {
            next.splice(firstNotEnteredIndex, 1, [key, true, true]);
          }

          resolve(next);

          return next;
        });
      } else if (key === 'Backspace') {
        setData(prev => {
          const next = [...prev];

          if (lastEnteredIndex >= 0) {
            next.splice(lastEnteredIndex, 1, [placeholder, true, false]);
          }

          resolve(next);

          return next;
        });
      } else {
        reject();
      }
    });

    changePromise.then(handleValueChange);
  };

  return (
    <div
      ref={ref}
      className={cn(styles.container, { [styles.isError]: error })}
      onClick={focusInput}
    >
      {label && (
        <label className={styles.label}>
          {label}
          <input
            type="tel"
            className={styles.fakeInput}
            onFocus={focusInput}
            onBlur={blurInput}
            onKeyDown={handleKeydown}
          />
        </label>
      )}

      <div className={cn(styles.chars, { [styles.isFocused]: isFocused })}>
        {[...data].map(([char, _, isEntered], index) => (
          <span
            key={index}
            className={cn(styles.char, {
              [styles.isCursor]: index === firstNotEnteredIndex,
              [styles.isEntered]: isEntered,
            })}
          >
            {char}
          </span>
        ))}
      </div>

      <span className={styles.error}>{error}</span>
    </div>
  );
};
