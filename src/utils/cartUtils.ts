import { CartState } from '../../src/types/Cart';
import { OrderItem } from '../types/OrderItem';

import data from '../api/phones.json';

export const getInitialCartState = (): CartState => {
  const localData = localStorage.getItem('cart');

  return localData
    ? JSON.parse(localData)
    : data.slice(0, 3).map((product, index) => ({ product, amount: index + 1 }));
};

export const addItemToCart = (prevCart: CartState, item: OrderItem): CartState => {
  const existingItem = prevCart.find(cartItem => cartItem.product.id === item.product.id);

  if (existingItem) {
    return prevCart.map(cartItem =>
      cartItem.product.id === item.product.id
        ? { ...cartItem, quantity: cartItem.amount + item.amount }
        : cartItem,
    );
  }

  return [...prevCart, item];
};
