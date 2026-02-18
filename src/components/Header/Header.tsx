import React, { useEffect, useState } from 'react';
import logoIcon from '../../assets/icons/logo.svg';
import menuIcon from '../../assets/icons/menu.svg';
import './Header.scss';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export const Header: React.FC = () => {
  const [active, setActive] = useState('#home');
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 24);
      const scrollY = window.scrollY + 120;

      let current = '#home';
      navLinks.forEach(link => {
        const section = document.querySelector(link.href) as HTMLElement | null;
        if (section && scrollY >= section.offsetTop) {
          current = link.href;
        }
      });

      setActive(current);
    };

    const onResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header className={`header${isSticky ? ' is-sticky' : ''}`}>
      <a href="#home" className="header__brand" aria-label="Pet Care home">
        <img src={logoIcon} alt="Pet Care" />
        <span>PetCare</span>
      </a>

      <nav className="header__desktop" aria-label="Main navigation">
        {navLinks.map(link => (
          <a key={link.href} href={link.href} className={active === link.href ? 'is-active' : ''}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="header__cta" href="#contact">Become a Helper</a>

      <button
        className="header__menu"
        type="button"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(prev => !prev)}
      >
        <img src={menuIcon} alt="" aria-hidden="true" />
      </button>

      <nav className={`header__mobile${isMenuOpen ? ' is-open' : ''}`} aria-label="Mobile navigation">
        {navLinks.map(link => (
          <a key={link.href} href={link.href} className={active === link.href ? 'is-active' : ''} onClick={() => setIsMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="header__mobile-cta" onClick={() => setIsMenuOpen(false)}>
          Become a Helper
        </a>
      </nav>
    </header>
  );
};

export default Header;
