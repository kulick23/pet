import type { Source } from '../../data/initiatives';
import { useI18n } from '../../i18n/I18nProvider';

export function SourceLink({ source, light = false }: { source: Source; light?: boolean }) {
  const { locale } = useI18n();
  return (
    <a className={`source-link${light ? ' source-link--light' : ''}`} href={source.url} target="_blank" rel="noreferrer">
      {locale === 'ru' ? 'Источник' : 'Source'}: {source.title} <span aria-hidden="true">↗</span>
      <small>{locale === 'ru' ? 'Проверено' : 'Accessed'}: {source.accessed}</small>
    </a>
  );
}
