import { SourceLink } from '../components/site/SourceLink';
import { eraSource } from '../data/initiatives';
import { useReveal } from '../hooks/useReveal';

export function AboutPage() {
  useReveal();
  return (
    <div className="page page--paper about-page">
      <header className="page-hero">
        <h1 data-reveal>О концепте</h1>
        <p data-reveal>BETERA GREEN — независимая портфолио-концепция интерактивной платформы. Она не является официальным продуктом Betera.</p>
      </header>
      <section className="about-method chapter--ink">
        <h2 data-reveal>Прозрачность данных</h2>
        <div data-reveal>
          <p>Публичные показатели сопровождаются периодом и ссылкой. Локальные результаты игры и челленджей не смешиваются с корпоративным impact.</p>
          <SourceLink source={eraSource} light />
        </div>
      </section>
      <section className="credits-section">
        <h2 data-reveal>Фотографии и лицензии</h2>
        <ul data-reveal>
          <li><a href="https://commons.wikimedia.org/wiki/File:Recycling_bins_Drammen.jpg">“Recycling bins Drammen”</a> — Peulle, CC0, Wikimedia Commons.</li>
          <li><a href="https://commons.wikimedia.org/wiki/File:New_River_Trail_State_Park_New_River_Cleanup_Day_(14773261007).jpg">“New River Trail State Park New River Cleanup Day”</a> — vastateparksstaff, <a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>, Wikimedia Commons.</li>
          <li><a href="https://commons.wikimedia.org/wiki/File:%D0%9F%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6%D0%B8_%D0%BF%D0%BE%D0%BB%D0%B8%D0%B3%D0%BE%D0%BD%D0%B0._Landscape_polygon._-_panoramio.jpg">“Пейзажи полигона”</a> — Alex A, <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>, Wikimedia Commons.</li>
          <li><a href="https://commons.wikimedia.org/wiki/File:Volunteer_Tree_Planting_120802-F-OS776-021.jpg">“Volunteer Tree Planting”</a> — Airman 1st Class Christopher Tam, public domain, Wikimedia Commons.</li>
          <li>Фотографии животных перенесены из исходного учебного PetCare и используются только в явно обозначенном демонстрационном каталоге.</li>
        </ul>
      </section>
      <section className="about-contact chapter--yellow">
        <h2 data-reveal>Что нужно перед публичным запуском</h2>
        <p data-reveal>Получить разрешение на официальные брендовые материалы и фотографии проектов, проверить актуальность источников, заменить демонстрационные профили животных реальными данными партнёра либо удалить каталог.</p>
      </section>
    </div>
  );
}
