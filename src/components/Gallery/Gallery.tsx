import React from 'react';
import cat1 from '../../assets/images/cat1.png';
import cat2 from '../../assets/images/cat2.png';
import dog1 from '../../assets/images/dog1.png';
import dog2 from '../../assets/images/dog2.png';
import monkey1 from '../../assets/images/monkey1.png';
import monkey2 from '../../assets/images/monkey2.png';
import './Gallery.scss';

const galleryItems = [
  { src: cat1, alt: 'Curious cat', className: 'portfolio__item1' },
  { src: cat2, alt: 'Cat portrait', className: 'portfolio__item2' },
  { src: dog2, alt: 'Friendly dog', className: 'portfolio__item3' },
  { src: dog1, alt: 'Dog rescue', className: 'portfolio__item4' },
  { src: monkey1, alt: 'Playful monkey', className: 'portfolio__item5' },
  { src: monkey2, alt: 'Monkey close-up', className: 'portfolio__item6' },
];

export const Gallery: React.FC = () => {
  return (
    <section className="portfolio" id="gallery">
      <h3 className="text-centre-circle">Gallery</h3>
      <h2>Stories from our rescue network</h2>
      <div className="portfolio__block">
        {galleryItems.map(item => (
          <figure className={item.className} key={item.alt}>
            <img src={item.src} alt={item.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
