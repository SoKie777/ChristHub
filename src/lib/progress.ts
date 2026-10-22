import { addDays, dayKey, daysBetween } from "./day";

// Everything the learner earns, kept in localStorage (the WebView keeps it
// offline, on the phone). One JSON document, versioned.

export interface PortionRecord {
  completedAt: string;
  times: number;
  perfect: boolean;
}

export interface JournalEntry {
  portionId: string;
  day: string;
  question: string;
  choice: string | null;
  note: string;
}

export interface ReviewItem {
  /** Day the exercise comes back for « Méditer à nouveau ». */
  due: string;
  /** Index in REVIEW_INTERVALS. */
  step: number;
}

export interface Progress {
  version: 1;
  xp: number;
  xpByDay: Record<string, number>;
  streak: {
    count: number;
    longest: number;
    lastDay: string | null;
    /** Graces (streak freezes) in stock. */
    graces: number;
    /** Days covered by a Grace instead of a portion. */
    graceDays: string[];
  };
  activeDays: string[];
  portions: Record<string, PortionRecord>;
  checkpoints: Record<string, { passedAt: string; score: number }>;
  review: Record<string, ReviewItem>;
  journal: JournalEntry[];
  dailyGoal: number;
  soundOn: boolean;
  /** Book open on the path; null until the learner picks one in the library. */
  currentBook: string | null;
}

export const MAX_GRACES = 2;
/** Streak lengths that award a Grace. */
export const GRACE_MILESTONES = [3, 7, 14, 30, 50, 100, 365];
/** Days before a missed exercise comes back, step after step. */
export const REVIEW_INTERVALS = [1, 3, 7, 16];

export const XP = {
  portion: 10,
  perfectBonus: 5,
  mirror: 2,
  prayer: 3,
  reviewItem: 4,
  checkpoint: 20,
};

const KEY = "christhub.progress.v1";

export const emptyProgress = (): Progress => ({
  version: 1,
  xp: 0,
  xpByDay: {},
  streak: { count: 0, longest: 0, lastDay: null, graces: 0, graceDays: [] },
  activeDays: [],
  portions: {},
  checkpoints: {},
  review: {},
  journal: [],
  dailyGoal: 20,
  soundOn: true,
  currentBook: null,
});

export const loadProgress = (): Progress => {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...emptyProgress(), ...(JSON.parse(raw) as Progress) };
  } catch {
    // Unreadable or blocked storage: start fresh.
  }
  return emptyProgress();
};

export const saveProgress = (p: Progress) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    // Storage full or blocked: progress lives for this session only.
  }
};

/**
 * Called when the app opens: missed days are covered by Graces while any are
 * left, otherwise the streak goes back to zero.
 */
export const reconcileStreak = (p: Progress, today = dayKey()): { progress: Progress; gracesUsed: number; lost: number } => {
  const { lastDay } = p.streak;
  if (!lastDay || p.streak.count === 0) return { progress: p, gracesUsed: 0, lost: 0 };
  const missed = daysBetween(lastDay, today) - 1;
  if (missed <= 0) return { progress: p, gracesUsed: 0, lost: 0 };
  if (missed <= p.streak.graces) {
    const covered = Array.from({ length: missed }, (_, i) => addDays(lastDay, i + 1));
    return {
      progress: {
        ...p,
        streak: {
          ...p.streak,
          graces: p.streak.graces - missed,
          graceDays: [...p.streak.graceDays, ...covered],
          // The streak now stands as of yesterday: practising today extends it.
          lastDay: addDays(today, -1),
        },
      },
      gracesUsed: missed,
      lost: 0,
    };
  }
  return { progress: { ...p, streak: { ...p.streak, count: 0 } }, gracesUsed: 0, lost: p.streak.count };
};

export interface DayCredit {
  progress: Progress;
  streakExtended: boolean;
  graceEarned: boolean;
}

/** Credits XP for today and extends the streak if today was not counted yet. */
export const creditDay = (p: Progress, xp: number, today = dayKey()): DayCredit => {
  const extended = p.streak.lastDay !== today;
  const count = extended ? p.streak.count + 1 : p.streak.count;
  const graceEarned = extended && GRACE_MILESTONES.includes(count) && p.streak.graces < MAX_GRACES;
  return {
    progress: {
      ...p,
      xp: p.xp + xp,
      xpByDay: { ...p.xpByDay, [today]: (p.xpByDay[today] ?? 0) + xp },
      activeDays: p.activeDays.includes(today) ? p.activeDays : [...p.activeDays, today],
      streak: {
        ...p.streak,
        count,
        longest: Math.max(p.streak.longest, count),
        lastDay: today,
        graces: p.streak.graces + (graceEarned ? 1 : 0),
      },
    },
    streakExtended: extended,
    graceEarned,
  };
};

/** Missed exercises enter (or restart) the review schedule. */
export const scheduleMissed = (p: Progress, exerciseIds: string[], today = dayKey()): Progress => {
  const review = { ...p.review };
  for (const id of exerciseIds) review[id] = { due: addDays(today, REVIEW_INTERVALS[0]), step: 0 };
  return { ...p, review };
};

/** Result of one exercise during « Méditer à nouveau ». */
export const reviewAnswered = (p: Progress, id: string, correct: boolean, today = dayKey()): Progress => {
  const review = { ...p.review };
  const item = review[id];
  if (!item) return p;
  if (!correct) review[id] = { due: addDays(today, REVIEW_INTERVALS[0]), step: 0 };
  else if (item.step + 1 >= REVIEW_INTERVALS.length) delete review[id];
  else review[id] = { due: addDays(today, REVIEW_INTERVALS[item.step + 1]), step: item.step + 1 };
  return { ...p, review };
};

export const dueReviews = (p: Progress, today = dayKey()) =>
  Object.entries(p.review)
    .filter(([, item]) => item.due <= today)
    .map(([id]) => id);

/** The lamp grows with the streak, like a flame that evolves. */
export const LAMP_LEVELS = [
  { min: 0, name: "Lampe éteinte" },
  { min: 1, name: "Mèche allumée" },
  { min: 3, name: "Petite lampe" },
  { min: 7, name: "Lampe vive" },
  { min: 14, name: "Lampe ardente" },
  { min: 30, name: "Lumière sur la montagne" },
] as const;

export const lampLevel = (count: number) => {
  let index = 0;
  LAMP_LEVELS.forEach((level, i) => {
    if (count >= level.min) index = i;
  });
  return { index, ...LAMP_LEVELS[index], next: LAMP_LEVELS[index + 1] ?? null };
};
