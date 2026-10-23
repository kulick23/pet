import { useEffect, useReducer, useRef } from 'react';
import { categories, wasteItems, type WasteCategory } from '../../data/game';
import { createGameState, gameReducer } from '../../game/gameReducer';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { WasteSymbol } from './WasteSymbol';
import { useI18n } from '../../i18n/I18nProvider';

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
  const { locale } = useI18n();
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
  const c = locale === 'ru' ? {
    aria: 'Green Rush — игра о сортировке отходов', lead: '45 секунд. 4 потока. Решения становятся быстрее.', intro: 'Определяйте материал, собирайте комбо и открывайте короткие правила сортировки.', how: 'Как играть', start: 'Начать сразу', record: 'Личный рекорд', points: 'очков', material: 'Материал важнее формы', flow: ['Предмет', 'Категория', 'Пояснение'], keys: 'Нажмите категорию или клавиши 1–4. Пробел ставит игру на паузу, M выключает звук.', rules: 'Правила в игре упрощены для обучения. Всегда сверяйтесь с маркировкой и требованиями местного оператора.', understood: 'Ясно, начать', time: 'Время', score: 'Очки', combo: 'Комбо', soundOff: 'Выключить звук', soundOn: 'Включить звук', soundYes: 'Звук: да', soundNo: 'Звук: нет', pause: 'Пауза', resume: 'Продолжить', bins: 'Категории отходов', correct: 'Верно. ', wrong: 'Промах. ', rightAnswer: 'Правильный ответ: ', newRecord: 'Новый рекорд', finished: 'Смена окончена', accuracy: 'Точность', bestCombo: 'Лучшее комбо', answers: 'Ответов', again: 'Играть ещё раз',
  } : {
    aria: 'Green Rush — waste sorting game', lead: '45 seconds. 4 streams. Decisions get faster.', intro: 'Identify materials, build combos and unlock short sorting guidelines.', how: 'How to play', start: 'Start now', record: 'Personal best', points: 'points', material: 'Material matters more than shape', flow: ['Item', 'Category', 'Explanation'], keys: 'Choose a category or press keys 1–4. Space pauses the game and M toggles sound.', rules: 'The game simplifies sorting rules for learning. Always check labels and your local operator’s requirements.', understood: 'Got it, start', time: 'Time', score: 'Score', combo: 'Combo', soundOff: 'Turn sound off', soundOn: 'Turn sound on', soundYes: 'Sound: on', soundNo: 'Sound: off', pause: 'Pause', resume: 'Resume', bins: 'Waste categories', correct: 'Correct. ', wrong: 'Miss. ', rightAnswer: 'Correct answer: ', newRecord: 'New record', finished: 'Shift complete', accuracy: 'Accuracy', bestCombo: 'Best combo', answers: 'Answers', again: 'Play again',
  };

  return (
    <section className="green-rush" data-ui aria-label={c.aria}>
      {state.phase === 'intro' && (
        <div className="game-screen game-screen--intro">
          <p className="game-lead">{c.lead}</p>
          <h2>Green Rush</h2>
          <p>{c.intro}</p>
          <div className="game-actions">
            <button className="button button--green" type="button" onClick={() => dispatch({ type: 'tutorial' })}>{c.how}</button>
            <button className="button button--light" type="button" onClick={start}>{c.start}</button>
          </div>
          <p className="game-record">{c.record}: {state.bestScore} {c.points}</p>
        </div>
      )}

      {state.phase === 'tutorial' && (
        <div className="game-screen game-screen--tutorial">
          <h2>{c.material}</h2>
          <div className="tutorial-flow">
            <span>{c.flow[0]}</span><b aria-hidden="true">→</b><span>{c.flow[1]}</span><b aria-hidden="true">→</b><span>{c.flow[2]}</span>
          </div>
          <p>{c.keys}</p><p>{c.rules}</p><button className="button button--green" type="button" onClick={start}>{c.understood}</button>
        </div>
      )}

      {(state.phase === 'playing' || state.phase === 'paused') && (
        <div className="game-screen game-screen--playing">
          <div className="game-hud">
            <div><span>{c.time}</span><strong>{state.remaining}</strong></div><div><span>{c.score}</span><strong>{state.score}</strong></div><div><span>{c.combo}</span><strong>×{state.combo}</strong></div>
            <button type="button" onClick={() => dispatch({ type: 'sound' })} aria-label={state.sound ? c.soundOff : c.soundOn}>{state.sound ? c.soundYes : c.soundNo}</button>
            <button type="button" onClick={() => dispatch({ type: state.phase === 'playing' ? 'pause' : 'resume' })}>{state.phase === 'playing' ? c.pause : c.resume}</button>
          </div>
          <div className={`game-object${state.feedback ? state.feedback.correct ? ' is-correct' : ' is-wrong' : ''}`} aria-live="polite">
            <WasteSymbol item={currentItem} />
            <h3>{currentItem.name[locale]}</h3>
          </div>
          <div className="game-bins" aria-label={c.bins}>
            {categories.map(category => (
              <button
                type="button"
                key={category.id}
                disabled={Boolean(state.feedback) || state.phase === 'paused'}
                onClick={() => dispatch({ type: 'answer', category: category.id as WasteCategory })}
                style={{ '--bin-color': category.color } as React.CSSProperties}
              >
                <span>{category.key}</span>{category.name[locale]}
              </button>
            ))}
          </div>
          {state.feedback && <p ref={feedbackRef} tabIndex={-1} className={`game-feedback ${state.feedback.correct ? 'is-correct' : 'is-wrong'}`}>{state.feedback.correct ? c.correct : c.wrong}{state.feedback.correct ? currentItem.explanation[locale] : `${c.rightAnswer}${currentItem.explanation[locale]}`}</p>}
          {state.phase === 'paused' && <div className="game-pause"><strong>{c.pause}</strong><button type="button" onClick={() => dispatch({ type: 'resume' })}>{c.resume}</button></div>}
        </div>
      )}

      {state.phase === 'result' && (
        <div className="game-screen game-screen--result">
          <h2>{state.score >= state.bestScore && state.score > 0 ? c.newRecord : c.finished}</h2>
          <div className="result-score">{state.score}</div>
          <dl>
            <div><dt>{c.accuracy}</dt><dd>{accuracy}%</dd></div><div><dt>{c.bestCombo}</dt><dd>×{state.bestCombo}</dd></div><div><dt>{c.answers}</dt><dd>{state.answers}</dd></div>
          </dl>
          <button className="button button--green" type="button" onClick={start}>{c.again}</button>
        </div>
      )}
    </section>
  );
}
