import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { RouteNames } from '../enums/RouteNames';
import App from '../components/App';
import { PhonesPage } from './PhonesPage';
import { TabletsPage } from './TabletsPage';
import { AccessoriesPage } from './AccessoriesPage';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FavouritesPage } from './FavouritesPage/FavouritesPage';

export const RootPage = () => {
  return (
    <Router>
      <Routes>
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
          <Route path={RouteNames.cart} element={<p>CART</p>} />
        </Route>
        <Route path={RouteNames.pageNotFound} element={<p>PAGE NOT FOUND</p>} />
      </Routes>
    </Router>
  );
};
