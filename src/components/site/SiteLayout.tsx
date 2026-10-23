import { useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { SiteFooter } from './SiteFooter';

const navItems = [
  { to: '/initiatives', label: 'Инициативы' },
  { to: '/impact', label: 'Результаты' },
  { to: '/green-rush', label: 'Green Rush' },
  { to: '/animals', label: 'Животные' },
  { to: '/challenges', label: 'Челленджи' },
];

const pageTitles: Record<string, string> = {
  '/': 'BETERA GREEN — экологические инициативы',
  '/initiatives': 'Инициативы — BETERA GREEN',
  '/impact': 'Результаты — BETERA GREEN',
  '/green-rush': 'Green Rush — BETERA GREEN',
  '/animals': 'Помощь животным — BETERA GREEN',
  '/petcare': 'PetCare — знакомство и помощь животным',
  '/challenges': 'Экологические челленджи — BETERA GREEN',
  '/about': 'О концепте — BETERA GREEN',
};

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setMenuOpen(false);
    document.title = pageTitles[location.pathname] ?? (location.pathname.startsWith('/initiatives/') ? 'Инициатива — BETERA GREEN' : pageTitles['/']);
  }, [location.pathname]);

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
      <a className="skip-link" href="#main-content">Перейти к содержанию</a>
      <header className="site-header">
        <NavLink className="wordmark" to="/" aria-label="BETERA GREEN — главная">
          <span className="wordmark__betera">BETERA</span><span className="wordmark__green">GREEN</span>
        </NavLink>
        <nav className="desktop-nav" aria-label="Основная навигация">
          {navItems.map(item => <NavLink key={item.to} to={item.to}>{item.label}</NavLink>)}
        </nav>
        <NavLink className="header-action" to="/green-rush">Играть</NavLink>
        <button
          ref={menuButton}
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(value => !value)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <nav id="mobile-navigation" className={`mobile-nav${menuOpen ? ' is-open' : ''}`} aria-label="Мобильная навигация" inert={!menuOpen ? true : undefined}>
          {navItems.map(item => <NavLink key={item.to} to={item.to}>{item.label}</NavLink>)}
          <NavLink to="/about">О проекте</NavLink>
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
