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

  return (
    <div className={styles.container}>
      <Breadcrumbs.View />

      <TitleWithSubscript
        title={t('pageTitles.favorite')}
        subscript={`${favourites.length} ${t('cart.items')}`}
      />

      <TransitionGroup component={null}>
        <PaginatedGrid products={favourites} perPage={24} />
      </TransitionGroup>
      {favourites.length === 0 ? (
        <EmptyMessage
          iconClass={`${styles.iconHeart} icon-heart-filled`}
          message={t('favourites.emptyMessage')}
        />
      ) : (
        <TransitionGroup component={null}>
          <PaginatedGrid products={favourites} perPage={24} />
        </TransitionGroup>
      )}
    </div>
  );
};
