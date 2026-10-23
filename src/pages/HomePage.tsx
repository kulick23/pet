import { Link } from 'react-router-dom';
import catImage from '../assets/images/cat2.png';
import forestImage from '../assets/editorial/landscape-polygon-panoramio.jpg';
import plantingImage from '../assets/editorial/volunteer-tree-planting-120802-f-os776-021.jpg';
import { SortingPreview } from '../components/game/SortingPreview';
import { SourceLink } from '../components/site/SourceLink';
import { impactMetrics, initiatives } from '../data/initiatives';
import { useReveal } from '../hooks/useReveal';

export function HomePage() {
  useReveal();
  const featured = initiatives.slice(0, 4);

  return (
    <>
      <section className="chapter hero-chapter chapter--ink">
        <div className="hero-copy">
          <h1 data-reveal>BETERA<br />GREEN</h1>
          <p data-reveal>Интерактивная платформа об экологических и социальных инициативах Betera.</p>
          <Link className="button button--green" to="/initiatives" data-reveal>Смотреть инициативы</Link>
        </div>
        <div className="hero-live" data-reveal>
          <SortingPreview />
        </div>
        <p className="hero-note">Независимый portfolio concept</p>
      </section>

      <section className="chapter statement-chapter chapter--green">
        <div data-reveal>
          <h2>Экология работает</h2>
          <p>Посадить. Собрать. Передать. Каждый результат связан с источником и датой.</p>
        </div>
        <figure className="statement-chapter__image" data-reveal>
          <img src={plantingImage} alt="Волонтёр высаживает молодое дерево" width="1920" height="1278" fetchPriority="high" />
          <figcaption>Контекстная фотография волонтёрской посадки. Не съёмка Betera Green Week.</figcaption>
        </figure>
      </section>

      <section className="chapter initiatives-chapter chapter--paper">
        <div className="section-heading" data-reveal>
          <h2>Инициативы</h2>
          <p>Не подборка “зелёных” обещаний, а индекс опубликованных действий.</p>
        </div>
        <div className="initiative-wall">
          {featured.map((initiative, index) => (
            <Link to={`/initiatives/${initiative.slug}`} className="initiative-line" key={initiative.slug} data-reveal>
              <span>{initiative.title}</span>
              <strong>{initiative.result}</strong>
              <small>{initiative.year} · {initiative.category}</small>
              {index === 0 && <img src={initiative.image} alt="" width="520" height="360" aria-hidden="true" />}
            </Link>
          ))}
        </div>
        <Link className="text-action" to="/initiatives">Открыть полный индекс</Link>
      </section>

      <section className="chapter impact-chapter chapter--yellow">
        <div className="section-heading" data-reveal>
          <h2>Результаты с контекстом</h2>
          <p>Это опубликованные итоги, а не live-данные.</p>
        </div>
        <div className="impact-steps">
          {impactMetrics.map(metric => (
            <article key={metric.label} data-reveal>
              <strong>{metric.value}</strong>
              <p className="metric-label">{metric.label}</p>
              <p>{metric.period}</p>
              <SourceLink source={metric.source} />
            </article>
          ))}
        </div>
        <Link className="button button--ink" to="/impact">Исследовать impact</Link>
      </section>

      <section className="chapter game-teaser chapter--ink">
        <div className="game-teaser__type" data-reveal>
          <h2>GREEN<br />RUSH</h2>
          <p>45 секунд, чтобы увидеть материал и выбрать правильный поток.</p>
          <Link className="button button--green" to="/green-rush">Начать сортировку</Link>
        </div>
        <div className="material-stack" aria-hidden="true" data-ui data-reveal>
          <span>БУМАГА</span><span>СТЕКЛО</span><span>ПЛАСТИК</span><span>МЕТАЛЛ</span>
        </div>
        <div className="conveyor" aria-hidden="true" data-reveal>
          <span>БУМАГА</span><span>СТЕКЛО</span><span>ПЛАСТИК</span><span>МЕТАЛЛ</span>
        </div>
      </section>

      <section className="chapter animal-chapter chapter--paper">
        <figure data-reveal><img src={catImage} alt="Портрет кошки" width="1536" height="2048" loading="lazy" /></figure>
        <div data-reveal>
          <h2>Помощь животным</h2>
          <p>Около 7 тонн корма передано зоозащитникам. Здесь — каталог и истории реальной помощи.</p>
          <SourceLink source={impactMetrics[1].source} />
          <Link className="text-action" to="/animals">Перейти в раздел</Link>
        </div>
      </section>

      <section className="chapter challenge-teaser chapter--green">
        <img src={forestImage} alt="Смешанный лес в Беларуси" width="1200" height="900" loading="lazy" data-reveal />
        <div data-reveal>
          <h2>Привычки остаются</h2>
          <p>Выберите привычки на неделю. Прогресс хранится только в вашем браузере и не прибавляется к результатам Betera.</p>
          <Link className="button button--ink" to="/challenges">Выбрать челлендж</Link>
        </div>
      </section>
    </>
  );
}
