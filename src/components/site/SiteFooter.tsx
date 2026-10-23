import { Link } from 'react-router-dom';
import { useI18n } from '../../i18n/I18nProvider';

export function SiteFooter() {
  const { locale } = useI18n();
  const c = locale === 'ru' ? {
    statement: 'Действия без шума.', notice: 'Независимый portfolio concept. Не является официальным продуктом Betera.', nav: 'Навигация в подвале', initiatives: 'Инициативы', impact: 'Результаты', animals: 'Помощь животным', challenges: 'Челленджи', sources: 'Источники и credits', top: 'Наверх',
  } : {
    statement: 'Actions speak clearly.', notice: 'Independent portfolio concept. This is not an official Betera product.', nav: 'Footer navigation', initiatives: 'Initiatives', impact: 'Impact', animals: 'Animal support', challenges: 'Challenges', sources: 'Sources and credits', top: 'Back to top',
  };
  return (
    <footer className="site-footer">
      <div className="site-footer__name" aria-hidden="true">BETERA GREEN</div>
      <div className="site-footer__grid">
        <div>
          <p className="site-footer__statement">{c.statement}</p>
          <p className="concept-notice">{c.notice}</p>
        </div>
        <nav aria-label={c.nav}>
          <Link to="/initiatives">{c.initiatives}</Link>
          <Link to="/impact">{c.impact}</Link>
          <Link to="/green-rush">Green Rush</Link>
          <Link to="/animals">{c.animals}</Link>
          <Link to="/petcare">PetCare</Link>
          <Link to="/challenges">{c.challenges}</Link>
          <Link to="/about">{c.sources}</Link>
        </nav>
      </div>
      <div className="site-footer__bottom">
        <span>Portfolio concept · 2026</span>
        <a href="#main-content">{c.top}</a>
      </div>
    </footer>
  );
}
