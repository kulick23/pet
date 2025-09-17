import React from 'react';
import './About.scss';
export const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <img src="./assets/images/dog-sitting.png" alt="Photo" className="about__photo" />
      <div className="about__info">
        <h3 className="text-with-circle">About Us</h3>
        <h2>We pet assistance charity</h2>
        <p>We are dedicated to helping animals in need. Join us in making a difference in the lives of countless animals.</p>

        <div className="about__blocks">
          <div className="about__block">
            <div className="about__icon">
              <div className="text-with-circle"></div>
              <img src="./assets/icons/dog-print.svg" alt="dog" />
            </div>
            <div className="about__icon--text">
              <h4>Charity Events</h4>
              <small>Organizing events to raise funds and awareness for animal welfare.</small>
            </div>
          </div>

          <div className="about__block">
            <div className="about__icon">
              <div className="text-with-circle"></div>
              <img src="./assets/icons/dog-print.svg" alt="dog" />
            </div>
            <div className="about__icon--text">
              <h4>Fundraising Campaigns</h4>
              <small>Running campaigns to gather donations for supporting animal shelters and rescue operations.</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;