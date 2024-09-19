import { CheckoutModal } from './components/CheckoutModal/CheckoutModal';
import { ButtonPrimary } from '../../components/buttons';
import { CartContextProvider, useCartContext } from './context/CartContext';
import React from 'react';

const CartPageWithoutContext = () => {
  const { setIsCheckoutVisible } = useCartContext();

  return (
    <>
      <CheckoutModal />
      <ButtonPrimary title="Checkout" onClick={() => setIsCheckoutVisible(true)} />
    </>
  );
};

export const CartPage = () => {
  return (
    <CartContextProvider>
      <CartPageWithoutContext />
    </CartContextProvider>
  );
};
