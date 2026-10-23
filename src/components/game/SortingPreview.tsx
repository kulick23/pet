import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories, wasteItems, type WasteCategory } from '../../data/game';
import { WasteSymbol } from './WasteSymbol';

const previewItem = wasteItems.find(item => item.id === 'water-bottle')!;

export function SortingPreview() {
  const [answer, setAnswer] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const choose = (category: WasteCategory) => {
    setAnswer(category === previewItem.category ? 'correct' : 'wrong');
  };

  return (
    <div className={`sorting-preview sorting-preview--${answer}`} data-ui>
      <div className="sorting-preview__object">
        <WasteSymbol item={previewItem} compact />
        <p>{previewItem.name}</p>
      </div>
      <div className="sorting-preview__choices" aria-label="Выберите категорию">
        {categories.map(category => (
          <button type="button" key={category.id} onClick={() => choose(category.id)}>{category.name}</button>
        ))}
      </div>
      <p className="sorting-preview__feedback" aria-live="polite">
        {answer === 'idle' && 'Куда отправить этот предмет? Попробуйте.'}
        {answer === 'correct' && 'Верно. ПЭТ-бутылка идёт в пластик.'}
        {answer === 'wrong' && 'Не туда. Посмотрите на материал, а не форму.'}
      </p>
      {answer === 'correct' && <Link className="text-action" to="/green-rush">Открыть Green Rush</Link>}
    </div>
  );
}
