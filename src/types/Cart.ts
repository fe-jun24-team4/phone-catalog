import { OrderItem } from './OrderItem';

export enum CartActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  UPDATE_QUANTITY = 'UPDATE_QUANTITY',
  CLEAR_CART = 'CLEAR_CART',
  SET_CART = 'SET_CART',
}

export interface CartItem {
  id: string;
  name: string;
  quantity: number;
}

export type CartState = OrderItem[];

export interface CartContextValue {
  cart: CartState;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  replaceCart: (cart: CartItem[]) => void;

  isCheckoutVisible: boolean;
  setIsCheckoutVisible: (state: boolean) => void;
}
