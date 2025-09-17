import React from 'react';
import './Hero.scss';
export const Hero: React.FC = () => {
  return (
    <section className="content" id="home">
      <div className="content__text">
        <h1>
          Looking for a <span className="text--purple">good</span> time?
        </h1>
        <p className="content__text--max-width">
          We are dedicated to helping animals in need. Join us in making a difference in the lives of countless animals.
        </p>

        <div className="content__buttons">
          <button className="button__adopt content__buttons--display">
            Adopt Now <img src="./assets/icons/dog-print.svg" alt="" />
          </button>
          <button className="button__play content__buttons--display text--purple">
            <img src="./assets/icons/play.svg" alt="" /> Watch Video
          </button>
        </div>

        <div className="content__statistics">
          <div className="statistics__text--indent">
            <p className="statistics__num">299K+</p>
            <p className="statistics__text">Animals Helped</p>
          </div>
          <div className="statistics__text--indent">
            <p className="statistics__num">99K+</p>
            <p className="statistics__text">Volunteers</p>
          </div>
          <div className="statistics__text--indent">
            <p className="statistics__num">2K+</p>
            <p className="statistics__text">Positive Reviews</p>
          </div>
        </div>
      </div>

      <div className="content__img" aria-hidden="true">
        <div className="img__paw img__paw-top--position">
          <img src="./assets/icons/rectangle.svg" className="img__paw-top--tranform" alt="" />
        </div>
        <div className="img__dog img__dog--position">
          <img src="./assets/icons/rectangle.svg" className="img__dog--tranform" alt="" />
        </div>
        <div className="img__cat img__cat--position">
          <img src="./assets/icons/rectangle.svg" alt="" />
        </div>
        <div className="img__paw img__paw--bottom img__paw-bottom--position">
          <img src="./assets/icons/rectangle_with_fill.svg" className="img__paw-bottom--tranform" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;