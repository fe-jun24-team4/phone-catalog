import styles from './FavouritesPage.module.scss';

import React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { TitleWithSubscript } from '../../components/text/TitleWithSubscript';
import { PaginatedGrid } from '../../components/PaginatedGrid';
import { useFavouritesContext } from './context/FavouritesContext';
import { useTranslation } from 'react-i18next';

export const FavouritesPage = () => {
  const { favourites } = useFavouritesContext();
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Breadcrumbs.View />

      <TitleWithSubscript
        title={t('pageTitles.favorite')}
        subscript={`${favourites.length} ${t('cart.items')}`}
      />

      <PaginatedGrid products={favourites} perPage={24} />
    </div>
  );
};
