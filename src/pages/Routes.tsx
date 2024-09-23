import React from 'react';
import { HashRouter as Router, Route, Routes as RouterRoutes } from 'react-router-dom';
import { RouteNames } from '../enums/RouteNames';

import { Breadcrumbs } from '../components/Breadcrumbs';
import { useTranslation } from 'react-i18next';

import { App } from '../components/App';
import { PhonesPage } from './PhonesPage';
import { TabletsPage } from './TabletsPage';
import { AccessoriesPage } from './AccessoriesPage';
import { FavouritesPage } from './FavouritesPage';
import { CartPage } from './CartPage/CartPage';
import { NotFoundPage } from './NotFoundPage';

export const Routes = () => {
  const { t } = useTranslation();

  return (
    <Router>
      <RouterRoutes>
        <Route
          path={RouteNames.home}
          element={
            <Breadcrumbs.Checkpoint title={t('header.home')}>
              <App />
            </Breadcrumbs.Checkpoint>
          }
        >
          <Route
            path={RouteNames.phones}
            element={
              <Breadcrumbs.Checkpoint title={t('header.phones')}>
                <PhonesPage />
              </Breadcrumbs.Checkpoint>
            }
          />
          <Route
            path={RouteNames.tablets}
            element={
              <Breadcrumbs.Checkpoint title={t('header.tablets')}>
                <TabletsPage />
              </Breadcrumbs.Checkpoint>
            }
          />
          <Route
            path={RouteNames.accessories}
            element={
              <Breadcrumbs.Checkpoint title={t('header.accessories')}>
                <AccessoriesPage />
              </Breadcrumbs.Checkpoint>
            }
          />
          <Route
            path={RouteNames.favorites}
            element={
              <Breadcrumbs.Checkpoint title={t('pageTitles.favorite')}>
                <FavouritesPage />
              </Breadcrumbs.Checkpoint>
            }
          />
          <Route
            path={RouteNames.cart}
            element={
              <Breadcrumbs.Checkpoint title={t('pageTitles.cart')}>
                <CartPage />
              </Breadcrumbs.Checkpoint>
            }
          />
        </Route>
        <Route path={RouteNames.pageNotFound} element={<NotFoundPage />} />
      </RouterRoutes>
    </Router>
  );
};
