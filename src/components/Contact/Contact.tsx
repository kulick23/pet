import React from 'react';
import monkeyImage from '../../assets/images/monkey.png';
import facebookIcon from '../../assets/icons/Facebook.svg';
import telegramIcon from '../../assets/icons/Telegram.svg';
import instagramIcon from '../../assets/icons/Instagram.svg';
import { SECTION_IDS } from '../../constants/navigation';
import { useContactForm } from '../../hooks/useContactForm';
import { useI18n } from '../../i18n/I18nProvider';
import './Contact.scss';

export const Contact: React.FC = () => {
  const { messages } = useI18n();
  const { form, onChange, reset } = useContactForm();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(messages.contact.successMessage);
    reset();
  };

  return (
    <section className="contact" id={SECTION_IDS.contact}>
      <div className="contact__media">
        <img src={monkeyImage} alt={messages.contact.imageAlt} className="contact__image" loading="lazy" />
      </div>

      <div className="contact__form">
        <h3 className="text-with-circle">{messages.contact.label}</h3>
        <h2>{messages.contact.title}</h2>
        <p>{messages.contact.description}</p>

        <div className="contact__links">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label={messages.contact.linksAria.facebook}>
            <img className="contact__icon" src={facebookIcon} alt="" />
          </a>
          <a href="https://telegram.org/" target="_blank" rel="noreferrer" aria-label={messages.contact.linksAria.telegram}>
            <img className="contact__icon" src={telegramIcon} alt="" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label={messages.contact.linksAria.instagram}>
            <img className="contact__icon" src={instagramIcon} alt="" />
          </a>
        </div>

        <form className="form__container" onSubmit={onSubmit}>
          <div className="form__line">
            <div className="form__item">
              <label htmlFor="name">{messages.contact.fields.name}</label>
              <input id="name" value={form.name} onChange={onChange} placeholder={messages.contact.placeholders.name} required />
            </div>
            <div className="form__item">
              <label htmlFor="email">{messages.contact.fields.email}</label>
              <input id="email" type="email" value={form.email} onChange={onChange} placeholder={messages.contact.placeholders.email} required />
            </div>
          </div>

          <div className="form__item">
            <label htmlFor="message">{messages.contact.fields.message}</label>
            <textarea id="message" value={form.message} onChange={onChange} placeholder={messages.contact.placeholders.message} required />
          </div>

          <label className="form__checkbox" htmlFor="privacy">
            <input id="privacy" type="checkbox" checked={form.privacy} onChange={onChange} required />
            <span>
              {messages.contact.fields.privacy} <span className="blue-text">{messages.contact.fields.privacyPolicy}</span>
            </span>
          </label>

          <button className="contact__button" type="submit">{messages.contact.fields.submit}</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
