import React from 'react';
import hamsterImage from '../../assets/images/hamster.png';
import dogPrintIcon from '../../assets/icons/dog-print.svg';
import { SECTION_IDS } from '../../constants/navigation';
import { useI18n } from '../../i18n/I18nProvider';
import './About.scss';

export const About: React.FC = () => {
  const { messages } = useI18n();

  return (
    <section id={SECTION_IDS.about} className="about">
      <div className="about__image-wrap">
        <img src={hamsterImage} alt={messages.about.imageAlt} className="about__photo" loading="lazy" />
      </div>

      <div className="about__info">
        <h3 className="text-with-circle">{messages.about.label}</h3>
        <h2>{messages.about.title}</h2>
        <p>{messages.about.description}</p>

        <div className="about__blocks">
          {messages.about.features.map(feature => (
            <article className="about__block" key={feature.title}>
              <div className="about__icon">
                <img src={dogPrintIcon} alt="" aria-hidden="true" />
              </div>
              <div className="about__icon--text">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
