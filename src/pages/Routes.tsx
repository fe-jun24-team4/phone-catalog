import React from 'react';
import { HashRouter as Router, Route, Routes as RouterRoutes } from 'react-router-dom';
import { RouteNames } from '../enums/RouteNames';

import { Breadcrumbs } from '../components/Breadcrumbs';

import { App } from '../components/App';
import { HomePage } from './HomePage/HomePage';
import { PhonesPage } from './PhonesPage';
import { TabletsPage } from './TabletsPage';
import { AccessoriesPage } from './AccessoriesPage';
import { FavouritesPage } from './FavouritesPage';
import { CartPage } from './CartPage/CartPage';
import { NotFoundPage } from './NotFoundPage';

export const Routes = () => {
  return (
    <Router>
      <RouterRoutes>
        <Route
          path={RouteNames.home}
          element={
            <Breadcrumbs.Checkpoint title="Home">
              <App />
            </Breadcrumbs.Checkpoint>
          }
        >
          <Route index element={<HomePage />} />
          <Route
            path={RouteNames.phones}
            element={
              <Breadcrumbs.Checkpoint title="Phones">
                <PhonesPage />
              </Breadcrumbs.Checkpoint>
            }
          />
          <Route
            path={RouteNames.tablets}
            element={
              <Breadcrumbs.Checkpoint title="Tablets">
                <TabletsPage />
              </Breadcrumbs.Checkpoint>
            }
          />
          <Route
            path={RouteNames.accessories}
            element={
              <Breadcrumbs.Checkpoint title="Accessories">
                <AccessoriesPage />
              </Breadcrumbs.Checkpoint>
            }
          />
          <Route
            path={RouteNames.favorites}
            element={
              <Breadcrumbs.Checkpoint title="Favourites">
                <FavouritesPage />
              </Breadcrumbs.Checkpoint>
            }
          />
          <Route
            path={RouteNames.cart}
            element={
              <Breadcrumbs.Checkpoint title="Cart">
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
