import { CartItem, CartState } from '../../src/types/Cart';

export const getInitialCartState = (): CartState => {
  const localData = localStorage.getItem('cart');

  return localData ? JSON.parse(localData) : [];
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
