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
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './GiftSlider.scss';

const gifts = [item1, item2, item3, item4, item5, item6, item7, item8];

export const GiftSlider: React.FC = () => {
  return (
    <section className="gift-slider" aria-label="Gifts for adopters">
      <h3 className="text-centre-circle">Adoption Kit</h3>
      <h2>What adopters receive</h2>
      <p className="gift-slider__lead">Each adoption comes with care essentials and a starter comfort pack for the first days at home.</p>

      <div className="gift-slider__viewport">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Keyboard]}
          spaceBetween={16}
          slidesPerView={1}
          centeredSlides={false}
          loop
          navigation
          keyboard
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            900: { slidesPerView: 2 },
            1200: { slidesPerView: 3 }
          }}
        >
          {gifts.map((src, i) => (
            <SwiperSlide key={src}>
              <article className="gift-slider__slide">
                <img src={src} alt={`Gift pack ${i + 1}`} loading="lazy" />
                <p>Starter Pack #{i + 1}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GiftSlider;
