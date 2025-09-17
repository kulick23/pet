import React from 'react';
import './Gallery.scss';
export const Gallery: React.FC = () => {
  return (
    <section className="portfolio" id="gallery">
      <h3 className="text-centre-circle">Gallery</h3>
      <div className="portfolio__block">
        <div className="portfolio__item1"><img src="./assets/images/cat1.jpg" alt="Portfolio 1" /></div>
        <div className="portfolio__item2"><img src="./assets/images/cat2.jpg" alt="Portfolio 2" /></div>
        <div className="portfolio__item3"><img src="./assets/images/dog2.jpg" alt="Portfolio 3" /></div>
        <div className="portfolio__item4"><img src="./assets/images/dog1.jpg" alt="Portfolio 4" /></div>
        <div className="portfolio__item5"><img src="./assets/images/monkey1.jpg" alt="Portfolio 5" /></div>
        <div className="portfolio__item6"><img src="./assets/images/monkey2.jpg" alt="Portfolio 6" /></div>
      </div>
    </section>
  );
};

export default Gallery;