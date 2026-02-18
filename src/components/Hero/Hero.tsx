import React, { useEffect, useRef, useState } from 'react';
import dogPrintIcon from '../../assets/icons/dog-print.svg';
import playIcon from '../../assets/icons/play.svg';
import rectangleIcon from '../../assets/icons/rectangle.svg';
import rectangleFillIcon from '../../assets/icons/rectangle_with_fill.svg';
import dogImage from '../../assets/images/dog-sitting.png';
import catImage from '../../assets/images/cat-lying.png';
import './Hero.scss';

const stats = [
  { value: 299_000, label: 'Animals Helped', suffix: 'K+' },
  { value: 99_000, label: 'Volunteers', suffix: 'K+' },
  { value: 2_000, label: 'Positive Reviews', suffix: 'K+' },
];

const getDisplayValue = (val: number, suffix: string) => {
  if (suffix === 'K+') return `${Math.floor(val / 1000)}K+`;
  return `${val}${suffix}`;
};

export const Hero: React.FC = () => {
  const [counts, setCounts] = useState([0, 0, 0]);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let intervals: NodeJS.Timeout[] = [];
    let started = false;

    const animate = () => {
      if (started) return;
      started = true;

      stats.forEach((stat, idx) => {
        let current = 0;
        const step = Math.ceil(stat.value / 60);

        intervals[idx] = setInterval(() => {
          current += step;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(intervals[idx]);
          }

          setCounts(prev => {
            const updated = [...prev];
            updated[idx] = current;
            return updated;
          });
        }, 18);
      });
    };

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
        }
      },
      { threshold: 0.45 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      observer.disconnect();
      intervals.forEach(clearInterval);
    };
  }, []);

  const heroAssets = {
    '--hero-paw-icon': `url(${dogPrintIcon})`,
    '--hero-dog-image': `url(${dogImage})`,
    '--hero-cat-image': `url(${catImage})`,
  } as React.CSSProperties;

  return (
    <section className="content" id="home" style={heroAssets}>
      <div className="content__text">
        <p className="content__kicker">Pet Assistance Foundation</p>
        <h1>
          Looking for a <span className="text--purple">good</span> time?
        </h1>
        <p className="content__text--max-width">
          We rescue, heal, and rehome animals in crisis. Join the network of people creating a safe future for pets.
        </p>

        <div className="content__buttons">
          <a className="button__adopt content__buttons--display" href="#contact">
            Adopt Now <img src={dogPrintIcon} alt="" />
          </a>
          <a className="button__play content__buttons--display" href="#gallery">
            <img src={playIcon} alt="" /> Watch Story
          </a>
        </div>

        <div className="content__tags">
          <span>Trusted shelters</span>
          <span>24/7 rescue line</span>
          <span>Transparent donations</span>
        </div>

        <div className="content__statistics" ref={statsRef}>
          {stats.map((stat, idx) => (
            <div className="statistics__text--indent" key={stat.label}>
              <p className="statistics__num">{getDisplayValue(counts[idx], stat.suffix)}</p>
              <p className="statistics__text">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="content__img" aria-hidden="true">
        <div className="img__paw img__paw-top--position">
          <img src={rectangleIcon} className="img__paw-top--tranform" alt="" />
          <img src={dogPrintIcon} className="img__paw-icon img__paw-icon--top" alt="" />
        </div>
        <div className="img__dog img__dog--position">
          <img src={rectangleIcon} className="img__dog--tranform" alt="" />
        </div>
        <div className="img__cat img__cat--position">
          <img src={rectangleIcon} alt="" />
        </div>
        <div className="img__paw img__paw--bottom img__paw-bottom--position">
          <img src={rectangleFillIcon} className="img__paw-bottom--tranform" alt="" />
          <img src={dogPrintIcon} className="img__paw-icon img__paw-icon--bottom" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
