import React from 'react';
import hamsterImage from '../../assets/images/hamster.png';
import dogPrintIcon from '../../assets/icons/dog-print.svg';
import './About.scss';

const features = [
  {
    title: 'Charity Events',
    description: 'Community events and educational talks that directly fund rescue operations.',
  },
  {
    title: 'Fundraising Campaigns',
    description: 'Transparent campaigns for food, treatment, transport, and shelter improvements.',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about__image-wrap">
        <img src={hamsterImage} alt="Hamster under care" className="about__photo" loading="lazy" />
      </div>

      <div className="about__info">
        <h3 className="text-with-circle">About Us</h3>
        <h2>We are a modern animal assistance team</h2>
        <p>
          We combine field rescue, veterinary partnerships, and adoption programs to create measurable impact for animals in need.
        </p>

        <div className="about__blocks">
          {features.map(feature => (
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
