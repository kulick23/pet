# BETERA GREEN

Интерактивный portfolio concept экологической и социальной платформы Betera. Проект объединяет проверяемый индекс инициатив, страницу результатов с источниками, обучающую мини-игру Green Rush, демонстрационный каталог помощи животным и локальные недельные челленджи.

Это независимый концепт и не официальный продукт Betera. Показатели снабжены источником, периодом и датой проверки; пользовательский прогресс хранится только в браузере.

## Стек

- React 19, TypeScript, React Router
- Vite, SCSS
- Vitest для state-machine игры
- Playwright и design-taste inspector для browser/visual QA

## Запуск

```bash
npm install
npm run dev
```

Проверки:

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

## Маршруты

- `/` — main experience
- `/initiatives` и `/initiatives/:slug` — индекс и истории инициатив
- `/impact` — результаты, карта и timeline
- `/green-rush` — мини-игра с клавиатурным управлением
- `/animals` — демонстрационный каталог помощи животным
- `/petcare` — самостоятельная страница знакомства и помощи животным
- `/challenges` — локальные недельные привычки
- `/about` — методология, источники и credits изображений

Исследование бренда, UX-аудит, дизайн-система и журнал реализации находятся в `BRAND_RESEARCH.md`, `AUDIT.md`, `DESIGN_SYSTEM.md` и `PROGRESS.md`.
