import { describe, expect, it } from 'vitest';
import { createGameState, gameReducer } from './gameReducer';

describe('gameReducer', () => {
  it('starts a fresh session and preserves the record', () => {
    const state = gameReducer(createGameState(400), { type: 'start', startIndex: 2 });
    expect(state.phase).toBe('playing');
    expect(state.bestScore).toBe(400);
    expect(state.itemIndex).toBe(2);
  });

  it('rewards a correct answer and builds combo', () => {
    const started = gameReducer(createGameState(), { type: 'start', startIndex: 0 });
    const answered = gameReducer(started, { type: 'answer', category: 'paper' });
    expect(answered.score).toBe(100);
    expect(answered.combo).toBe(1);
    expect(answered.feedback?.correct).toBe(true);
  });

  it('ends the session at zero and stores the best score', () => {
    const state = { ...createGameState(50), phase: 'playing' as const, remaining: 1, score: 240 };
    const ended = gameReducer(state, { type: 'tick' });
    expect(ended.phase).toBe('result');
    expect(ended.remaining).toBe(0);
    expect(ended.bestScore).toBe(240);
  });
});
