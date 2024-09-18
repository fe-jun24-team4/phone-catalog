import React, { createContext, PropsWithChildren, useContext } from 'react';
import { ProductShort as Product } from '../../../types/Product';

import { useFetchData } from '../../../hooks/useFetch';
import { HOST } from '../../../utils/constants/host';

type State = {
  products: Product[];
};

const StateContext = createContext<State | null>(null);

type URL = string;

type Props = {
  source?: URL;
};

export const CatalogContextProvider = ({ source, children }: PropsWithChildren<Props>) => {
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
