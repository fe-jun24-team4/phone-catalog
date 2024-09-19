import React from 'react';
import { HashRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { RouteNames } from '../enums/RouteNames';
import App from '../components/App';
import { PhonesPage } from './PhonesPage';
import { TabletsPage } from './TabletsPage';
import { AccessoriesPage } from './AccessoriesPage';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CatalogContextProvider } from './CatalogPage/context/CatalogContext';
import { DetailsPage } from './DetailsPage';

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
            index
            element={<CatalogContextProvider source={'api/phones'}></CatalogContextProvider>}
          />
          <Route
            path={RouteNames.phones}
            element={
              <Breadcrumbs.Checkpoint title="Phones">
                <Outlet />
              </Breadcrumbs.Checkpoint>
            }
          >
            <Route index element={<PhonesPage />} />
            <Route
              path={':productId'}
              element={
                <Breadcrumbs.Checkpoint title="Product Details">
                  <DetailsPage />
                </Breadcrumbs.Checkpoint>
              }
            ></Route>
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
            <Route
              path={':productId'}
              element={
                <Breadcrumbs.Checkpoint title="Product Details">
                  <DetailsPage />
                </Breadcrumbs.Checkpoint>
              }
            ></Route>
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
            <Route
              path={':productId'}
              element={
                <Breadcrumbs.Checkpoint title="Product Details">
                  <DetailsPage />
                </Breadcrumbs.Checkpoint>
              }
            ></Route>
          </Route>
          <Route path={RouteNames.favorites} element={<p>Favorites</p>} />
          <Route path={RouteNames.cart} element={<p>CART</p>} />
        </Route>
        <Route path={RouteNames.pageNotFound} element={<p>PAGE NOT FOUND</p>} />
      </Routes>
    </Router>
  );
};
