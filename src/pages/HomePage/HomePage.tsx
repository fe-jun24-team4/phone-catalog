import React from 'react';
import styles from './HomePage.module.scss';
import { ShopByCategory } from './components/ShopByCategory';
import { Slider } from '../../components/slider/Slider';
import { useTranslation } from 'react-i18next';

import { useFetchNewest } from '../../hooks/useFetchNewest';
import { useFetchHotPrices } from '../../hooks/useFetchHotPrices';

export const HomePage = () => {
  const { t } = useTranslation();

  const newestProducts = useFetchNewest('phones');
  const hotPrices = useFetchHotPrices('phones', 10);

  const bannerSlider = {
    sliders: [
      'src/pages/HomePage/img/banners/banner-1-large.png',
      'src/pages/HomePage/img/banners/banner-1-large.png',
      'src/pages/HomePage/img/banners/banner-1-large.png',
    ],
    settings: {
      slidesPerView: 1,
      spaceBetween: 0,
      delay: 4500,
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 1,
        },
      },
    },
  };

  const newModelsSlider = {
    sliders: newestProducts,
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
      title: t('sliderTitles.newModels'),
    },
    width: true,
  };

  const hotPricesSlider = {
    sliders: hotPrices,
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
      title: t('sliderTitles.hotPrices'),
    },
    width: true,
  };

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.homeHeader}>
          <h1 className={styles.title}>{t('pageTitles.home')}</h1>
          <Slider slider={bannerSlider} />
        </div>

        <Slider slider={newModelsSlider} />

        <ShopByCategory />

        <Slider slider={hotPricesSlider} />
      </div>
    </div>
  );
};
