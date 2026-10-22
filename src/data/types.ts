// Content model: a book is a list of chapters, a chapter a list of portions.
// A portion is one devotional session: Lire → Consolider → Miroir → Prier.

export type Exercise =
  | { kind: "choice"; id: string; prompt: string; options: string[]; answer: number; explain: string }
  | { kind: "truefalse"; id: string; statement: string; answer: boolean; explain: string }
  | { kind: "fill"; id: string; before: string; after: string; options: string[]; answer: number; explain: string }
  | { kind: "order"; id: string; prompt: string; items: string[]; explain: string }
  | { kind: "match"; id: string; prompt: string; pairs: [string, string][]; explain: string };

export interface Verse {
  ref: string;
  text: string;
}

export interface Portion {
  id: string;
  title: string;
  /** Paragraphs of the reading, paraphrased in our own words. */
  reading: string[];
  /** The one sentence to remember; highlighted in the reading and on the end screen. */
  keyTruth: string;
  verse: Verse;
  exercises: Exercise[];
  mirror: { question: string; choices: string[] };
  prayer: string;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  theme: string;
  portions: Portion[];
}

export interface Book {
  id: string;
  /** Our French title for the module. */
  courseTitle: string;
  /** Official title of the book the course is inspired by. */
  title: string;
  author: string;
  publisher: string;
  year: number;
  /** One or two sentences shown in the library. */
  blurb: string;
  /** Cover gradient in the library. */
  cover: [string, string];
  chapters: Chapter[];
  /** Titles of the chapters not written yet, shown locked on the path. */
  upcoming: string[];
}
