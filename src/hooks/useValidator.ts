import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';

export function useValidator(validator: (str: string) => string, wait: number) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const validateDebounced = debounce(() => setError(validator(value)), wait);

  useEffect(() => {
    validateDebounced();
  }, [value, validateDebounced]);

  return {
    value,
    error,
    setValue,
  };
}
