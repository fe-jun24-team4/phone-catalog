import { useState } from 'react';

export const useHandleMenuAction = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuAction = () => {
    if (isMenuActive) {
      setIsMenuActive(false);
    }
  };

  return { isMenuActive, setIsMenuActive, handleMenuAction };
};
