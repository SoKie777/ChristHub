import type { Book, Exercise, Portion } from "./types";
import { chapitre1 } from "./chapitre1";
import { chapitre2 } from "./chapitre2";
import { chapitre3 } from "./chapitre3";
import { chapitre4 } from "./chapitre4";
import { chapitre5 } from "./chapitre5";
import { chapitre6 } from "./chapitre6";
import { chapitre7 } from "./chapitre7";
import { chapitre8 } from "./chapitre8";
import { chapitre9 } from "./chapitre9";
import { chapitre10 } from "./chapitre10";
import { chapitre11 } from "./chapitre11";
import { chapitre12 } from "./chapitre12";
import { chapitre1 as femme1 } from "./femme/chapitre1";
import { chapitre2 as femme2 } from "./femme/chapitre2";
import { chapitre3 as femme3 } from "./femme/chapitre3";
import { chapitre4 as femme4 } from "./femme/chapitre4";
import { chapitre5 as femme5 } from "./femme/chapitre5";
import { chapitre6 as femme6 } from "./femme/chapitre6";
import { chapitre7 as femme7 } from "./femme/chapitre7";
import { chapitre8 as femme8 } from "./femme/chapitre8";
import { chapitre9 as femme9 } from "./femme/chapitre9";
import { chapitre10 as femme10 } from "./femme/chapitre10";
import { chapitre11 as femme11 } from "./femme/chapitre11";
import { chapitre12 as femme12 } from "./femme/chapitre12";

// French typography: non-breaking spaces inside « » and before : ; ? !, so that
// punctuation never starts a line on a narrow phone screen.
const NBSP = " ";
const NNBSP = " ";
const typo = (s: string) =>
  s
    .replace(/« /g, `«${NBSP}`)
    .replace(/ »/g, `${NBSP}»`)
    .replace(/ ([;?!])/g, `${NNBSP}$1`)
    .replace(/ :/g, `${NBSP}:`);

const deepTypo = <T,>(value: T): T => {
  if (typeof value === "string") return typo(value) as T;
  if (Array.isArray(value)) return value.map(deepTypo) as T;
  if (value && typeof value === "object")
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, k === "id" || k === "cover" ? v : deepTypo(v)])) as T;
  return value;
};

const munroeMen: Book = deepTypo({
  id: "munroe-purpose-power-men",
  courseTitle: "Le but et la puissance de l'homme",
  title: "Understanding the Purpose and Power of Men",
  author: "Myles Munroe",
  publisher: "Whitaker House",
  year: 2001,
  blurb: "Découvre pourquoi Dieu a créé l'homme, ce qu'Il attend de lui et comment devenir l'homme qu'Il avait en tête.",
  cover: ["#00e5f0", "#0067a8"],
  chapters: [
    chapitre1,
    chapitre2,
    chapitre3,
    chapitre4,
    chapitre5,
    chapitre6,
    chapitre7,
    chapitre8,
    chapitre9,
    chapitre10,
    chapitre11,
    chapitre12,
  ],
  upcoming: [],
});

// Second book: ids start with « f » (f1, f1p1, f1p1e1) to stay unique across the library.
const munroeWomen: Book = deepTypo({
  id: "munroe-purpose-power-woman",
  courseTitle: "Le but et la puissance de la femme",
  title: "Understanding the Purpose and Power of Woman",
  author: "Myles Munroe",
  publisher: "Whitaker House",
  year: 2001,
  blurb: "Découvre qui est la femme dans le plan de Dieu, sa valeur, sa conception unique et la puissance de son influence.",
  cover: ["#ff8ac6", "#8a3ffc"],
  chapters: [
    femme1,
    femme2,
    femme3,
    femme4,
    femme5,
    femme6,
    femme7,
    femme8,
    femme9,
    femme10,
    femme11,
    femme12,
  ],
  upcoming: [],
});

/** Every book of the library. Portion and exercise ids are unique across books. */
export const books: Book[] = [munroeMen, munroeWomen];

export const findBook = (id: string | null | undefined) => books.find((b) => b.id === id);

/** Small print shown with a course: what it is, and where to go deeper. */
export const creditsFor = (book: Book) => ({
  inspired: `Inspiré du livre « ${book.title} » de ${book.author}`,
  deeper: `Pour aller plus loin, procure-toi le livre officiel de ${book.author} (${book.publisher}).`,
  legal: `ChristHub n'est pas affilié à l'auteur ni à l'éditeur : les textes sont une paraphrase libre. Versets : Louis Segond 1910.`,
});

export const bookPortions = (book: Book): Portion[] => book.chapters.flatMap((c) => c.portions);

export const allPortions: Portion[] = books.flatMap(bookPortions);

export const findPortion = (id: string) => allPortions.find((p) => p.id === id);

export const bookOfPortion = (id: string) => books.find((b) => bookPortions(b).some((p) => p.id === id));

const exerciseIndex = new Map<string, { exercise: Exercise; portion: Portion }>();
for (const portion of allPortions) for (const exercise of portion.exercises) exerciseIndex.set(exercise.id, { exercise, portion });

export const findExercise = (id: string) => exerciseIndex.get(id);
