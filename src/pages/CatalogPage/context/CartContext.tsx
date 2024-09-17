import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  PropsWithChildren,
  Dispatch,
} from 'react';

enum CartActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  UPDATE_QUANTITY = 'UPDATE_QUANTITY',
  CLEAR_CART = 'CLEAR_CART',
  SET_CART = 'SET_CART',
}

interface CartItem {
  id: string;
  name: string;
  quantity: number;
}

type CartState = CartItem[];

interface AddItemAction {
  type: CartActionTypes.ADD_ITEM;
  payload: CartItem;
}

interface RemoveItemAction {
  type: CartActionTypes.REMOVE_ITEM;
  payload: string;
}

interface UpdateQuantityAction {
  type: CartActionTypes.UPDATE_QUANTITY;
  payload: { id: string; quantity: number };
}

interface ClearCartAction {
  type: CartActionTypes.CLEAR_CART;
}

interface SetCartAction {
  type: CartActionTypes.SET_CART;
  payload: CartState;
}

type CartAction =
  | AddItemAction
  | RemoveItemAction
  | UpdateQuantityAction
  | ClearCartAction
  | SetCartAction;

interface CartContextValue {
  cart: CartState;
  dispatch: Dispatch<CartAction>;
}

const CartContext = createContext<CartContextValue | null>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      const existingItem = state.find(item => item.id === action.payload.id);

      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item,
        );
      }

      return [...state, action.payload];

    case CartActionTypes.REMOVE_ITEM:
      return state.filter(item => item.id !== action.payload);

    case CartActionTypes.UPDATE_QUANTITY:
      return state
        .map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item,
        )
        .filter(item => item.quantity > 0);

    case CartActionTypes.CLEAR_CART:
      return [];

    case CartActionTypes.SET_CART:
      return action.payload;

    default:
      return state;
  }
};

export const CartProvider = ({ children }: PropsWithChildren<{}>) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem('cart');

    return localData ? (JSON.parse(localData) as CartState) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};
