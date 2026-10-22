import type { Book, Exercise, Portion } from "./types";
import { chapitre1 } from "./chapitre1";

export const book: Book = {
  id: "munroe-purpose-power-men",
  title: "Le but et la puissance de l'homme",
  author: "Myles Munroe",
  source:
    "Paraphrase libre et non officielle des idées de « Understanding the Purpose and Power of Men » (Myles Munroe, Whitaker House, 2001). Versets : Louis Segond 1910.",
  chapters: [chapitre1],
};

export const allPortions: Portion[] = book.chapters.flatMap((c) => c.portions);

export const findPortion = (id: string) => allPortions.find((p) => p.id === id);

const exerciseIndex = new Map<string, { exercise: Exercise; portion: Portion }>();
for (const portion of allPortions) for (const exercise of portion.exercises) exerciseIndex.set(exercise.id, { exercise, portion });

export const findExercise = (id: string) => exerciseIndex.get(id);
