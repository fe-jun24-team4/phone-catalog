import React from 'react';
import { CatalogPage } from '../CatalogPage';
import { CatalogContextProvider } from '../CatalogPage/context/CatalogContext';

export const PhonesPage = () => {
  return (
    <CatalogContextProvider source="api/phones">
      <CatalogPage title="Mobile Phones" />
    </CatalogContextProvider>
  );
};
