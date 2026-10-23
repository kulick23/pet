import { useLocalStorage } from '../hooks/useLocalStorage';
import { useReveal } from '../hooks/useReveal';
import { useI18n } from '../i18n/I18nProvider';

const challenges = [
  { id: 'bottle', ru: ['Многоразовая бутылка', 'Возьмите свою бутылку вместо одноразовой упаковки.'], en: ['Reusable bottle', 'Bring your own bottle instead of using disposable packaging.'] },
  { id: 'sort', ru: ['Разделить отходы', 'Отделите бумагу, стекло, пластик и металл дома или в офисе.'], en: ['Separate waste', 'Separate paper, glass, plastic and metal at home or at work.'] },
  { id: 'bag', ru: ['Сумка вместо пакета', 'Положите многоразовую сумку рядом с ключами перед выходом.'], en: ['Bag over a carrier', 'Keep a reusable bag next to your keys before leaving home.'] },
  { id: 'cleanup', ru: ['Убрать свой маршрут', 'Соберите мусор на коротком знакомом участке безопасным способом.'], en: ['Clean up your route', 'Safely collect litter along a short, familiar route.'] },
  { id: 'energy', ru: ['Снизить лишнее потребление', 'Отключите свет и устройства там, где они сейчас не нужны.'], en: ['Cut unnecessary energy use', 'Turn off lights and devices where they are not needed.'] },
];

export function ChallengesPage() {
  useReveal();
  const { locale } = useI18n();
  const [completed, setCompleted] = useLocalStorage<string[]>('betera-green-challenges', []);
  const toggle = (id: string) => setCompleted(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]);
  const progress = Math.round((completed.length / challenges.length) * 100);
  const c = locale === 'ru' ? { title: 'Неделя экологических привычек', intro: 'Выберите действия, которые можно повторить. Отметки сохраняются только на этом устройстве.', progress: 'Личный прогресс', of: 'из', aria: 'челленджей выполнено', note: 'Этот показатель не является подтверждённым экологическим результатом Betera.', list: 'Список челленджей', done: 'Выполнено', mark: 'Отметить', all: 'Неделя собрана', rhythm: 'Ритм найден', start: 'Начните с одного действия', allText: 'Все пять привычек отмечены. Сбросьте любую отметку, если хотите пройти неделю заново.', local: 'Прогресс не требует аккаунта и остаётся в вашем браузере.' } : { title: 'A week of eco habits', intro: 'Choose actions you can repeat. Your checkmarks are saved only on this device.', progress: 'Personal progress', of: 'of', aria: 'challenges complete', note: 'This figure is personal progress and is not a verified Betera environmental result.', list: 'Challenge list', done: 'Complete', mark: 'Mark done', all: 'Week complete', rhythm: 'You found a rhythm', start: 'Start with one action', allText: 'All five habits are complete. Clear any checkmark if you want to start the week again.', local: 'No account is needed. Your progress stays in this browser.' };

  return (
    <div className="page page--green challenges-page">
      <header className="page-hero challenges-page__hero">
        <h1 data-reveal>{c.title}</h1><p data-reveal>{c.intro}</p>
      </header>
      <section className="challenge-progress" aria-labelledby="progress-title" data-reveal>
        <div><h2 id="progress-title">{c.progress}</h2><strong>{completed.length} {c.of} {challenges.length}</strong></div>
        <div className="progress-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress} aria-label={`${progress}% ${c.aria}`}><span style={{ transform: `scaleX(${progress / 100})` }} /></div><p>{c.note}</p>
      </section>
      <section className="challenge-list">
        <h2 className="sr-only">{c.list}</h2>
        {challenges.map(challenge => {
          const done = completed.includes(challenge.id);
          return (
            <article className={done ? 'is-complete' : ''} key={challenge.id} data-reveal>
              <button type="button" aria-pressed={done} onClick={() => toggle(challenge.id)}><span aria-hidden="true">{done ? '✓' : '+'}</span><span>{done ? c.done : c.mark}</span></button>
              <h3>{challenge[locale][0]}</h3><p>{challenge[locale][1]}</p>
            </article>
          );
        })}
      </section>
      <aside className="challenge-achievement chapter--ink" aria-live="polite">
        <h2>{completed.length === challenges.length ? c.all : completed.length >= 3 ? c.rhythm : c.start}</h2><p>{completed.length === challenges.length ? c.allText : c.local}</p>
      </aside>
    </div>
  );
}
