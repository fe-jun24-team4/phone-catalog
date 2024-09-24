import React, { createContext, PropsWithChildren, useContext } from 'react';
import { Product } from '../../../types/Product';

import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { FAVOURITES } from '../../../utils/constants/localStorageKeys';
import { useFetchData } from '../../../hooks/useFetch';
import { HOST } from '../../../utils/constants/host';

type State = {
  favourites: Product[];
  setFavourites: (favourites: string[]) => void;
  clearFavourites: () => void;
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
};

const StateContext = createContext<State | null>(null);

export const FavouritesContextProvider = ({ children }: PropsWithChildren) => {
  const { read, write } = useLocalStorage<string[]>(FAVOURITES, []);

  const favouriteIds = read();
  const favourites = useFetchData<Product>(`${HOST}/api/products.json`).data.filter(({ itemId }) =>
    favouriteIds.includes(itemId),
  );

  const contextValue: State = {
    favourites,
    setFavourites: () => {},
    clearFavourites: () => write([]),
    addFavourite: id => write([...favouriteIds, id]),
    removeFavourite: id => write(favouriteIds.filter(fav => fav !== id)),
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
