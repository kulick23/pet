import type { Source } from '../../data/initiatives';

export function SourceLink({ source, light = false }: { source: Source; light?: boolean }) {
  return (
    <a className={`source-link${light ? ' source-link--light' : ''}`} href={source.url} target="_blank" rel="noreferrer">
      Источник: {source.title} <span aria-hidden="true">↗</span>
      <small>Проверено: {source.accessed}</small>
    </a>
  );
}
