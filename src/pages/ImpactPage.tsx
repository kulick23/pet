import { useState } from 'react';
import { SourceLink } from '../components/site/SourceLink';
import { getImpactMetrics, getTimeline } from '../data/initiatives';
import { useReveal } from '../hooks/useReveal';
import { useI18n } from '../i18n/I18nProvider';

export function ImpactPage() {
  useReveal();
  const { locale } = useI18n();
  const timeline = getTimeline(locale);
  const impactMetrics = getImpactMetrics(locale);
  const c = locale === 'ru' ? { title: 'Результаты без имитации live', intro: 'Показатели опубликованы ERA. Период и источник остаются рядом с каждой цифрой.', mapLabel: 'Схематичная карта Беларуси с направлениями проектов', mapTitle: 'Карта экологических действий в Беларуси', mapDesc: 'Схематичная карта показывает Минск и Могилёвскую область как упомянутые в источниках территории.', minsk: 'Минск', mogilev: 'Могилёвская область', path: 'Путь от контейнера к системе', years: 'Годы инициатив', metrics: 'Опубликованные показатели' } : { title: 'Impact without simulated live data', intro: 'ERA published these figures. Each number keeps its reporting period and source close by.', mapLabel: 'Diagram map of Belarus showing project areas', mapTitle: 'Map of environmental action in Belarus', mapDesc: 'The diagram highlights Minsk and the Mogilev region, the locations named in published sources.', minsk: 'Minsk', mogilev: 'Mogilev region', path: 'From a container to a system', years: 'Initiative years', metrics: 'Published figures' };
  const [selectedYear, setSelectedYear] = useState(2026);
  const selected = timeline.find(item => item.year === selectedYear) ?? timeline[0];

  return (
    <div className="page page--ink impact-page">
      <header className="page-hero impact-page__hero">
        <h1 data-reveal>{c.title}</h1><p data-reveal>{c.intro}</p>
      </header>
      <section className="impact-map-section" data-reveal>
        <div className="belarus-map" aria-label={c.mapLabel}>
          <svg viewBox="0 0 700 500" role="img" aria-labelledby="map-title map-description">
            <title id="map-title">{c.mapTitle}</title><desc id="map-description">{c.mapDesc}</desc>
            <path d="M116 148 208 70l118 13 62-39 102 58 94 4 52 97-30 85 44 73-92 65-107-12-72 45-89-34-108 13-55-82-65-60 28-92z" />
            <g className="map-point map-point--minsk"><circle cx="337" cy="267" r="12" /><text x="356" y="273">{c.minsk}</text></g>
            <g className="map-point map-point--mogilev"><circle cx="474" cy="232" r="12" /><text x="452" y="214" textAnchor="end">{c.mogilev}</text></g>
          </svg>
        </div>
        <div className="timeline-control">
          <h2>{c.path}</h2><div className="timeline-years" role="group" aria-label={c.years}>
            {timeline.map(item => <button aria-pressed={selectedYear === item.year} type="button" key={item.year} onClick={() => setSelectedYear(item.year)}>{item.year}</button>)}
          </div>
          <div className="timeline-story" aria-live="polite">
            <strong>{selected.title}</strong><p>{selected.text}</p>
          </div>
        </div>
      </section>
      <section className="verified-metrics chapter--yellow">
        <h2 data-reveal>{c.metrics}</h2>
        {impactMetrics.map(metric => (
          <article key={metric.label} data-reveal>
            <strong>{metric.value}</strong><p className="metric-label">{metric.label}</p><p>{metric.period}</p><SourceLink source={metric.source} />
          </article>
        ))}
      </section>
    </div>
  );
}
