import React from 'react';
import { Outlet } from 'react-router-dom';
import { CatalogPageWithContext } from '../CatalogPage';

export const PhonesPage = () => {
  return (
    <>
      <Outlet />
      <CatalogPageWithContext title="Mobile Phones" source="api/phones.json" />
    </>
  );
};
