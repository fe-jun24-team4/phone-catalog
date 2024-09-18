import React, { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react';
import { CartItem, CartContextValue } from '../../../types/Cart';
import { getInitialCartState, addItemToCart } from '../../../utils/cartUtils';

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: PropsWithChildren<{}>) => {
  const [cart, setCart] = useState<CartItem[]>(getInitialCartState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (item: CartItem) => {
    setCart(prevCart => addItemToCart(prevCart, item));
  };

  const removeItem = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart(prevCart =>
      prevCart
        .map(item => (item.id === id ? { ...item, quantity } : item))
        .filter(item => item.quantity > 0),
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const replaceCart = (newCart: CartItem[]) => {
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        replaceCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};
