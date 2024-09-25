import React from 'react';
import styles from './HomePage.module.scss';
import { ShopByCategory } from './components/ShopByCategory';
import { Slider, SliderProps } from '../../components/slider/Slider';
import { useTranslation } from 'react-i18next';
import { useFetchNewest } from '../../hooks/useFetchNewest';
import { useFetchHotPrices } from '../../hooks/useFetchHotPrices';

import banner1 from './img/banner_1.jpg';
import banner2 from './img/banner_2.jpg';
import banner3 from './img/banner_3.jpg';

export const HomePage = () => {
  const { t } = useTranslation();

  const newestProducts = useFetchNewest('phones');
  const hotPrices = useFetchHotPrices('phones', 10);

  const bannerSlider: SliderProps = {
    sliders: [banner1, banner2, banner3],
    settings: {
      slidesPerView: 1,
      spaceBetween: 0,
      delay: 4500,
    },
  };

  const newModelsSlider: SliderProps = {
    sliders: newestProducts,
    settings: {
      slidesPerView: 'auto',
      spaceBetween: 16,
      delay: 2500,
    },
    sliderHeader: {
      title: t('sliderTitles.newModels'),
    },
    width: true,
  };

  const hotPricesSlider: SliderProps = {
    sliders: hotPrices,
    settings: {
      slidesPerView: 'auto',
      spaceBetween: 16,
      delay: 2500,
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
