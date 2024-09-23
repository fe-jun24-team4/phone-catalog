import React, { createContext, PropsWithChildren, useContext, useMemo } from 'react';
import { Product } from '../../../types/Product';

import { useFetchData } from '../../../hooks/useFetch';
import { HOST } from '../../../utils/constants/host';
import { Category } from '../../../types/Category';

type State = {
  products: Product[];
};

const StateContext = createContext<State | null>(null);

type CatalogContextProviderProps = {
  category: Category;
};

export const CatalogContextProvider = ({
  category,
  children,
}: PropsWithChildren<CatalogContextProviderProps>) => {
  const { data: products } = useFetchData<Product>(`${HOST}/api/products.json`);

  const productsInCategory = useMemo(
    () => products.filter(product => product.category === category),
    [category, products],
  );

  const contextValue = {
    products: productsInCategory,
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
