import React from 'react';
import { CatalogPage } from '../CatalogPage';
import { CatalogContextProvider } from '../CatalogPage/context/CatalogContext';
import { useTranslation } from 'react-i18next';

export const TabletsPage = () => {
  const { t } = useTranslation();

  return (
    <CatalogContextProvider category="tablets">
      <CatalogPage title={t('pageTitles.tablets')} />
    </CatalogContextProvider>
  );
};
