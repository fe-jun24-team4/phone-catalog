import styles from './CreditCardInput.module.scss';
import cn from 'classnames';

import React, { useEffect, useRef, useState } from 'react';
import { range } from '../../../utils/range';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';

type CreditCardInputProps = {
  label?: string;
  error?: string;
  onChange?: (value: string) => void;
};

export const CreditCardInput = ({
  label = '',
  error = '',
  onChange = () => {},
}: CreditCardInputProps) => {
  const [cardNumber, setCardNumber] = useState(new Array(16).fill('X'));
  const [isFocused, setIsFocused] = useState(false);
  const [cursorPosition, setCursorPosition] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  const focusInput = () => {
    setIsFocused(true);

    if (cursorPosition < 15) {
      const firstFreeIndex = cardNumber.indexOf('X') ?? 16;

      setCursorPosition(firstFreeIndex);
    } else {
      setCursorPosition(15);
    }
  };

  const blurInput = () => setIsFocused(false);

  useOnClickOutside(blurInput, ref);

  useEffect(() => {
    const setCardDigit = (value: string) => {
      setCardNumber(prevNumber => {
        const number = [...prevNumber];

        number[cursorPosition] = value;

        return number;
      });

      if (cursorPosition < 15) {
        setCursorPosition(prev => prev + 1);
      } else {
        setIsFocused(false);
      }
    };

    const clearCardDigit = () => {
      setCardNumber(prevNumber => {
        const number = [...prevNumber];

        number[cursorPosition] = 'X';

        return number;
      });

      if (cursorPosition > 0) {
        setCursorPosition(prev => prev - 1);
      }
    };

    const handleKeyboardInput = (event: KeyboardEvent) => {
      const { key } = event;

      if ('0123456789'.includes(key)) {
        setCardDigit(key);
      } else if (key === 'Backspace') {
        clearCardDigit();
      }
    };

    if (isFocused && cursorPosition < 16) {
      addEventListener('keydown', handleKeyboardInput);
    }

    return () => {
      if (isFocused && cursorPosition < 16) {
        removeEventListener('keydown', handleKeyboardInput);
      }
    };
  }, [isFocused, cursorPosition]);

  useEffect(() => {
    onChange(cardNumber.join(''));
  }, [cardNumber, onChange]);

  return (
    <div
      ref={ref}
      className={cn(styles.container, { [styles.isError]: error })}
      onClick={focusInput}
    >
      {label && <label className={styles.label}>{label}</label>}

      <div
        tabIndex={0}
        className={cn(styles.digits, { [styles.isFocused]: isFocused })}
        onFocus={focusInput}
        onBlur={blurInput}
      >
        <div className={styles.quartet}>
          {range(0, 4).map(index => (
            <div
              key={index}
              className={cn(styles.digit, {
                [styles.withCursor]: index === cursorPosition && isFocused,
                [styles.isEntered]: cardNumber[index] !== 'X',
              })}
            >
              {cardNumber[index]}
            </div>
          ))}
        </div>

        <div className={styles.digit}>-</div>

        <div className={styles.quartet}>
          {range(4, 8).map(index => (
            <div
              key={index}
              className={cn(styles.digit, {
                [styles.withCursor]: index === cursorPosition && isFocused,
                [styles.isEntered]: cardNumber[index] !== 'X',
              })}
            >
              {cardNumber[index]}
            </div>
          ))}
        </div>

        <div className={styles.digit}>-</div>

        <div className={styles.quartet}>
          {range(8, 12).map(index => (
            <div
              key={index}
              className={cn(styles.digit, {
                [styles.withCursor]: index === cursorPosition && isFocused,
                [styles.isEntered]: cardNumber[index] !== 'X',
              })}
            >
              {cardNumber[index]}
            </div>
          ))}
        </div>

        <div className={styles.digit}>-</div>

        <div className={styles.quartet}>
          {range(12, 16).map(index => (
            <div
              key={index}
              className={cn(styles.digit, {
                [styles.withCursor]: index === cursorPosition && isFocused,
                [styles.isEntered]: cardNumber[index] !== 'X',
              })}
            >
              {cardNumber[index]}
            </div>
          ))}
        </div>
      </div>

      <span className={styles.error}>{error}</span>
    </div>
  );
};
