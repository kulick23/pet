import { Link } from 'react-router-dom';
import catLying from '../assets/images/cat-lying.png';
import cat1 from '../assets/images/cat1.png';
import cat2 from '../assets/images/cat2.png';
import dogSitting from '../assets/images/dog-sitting.png';
import dog1 from '../assets/images/dog1.png';
import dog2 from '../assets/images/dog2.png';
import hamster from '../assets/images/hamster.png';
import kit1 from '../assets/items/1.png';
import kit2 from '../assets/items/2.png';
import kit3 from '../assets/items/3.png';
import kit4 from '../assets/items/4.png';
import { AnimalIcon } from '../components/site/AnimalIcon';
import { useReveal } from '../hooks/useReveal';
import { useI18n } from '../i18n/I18nProvider';

const stories = [
  { image: cat1, name: { ru: 'Мира', en: 'Mira' }, note: { ru: 'Тихий дом и высокий подоконник', en: 'A quiet home and a high windowsill' } },
  { image: dog2, name: { ru: 'Бони', en: 'Boni' }, note: { ru: 'Долгие прогулки и терпение', en: 'Long walks and patience' } },
  { image: cat2, name: { ru: 'Луч', en: 'Luch' }, note: { ru: 'Любопытство к людям и комнатам', en: 'Curious about people and new rooms' } },
  { image: dog1, name: { ru: 'Фрэнк', en: 'Frank' }, note: { ru: 'Движение, обучение и новый маршрут', en: 'Movement, training and a new route' } },
];

export function PetCarePage() {
  useReveal();
  const { locale } = useI18n();
  const c = locale === 'ru' ? { title: <>Дом с <span>доверием</span></>, lead: 'PetCare помогает познакомиться с животными, понять их характер и выбрать ответственный способ помощи.', stories: 'Смотреть истории', catalog: 'Открыть каталог', principles: 'Принципы раздела', tags: ['Забота', 'Проверка', 'Ответственность'], stats: [['≈7 т', 'корма передано'], ['4', 'истории для знакомства'], ['ERA', 'проверенный путь помощи']], hamster: 'Хомяк на светлом фоне', understand: 'Сначала понять', understandText: 'Ответственная помощь начинается с потребностей животного: характера, здоровья, привычек и времени на адаптацию.', catIcon: 'Иконка кота', dogIcon: 'Иконка собаки', character: 'Узнать характер', characterText: 'Возраст, привычки и условия адаптации важнее красивой фотографии.', help: 'Помочь осознанно', helpText: 'Корм, волонтёрство или знакомство — у каждого шага должны быть ясные условия.', meet: 'Знакомство без спешки', meetText: 'Истории показывают формат сервиса. Актуальные анкеты и условия всегда проверяйте у выбранной организации.', storyAlt: 'история знакомства', firstDays: 'Первые дни дома', firstText: 'Знакомая игрушка, миска, поводок и запас привычного корма помогают снизить стресс после переезда.', kit: 'Предметы набора', kitItem: 'Предмет набора', ready: 'Готовы помочь?', readyText: 'Откройте каталог, сохраните интересные анкеты и уточните актуальные условия у организации.' } : { title: <>A home built on <span>trust</span></>, lead: 'PetCare helps you meet animals, understand their character and choose a responsible way to help.', stories: 'Meet the animals', catalog: 'Open the catalogue', principles: 'Section principles', tags: ['Care', 'Verification', 'Responsibility'], stats: [['≈7 t', 'of food donated'], ['4', 'stories to explore'], ['ERA', 'a verified path to help']], hamster: 'Hamster on a light background', understand: 'Understand first', understandText: 'Responsible support starts with the animal’s needs: personality, health, habits and time to adjust.', catIcon: 'Cat icon', dogIcon: 'Dog icon', character: 'Learn their character', characterText: 'Age, habits and adjustment needs matter more than a beautiful photo.', help: 'Help with purpose', helpText: 'Food, volunteering or meeting an animal: every step needs clear expectations.', meet: 'Take time to connect', meetText: 'These stories demonstrate the service format. Always check current profiles and conditions with the selected organisation.', storyAlt: 'introduction story', firstDays: 'The first days at home', firstText: 'A familiar toy, bowl, lead and supply of usual food can reduce the stress of moving.', kit: 'Starter kit items', kitItem: 'Starter kit item', ready: 'Ready to help?', readyText: 'Open the catalogue, save profiles that interest you and confirm current conditions with the organisation.' };

  return (
    <div className="petcare-page">
      <section className="petcare-hero">
        <div className="petcare-hero__copy" data-reveal>
          <h1>{c.title}</h1><p className="petcare-lead">{c.lead}</p>
          <div className="petcare-actions">
            <a className="petcare-button" href="#petcare-stories">{c.stories} <AnimalIcon kind="dog" /></a><Link className="petcare-link" to="/animals">{c.catalog}</Link>
          </div>
          <div className="petcare-tags" aria-label={c.principles}>{c.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          <dl className="petcare-stats">
            {c.stats.map(([value, label]) => <div key={value}><dt>{value}</dt><dd>{label}</dd></div>)}
          </dl>
        </div>
        <div className="petcare-hero__visual" aria-hidden="true" data-reveal>
          <div className="petcare-pet petcare-pet--dog"><img src={dogSitting} alt="" /></div>
          <div className="petcare-pet petcare-pet--cat"><img src={catLying} alt="" /></div>
          <div className="petcare-orbit petcare-orbit--cat"><AnimalIcon kind="cat" /></div>
          <div className="petcare-orbit petcare-orbit--dog"><AnimalIcon kind="dog" /></div>
        </div>
      </section>

      <section className="petcare-about">
        <figure data-reveal><img src={hamster} alt={c.hamster} width="1080" height="1080" loading="lazy" /></figure>
        <div className="petcare-about__copy" data-reveal>
          <h2>{c.understand}</h2><p>{c.understandText}</p>
          <div className="petcare-features">
            <article><AnimalIcon kind="cat" title={c.catIcon} /><div><h3>{c.character}</h3><p>{c.characterText}</p></div></article>
            <article><AnimalIcon kind="dog" title={c.dogIcon} /><div><h3>{c.help}</h3><p>{c.helpText}</p></div></article>
          </div>
        </div>
      </section>

      <section className="petcare-stories" id="petcare-stories">
        <div className="petcare-section-title" data-reveal>
          <h2>{c.meet}</h2><p className="petcare-section-note">{c.meetText}</p>
        </div>
        <div className="petcare-gallery">
          {stories.map((story, index) => (
            <figure key={story.name.ru} className={`petcare-story petcare-story--${index + 1}`} data-reveal>
              <img src={story.image} alt={`${story.name[locale]}: ${c.storyAlt}`} width="1536" height="2048" loading="lazy" />
              <figcaption><strong>{story.name[locale]}</strong><span>{story.note[locale]}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="petcare-kit">
        <div data-reveal>
          <h2>{c.firstDays}</h2><p>{c.firstText}</p>
        </div>
        <div className="petcare-kit__items" aria-label={c.kit} data-reveal>
          {[kit1, kit2, kit3, kit4].map((item, index) => <img src={item} alt={`${c.kitItem} ${index + 1}`} key={item} loading="lazy" />)}
        </div>
      </section>

      <section className="petcare-cta">
        <AnimalIcon kind="cat" />
        <div data-reveal><h2>{c.ready}</h2><p>{c.readyText}</p></div><Link className="petcare-button" to="/animals">{c.catalog} <AnimalIcon kind="dog" /></Link>
      </section>
    </div>
  );
}
