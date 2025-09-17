import React, { useState } from 'react';
import './Contact.scss';
export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '', privacy: false });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target as HTMLInputElement;
    setForm(prev => ({ ...prev, [id]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: отправка данных
    alert('Submitted (demo)');
  };

  return (
    <section className="contact" id="contact">
      <img src="./assets/images/cat-lying.png" alt="photo" className="contact__image" />
      <div className="contact__form">
        <h3 className="text-with-circle">Contact</h3>
        <h2>Get in Touch</h2>
        <p>Contact us through any of the following methods:</p>
        <div className="contact__links">
          <a href="https://www.facebook.com/"><img className="contact__icon" src="./assets/icons/Facebook.svg" alt="Facebook" /></a>
          <a href="https://telegram.org/"><img className="contact__icon" src="./assets/icons/Telegram.svg" alt="Telegram" /></a>
          <a href="https://www.instagram.com/"><img className="contact__icon" src="./assets/icons/Instagram.svg" alt="Instagram" /></a>
        </div>

        <p>Or leave your details and we will get back to you:</p>
        <form className="form__container" onSubmit={onSubmit}>
          <div className="form__line">
            <div className="form__item">
              <label htmlFor="name">Your Name</label>
              <input id="name" value={form.name} onChange={onChange} placeholder="John" />
            </div>
            <div className="form__item">
              <label htmlFor="email">Your Email</label>
              <input id="email" type="email" value={form.email} onChange={onChange} placeholder="john@example.com" />
            </div>
          </div>

          <div className="form__item">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" value={form.message} onChange={onChange} placeholder="Write your message..." />
          </div>

          <div className="form__checkbox">
            <input id="privacy" type="checkbox" checked={form.privacy} onChange={onChange as any} required />
            <small>I agree with the <small className="blue-text">privacy policy</small></small>
          </div>

          <button className="contact__button" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;