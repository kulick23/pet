import { Link, useParams } from 'react-router-dom';
import { SourceLink } from '../components/site/SourceLink';
import { categoryLabels, getInitiatives } from '../data/initiatives';
import { useReveal } from '../hooks/useReveal';
import { useI18n } from '../i18n/I18nProvider';

export function InitiativePage() {
  useReveal();
  const { locale } = useI18n();
  const { slug } = useParams();
  const initiative = getInitiatives(locale).find(item => item.slug === slug);
  const c = locale === 'ru' ? { missing: 'Инициатива не найдена', back: 'Вернуться к списку', happened: 'Что произошло', verified: 'Проверяемый результат', all: 'Все инициативы', results: 'Смотреть результаты', nav: 'Дальнейшая навигация' } : { missing: 'Initiative not found', back: 'Back to the list', happened: 'What happened', verified: 'Verified result', all: 'All initiatives', results: 'View impact', nav: 'Continue exploring' };

  if (!initiative) {
    return <div className="page page--ink simple-state"><h1>{c.missing}</h1><Link className="button button--green" to="/initiatives">{c.back}</Link></div>;
  }

  return (
    <article className="project-detail">
      <header className="project-detail__hero chapter--ink">
        <div>
          <p>{categoryLabels[locale][initiative.category]} · {initiative.year}</p>
          <h1>{initiative.title}</h1>
          <strong>{initiative.result}</strong>
        </div>
        <figure>
          <img src={initiative.image} alt={initiative.imageAlt} width="1600" height="1200" fetchPriority="high" />
          <figcaption>{initiative.imageNote}</figcaption>
        </figure>
      </header>
      <section className="project-detail__story chapter--paper">
        <h2 data-reveal>{c.happened}</h2>
        <div data-reveal>{initiative.description.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>
      <section className="project-detail__source chapter--green">
        <h2 data-reveal>{c.verified}</h2>
        <div data-reveal><strong>{initiative.result}</strong><SourceLink source={initiative.source} /></div>
      </section>
      <nav className="project-detail__next" aria-label={c.nav}>
        <Link to="/initiatives">{c.all}</Link><Link to="/impact">{c.results}</Link>
      </nav>
    </article>
  );
}
