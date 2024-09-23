import React, { createContext, useContext, useState, PropsWithChildren } from 'react';
import { OrderItem, OrderRecord } from '../../../types/OrderItem';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { CART } from '../../../utils/constants/localStorageKeys';
import { addItemToCart, removeItemFromCart, updateQuantityInCart } from '../../../utils/cartUtils';
import { useFetchData } from '../../../hooks/useFetch';
import { Product } from '../../../types/Product';
import { HOST } from '../../../utils/constants/host';

type CartContextValue = {
  cart: OrderItem[];
  addItem: (record: OrderRecord) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  replaceCart: (cart: OrderRecord[]) => void;

  isCheckoutVisible: boolean;
  setIsCheckoutVisible: (state: boolean) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export const CartContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

  const { read, write } = useLocalStorage<OrderRecord[]>(CART, []);
  const cartRecords = read();
  const cartProductIds = cartRecords.map(({ productId }) => productId);

  const { data: products } = useFetchData<Product>(`${HOST}/api/products.json`);
  const productsInCart = products.filter(({ itemId }) => cartProductIds.includes(itemId));
  const orderItems = productsInCart.map<OrderItem>(product => ({
    product,
    amount: cartRecords.find(record => record.productId === product.itemId)!.amount,
  }));

  const addItem = (record: OrderRecord) => {
    write(addItemToCart(cartRecords, record));
  };

  const removeItem = (id: string) => {
    write(removeItemFromCart(cartRecords, id));
  };

  const updateQuantity = (id: string, amount: number) => {
    write(updateQuantityInCart(cartRecords, { productId: id, amount }));
  };

  const clearCart = () => {
    write([]);
  };

  const replaceCart = (newCart: OrderRecord[]) => {
    write(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart: orderItems,
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
