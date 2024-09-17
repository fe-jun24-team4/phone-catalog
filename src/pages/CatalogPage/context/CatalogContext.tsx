import React from 'react';
import { createContext, PropsWithChildren, useContext } from 'react';
import { ProductShort as Product } from '../../../types/Product';

import data from '../../../api/products.json';

type State = {
  products: Product[];
};

const StateContext = createContext<State | null>(null);

type URL = string;

type Props = {
  source: URL;
};

export const CatalogContextProvider = ({ children }: PropsWithChildren<Props>) => {
  const state: State = {
    products: data,
  };

  return <StateContext.Provider value={state}>{children}</StateContext.Provider>;
};

export const useCatalogContext = () => {
  const state = useContext(StateContext);

  if (!state) {
    throw new Error('CatalogContext is not provided!');
  }

  return state;
};
