import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { FC, useRef, useState } from 'react';

import styles from './Slider.module.scss';
import classnames from 'classnames';
import { ButtonRounded } from '../buttons';
import { Direction } from '../../enums/Direction';
import React from 'react';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types/Product';

export interface Settings {
  slidesPerView: number | 'auto';
  spaceBetween: number;
  delay: number;
}

export interface SliderProps {
  sliders: Product[] | string[];
  settings: Settings;
  sliderHeader?: {
    title: string;
  };
  width?: boolean;
}

interface Props {
  slider: SliderProps;
}

export const Slider: FC<Props> = ({ slider }) => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { sliders, settings, sliderHeader, width } = slider;
  const { slidesPerView, spaceBetween, delay } = settings;

  const handleSwiperInit = (swiper: SwiperCore) => {
    swiperRef.current = swiper;
    setActiveIndex(swiper.realIndex);
  };

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setActiveIndex(swiperRef.current.realIndex);
    }
  };

  const handleButtonPrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleButtonNext = () => {
    swiperRef.current?.slideNext();
  };

  const goToSlide = (index: number) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.sliderWrapper}>
        {sliderHeader && (
          <div className={styles.sliderHeader}>
            <h3 className={styles.title}>{sliderHeader.title}</h3>

            <div className={styles.buttons}>
              <ButtonRounded onClick={handleButtonPrev} />

              <ButtonRounded rotate={Direction.right} onClick={handleButtonNext} />
            </div>
          </div>
        )}
        <Swiper
          onSwiper={handleSwiperInit}
          onSlideChange={handleSlideChange}
          modules={[Navigation, Autoplay]}
          loop
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          centeredSlides={true}
          autoplay={{
            delay: delay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className={classnames(styles.responsiveSwiper, {
            [styles.width]: width,
          })}
        >
          {sliders.map((slide, index) => (
            <SwiperSlide key={index} className={classnames({ [styles.slideWidth]: width })}>
              {typeof slide === 'string' ? (
                <div className={styles.img}>
                  <img src={slide} alt="slide" />
                </div>
              ) : (
                <ProductCard key={index} product={slide} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {!sliderHeader && (
          <div className={styles.customPagination}>
            {sliders.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={classnames(styles.paginationButton, {
                  [styles.active]: index === activeIndex,
                })}
              />
            ))}
          </div>
        )}

        {!sliderHeader && (
          <>
            <button className={classnames(styles.button, styles.prev)} onClick={handleButtonPrev} />
            <button className={classnames(styles.button, styles.next)} onClick={handleButtonNext} />
          </>
        )}
      </div>
    </div>
  );
};
