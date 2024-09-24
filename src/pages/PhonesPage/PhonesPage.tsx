import React from 'react';
import { CatalogPage } from '../CatalogPage';
import { CatalogContextProvider } from '../CatalogPage/context/CatalogContext';
import { useTranslation } from 'react-i18next';

export const PhonesPage = () => {
  const { t } = useTranslation();

  return (
    <CatalogContextProvider category="phones">
      <CatalogPage title={t('pageTitles.phones')} />
    </CatalogContextProvider>
  );
};
