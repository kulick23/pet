import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import cat1 from '../assets/images/cat1.png';
import cat2 from '../assets/images/cat2.png';
import dog1 from '../assets/images/dog1.png';
import dog2 from '../assets/images/dog2.png';
import { SourceLink } from '../components/site/SourceLink';
import { getEraSource } from '../data/initiatives';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useReveal } from '../hooks/useReveal';
import { useI18n } from '../i18n/I18nProvider';

type AnimalKind = 'all' | 'cats' | 'dogs';

const demoAnimals = [
  { id: 'cat-mira', name: { ru: 'Мира', en: 'Mira' }, kind: 'cats' as const, age: { ru: '2 года', en: '2 years' }, image: cat1, story: { ru: 'Спокойная кошка, которая ценит тихий дом и высокий подоконник.', en: 'A calm cat who values a quiet home and a high windowsill.' } },
  { id: 'cat-luch', name: { ru: 'Луч', en: 'Luch' }, kind: 'cats' as const, age: { ru: '1 год', en: '1 year' }, image: cat2, story: { ru: 'Любопытный кот, быстро осваивает новые комнаты и людей.', en: 'A curious cat who quickly warms up to new rooms and people.' } },
  { id: 'dog-frank', name: { ru: 'Фрэнк', en: 'Frank' }, kind: 'dogs' as const, age: { ru: '3 года', en: '3 years' }, image: dog1, story: { ru: 'Активный пёс для долгих прогулок и последовательного обучения.', en: 'An active dog who enjoys long walks and steady training.' } },
  { id: 'dog-boni', name: { ru: 'Бони', en: 'Boni' }, kind: 'dogs' as const, age: { ru: '8 месяцев', en: '8 months' }, image: dog2, story: { ru: 'Молодая собака, которой нужен терпеливый человек и время на адаптацию.', en: 'A young dog who needs a patient person and time to settle in.' } },
];

export function AnimalsPage() {
  useReveal();
  const { locale } = useI18n();
  const [filter, setFilter] = useState<AnimalKind>('all');
  const [favorites, setFavorites] = useLocalStorage<string[]>('betera-green-animal-favorites', []);
  const visible = useMemo(() => filter === 'all' ? demoAnimals : demoAnimals.filter(animal => animal.kind === filter), [filter]);
  const c = locale === 'ru' ? { title: 'Помощь животным', intro: 'Результат Betera и каталог, который помогает перейти от знакомства с животным к ответственному действию.', result: 'Около 7 тонн корма', demo: 'Демонстрационный каталог', demoText: 'Карточки ниже показывают фильтрацию и избранное. Это не реальные объявления и они не опубликованы от имени приютов или Betera.', filter: 'Фильтр животных', labels: { all: 'Все', cats: 'Кошки', dogs: 'Собаки' }, list: 'Животные в демонстрационном каталоге', profile: 'Демонстрационный профиль', remove: 'Убрать из избранного', add: 'Добавить в избранное', help: 'Ищете реальный способ помочь?', helpText: 'Откройте опубликованные проекты ERA и проверьте актуальные организации, сборы и условия участия.', era: 'Перейти на ERA', petcare: 'Открыть страницу PetCare' } : { title: 'Animal support', intro: 'A documented Betera result and a catalogue that turns getting acquainted into responsible action.', result: 'Around 7 tonnes of food', demo: 'Demo catalogue', demoText: 'The cards below demonstrate filtering and favourites. They are not current adoption listings and are not published on behalf of shelters or Betera.', filter: 'Filter animals', labels: { all: 'All', cats: 'Cats', dogs: 'Dogs' }, list: 'Animals in the demo catalogue', profile: 'Demo profile', remove: 'Remove from favourites', add: 'Add to favourites', help: 'Looking for a real way to help?', helpText: 'Open ERA’s published projects and check current organisations, fundraisers and participation details.', era: 'Visit ERA', petcare: 'Open the PetCare page' };
  const toggleFavorite = (id: string) => setFavorites(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]);

  return (
    <div className="page page--paper animals-page">
      <header className="page-hero animals-page__hero">
        <h1 data-reveal>{c.title}</h1><p data-reveal>{c.intro}</p><strong data-reveal>{c.result}</strong><SourceLink source={getEraSource(locale)} />
      </header>
      <aside className="demo-notice" data-reveal>
        <h2>{c.demo}</h2><p>{c.demoText}</p>
      </aside>
      <div className="filter-bar" aria-label={c.filter}>
        {(['all', 'cats', 'dogs'] as AnimalKind[]).map(item => <button type="button" key={item} className={filter === item ? 'is-active' : ''} aria-pressed={filter === item} onClick={() => setFilter(item)}>{c.labels[item]}</button>)}
      </div>
      <section className="animal-catalog" aria-live="polite">
        <h2 className="sr-only">{c.list}</h2>
        {visible.map(animal => {
          const favorite = favorites.includes(animal.id);
          return (
            <article className="animal-profile" key={animal.id} data-reveal>
              <img src={animal.image} alt={`${c.profile}: ${animal.name[locale]}`} width="1536" height="2048" loading="lazy" />
              <div><h3>{animal.name[locale]}</h3><p>{c.labels[animal.kind]} · {animal.age[locale]}</p><p>{animal.story[locale]}</p>
                <button type="button" aria-pressed={favorite} onClick={() => toggleFavorite(animal.id)}>{favorite ? c.remove : c.add}</button>
              </div>
            </article>
          );
        })}
      </section>
      <section className="animal-action chapter--green">
        <h2>{c.help}</h2><p>{c.helpText}</p><a className="button button--ink" href="https://charity-era.by/" target="_blank" rel="noreferrer">{c.era}</a><Link className="text-action" to="/petcare">{c.petcare}</Link>
      </section>
    </div>
  );
}
