import { useEffect, useState } from 'react';

type LocalStorageAccessor<T> = {
  read: () => T;
  write: (value: T) => void;
};

function read<T>(key: string): T | null {
  const jsonValue = localStorage.getItem(key);

  return jsonValue ? JSON.parse(jsonValue) : null;
}

function write<T>(key: string, value: T) {
  const jsonValue = JSON.stringify(value);

  localStorage.setItem(key, jsonValue);
}

export function useLocalStorage<T>(key: string, initialValue: T): LocalStorageAccessor<T> {
  const [cache, setCache] = useState<T>(initialValue);

  useEffect(() => {
    const value = read<T>(key);

    if (value) {
      setCache(value);
    }
  }, [key]);

  return {
    read: () => cache,
    write: value => {
      setCache(value);
      write(key, value);
    },
  };
}
