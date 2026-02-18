import React, { useState } from 'react';
import monkeyImage from '../../assets/images/monkey.png';
import facebookIcon from '../../assets/icons/Facebook.svg';
import telegramIcon from '../../assets/icons/Telegram.svg';
import instagramIcon from '../../assets/icons/Instagram.svg';
import './Contact.scss';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '', privacy: false });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target as HTMLInputElement;
    setForm(prev => ({ ...prev, [id]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks! We will contact you soon.');
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__media">
        <img src={monkeyImage} alt="Rescued monkey" className="contact__image" loading="lazy" />
      </div>

      <div className="contact__form">
        <h3 className="text-with-circle">Contact</h3>
        <h2>Let&apos;s build safer lives for animals</h2>
        <p>Tell us how you want to help: donations, volunteering, foster care, or adoption support.</p>

        <div className="contact__links">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
            <img className="contact__icon" src={facebookIcon} alt="" />
          </a>
          <a href="https://telegram.org/" target="_blank" rel="noreferrer" aria-label="Telegram">
            <img className="contact__icon" src={telegramIcon} alt="" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <img className="contact__icon" src={instagramIcon} alt="" />
          </a>
        </div>

        <form className="form__container" onSubmit={onSubmit}>
          <div className="form__line">
            <div className="form__item">
              <label htmlFor="name">Your Name</label>
              <input id="name" value={form.name} onChange={onChange} placeholder="John" required />
            </div>
            <div className="form__item">
              <label htmlFor="email">Your Email</label>
              <input id="email" type="email" value={form.email} onChange={onChange} placeholder="john@example.com" required />
            </div>
          </div>

          <div className="form__item">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" value={form.message} onChange={onChange} placeholder="Write your message..." required />
          </div>

          <label className="form__checkbox" htmlFor="privacy">
            <input id="privacy" type="checkbox" checked={form.privacy} onChange={onChange as any} required />
            <span>I agree with the <span className="blue-text">privacy policy</span></span>
          </label>

          <button className="contact__button" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
