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

const stories = [
  { image: cat1, name: 'Мира', note: 'Тихий дом и высокий подоконник' },
  { image: dog2, name: 'Бони', note: 'Долгие прогулки и терпение' },
  { image: cat2, name: 'Луч', note: 'Любопытство к людям и комнатам' },
  { image: dog1, name: 'Фрэнк', note: 'Движение, обучение и новый маршрут' },
];

export function PetCarePage() {
  useReveal();

  return (
    <div className="petcare-page">
      <section className="petcare-hero">
        <div className="petcare-hero__copy" data-reveal>
          <h1>Дом с <span>доверием</span></h1>
          <p className="petcare-lead">PetCare помогает познакомиться с животными, понять их характер и выбрать ответственный способ помощи.</p>
          <div className="petcare-actions">
            <a className="petcare-button" href="#petcare-stories">Смотреть истории <AnimalIcon kind="dog" /></a>
            <Link className="petcare-link" to="/animals">Открыть каталог</Link>
          </div>
          <div className="petcare-tags" aria-label="Принципы раздела"><span>Забота</span><span>Проверка</span><span>Ответственность</span></div>
          <dl className="petcare-stats">
            <div><dt>≈7 т</dt><dd>корма передано</dd></div>
            <div><dt>4</dt><dd>истории для знакомства</dd></div>
            <div><dt>ERA</dt><dd>проверенный путь помощи</dd></div>
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
        <figure data-reveal><img src={hamster} alt="Хомяк на светлом фоне" width="1080" height="1080" loading="lazy" /></figure>
        <div className="petcare-about__copy" data-reveal>
          <h2>Сначала понять</h2>
          <p>Ответственная помощь начинается с потребностей животного: характера, здоровья, привычек и времени на адаптацию.</p>
          <div className="petcare-features">
            <article><AnimalIcon kind="cat" title="Иконка кота" /><div><h3>Узнать характер</h3><p>Возраст, привычки и условия адаптации важнее красивой фотографии.</p></div></article>
            <article><AnimalIcon kind="dog" title="Иконка собаки" /><div><h3>Помочь осознанно</h3><p>Корм, волонтёрство или знакомство — у каждого шага должны быть ясные условия.</p></div></article>
          </div>
        </div>
      </section>

      <section className="petcare-stories" id="petcare-stories">
        <div className="petcare-section-title" data-reveal>
          <h2>Знакомство без спешки</h2>
          <p className="petcare-section-note">Истории показывают формат сервиса. Актуальные анкеты и условия всегда проверяйте у выбранной организации.</p>
        </div>
        <div className="petcare-gallery">
          {stories.map((story, index) => (
            <figure key={story.name} className={`petcare-story petcare-story--${index + 1}`} data-reveal>
              <img src={story.image} alt={`${story.name}: история знакомства`} width="1536" height="2048" loading="lazy" />
              <figcaption><strong>{story.name}</strong><span>{story.note}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="petcare-kit">
        <div data-reveal>
          <h2>Первые дни дома</h2>
          <p>Знакомая игрушка, миска, поводок и запас привычного корма помогают снизить стресс после переезда.</p>
        </div>
        <div className="petcare-kit__items" aria-label="Предметы набора" data-reveal>
          {[kit1, kit2, kit3, kit4].map((item, index) => <img src={item} alt={`Предмет набора ${index + 1}`} key={item} loading="lazy" />)}
        </div>
      </section>

      <section className="petcare-cta">
        <AnimalIcon kind="cat" />
        <div data-reveal><h2>Готовы помочь?</h2><p>Откройте каталог, сохраните интересные анкеты и уточните актуальные условия у организации.</p></div>
        <Link className="petcare-button" to="/animals">Открыть каталог <AnimalIcon kind="dog" /></Link>
      </section>
    </div>
  );
}
