import { GreenRushGame } from '../components/game/GreenRushGame';
import { useI18n } from '../i18n/I18nProvider';

export function GamePage() {
  const { locale } = useI18n();
  return (
    <div className="page page--ink game-page">
      <header className="page-hero game-page__hero">
        <h1>Green Rush</h1>
        <p>{locale === 'ru' ? 'Брендированная мини-игра о распознавании материалов. Рекорд хранится только в вашем браузере.' : 'A branded mini-game about recognising materials. Your high score stays in this browser.'}</p>
      </header>
      <GreenRushGame />
      <aside className="game-note">
        <h2>{locale === 'ru' ? 'Как использовать подсказки' : 'How to use the guidance'}</h2>
        <p>{locale === 'ru' ? 'Категории упрощены для игры и не заменяют местные инструкции. Загрязнённые, составные и опасные отходы требуют отдельной проверки.' : 'Categories are simplified for the game and do not replace local guidance. Contaminated, composite and hazardous waste needs separate checking.'}</p>
      </aside>
    </div>
  );
}
