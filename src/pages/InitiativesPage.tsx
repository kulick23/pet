import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { categoryLabels, getInitiatives, type InitiativeCategory } from '../data/initiatives';
import { useReveal } from '../hooks/useReveal';
import { useI18n } from '../i18n/I18nProvider';

const filters: ('all' | InitiativeCategory)[] = ['all', 'Лес', 'Отходы', 'Команда', 'Животные'];

export function InitiativesPage() {
  useReveal();
  const { locale } = useI18n();
  const initiatives = getInitiatives(locale);
  const c = locale === 'ru' ? { title: 'Наши инициативы', intro: 'Экология, корпоративное волонтёрство и помощь животным. Каждая история содержит источник и период.', filter: 'Фильтр инициатив', list: 'Список инициатив', all: 'Все' } : { title: 'Our initiatives', intro: 'Environmental action, corporate volunteering and animal support. Every story includes a source and reporting period.', filter: 'Filter initiatives', list: 'Initiative list', all: 'All' };
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = filters.includes(searchParams.get('category') as typeof filters[number]) ? searchParams.get('category') as typeof filters[number] : 'all';
  const [filter, setFilter] = useState<typeof filters[number]>(initialFilter);
  const visible = useMemo(() => filter === 'all' ? initiatives : initiatives.filter(item => item.category === filter), [filter, initiatives]);

  const chooseFilter = (next: typeof filters[number]) => {
    setFilter(next);
    setSearchParams(next === 'all' ? {} : { category: next });
  };

  return (
    <div className="page page--paper">
      <header className="page-hero page-hero--index">
        <h1 data-reveal>{c.title}</h1><p data-reveal>{c.intro}</p>
      </header>
      <div className="filter-bar" aria-label={c.filter} data-reveal>
        {filters.map(item => <button type="button" key={item} className={filter === item ? 'is-active' : ''} aria-pressed={filter === item} onClick={() => chooseFilter(item)}>{item === 'all' ? c.all : categoryLabels[locale][item]}</button>)}
      </div>
      <section className="project-index" aria-live="polite">
        <h2 className="sr-only">{c.list}</h2>
        {visible.map((initiative, index) => (
          <Link className="project-row" to={`/initiatives/${initiative.slug}`} key={initiative.slug} data-reveal>
            <div className="project-row__title"><span>{initiative.title}</span><small>{categoryLabels[locale][initiative.category]} · {initiative.year}</small></div>
            <p>{initiative.summary}</p>
            <strong>{initiative.result}</strong>
            <img src={initiative.image} alt="" width="480" height="320" loading={index > 1 ? 'lazy' : undefined} aria-hidden="true" />
          </Link>
        ))}
      </section>
    </div>
  );
}
