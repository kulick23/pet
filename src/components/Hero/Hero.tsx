import React, { useMemo, useRef } from 'react';
import dogPrintIcon from '../../assets/icons/dog-print.svg';
import playIcon from '../../assets/icons/play.svg';
import rectangleIcon from '../../assets/icons/rectangle.svg';
import rectangleFillIcon from '../../assets/icons/rectangle_with_fill.svg';
import dogImage from '../../assets/images/dog-sitting.png';
import catImage from '../../assets/images/cat-lying.png';
import { HERO_STATS } from '../../constants/hero';
import { SECTION_HASH, SECTION_IDS } from '../../constants/navigation';
import { formatStatValue, useAnimatedStats } from '../../hooks/useAnimatedStats';
import { useI18n } from '../../i18n/I18nProvider';
import './Hero.scss';

export const Hero: React.FC = () => {
  const { messages } = useI18n();
  const statsRef = useRef<HTMLDivElement>(null);
  const statValues = useMemo(() => HERO_STATS.map(stat => stat.value), []);

  const counts = useAnimatedStats(statValues, statsRef);

  const heroAssets = {
    '--hero-paw-icon': `url(${dogPrintIcon})`,
    '--hero-dog-image': `url(${dogImage})`,
    '--hero-cat-image': `url(${catImage})`,
  } as React.CSSProperties;

  return (
    <section className="content" id={SECTION_IDS.home} style={heroAssets}>
      <div className="content__text">
        <p className="content__kicker">{messages.hero.kicker}</p>
        <h1>
          {messages.hero.titlePrefix} <span className="text--purple">{messages.hero.titleAccent}</span> {messages.hero.titleSuffix}
        </h1>
        <p className="content__text--max-width">{messages.hero.description}</p>

        <div className="content__buttons">
          <a className="button__adopt content__buttons--display" href={SECTION_HASH.contact}>
            {messages.hero.adoptNow} <img src={dogPrintIcon} alt="" />
          </a>
          <a className="button__play content__buttons--display" href={SECTION_HASH.gallery}>
            <img src={playIcon} alt="" /> {messages.hero.watchStory}
          </a>
        </div>

        <div className="content__tags">
          {messages.hero.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="content__statistics" ref={statsRef}>
          {HERO_STATS.map((stat, idx) => (
            <div className="statistics__text--indent" key={stat.key}>
              <p className="statistics__num">{formatStatValue(counts[idx] ?? 0, stat.suffix)}</p>
              <p className="statistics__text">{messages.hero.stats[stat.key]}</p>
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
