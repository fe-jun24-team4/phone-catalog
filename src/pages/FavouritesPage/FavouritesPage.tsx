import styles from './FavouritesPage.module.scss';

import React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { TitleWithSubscript } from '../../components/text/TitleWithSubscript';
import { PaginatedGrid } from '../../components/PaginatedGrid';
import { useFavouritesContext } from './context/FavouritesContext';

export const FavouritesPage = () => {
  const { favourites } = useFavouritesContext();

  return (
    <div className={styles.container}>
      <Breadcrumbs.View />

      <TitleWithSubscript title="Favourites" subscript={`${favourites.length} items`} />

      <PaginatedGrid products={favourites} perPage={24} />
    </div>
  );
};
