import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories, wasteItems, type WasteCategory } from '../../data/game';
import { WasteSymbol } from './WasteSymbol';
import { useI18n } from '../../i18n/I18nProvider';

const previewItem = wasteItems.find(item => item.id === 'water-bottle')!;

export function SortingPreview() {
  const { locale } = useI18n();
  const [answer, setAnswer] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const choose = (category: WasteCategory) => {
    setAnswer(category === previewItem.category ? 'correct' : 'wrong');
  };

  return (
    <div className={`sorting-preview sorting-preview--${answer}`} data-ui>
      <div className="sorting-preview__object">
        <WasteSymbol item={previewItem} compact />
        <p>{previewItem.name[locale]}</p>
      </div>
      <div className="sorting-preview__choices" aria-label={locale === 'ru' ? 'Выберите категорию' : 'Choose a category'}>
        {categories.map(category => (
          <button type="button" key={category.id} onClick={() => choose(category.id)}>{category.name[locale]}</button>
        ))}
      </div>
      <p className="sorting-preview__feedback" aria-live="polite">
        {answer === 'idle' && (locale === 'ru' ? 'Куда отправить этот предмет? Попробуйте.' : 'Where does this item go? Give it a try.')}
        {answer === 'correct' && (locale === 'ru' ? 'Верно. ПЭТ-бутылка идёт в пластик.' : 'Correct. A PET bottle goes with plastic.')}
        {answer === 'wrong' && (locale === 'ru' ? 'Не туда. Посмотрите на материал, а не форму.' : 'Try again. Look at the material, not the shape.')}
      </p>
      {answer === 'correct' && <Link className="text-action" to="/green-rush">{locale === 'ru' ? 'Открыть Green Rush' : 'Open Green Rush'}</Link>}
    </div>
  );
}
