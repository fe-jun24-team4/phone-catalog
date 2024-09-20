import React, { createContext, PropsWithChildren, useContext } from 'react';
import { Product } from '../../../types/Product';

import { useFetchData } from '../../../hooks/useFetch';
import { HOST } from '../../../utils/constants/host';

type State = {
  products: Product[];
};

const StateContext = createContext<State | null>(null);

type CatalogContextProviderProps = {
  source: string;
};

export const CatalogContextProvider = ({
  source,
  children,
}: PropsWithChildren<CatalogContextProviderProps>) => {
  const { data } = useFetchData(`${HOST}/${source}.json`);

  const contextValue = {
    products: data as Product[],
  };

  return <StateContext.Provider value={contextValue}>{children}</StateContext.Provider>;
};

export const useCatalogContext = () => {
  const state = useContext(StateContext);

  if (!state) {
    throw new Error('CatalogContext is not provided!');
  }

  return state;
};
