import { Link } from 'react-router-dom';
import catImage from '../assets/images/cat2.png';
import forestImage from '../assets/editorial/landscape-polygon-panoramio.jpg';
import plantingImage from '../assets/editorial/volunteer-tree-planting-120802-f-os776-021.jpg';
import { SortingPreview } from '../components/game/SortingPreview';
import { SourceLink } from '../components/site/SourceLink';
import { getImpactMetrics, getInitiatives } from '../data/initiatives';
import { useI18n } from '../i18n/I18nProvider';
import { useReveal } from '../hooks/useReveal';

export function HomePage() {
  useReveal();
  const { locale } = useI18n();
  const metrics = getImpactMetrics(locale);
  const featured = getInitiatives(locale).slice(0, 4);
  const c = locale === 'ru' ? {
    intro: 'Интерактивная платформа об экологических и социальных инициативах Betera.', view: 'Смотреть инициативы', note: 'Независимый portfolio concept', works: 'Экология работает', worksText: 'Посадить. Собрать. Передать. Каждый результат связан с источником и датой.', imageAlt: 'Волонтёр высаживает молодое дерево', caption: 'Контекстная фотография волонтёрской посадки. Не съёмка Betera Green Week.', initiatives: 'Инициативы', indexText: 'Не подборка «зелёных» обещаний, а индекс опубликованных действий.', fullIndex: 'Открыть полный индекс', results: 'Результаты с контекстом', published: 'Это опубликованные итоги, а не live-данные.', explore: 'Исследовать impact', game: '45 секунд, чтобы увидеть материал и выбрать правильный поток.', start: 'Начать сортировку', materials: ['БУМАГА', 'СТЕКЛО', 'ПЛАСТИК', 'МЕТАЛЛ'], animals: 'Помощь животным', animalsText: 'Около 7 тонн корма передано зоозащитникам. Здесь — каталог и истории реальной помощи.', catAlt: 'Портрет кошки', section: 'Перейти в раздел', habits: 'Привычки остаются', habitsText: 'Выберите привычки на неделю. Прогресс хранится только в вашем браузере и не прибавляется к результатам Betera.', challenge: 'Выбрать челлендж', forestAlt: 'Смешанный лес в Беларуси',
  } : {
    intro: 'An interactive platform about Betera’s environmental and social initiatives.', view: 'View initiatives', note: 'Independent portfolio concept', works: 'Action makes an impact', worksText: 'Plant. Collect. Donate. Every result is connected to a source and date.', imageAlt: 'A volunteer planting a young tree', caption: 'Context photo of volunteer tree planting. Not a Betera Green Week photo.', initiatives: 'Initiatives', indexText: 'A documented index of published actions, built beyond green promises.', fullIndex: 'Open the full index', results: 'Results in context', published: 'These are published results, not live data.', explore: 'Explore impact', game: '45 seconds to identify a material and choose the right stream.', start: 'Start sorting', materials: ['PAPER', 'GLASS', 'PLASTIC', 'METAL'], animals: 'Animal support', animalsText: 'Around 7 tonnes of food have reached animal welfare groups. Explore a catalogue and stories of practical support.', catAlt: 'Portrait of a cat', section: 'Open the section', habits: 'Habits that last', habitsText: 'Choose habits for the week. Progress stays in your browser and is never added to Betera’s reported results.', challenge: 'Choose a challenge', forestAlt: 'Mixed forest in Belarus',
  };

  return (
    <>
      <section className="chapter hero-chapter chapter--ink">
        <div className="hero-copy">
          <h1 data-reveal>BETERA<br />GREEN</h1>
          <p data-reveal>{c.intro}</p>
          <Link className="button button--green" to="/initiatives" data-reveal>{c.view}</Link>
        </div>
        <div className="hero-live" data-reveal>
          <SortingPreview />
        </div>
        <p className="hero-note">{c.note}</p>
      </section>

      <section className="chapter statement-chapter chapter--green">
        <div data-reveal>
          <h2>{c.works}</h2><p>{c.worksText}</p>
        </div>
        <figure className="statement-chapter__image" data-reveal>
          <img src={plantingImage} alt={c.imageAlt} width="1920" height="1278" fetchPriority="high" /><figcaption>{c.caption}</figcaption>
        </figure>
      </section>

      <section className="chapter initiatives-chapter chapter--paper">
        <div className="section-heading" data-reveal>
          <h2>{c.initiatives}</h2><p>{c.indexText}</p>
        </div>
        <div className="initiative-wall">
          {featured.map((initiative, index) => (
            <Link to={`/initiatives/${initiative.slug}`} className="initiative-line" key={initiative.slug} data-reveal>
              <span>{initiative.title}</span>
              <strong>{initiative.result}</strong>
              <small>{initiative.year} · {locale === 'ru' ? initiative.category : ({ 'Лес': 'Forest', 'Отходы': 'Waste', 'Команда': 'Team', 'Животные': 'Animals' }[initiative.category])}</small>
              {index === 0 && <img src={initiative.image} alt="" width="520" height="360" aria-hidden="true" />}
            </Link>
          ))}
        </div>
        <Link className="text-action" to="/initiatives">{c.fullIndex}</Link>
      </section>

      <section className="chapter impact-chapter chapter--yellow">
        <div className="section-heading" data-reveal>
          <h2>{c.results}</h2><p>{c.published}</p>
        </div>
        <div className="impact-steps">
          {metrics.map(metric => (
            <article key={metric.label} data-reveal>
              <strong>{metric.value}</strong>
              <p className="metric-label">{metric.label}</p>
              <p>{metric.period}</p>
              <SourceLink source={metric.source} />
            </article>
          ))}
        </div>
        <Link className="button button--ink" to="/impact">{c.explore}</Link>
      </section>

      <section className="chapter game-teaser chapter--ink">
        <div className="game-teaser__type" data-reveal>
          <h2>GREEN<br />RUSH</h2>
          <p>{c.game}</p><Link className="button button--green" to="/green-rush">{c.start}</Link>
        </div>
        <div className="material-stack" aria-hidden="true" data-ui data-reveal>
          {c.materials.map(item => <span key={item}>{item}</span>)}
        </div>
        <div className="conveyor" aria-hidden="true" data-reveal>
          {c.materials.map(item => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="chapter animal-chapter chapter--paper">
        <figure data-reveal><img src={catImage} alt={c.catAlt} width="1536" height="2048" loading="lazy" /></figure>
        <div data-reveal>
          <h2>{c.animals}</h2><p>{c.animalsText}</p><SourceLink source={metrics[1].source} /><Link className="text-action" to="/animals">{c.section}</Link>
        </div>
      </section>

      <section className="chapter challenge-teaser chapter--green">
        <img src={forestImage} alt={c.forestAlt} width="1200" height="900" loading="lazy" data-reveal />
        <div data-reveal>
          <h2>{c.habits}</h2><p>{c.habitsText}</p><Link className="button button--ink" to="/challenges">{c.challenge}</Link>
        </div>
      </section>
    </>
  );
}
