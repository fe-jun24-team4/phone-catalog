import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { RouteNames } from '../enums/RouteNames';

import App from '../components/App';
import { PhonesPage } from './PhonesPage';
import { TabletsPage } from './TabletsPage';
import { AccessoriesPage } from './AccessoriesPage';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FavouritesPage } from './FavouritesPage/FavouritesPage';
//import { CartPage } from './CartPage/CartPage';
import { CartPageRoute } from './CartPageRoute';
import { NotFoundPage } from './NotFoundPage/NotFoundPage';
import { Slider } from '../components/slider/Slider';
import { ProductCard } from '../components/ProductCard';
import { useFetchData } from '../hooks/useFetch';
import { HOST } from '../utils/constants/host';
import phones from '../../public/img/banner-phones.png';
import tablets from './banner-tablets.png';
import acc from '../../public/img/banner-accessories.png';

const slider1 = {
  sliders: ['https://www.cnet.com/a/img/resize/a4ffadf45a4f42ce90a542af0d558b4b62e1b3eb/hub/2022/03/30/e841545d-e55c-47fc-b24a-003bf14e58c8/oneplus-10-pro-cnet-review-12.jpg?auto=webp&fit=crop&height=675&width=1200', 'https://d30wkz0ptv5pwh.cloudfront.net/media/magefan_blog/mobile_phone.jpg', 'https://img.uswitch.com/n36b8lzdmgnp/6flMYPMjJ0sZzNs16Fsqa/c525a3f838b0e62716631f003390506b/shutterstock_1736005427212121212.jpg?auto=format%2Ccompress&q=35&ixlib=react-9.5.1-beta.1'],
  settings: {
    slidesPerView: 1,
    spaceBetween: 0,
    delay: 4000,
  },
};

export const RootPage = () => {
  const { data: test } = useFetchData(`${HOST}/api/phones.json`);
  const [data, setData] = useState([]);

  const slider2 = {
    sliders: data.slice(0, 6).map((item, index) => <ProductCard key={index} product={item} />),
    settings: {
      slidesPerView: 1,
      spaceBetween: 16,
      delay: 2500,
      breakpoints: {
        640: {
          slidesPerView: 2.5,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    },
    sliderHeader: {
      title: 'Brand new models',
    },
    width: true,
  };

  useEffect(() => {
    if (test) {
      setData(test);
    }
  }, [test]);

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
            element={
              <div>
                <Slider slider={slider1} />
                <Slider slider={slider2} />
              </div>
            }
          />
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
          <Route path={RouteNames.cart} element={<CartPageRoute />} />
        </Route>
        <Route path={RouteNames.pageNotFound} element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
