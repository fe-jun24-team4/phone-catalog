import React, { createContext, PropsWithChildren, useContext } from 'react';
import { Product } from '../../../types/Product';

import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { FAVOURITES } from '../../../utils/constants/localStorageKeys';

type State = {
  favourites: Product[];
  setFavourites: (favourites: Product[]) => void;
  clearFavourites: () => void;
  addFavourite: (item: Product) => void;
  removeFavourite: (item: Product) => void;
};

const StateContext = createContext<State | null>(null);

import data from '../../../api/phones.json';

export const FavouritesContextProvider = ({ children }: PropsWithChildren) => {
  const { read, write } = useLocalStorage<Product[]>(FAVOURITES, data.slice(0, 3));

  const favourites: Product[] = read();

  const contextValue: State = {
    favourites,
    setFavourites: write,
    clearFavourites: () => write([]),
    addFavourite: item => write([...favourites, item]),
    removeFavourite: item => write(favourites.filter(fav => fav.id !== item.id)),
  };

  return <StateContext.Provider value={contextValue}>{children}</StateContext.Provider>;
};

export const useFavouritesContext = () => {
  const state = useContext(StateContext);

  if (!state) {
    throw new Error('FavouritesContext is not provided!');
  }

  return state;
};
