import React from 'react';
import cat1 from '../../assets/images/cat1.png';
import cat2 from '../../assets/images/cat2.png';
import dog1 from '../../assets/images/dog1.png';
import dog2 from '../../assets/images/dog2.png';
import monkey1 from '../../assets/images/monkey1.png';
import monkey2 from '../../assets/images/monkey2.png';
import { SECTION_IDS } from '../../constants/navigation';
import { useI18n } from '../../i18n/I18nProvider';
import './Gallery.scss';

const gallerySources = [cat1, cat2, dog2, dog1, monkey1, monkey2];

export const Gallery: React.FC = () => {
  const { messages } = useI18n();

  return (
    <section className="portfolio" id={SECTION_IDS.gallery}>
      <h3 className="text-centre-circle">{messages.gallery.label}</h3>
      <h2>{messages.gallery.title}</h2>
      <div className="portfolio__block">
        {gallerySources.map((src, index) => (
          <figure className={`portfolio__item${index + 1}`} key={src}>
            <img src={src} alt={messages.gallery.itemsAlt[index]} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
