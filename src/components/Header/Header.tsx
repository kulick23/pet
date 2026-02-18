import React from 'react';
import logoIcon from '../../assets/icons/logo.svg';
import menuIcon from '../../assets/icons/menu.svg';
import { SECTION_HASH } from '../../constants/navigation';
import { useHeaderNavigation } from '../../hooks/useHeaderNavigation';
import { useI18n } from '../../i18n/I18nProvider';
import './Header.scss';

const navItems = [
  { key: 'home', href: SECTION_HASH.home },
  { key: 'about', href: SECTION_HASH.about },
  { key: 'gallery', href: SECTION_HASH.gallery },
  { key: 'contact', href: SECTION_HASH.contact },
] as const;

export const Header: React.FC = () => {
  const { messages } = useI18n();
  const { activeHash, isSticky, isMenuOpen, setIsMenuOpen } = useHeaderNavigation();

  return (
    <header className={`header${isSticky ? ' is-sticky' : ''}`}>
      <a href={SECTION_HASH.home} className="header__brand" aria-label={messages.header.homeAria}>
        <img src={logoIcon} alt={messages.header.brand} />
        <span>{messages.header.brand}</span>
      </a>

      <nav className="header__desktop" aria-label={messages.header.mainNavAria}>
        {navItems.map(link => (
          <a key={link.key} href={link.href} className={activeHash === link.href ? 'is-active' : ''}>
            {messages.header.nav[link.key]}
          </a>
        ))}
      </nav>

      <a className="header__cta" href={SECTION_HASH.contact}>{messages.header.cta}</a>

      <button
        className="header__menu"
        type="button"
        aria-label={messages.header.menuToggleAria}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(prev => !prev)}
      >
        <img src={menuIcon} alt="" aria-hidden="true" />
      </button>

      <nav className={`header__mobile${isMenuOpen ? ' is-open' : ''}`} aria-label={messages.header.mobileNavAria}>
        {navItems.map(link => (
          <a key={link.key} href={link.href} className={activeHash === link.href ? 'is-active' : ''} onClick={() => setIsMenuOpen(false)}>
            {messages.header.nav[link.key]}
          </a>
        ))}
        <a href={SECTION_HASH.contact} className="header__mobile-cta" onClick={() => setIsMenuOpen(false)}>
          {messages.header.cta}
        </a>
      </nav>
    </header>
  );
};

export default Header;
