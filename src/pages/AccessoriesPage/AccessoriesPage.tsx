import React from 'react';
import { CatalogPage } from '../CatalogPage';
import { CatalogContextProvider } from '../CatalogPage/context/CatalogContext';

export const AccessoriesPage = () => {
  return (
    <CatalogContextProvider source="api/accessories">
      <CatalogPage title="Accessories" />
    </CatalogContextProvider>
  );
};
