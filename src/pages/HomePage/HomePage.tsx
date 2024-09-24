import React from 'react';
import styles from './HomePage.module.scss';
import { ShopByCategory } from './components/ShopByCategory';
import { Slider } from '../../components/slider/Slider';
import { useFetchRecommended } from '../../hooks/useFetchRecommended';
import { useTranslation } from 'react-i18next';
import { Product } from '../../types/Product';

export const HomePage = () => {
  const { t } = useTranslation();

  const { recommendedData } = useFetchRecommended<Product>();
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
    sliders: recommendedData,
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

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.homeHeader}>
          <h1 className={styles.title}>{t('pageTitles.home')}</h1>
          <Slider slider={bannerSlider} />
        </div>

        <Slider slider={newModelsSlider} />

        <ShopByCategory />

        <Slider slider={newModelsSlider} />
      </div>
    </div>
  );
};
