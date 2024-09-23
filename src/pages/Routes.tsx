import React from 'react';
import { HashRouter as Router, Route, Routes as RouterRoutes, Outlet } from 'react-router-dom';
import { RouteNames } from '../enums/RouteNames';

import { Breadcrumbs } from '../components/Breadcrumbs';

import { App } from '../components/App';
import { PhonesPage } from './PhonesPage';
import { TabletsPage } from './TabletsPage';
import { AccessoriesPage } from './AccessoriesPage';
import { FavouritesPage } from './FavouritesPage';
import { CartPage } from './CartPage/CartPage';
import { NotFoundPage } from './NotFoundPage';
import { DetailsPage } from './DetailsPage/DetailsPage';

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
          <Route
            path={RouteNames.phones}
            element={
              <Breadcrumbs.Checkpoint title="Phones">
                <Outlet />
              </Breadcrumbs.Checkpoint>
            }
          >
            <Route index element={<PhonesPage />} />
            <Route path=":productId" element={<DetailsPage />}></Route>
          </Route>
          <Route
            path={RouteNames.tablets}
            element={
              <Breadcrumbs.Checkpoint title="Tablets">
                <Outlet />
              </Breadcrumbs.Checkpoint>
            }
          >
            <Route index element={<TabletsPage />} />
            <Route path=":productId" element={<DetailsPage />}></Route>
          </Route>
          <Route
            path={RouteNames.accessories}
            element={
              <Breadcrumbs.Checkpoint title="Accessories">
                <Outlet />
              </Breadcrumbs.Checkpoint>
            }
          >
            <Route index element={<AccessoriesPage />} />
            <Route path=":productId" element={<DetailsPage />}></Route>
          </Route>
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
