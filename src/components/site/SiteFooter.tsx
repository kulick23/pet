import { Link } from 'react-router-dom';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__name" aria-hidden="true">BETERA GREEN</div>
      <div className="site-footer__grid">
        <div>
          <p className="site-footer__statement">Действия без шума.</p>
          <p className="concept-notice">Независимый portfolio concept. Не является официальным продуктом Betera.</p>
        </div>
        <nav aria-label="Навигация в подвале">
          <Link to="/initiatives">Инициативы</Link>
          <Link to="/impact">Результаты</Link>
          <Link to="/green-rush">Green Rush</Link>
          <Link to="/animals">Помощь животным</Link>
          <Link to="/petcare">PetCare</Link>
          <Link to="/challenges">Челленджи</Link>
          <Link to="/about">Источники и credits</Link>
        </nav>
      </div>
      <div className="site-footer__bottom">
        <span>Portfolio concept · 2026</span>
        <a href="#main-content">Наверх</a>
      </div>
    </footer>
  );
}
