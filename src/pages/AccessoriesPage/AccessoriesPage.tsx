import React from 'react';
import { CatalogPage } from '../CatalogPage';
import { CatalogContextProvider } from '../CatalogPage/context/CatalogContext';
import { useTranslation } from 'react-i18next';

export const AccessoriesPage = () => {
  const { t } = useTranslation();

  return (
    <CatalogContextProvider category="accessories">
      <CatalogPage title={t('pageTitles.accessories')} />
    </CatalogContextProvider>
  );
};
