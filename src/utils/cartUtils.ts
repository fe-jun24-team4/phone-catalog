import { CartItem, CartState } from '../../src/types/Cart';

import data from '../api/phones.json';

export const getInitialCartState = (): CartState => {
  const localData = localStorage.getItem('cart');

  return localData
    ? JSON.parse(localData)
    : data.slice(0, 3).map((product, index) => ({ product, amount: index + 1 }));
};

export const addItemToCart = (prevCart: CartState, item: CartItem): CartState => {
  const existingItem = prevCart.find(cartItem => cartItem.id === item.id);

  if (existingItem) {
    return prevCart.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
        : cartItem,
    );
  }

  return [...prevCart, item];
};
