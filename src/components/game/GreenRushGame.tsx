import { useEffect, useReducer, useRef } from 'react';
import { categories, wasteItems, type WasteCategory } from '../../data/game';
import { createGameState, gameReducer } from '../../game/gameReducer';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { WasteSymbol } from './WasteSymbol';

function playTone(correct: boolean) {
  const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return;
  const context = new AudioContextClass();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = 'sine';
  oscillator.frequency.value = correct ? 620 : 180;
  gain.gain.setValueAtTime(0.08, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.14);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.15);
  oscillator.addEventListener('ended', () => void context.close());
}

export function GreenRushGame() {
  const [savedBest, setSavedBest] = useLocalStorage('betera-green-best-score', 0);
  const [savedSound, setSavedSound] = useLocalStorage('betera-green-sound', true);
  const [state, dispatch] = useReducer(gameReducer, createGameState(savedBest, savedSound));
  const feedbackRef = useRef<HTMLParagraphElement>(null);
  const currentItem = wasteItems[state.itemIndex];

  useEffect(() => {
    if (state.phase !== 'playing') return;
    const timer = window.setInterval(() => dispatch({ type: 'tick' }), 1000);
    return () => window.clearInterval(timer);
  }, [state.phase]);

  useEffect(() => {
    if (!state.feedback) return;
    if (state.sound) playTone(state.feedback.correct);
    feedbackRef.current?.focus();
    const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 80 : 650;
    const next = window.setTimeout(() => dispatch({ type: 'next' }), delay);
    return () => window.clearTimeout(next);
  }, [state.feedback, state.sound]);

  useEffect(() => {
    setSavedBest(state.bestScore);
  }, [setSavedBest, state.bestScore]);

  useEffect(() => {
    setSavedSound(state.sound);
  }, [setSavedSound, state.sound]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'm') dispatch({ type: 'sound' });
      if (event.code === 'Space' && (state.phase === 'playing' || state.phase === 'paused')) {
        event.preventDefault();
        dispatch({ type: state.phase === 'playing' ? 'pause' : 'resume' });
      }
      if (state.phase !== 'playing') return;
      const category = categories.find(entry => entry.key === event.key);
      if (category) dispatch({ type: 'answer', category: category.id });
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [state.phase]);

  const start = () => dispatch({ type: 'start', startIndex: Math.floor(Math.random() * wasteItems.length) });
  const accuracy = state.answers ? Math.round((state.correctAnswers / state.answers) * 100) : 0;

  return (
    <section className="green-rush" data-ui aria-label="Green Rush — игра о сортировке отходов">
      {state.phase === 'intro' && (
        <div className="game-screen game-screen--intro">
          <p className="game-lead">45 секунд. 4 потока. Решения становятся быстрее.</p>
          <h2>Green Rush</h2>
          <p>Определяйте материал, собирайте комбо и открывайте короткие правила сортировки.</p>
          <div className="game-actions">
            <button className="button button--green" type="button" onClick={() => dispatch({ type: 'tutorial' })}>Как играть</button>
            <button className="button button--light" type="button" onClick={start}>Начать сразу</button>
          </div>
          <p className="game-record">Личный рекорд: {state.bestScore} очков</p>
        </div>
      )}

      {state.phase === 'tutorial' && (
        <div className="game-screen game-screen--tutorial">
          <h2>Материал важнее формы</h2>
          <div className="tutorial-flow">
            <span>Предмет</span><b aria-hidden="true">→</b><span>Категория</span><b aria-hidden="true">→</b><span>Пояснение</span>
          </div>
          <p>Нажмите категорию или клавиши 1–4. Пробел ставит игру на паузу, M выключает звук.</p>
          <p>Правила в игре упрощены для обучения. Всегда сверяйтесь с маркировкой и требованиями местного оператора.</p>
          <button className="button button--green" type="button" onClick={start}>Ясно, начать</button>
        </div>
      )}

      {(state.phase === 'playing' || state.phase === 'paused') && (
        <div className="game-screen game-screen--playing">
          <div className="game-hud">
            <div><span>Время</span><strong>{state.remaining}</strong></div>
            <div><span>Очки</span><strong>{state.score}</strong></div>
            <div><span>Комбо</span><strong>×{state.combo}</strong></div>
            <button type="button" onClick={() => dispatch({ type: 'sound' })} aria-label={state.sound ? 'Выключить звук' : 'Включить звук'}>{state.sound ? 'Звук: да' : 'Звук: нет'}</button>
            <button type="button" onClick={() => dispatch({ type: state.phase === 'playing' ? 'pause' : 'resume' })}>{state.phase === 'playing' ? 'Пауза' : 'Продолжить'}</button>
          </div>
          <div className={`game-object${state.feedback ? state.feedback.correct ? ' is-correct' : ' is-wrong' : ''}`} aria-live="polite">
            <WasteSymbol item={currentItem} />
            <h3>{currentItem.name}</h3>
          </div>
          <div className="game-bins" aria-label="Категории отходов">
            {categories.map(category => (
              <button
                type="button"
                key={category.id}
                disabled={Boolean(state.feedback) || state.phase === 'paused'}
                onClick={() => dispatch({ type: 'answer', category: category.id as WasteCategory })}
                style={{ '--bin-color': category.color } as React.CSSProperties}
              >
                <span>{category.key}</span>{category.name}
              </button>
            ))}
          </div>
          {state.feedback && <p ref={feedbackRef} tabIndex={-1} className={`game-feedback ${state.feedback.correct ? 'is-correct' : 'is-wrong'}`}>{state.feedback.correct ? 'Верно. ' : 'Промах. '}{state.feedback.text}</p>}
          {state.phase === 'paused' && <div className="game-pause"><strong>Пауза</strong><button type="button" onClick={() => dispatch({ type: 'resume' })}>Продолжить</button></div>}
        </div>
      )}

      {state.phase === 'result' && (
        <div className="game-screen game-screen--result">
          <h2>{state.score >= state.bestScore && state.score > 0 ? 'Новый рекорд' : 'Смена окончена'}</h2>
          <div className="result-score">{state.score}</div>
          <dl>
            <div><dt>Точность</dt><dd>{accuracy}%</dd></div>
            <div><dt>Лучшее комбо</dt><dd>×{state.bestCombo}</dd></div>
            <div><dt>Ответов</dt><dd>{state.answers}</dd></div>
          </dl>
          <button className="button button--green" type="button" onClick={start}>Играть ещё раз</button>
        </div>
      )}
    </section>
  );
}
