import { Link, useParams } from 'react-router-dom';
import { SourceLink } from '../components/site/SourceLink';
import { initiatives } from '../data/initiatives';
import { useReveal } from '../hooks/useReveal';

export function InitiativePage() {
  useReveal();
  const { slug } = useParams();
  const initiative = initiatives.find(item => item.slug === slug);

  if (!initiative) {
    return <div className="page page--ink simple-state"><h1>Инициатива не найдена</h1><Link className="button button--green" to="/initiatives">Вернуться к списку</Link></div>;
  }

  return (
    <article className="project-detail">
      <header className="project-detail__hero chapter--ink">
        <div>
          <p>{initiative.category} · {initiative.year}</p>
          <h1>{initiative.title}</h1>
          <strong>{initiative.result}</strong>
        </div>
        <figure>
          <img src={initiative.image} alt={initiative.imageAlt} width="1600" height="1200" fetchPriority="high" />
          <figcaption>{initiative.imageNote}</figcaption>
        </figure>
      </header>
      <section className="project-detail__story chapter--paper">
        <h2 data-reveal>Что произошло</h2>
        <div data-reveal>{initiative.description.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>
      <section className="project-detail__source chapter--green">
        <h2 data-reveal>Проверяемый результат</h2>
        <div data-reveal><strong>{initiative.result}</strong><SourceLink source={initiative.source} /></div>
      </section>
      <nav className="project-detail__next" aria-label="Дальнейшая навигация">
        <Link to="/initiatives">Все инициативы</Link>
        <Link to="/impact">Смотреть результаты</Link>
      </nav>
    </article>
  );
}
