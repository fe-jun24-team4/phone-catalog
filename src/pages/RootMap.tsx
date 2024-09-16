import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { RouteNames } from '../enums/RouteNames';
import App from '../components/app/App';
import { PhonesPage } from './PhonesPage';
import { TabletsPage } from './TabletsPage';
import { AccessoriesPage } from './AccessoriesPage';
import { Breadcrumbs } from '../components/Breadcrumbs';

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
          <Route index element={<p>HOMEPAGE</p>} />
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
          <Route path={RouteNames.favorites} element={<p>Favorites</p>} />
          <Route path={RouteNames.cart} element={<p>CART</p>} />
        </Route>
        <Route path={RouteNames.pageNotFound} element={<p>PAGE NOT FOUND</p>} />
      </Routes>
    </Router>
  );
};
