import { GreenRushGame } from '../components/game/GreenRushGame';

export function GamePage() {
  return (
    <div className="page page--ink game-page">
      <header className="page-hero game-page__hero">
        <h1>Green Rush</h1>
        <p>Брендированная мини-игра о распознавании материалов. Рекорд хранится только в вашем браузере.</p>
      </header>
      <GreenRushGame />
      <aside className="game-note">
        <h2>Как использовать подсказки</h2>
        <p>Категории упрощены для игры и не заменяют местные инструкции. Загрязнённые, составные и опасные отходы требуют отдельной проверки.</p>
      </aside>
    </div>
  );
}
