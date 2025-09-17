import React, { useEffect, useState } from 'react';
import './Header.scss';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact Us' },
];

export const Header: React.FC = () => {
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navLinks.map(link => {
        const section = document.querySelector(link.href) as HTMLElement | null;
        return section ? section.offsetTop : 0;
      });
      const scrollY = window.scrollY + 60;
      let idx = 0;
      for (let i = 0; i < offsets.length; i++) {
        if (scrollY >= offsets[i]) idx = i;
      }
      setActive(navLinks[idx].href);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header" role="banner">
      <img src="./assets/icons/logo.svg" alt="logo" />
      <nav>
        <ul className="header__ul">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href ? 'text--purple' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="header__button">Get Started</button>

      <div className="header__dropdown" aria-hidden="true">
        <button className="button__gamburger" aria-label="menu" />
        <div className="button__dropdown">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? 'text--purple' : undefined}
            >
              {link.label}
            </a>
          ))}
          <a href="#get-started">Get Started</a>
        </div>
      </div>
    </header>
  );
};

export default Header;