import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import cat1 from '../assets/images/cat1.png';
import cat2 from '../assets/images/cat2.png';
import dog1 from '../assets/images/dog1.png';
import dog2 from '../assets/images/dog2.png';
import { SourceLink } from '../components/site/SourceLink';
import { eraSource } from '../data/initiatives';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useReveal } from '../hooks/useReveal';

type AnimalKind = 'Все' | 'Кошки' | 'Собаки';

const demoAnimals = [
  { id: 'cat-mira', name: 'Мира', kind: 'Кошки' as const, age: '2 года', image: cat1, story: 'Спокойная кошка, которая ценит тихий дом и высокий подоконник.' },
  { id: 'cat-luch', name: 'Луч', kind: 'Кошки' as const, age: '1 год', image: cat2, story: 'Любопытный кот, быстро осваивает новые комнаты и людей.' },
  { id: 'dog-frank', name: 'Фрэнк', kind: 'Собаки' as const, age: '3 года', image: dog1, story: 'Активный пёс для долгих прогулок и последовательного обучения.' },
  { id: 'dog-boni', name: 'Бони', kind: 'Собаки' as const, age: '8 месяцев', image: dog2, story: 'Молодая собака, которой нужен терпеливый человек и время на адаптацию.' },
];

export function AnimalsPage() {
  useReveal();
  const [filter, setFilter] = useState<AnimalKind>('Все');
  const [favorites, setFavorites] = useLocalStorage<string[]>('betera-green-animal-favorites', []);
  const visible = useMemo(() => filter === 'Все' ? demoAnimals : demoAnimals.filter(animal => animal.kind === filter), [filter]);
  const toggleFavorite = (id: string) => setFavorites(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]);

  return (
    <div className="page page--paper animals-page">
      <header className="page-hero animals-page__hero">
        <h1 data-reveal>Помощь животным</h1>
        <p data-reveal>Результат Betera и каталог, который помогает перейти от знакомства с животным к ответственному действию.</p>
        <strong data-reveal>Около 7 тонн корма</strong>
        <SourceLink source={eraSource} />
      </header>
      <aside className="demo-notice" data-reveal>
        <h2>Демонстрационный каталог</h2>
        <p>Карточки ниже показывают фильтрацию и избранное. Это не реальные объявления и они не опубликованы от имени приютов или Betera.</p>
      </aside>
      <div className="filter-bar" aria-label="Фильтр животных">
        {(['Все', 'Кошки', 'Собаки'] as AnimalKind[]).map(item => <button type="button" key={item} className={filter === item ? 'is-active' : ''} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}
      </div>
      <section className="animal-catalog" aria-live="polite">
        <h2 className="sr-only">Животные в демонстрационном каталоге</h2>
        {visible.map(animal => {
          const favorite = favorites.includes(animal.id);
          return (
            <article className="animal-profile" key={animal.id} data-reveal>
              <img src={animal.image} alt={`Демонстрационный профиль: ${animal.name}`} width="1536" height="2048" loading="lazy" />
              <div><h3>{animal.name}</h3><p>{animal.kind} · {animal.age}</p><p>{animal.story}</p>
                <button type="button" aria-pressed={favorite} onClick={() => toggleFavorite(animal.id)}>{favorite ? 'Убрать из избранного' : 'Добавить в избранное'}</button>
              </div>
            </article>
          );
        })}
      </section>
      <section className="animal-action chapter--green">
        <h2>Ищете реальный способ помочь?</h2>
        <p>Откройте опубликованные проекты ERA и проверьте актуальные организации, сборы и условия участия.</p>
        <a className="button button--ink" href="https://charity-era.by/" target="_blank" rel="noreferrer">Перейти на ERA</a>
        <Link className="text-action" to="/petcare">Открыть страницу PetCare</Link>
      </section>
    </div>
  );
}
