import cleanupImage from '../assets/editorial/new-river-trail-state-park-new-river.jpg';
import forestImage from '../assets/editorial/landscape-polygon-panoramio.jpg';
import recyclingImage from '../assets/editorial/recycling-bins-drammen.jpg';
import plantingImage from '../assets/editorial/volunteer-tree-planting-120802-f-os776-021.jpg';
import dogImage from '../assets/images/dog1.png';
import type { Locale } from '../i18n/I18nProvider';

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

const englishBySlug: Record<string, Partial<Initiative>> = {
  'green-week': {
    title: 'Betera Green Week', category: 'Лес', summary: 'Restoring storm-damaged forest became a shared mission for the team, athletes and partners.',
    description: ['Participants planted more than 20,000 spruce and pine seedlings in a part of the Mogilev region damaged by a severe storm.', 'The project combined practical forest restoration with everyday environmental habits. The platform presents the result as a documented event rather than a live counter.'],
    result: '20,000+ trees', imageAlt: 'A volunteer planting a young tree', imageNote: 'Context photo of volunteer tree planting, not a Betera project photo.',
    source: { title: 'Official Betera Green Week publication', url: initiatives[0].source.url, accessed: 'October 22, 2026' },
  },
  plogging: {
    title: 'Plogging in Minsk', category: 'Команда', summary: 'A city cleanup combines movement, teamwork and a visible local result.',
    description: ['During a summer plogging event in Grekova Park, participants collected 102 kg of litter.', 'ERA reports more than 600 kg collected across four plogging events. The platform separates the single-event result from the cumulative total.'],
    result: '102 kg in one event', imageAlt: 'Volunteers removing large litter near water', imageNote: 'Context photo of a cleanup, not a Betera project photo.',
  },
  'green-office': {
    title: 'Green Office', category: 'Отходы', summary: 'Environmental practice starts inside the office, with separate routes for batteries, bottle caps and waste paper.',
    description: ['In 2018, branded bottle-cap containers appeared in Minsk shopping centres alongside an office battery container.', 'Since late 2022, the company has also sent waste paper for recycling. These processes inspired the interactive language of BETERA GREEN: every material needs to find its route.'],
    result: 'Systematic collection since 2018', imageAlt: 'A row of municipal recycling bins', imageNote: 'Context photo of recycling infrastructure, not a Betera facility.',
  },
  'eco-merch': {
    title: 'STAY.ECO', category: 'Отходы', summary: 'Materials collected in the office return to use as new objects.',
    description: ['The bag described by the company was made entirely from materials collected in the office: plastic bags and part of an old lanyard.', 'The project goes beyond decorative green merchandise: the material and its origin become part of the product.'],
    result: '100% collected materials', imageAlt: 'Infrastructure for separated material collection', imageNote: 'Context photo of recycling, not a Betera merchandise photo.',
    source: { title: 'How to make sustainable merchandise: the Betera case', url: initiatives[3].source.url, accessed: 'October 22, 2026' },
  },
  'animal-aid': {
    title: 'Animal support', category: 'Животные', summary: 'Support for animal welfare organisations includes food donations and educational projects.',
    description: ['According to ERA, Betera has donated around 7 tonnes of food to volunteers and animal welfare groups over the lifetime of its initiatives.', 'In 2026, Beteratruck delivered 1.5 tonnes of food to organisations across Belarus, while another charity project provided 638 kg to ZOOchance.'],
    result: 'Around 7 tonnes of food', imageAlt: 'A dog outdoors', imageNote: 'Illustrative photo from the original PetCare project, not an animal from a named organisation.',
  },
  'forest-context': {
    title: 'The forest returns', category: 'Лес', summary: 'Planting is only the beginning; the real result is how the land recovers over time.',
    description: ['BETERA GREEN connects the published Green Week result with the forest’s long life cycle. The platform does not model an unverified survival count for the seedlings.', 'Instead of a forecast, visitors see the planting date, location and original public result.'],
    result: 'Mogilev region', imageAlt: 'Mixed forest on an autumn day', imageNote: 'Open-collection forest landscape, not the Green Week location.',
  },
};

const categoryEnglish: Record<InitiativeCategory, InitiativeCategory> = {
  'Лес': 'Лес', 'Отходы': 'Отходы', 'Команда': 'Команда', 'Животные': 'Животные',
};

export const categoryLabels: Record<Locale, Record<InitiativeCategory, string>> = {
  ru: { 'Лес': 'Лес', 'Отходы': 'Отходы', 'Команда': 'Команда', 'Животные': 'Животные' },
  en: { 'Лес': 'Forest', 'Отходы': 'Waste', 'Команда': 'Team', 'Животные': 'Animals' },
};

export function getEraSource(locale: Locale): Source {
  return locale === 'ru' ? eraSource : { ...eraSource, title: 'ERA — Betera corporate social responsibility', accessed: 'October 22, 2026' };
}

export function getInitiatives(locale: Locale): Initiative[] {
  if (locale === 'ru') return initiatives;
  const source = getEraSource(locale);
  return initiatives.map(item => ({ ...item, ...englishBySlug[item.slug], category: categoryEnglish[item.category], source: englishBySlug[item.slug]?.source ?? source }));
}

export function getImpactMetrics(locale: Locale) {
  if (locale === 'ru') return impactMetrics;
  const source = getEraSource(locale);
  return [
    { value: '20,000+', label: 'trees planted across the country', period: 'Cumulative total published in 2026', source },
    { value: '≈7,000 kg', label: 'of food donated to volunteers and animal welfare groups', period: 'Cumulative total published in 2026', source },
    { value: '600+ kg', label: 'of litter collected across 4 plogging events', period: 'Cumulative total published in 2026', source },
    { value: '18%+', label: 'of employees regularly join volunteer projects', period: 'Figure published in 2026', source },
  ];
}

export function getTimeline(locale: Locale) {
  if (locale === 'ru') return timeline;
  return [
    { year: 2018, title: 'Separated collection enters the office', text: 'Containers for bottle caps and batteries establish a systematic practice.' },
    { year: 2022, title: 'Waste paper goes to recycling', text: 'The company reports regular recycling of office paper from the end of the year.' },
    { year: 2023, title: 'Material becomes an object', text: 'STAY.ECO presents merchandise made from materials collected in the office.' },
    { year: 2026, title: 'Green Week reaches the forest', text: '20,000 seedlings are planted in the Mogilev region as plogging and animal support continue to grow.' },
  ];
}
