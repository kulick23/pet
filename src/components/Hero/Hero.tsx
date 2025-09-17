import React, { useEffect, useRef, useState } from 'react';
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
            const arr = [...prev];
            arr[idx] = current;
            return arr;
          });
        }, 20);
      });
    };

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      observer.disconnect();
      intervals.forEach(clearInterval);
    };
    // eslint-disable-next-line
  }, []);

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

        <div className="content__statistics" ref={statsRef}>
          {stats.map((stat, idx) => (
            <div className="statistics__text--indent" key={stat.label}>
              <p className="statistics__num">
                {getDisplayValue(counts[idx], stat.suffix)}
              </p>
              <p className="statistics__text">{stat.label}</p>
            </div>
          ))}
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