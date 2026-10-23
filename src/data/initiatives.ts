import cleanupImage from '../assets/editorial/new-river-trail-state-park-new-river.jpg';
import forestImage from '../assets/editorial/landscape-polygon-panoramio.jpg';
import recyclingImage from '../assets/editorial/recycling-bins-drammen.jpg';
import plantingImage from '../assets/editorial/volunteer-tree-planting-120802-f-os776-021.jpg';
import dogImage from '../assets/images/dog1.png';

export type InitiativeCategory = 'Лес' | 'Отходы' | 'Команда' | 'Животные';

export type Source = {
  title: string;
  url: string;
  accessed: string;
};

export type Initiative = {
  slug: string;
  title: string;
  category: InitiativeCategory;
  year: number;
  summary: string;
  description: string[];
  result: string;
  image: string;
  imageAlt: string;
  imageNote: string;
  source: Source;
};

export const eraSource: Source = {
  title: 'ERA — корпоративная социальная ответственность Betera',
  url: 'https://charity-era.by/',
  accessed: '22 октября 2026',
};

export const initiatives: Initiative[] = [
  {
    slug: 'green-week',
    title: 'Betera Green Week',
    category: 'Лес',
    year: 2026,
    summary: 'Восстановление пострадавшего леса стало общей задачей команды, спортсменов и партнёров.',
    description: [
      'В Могилёвской области участники инициативы высадили более 20 000 саженцев ели и сосны на территории, повреждённой сильным ураганом.',
      'Проект соединил практическую помощь лесу с формированием экологических привычек. В платформе результат показан как зафиксированное событие, а не live-счётчик.',
    ],
    result: '20 000+ деревьев',
    image: plantingImage,
    imageAlt: 'Волонтёр высаживает молодое дерево',
    imageNote: 'Контекстная фотография волонтёрской посадки, не съёмка проекта Betera.',
    source: {
      title: 'Официальная публикация Betera о Green Week',
      url: 'https://www.linkedin.com/posts/betera-belarus_betera-beteragreenweek-activity-7447296479632789504-KVKB',
      accessed: '22 октября 2026',
    },
  },
  {
    slug: 'plogging',
    title: 'Плоггинг в Минске',
    category: 'Команда',
    year: 2026,
    summary: 'Уборка города соединяет движение, командную работу и заметный локальный результат.',
    description: [
      'Во время летнего плоггинга в парке имени Грековой участники собрали 102 кг мусора.',
      'В сводной статистике ERA сообщается более чем о 600 кг мусора, собранного за четыре плоггинга. На странице эти значения показаны отдельно, чтобы не смешивать событие и накопительный итог.',
    ],
    result: '102 кг за событие',
    image: cleanupImage,
    imageAlt: 'Волонтёры убирают крупный мусор у воды',
    imageNote: 'Контекстная фотография уборки, не съёмка проекта Betera.',
    source: eraSource,
  },
  {
    slug: 'green-office',
    title: 'Green Office',
    category: 'Отходы',
    year: 2018,
    summary: 'Экологическая практика начинается внутри офиса: батарейки, крышечки и макулатура идут разными маршрутами.',
    description: [
      'В 2018 году появились брендированные контейнеры для крышечек в торговых центрах Минска и офисный контейнер для батареек.',
      'С конца 2022 года компания также передаёт макулатуру на переработку. Эти процессы стали основой интерактивного языка BETERA GREEN: каждый материал должен найти свой путь.',
    ],
    result: 'Системный сбор с 2018 года',
    image: recyclingImage,
    imageAlt: 'Ряд городских контейнеров для раздельного сбора',
    imageNote: 'Контекстная фотография инфраструктуры сортировки, не объект Betera.',
    source: eraSource,
  },
  {
    slug: 'eco-merch',
    title: 'STAY.ECO',
    category: 'Отходы',
    year: 2023,
    summary: 'Собранные в офисе материалы возвращаются в использование в виде новых вещей.',
    description: [
      'Описанная компанией сумка изготовлена на 100% из собранных в офисе материалов: полиэтиленовых пакетов и части старого ланьярда.',
      'Проект показывает более сильный подход, чем декоративный “зелёный” мерч: материал и его происхождение становятся частью продукта.',
    ],
    result: '100% собранных материалов',
    image: recyclingImage,
    imageAlt: 'Инфраструктура для раздельного сбора материалов',
    imageNote: 'Контекстная фотография сортировки, не фотография мерча Betera.',
    source: {
      title: 'Как сделать экологичный мерч: опыт Betera',
      url: 'https://csr.betera.by/tpost/mjrissnao1-kak-sdelat-ekologichnii-merch-opit-beter',
      accessed: '22 октября 2026',
    },
  },
  {
    slug: 'animal-aid',
    title: 'Помощь животным',
    category: 'Животные',
    year: 2026,
    summary: 'Поддержка организаций по защите животных включает корм и просветительские проекты.',
    description: [
      'По данным ERA, Betera передала волонтёрам и зоозащитникам около 7 тонн корма за всё время инициатив.',
      'В 2026 году Beteratruck доставил 1,5 тонны корма организациям по всей Беларуси, а ещё 638 кг передали “ЗООшансу” по итогам отдельного благотворительного проекта.',
    ],
    result: 'Около 7 тонн корма',
    image: dogImage,
    imageAlt: 'Собака на улице',
    imageNote: 'Иллюстративная фотография из исходного PetCare, не животное конкретной организации.',
    source: eraSource,
  },
  {
    slug: 'forest-context',
    title: 'Лес возвращается',
    category: 'Лес',
    year: 2026,
    summary: 'Посадка — это начало: результат измеряется тем, как территория восстанавливается со временем.',
    description: [
      'BETERA GREEN связывает опубликованный результат Green Week с долгим жизненным циклом леса. Платформа не моделирует неподтверждённое количество выживших саженцев.',
      'Вместо прогнозной цифры пользователь видит дату посадки, место и исходный публичный результат.',
    ],
    result: 'Могилёвская область',
    image: forestImage,
    imageAlt: 'Смешанный лес в осенний день',
    imageNote: 'Лесной пейзаж из открытой коллекции, не место проведения Green Week.',
    source: eraSource,
  },
];

export const impactMetrics = [
  { value: '20 000+', label: 'деревьев высажено по стране', period: 'Накопительный итог, опубликован в 2026', source: eraSource },
  { value: '≈7 000 кг', label: 'корма передано волонтёрам и зоозащитникам', period: 'Накопительный итог, опубликован в 2026', source: eraSource },
  { value: '600+ кг', label: 'мусора собрано за 4 плоггинга', period: 'Накопительный итог, опубликован в 2026', source: eraSource },
  { value: '18%+', label: 'сотрудников регулярно участвуют в волонтёрских проектах', period: 'Показатель, опубликован в 2026', source: eraSource },
];

export const timeline = [
  { year: 2018, title: 'Раздельный сбор входит в офис', text: 'Контейнеры для крышечек и батареек запускают системную практику.' },
  { year: 2022, title: 'Макулатура идёт на переработку', text: 'Компания описывает регулярную передачу офисной бумаги на переработку с конца года.' },
  { year: 2023, title: 'Материал становится вещью', text: 'STAY.ECO показывает мерч из собранных в офисе материалов.' },
  { year: 2026, title: 'Green Week выходит в лес', text: '20 000 саженцев высажены в Могилёвской области; параллельно растут плоггинг и помощь животным.' },
];
