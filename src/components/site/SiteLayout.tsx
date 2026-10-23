import { useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { SiteFooter } from './SiteFooter';
import { useI18n } from '../../i18n/I18nProvider';

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const { locale, setLocale } = useI18n();
  const copy = locale === 'ru' ? {
    nav: [['/initiatives', 'Инициативы'], ['/impact', 'Результаты'], ['/green-rush', 'Green Rush'], ['/animals', 'Животные'], ['/challenges', 'Челленджи']],
    titles: { '/': 'BETERA GREEN — экологические инициативы', '/initiatives': 'Инициативы — BETERA GREEN', '/impact': 'Результаты — BETERA GREEN', '/green-rush': 'Green Rush — BETERA GREEN', '/animals': 'Помощь животным — BETERA GREEN', '/petcare': 'PetCare — знакомство и помощь животным', '/challenges': 'Экологические челленджи — BETERA GREEN', '/about': 'О концепте — BETERA GREEN' } as Record<string, string>,
    initiative: 'Инициатива — BETERA GREEN', skip: 'Перейти к содержанию', home: 'BETERA GREEN — главная', mainNav: 'Основная навигация', play: 'Играть', close: 'Закрыть меню', open: 'Открыть меню', mobileNav: 'Мобильная навигация', about: 'О проекте', switchLanguage: 'Switch to English',
  } : {
    nav: [['/initiatives', 'Initiatives'], ['/impact', 'Impact'], ['/green-rush', 'Green Rush'], ['/animals', 'Animals'], ['/challenges', 'Challenges']],
    titles: { '/': 'BETERA GREEN — environmental initiatives', '/initiatives': 'Initiatives — BETERA GREEN', '/impact': 'Impact — BETERA GREEN', '/green-rush': 'Green Rush — BETERA GREEN', '/animals': 'Animal support — BETERA GREEN', '/petcare': 'PetCare — meet and support animals', '/challenges': 'Eco challenges — BETERA GREEN', '/about': 'About — BETERA GREEN' } as Record<string, string>,
    initiative: 'Initiative — BETERA GREEN', skip: 'Skip to content', home: 'BETERA GREEN — home', mainNav: 'Main navigation', play: 'Play', close: 'Close menu', open: 'Open menu', mobileNav: 'Mobile navigation', about: 'About', switchLanguage: 'Переключить на русский',
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setMenuOpen(false);
    document.title = copy.titles[location.pathname] ?? (location.pathname.startsWith('/initiatives/') ? copy.initiative : copy.titles['/']);
  }, [locale, location.pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? 'hidden' : '';
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">{copy.skip}</a>
      <header className="site-header">
        <NavLink className="wordmark" to="/" aria-label={copy.home}>
          <span className="wordmark__betera">BETERA</span><span className="wordmark__green">GREEN</span>
        </NavLink>
        <nav className="desktop-nav" aria-label={copy.mainNav}>
          {copy.nav.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
        </nav>
        <button className="language-toggle" type="button" aria-label={copy.switchLanguage} onClick={() => setLocale(locale === 'ru' ? 'en' : 'ru')}>
          {locale === 'ru' ? 'EN' : 'RU'}
        </button>
        <NavLink className="header-action" to="/green-rush">{copy.play}</NavLink>
        <button
          ref={menuButton}
          className="menu-button"
          type="button"
          aria-label={menuOpen ? copy.close : copy.open}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(value => !value)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <nav id="mobile-navigation" className={`mobile-nav${menuOpen ? ' is-open' : ''}`} aria-label={copy.mobileNav} inert={!menuOpen ? true : undefined}>
          {copy.nav.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
          <NavLink to="/about">{copy.about}</NavLink>
          <NavLink to="/petcare">PetCare</NavLink>
        </nav>
      </header>
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
