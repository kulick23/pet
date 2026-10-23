import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { initiatives, type InitiativeCategory } from '../data/initiatives';
import { useReveal } from '../hooks/useReveal';

const filters: ('Все' | InitiativeCategory)[] = ['Все', 'Лес', 'Отходы', 'Команда', 'Животные'];

export function InitiativesPage() {
  useReveal();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = filters.includes(searchParams.get('category') as typeof filters[number]) ? searchParams.get('category') as typeof filters[number] : 'Все';
  const [filter, setFilter] = useState<typeof filters[number]>(initialFilter);
  const visible = useMemo(() => filter === 'Все' ? initiatives : initiatives.filter(item => item.category === filter), [filter]);

  const chooseFilter = (next: typeof filters[number]) => {
    setFilter(next);
    setSearchParams(next === 'Все' ? {} : { category: next });
  };

  return (
    <div className="page page--paper">
      <header className="page-hero page-hero--index">
        <h1 data-reveal>Наши инициативы</h1>
        <p data-reveal>Экология, корпоративное волонтёрство и помощь животным. Каждая история содержит источник и период.</p>
      </header>
      <div className="filter-bar" aria-label="Фильтр инициатив" data-reveal>
        {filters.map(item => <button type="button" key={item} className={filter === item ? 'is-active' : ''} aria-pressed={filter === item} onClick={() => chooseFilter(item)}>{item}</button>)}
      </div>
      <section className="project-index" aria-live="polite">
        <h2 className="sr-only">Список инициатив</h2>
        {visible.map((initiative, index) => (
          <Link className="project-row" to={`/initiatives/${initiative.slug}`} key={initiative.slug} data-reveal>
            <div className="project-row__title"><span>{initiative.title}</span><small>{initiative.category} · {initiative.year}</small></div>
            <p>{initiative.summary}</p>
            <strong>{initiative.result}</strong>
            <img src={initiative.image} alt="" width="480" height="320" loading={index > 1 ? 'lazy' : undefined} aria-hidden="true" />
          </Link>
        ))}
      </section>
    </div>
  );
}
