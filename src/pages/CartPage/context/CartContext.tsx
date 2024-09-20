import React, { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react';
import { CartContextValue } from '../../../types/Cart';
import { getInitialCartState, addItemToCart } from '../../../utils/cartUtils';
import { OrderItem } from '../../../types/OrderItem';

const CartContext = createContext<CartContextValue | null>(null);

export const CartContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [cart, setCart] = useState<OrderItem[]>(getInitialCartState());
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (item: OrderItem) => {
    setCart(prevCart => addItemToCart(prevCart, item));
  };

  const removeItem = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== id));
  };

  const updateQuantity = (id: string, amount: number) => {
    setCart(prevCart =>
      prevCart
        .map(item => (item.product.id === id ? { ...item, amount } : item))
        .filter(item => item.amount > 0),
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const replaceCart = (newCart: OrderItem[]) => {
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

        isCheckoutVisible,
        setIsCheckoutVisible,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = (): CartContextValue => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartContextProvider');
  }

  return context;
};
