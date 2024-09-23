import { OrderRecord } from '../types/OrderItem';

export const addItemToCart = (cart: OrderRecord[], record: OrderRecord): OrderRecord[] => {
  const existingItem = cart.find(cartRecord => cartRecord.productId === record.productId);

  if (existingItem) {
    return cart.map(cartRecord =>
      cartRecord.productId === record.productId
        ? { ...cartRecord, quantity: cartRecord.amount + record.amount }
        : cartRecord,
    );
  }

  return [...cart, record];
};

export const removeItemFromCart = (cart: OrderRecord[], id: string): OrderRecord[] => {
  return cart.filter(record => record.productId !== id);
};

export const updateQuantityInCart = (cart: OrderRecord[], record: OrderRecord): OrderRecord[] => {
  return cart.map(cartRecord => (cartRecord.productId === record.productId ? record : cartRecord));
};
