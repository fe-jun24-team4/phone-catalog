import React from 'react';
import { CatalogPage } from '../CatalogPage';
import { CatalogContextProvider } from '../CatalogPage/context/CatalogContext';

export const TabletsPage = () => {
  return (
    <CatalogContextProvider source="api/tablets">
      <CatalogPage title="Tablets" />
    </CatalogContextProvider>
  );
};
