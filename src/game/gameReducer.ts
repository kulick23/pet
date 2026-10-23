import { GAME_DURATION, wasteItems, type WasteCategory } from '../data/game';

export type GamePhase = 'intro' | 'tutorial' | 'playing' | 'paused' | 'result';

export type Feedback = {
  correct: boolean;
  chosen: WasteCategory;
} | null;

export type GameState = {
  phase: GamePhase;
  score: number;
  combo: number;
  bestCombo: number;
  bestScore: number;
  remaining: number;
  itemIndex: number;
  feedback: Feedback;
  sound: boolean;
  answers: number;
  correctAnswers: number;
};

export type GameAction =
  | { type: 'tutorial' }
  | { type: 'start'; startIndex: number }
  | { type: 'answer'; category: WasteCategory }
  | { type: 'next' }
  | { type: 'tick' }
  | { type: 'pause' }
  | { type: 'resume' }
  | { type: 'finish' }
  | { type: 'sound' };

export const createGameState = (bestScore = 0, sound = true): GameState => ({
  phase: 'intro',
  score: 0,
  combo: 0,
  bestCombo: 0,
  bestScore,
  remaining: GAME_DURATION,
  itemIndex: 0,
  feedback: null,
  sound,
  answers: 0,
  correctAnswers: 0,
});

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'tutorial':
      return { ...state, phase: 'tutorial' };
    case 'start':
      return {
        ...createGameState(state.bestScore, state.sound),
        phase: 'playing',
        itemIndex: action.startIndex % wasteItems.length,
      };
    case 'answer': {
      if (state.phase !== 'playing' || state.feedback) return state;
      const item = wasteItems[state.itemIndex];
      const correct = item.category === action.category;
      const nextCombo = correct ? state.combo + 1 : 0;
      const nextScore = correct ? state.score + 100 + Math.min(state.combo, 8) * 25 : Math.max(0, state.score - 35);
      return {
        ...state,
        score: nextScore,
        combo: nextCombo,
        bestCombo: Math.max(state.bestCombo, nextCombo),
        answers: state.answers + 1,
        correctAnswers: state.correctAnswers + (correct ? 1 : 0),
        feedback: {
          correct,
          chosen: action.category,
        },
      };
    }
    case 'next':
      if (!state.feedback) return state;
      return { ...state, feedback: null, itemIndex: (state.itemIndex + 3) % wasteItems.length };
    case 'tick': {
      if (state.phase !== 'playing') return state;
      if (state.remaining <= 1) {
        return { ...state, phase: 'result', remaining: 0, bestScore: Math.max(state.bestScore, state.score), feedback: null };
      }
      return { ...state, remaining: state.remaining - 1 };
    }
    case 'pause':
      return state.phase === 'playing' ? { ...state, phase: 'paused' } : state;
    case 'resume':
      return state.phase === 'paused' ? { ...state, phase: 'playing' } : state;
    case 'finish':
      return { ...state, phase: 'result', bestScore: Math.max(state.bestScore, state.score), feedback: null };
    case 'sound':
      return { ...state, sound: !state.sound };
    default:
      return state;
  }
}
