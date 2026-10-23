import { SourceLink } from '../components/site/SourceLink';
import { getEraSource } from '../data/initiatives';
import { useReveal } from '../hooks/useReveal';
import { useI18n } from '../i18n/I18nProvider';

export function AboutPage() {
  useReveal();
  const { locale } = useI18n();
  const c = locale === 'ru' ? { title: 'О концепте', intro: 'BETERA GREEN — независимая портфолио-концепция интерактивной платформы. Она не является официальным продуктом Betera.', transparency: 'Прозрачность данных', data: 'Публичные показатели сопровождаются периодом и ссылкой. Локальные результаты игры и челленджей не смешиваются с корпоративным impact.', photos: 'Фотографии и лицензии', animals: 'Фотографии животных перенесены из исходного учебного PetCare и используются только в явно обозначенном демонстрационном каталоге.', launch: 'Что нужно перед публичным запуском', launchText: 'Получить разрешение на официальные брендовые материалы и фотографии проектов, проверить актуальность источников, заменить демонстрационные профили животных реальными данными партнёра либо удалить каталог.' } : { title: 'About the concept', intro: 'BETERA GREEN is an independent portfolio concept for an interactive platform. It is not an official Betera product.', transparency: 'Data transparency', data: 'Public figures include a reporting period and source link. Local game and challenge results are kept separate from corporate impact.', photos: 'Photography and licences', animals: 'Animal photos come from the original educational PetCare project and appear only in the clearly labelled demo catalogue.', launch: 'Before a public launch', launchText: 'Secure permission for official brand materials and project photography, verify that sources remain current, and replace demo animal profiles with current partner data or remove the catalogue.' };
  return (
    <div className="page page--paper about-page">
      <header className="page-hero">
        <h1 data-reveal>{c.title}</h1><p data-reveal>{c.intro}</p>
      </header>
      <section className="about-method chapter--ink">
        <h2 data-reveal>{c.transparency}</h2>
        <div data-reveal>
          <p>{c.data}</p><SourceLink source={getEraSource(locale)} light />
        </div>
      </section>
      <section className="credits-section">
        <h2 data-reveal>{c.photos}</h2>
        <ul data-reveal>
          <li><a href="https://commons.wikimedia.org/wiki/File:Recycling_bins_Drammen.jpg">“Recycling bins Drammen”</a> — Peulle, CC0, Wikimedia Commons.</li>
          <li><a href="https://commons.wikimedia.org/wiki/File:New_River_Trail_State_Park_New_River_Cleanup_Day_(14773261007).jpg">“New River Trail State Park New River Cleanup Day”</a> — vastateparksstaff, <a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>, Wikimedia Commons.</li>
          <li><a href="https://commons.wikimedia.org/wiki/File:%D0%9F%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6%D0%B8_%D0%BF%D0%BE%D0%BB%D0%B8%D0%B3%D0%BE%D0%BD%D0%B0._Landscape_polygon._-_panoramio.jpg">“Пейзажи полигона”</a> — Alex A, <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>, Wikimedia Commons.</li>
          <li><a href="https://commons.wikimedia.org/wiki/File:Volunteer_Tree_Planting_120802-F-OS776-021.jpg">“Volunteer Tree Planting”</a> — Airman 1st Class Christopher Tam, public domain, Wikimedia Commons.</li>
          <li>{c.animals}</li>
        </ul>
      </section>
      <section className="about-contact chapter--yellow">
        <h2 data-reveal>{c.launch}</h2><p data-reveal>{c.launchText}</p>
      </section>
    </div>
  );
}
