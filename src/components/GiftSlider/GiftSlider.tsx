import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './GiftSlider.scss';

const gifts = [
  './assets/items/1.png',
  './assets/items/2.png',
  './assets/items/3.png',
  './assets/items/4.png',
  './assets/items/5.png',
  './assets/items/6.png',
  './assets/items/7.png',
  './assets/items/8.png'
];

export const GiftSlider: React.FC = () => {
  return (
    <section className="gift-slider" aria-label="Gifts for adopters">
      <h3 className="text-centre-circle">Gifts</h3>
      <p className="gift-slider__lead">Gifts you get when you adopt — a small thank you from us</p>

      <div className="gift-slider__viewport">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            900: { slidesPerView: 2 },
            1200: { slidesPerView: 3 }
          }}
        >
          {gifts.map((src, i) => (
            <SwiperSlide key={src}>
              <div className="gift-slider__slide">
                <img src={src} alt={`Gift ${i + 1}`} loading="lazy" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GiftSlider;