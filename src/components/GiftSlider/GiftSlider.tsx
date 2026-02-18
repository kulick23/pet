import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper/modules';
import item1 from '../../assets/items/1.png';
import item2 from '../../assets/items/2.png';
import item3 from '../../assets/items/3.png';
import item4 from '../../assets/items/4.png';
import item5 from '../../assets/items/5.png';
import item6 from '../../assets/items/6.png';
import item7 from '../../assets/items/7.png';
import item8 from '../../assets/items/8.png';
import {
  GIFT_SLIDER_AUTOPLAY_DELAY_MS,
  GIFT_SLIDER_BREAKPOINTS,
  GIFT_SLIDER_SPACE_BETWEEN,
} from '../../constants/slider';
import { useI18n } from '../../i18n/I18nProvider';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './GiftSlider.scss';

const gifts = [item1, item2, item3, item4, item5, item6, item7, item8];

export const GiftSlider: React.FC = () => {
  const { messages } = useI18n();

  return (
    <section className="gift-slider" aria-label={messages.gifts.sectionAria}>
      <h3 className="text-centre-circle">{messages.gifts.label}</h3>
      <h2>{messages.gifts.title}</h2>
      <p className="gift-slider__lead">{messages.gifts.description}</p>

      <div className="gift-slider__viewport">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Keyboard]}
          spaceBetween={GIFT_SLIDER_SPACE_BETWEEN}
          slidesPerView={1}
          centeredSlides={false}
          loop
          navigation
          keyboard
          pagination={{ clickable: true }}
          autoplay={{ delay: GIFT_SLIDER_AUTOPLAY_DELAY_MS, disableOnInteraction: false }}
          breakpoints={GIFT_SLIDER_BREAKPOINTS}
        >
          {gifts.map((src, i) => (
            <SwiperSlide key={src}>
              <article className="gift-slider__slide">
                <img src={src} alt={`${messages.gifts.itemNamePrefix} ${i + 1}`} loading="lazy" />
                <p>{messages.gifts.itemNamePrefix} #{i + 1}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GiftSlider;
