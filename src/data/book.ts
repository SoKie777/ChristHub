import type { Book, Exercise, Portion } from "./types";
import { chapitre1 } from "./chapitre1";
import { chapitre2 } from "./chapitre2";

export const book: Book = {
  id: "munroe-purpose-power-men",
  courseTitle: "Le but et la puissance de l'homme",
  title: "Understanding the Purpose and Power of Men",
  author: "Myles Munroe",
  publisher: "Whitaker House",
  year: 2001,
  chapters: [chapitre1, chapitre2],
};

/** Small print shown with the course: what it is, and where to go deeper. */
export const credits = {
  inspired: `Inspiré du livre « ${book.title} » de ${book.author}`,
  deeper: `Pour aller plus loin, procure-toi le livre officiel de ${book.author} (${book.publisher}).`,
  legal: `ChristHub n'est pas affilié à l'auteur ni à l'éditeur : les textes sont une paraphrase libre. Versets : Louis Segond 1910.`,
};

export const allPortions: Portion[] = book.chapters.flatMap((c) => c.portions);

export const findPortion = (id: string) => allPortions.find((p) => p.id === id);

const exerciseIndex = new Map<string, { exercise: Exercise; portion: Portion }>();
for (const portion of allPortions) for (const exercise of portion.exercises) exerciseIndex.set(exercise.id, { exercise, portion });

export const findExercise = (id: string) => exerciseIndex.get(id);
