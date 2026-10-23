import { useLocalStorage } from '../hooks/useLocalStorage';
import { useReveal } from '../hooks/useReveal';

const challenges = [
  { id: 'bottle', title: 'Многоразовая бутылка', detail: 'Возьмите свою бутылку вместо одноразовой упаковки.' },
  { id: 'sort', title: 'Разделить отходы', detail: 'Отделите бумагу, стекло, пластик и металл дома или в офисе.' },
  { id: 'bag', title: 'Сумка вместо пакета', detail: 'Положите многоразовую сумку рядом с ключами перед выходом.' },
  { id: 'cleanup', title: 'Убрать свой маршрут', detail: 'Соберите мусор на коротком знакомом участке безопасным способом.' },
  { id: 'energy', title: 'Снизить лишнее потребление', detail: 'Отключите свет и устройства там, где они сейчас не нужны.' },
];

export function ChallengesPage() {
  useReveal();
  const [completed, setCompleted] = useLocalStorage<string[]>('betera-green-challenges', []);
  const toggle = (id: string) => setCompleted(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]);
  const progress = Math.round((completed.length / challenges.length) * 100);

  return (
    <div className="page page--green challenges-page">
      <header className="page-hero challenges-page__hero">
        <h1 data-reveal>Неделя экологических привычек</h1>
        <p data-reveal>Выберите действия, которые можно повторить. Отметки сохраняются только на этом устройстве.</p>
      </header>
      <section className="challenge-progress" aria-labelledby="progress-title" data-reveal>
        <div><h2 id="progress-title">Личный прогресс</h2><strong>{completed.length} из {challenges.length}</strong></div>
        <div className="progress-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress} aria-label={`${progress}% челленджей выполнено`}><span style={{ transform: `scaleX(${progress / 100})` }} /></div>
        <p>Этот показатель не является подтверждённым экологическим результатом Betera.</p>
      </section>
      <section className="challenge-list">
        <h2 className="sr-only">Список челленджей</h2>
        {challenges.map(challenge => {
          const done = completed.includes(challenge.id);
          return (
            <article className={done ? 'is-complete' : ''} key={challenge.id} data-reveal>
              <button type="button" aria-pressed={done} onClick={() => toggle(challenge.id)}><span aria-hidden="true">{done ? '✓' : '+'}</span><span>{done ? 'Выполнено' : 'Отметить'}</span></button>
              <h3>{challenge.title}</h3><p>{challenge.detail}</p>
            </article>
          );
        })}
      </section>
      <aside className="challenge-achievement chapter--ink" aria-live="polite">
        <h2>{completed.length === challenges.length ? 'Неделя собрана' : completed.length >= 3 ? 'Ритм найден' : 'Начните с одного действия'}</h2>
        <p>{completed.length === challenges.length ? 'Все пять привычек отмечены. Сбросьте любую отметку, если хотите пройти неделю заново.' : 'Прогресс не требует аккаунта и остаётся в вашем браузере.'}</p>
      </aside>
    </div>
  );
}
