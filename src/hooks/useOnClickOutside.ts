import { MutableRefObject, RefObject, useEffect } from 'react';

export function useOnClickOutside<T extends HTMLElement>(
  onClickOutside: () => void,
  ref: MutableRefObject<T> | RefObject<T>,
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [onClickOutside, ref]);
}
