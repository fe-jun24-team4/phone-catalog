import styles from './FavouritesPage.module.scss';

import React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { TitleWithSubscript } from '../../components/text/TitleWithSubscript';
import { PaginatedGrid } from '../../components/PaginatedGrid';
import { useFavouritesContext } from './context/FavouritesContext';
import { useTranslation } from 'react-i18next';
import { TransitionGroup } from 'react-transition-group';
import { EmptyMessage } from '../../components/EmptyMessage';

export const FavouritesPage = () => {
  const { favourites } = useFavouritesContext();
  const { t } = useTranslation();

  const subscriptContent = () => {
    if (favourites.length === 1) {
      return `${favourites.length} ${t('cart.item')}`;
    } else if (favourites.length > 1) {
      return `${favourites.length} ${t('cart.items')}`;
    }

    return '';
  };

  return (
    <div className={styles.container}>
      <Breadcrumbs.View />

      <TitleWithSubscript title={t('pageTitles.favorite')} subscript={subscriptContent()} />

      {!favourites.length ? (
          <EmptyMessage iconClass={`icon-heart-filled`} message={t('favourites.emptyMessage')} />
      ) : (
        <TransitionGroup component={null}>
          <PaginatedGrid products={favourites} perPage={24} />
        </TransitionGroup>
      )}
    </div>
  );
};
