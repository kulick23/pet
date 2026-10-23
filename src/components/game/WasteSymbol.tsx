import type { WasteItem } from '../../data/game';
import { useI18n } from '../../i18n/I18nProvider';

export function WasteSymbol({ item, compact = false }: { item: WasteItem; compact?: boolean }) {
  const { locale } = useI18n();
  const common = { fill: item.color, stroke: '#14161d', strokeWidth: 4 };
  return (
    <svg className={`waste-symbol${compact ? ' waste-symbol--compact' : ''}`} viewBox="0 0 180 220" role="img" aria-label={item.name[locale]}>
      {item.form === 'sheet' && <path d="M35 22h90l22 24v150H35z M125 22v28h22 M54 82h74 M54 110h62 M54 138h70" {...common} fillRule="evenodd" />}
      {item.form === 'box' && <path d="M30 62l60-34 60 34v94l-60 36-60-36z M30 62l60 35 60-35 M90 97v95" {...common} />}
      {item.form === 'bottle' && <path d="M72 22h36v30l16 22v112c0 12-9 20-20 20H76c-11 0-20-8-20-20V74l16-22z M70 108h40" {...common} />}
      {item.form === 'jar' && <path d="M48 42h84v26l-9 10v108c0 11-9 20-20 20H77c-11 0-20-9-20-20V78l-9-10z M48 58h84" {...common} />}
      {item.form === 'can' && <path d="M52 35c0-10 76-10 76 0v150c0 16-76 16-76 0z M52 35c0 12 76 12 76 0 M52 185c0-12 76-12 76 0" {...common} />}
    </svg>
  );
}
