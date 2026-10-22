import { useEffect, useMemo, useState } from "react";
import type { Exercise } from "../data/types";
import { sfx } from "../lib/feedback";

// One exercise of the « Consolider » step. The parent owns the answer (value)
// and the « Vérifier » button; this view only renders and edits the answer.

export type Answer =
  | { kind: "choice" | "fill"; index: number }
  | { kind: "truefalse"; value: boolean }
  | { kind: "order"; sequence: number[] }
  | { kind: "match"; matched: number; mistakes: number };

export const isComplete = (exercise: Exercise, answer: Answer | null) => {
  if (!answer) return false;
  if (answer.kind === "order" && exercise.kind === "order") return answer.sequence.length === exercise.items.length;
  if (answer.kind === "match" && exercise.kind === "match") return answer.matched === exercise.pairs.length;
  return true;
};

export const grade = (exercise: Exercise, answer: Answer): boolean => {
  switch (exercise.kind) {
    case "choice":
    case "fill":
      return answer.kind === exercise.kind && answer.index === exercise.answer;
    case "truefalse":
      return answer.kind === "truefalse" && answer.value === exercise.answer;
    case "order":
      return answer.kind === "order" && answer.sequence.every((v, i) => v === i);
    case "match":
      return answer.kind === "match" && answer.mistakes === 0;
  }
};

/** The correct answer, spelled out for the feedback sheet. */
export const correctText = (exercise: Exercise) => {
  switch (exercise.kind) {
    case "choice":
      return exercise.options[exercise.answer];
    case "fill":
      return `${exercise.before} ${exercise.options[exercise.answer]} ${exercise.after}`.replace(/ ([.,!?;:])/g, "$1");
    case "truefalse":
      return exercise.answer ? "Vrai" : "Faux";
    case "order":
      return exercise.items.map((item, i) => `${i + 1}. ${item}`).join("\n");
    case "match":
      return exercise.pairs.map(([a, b]) => `${a} → ${b}`).join("\n");
  }
};

const shuffle = <T,>(list: T[]) => {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

/** Shuffled indices that are never the identity (so ordering is a real task). */
const shuffledIndices = (n: number) => {
  const base = Array.from({ length: n }, (_, i) => i);
  if (n < 2) return base;
  let out = shuffle(base);
  while (out.every((v, i) => v === i)) out = shuffle(base);
  return out;
};

interface Props {
  exercise: Exercise;
  answer: Answer | null;
  locked: boolean;
  onChange: (answer: Answer) => void;
}

export function ExerciseView({ exercise, answer, locked, onChange }: Props) {
  switch (exercise.kind) {
    case "choice":
      return <ChoiceView exercise={exercise} answer={answer} locked={locked} onChange={onChange} />;
    case "truefalse":
      return <TrueFalseView exercise={exercise} answer={answer} locked={locked} onChange={onChange} />;
    case "fill":
      return <FillView exercise={exercise} answer={answer} locked={locked} onChange={onChange} />;
    case "order":
      return <OrderView exercise={exercise} answer={answer} locked={locked} onChange={onChange} />;
    case "match":
      return <MatchView exercise={exercise} answer={answer} locked={locked} onChange={onChange} />;
  }
}

type ViewProps<K extends Exercise["kind"]> = Omit<Props, "exercise"> & { exercise: Extract<Exercise, { kind: K }> };

function ChoiceView({ exercise, answer, locked, onChange }: ViewProps<"choice">) {
  const order = useMemo(() => shuffle(exercise.options.map((_, i) => i)), [exercise]);
  const selected = answer?.kind === "choice" ? answer.index : null;
  return (
    <div className="exercise">
      <p className="exercise-label">Choisis la bonne réponse</p>
      <h2 className="exercise-prompt">{exercise.prompt}</h2>
      <div className="options">
        {order.map((i, n) => (
          <button
            key={i}
            className={`option ${selected === i ? "selected" : ""}`}
            disabled={locked}
            onClick={() => {
              sfx.tap();
              onChange({ kind: "choice", index: i });
            }}
          >
            <span className="option-key">{n + 1}</span>
            {exercise.options[i]}
          </button>
        ))}
      </div>
    </div>
  );
}

function TrueFalseView({ exercise, answer, locked, onChange }: ViewProps<"truefalse">) {
  const selected = answer?.kind === "truefalse" ? answer.value : null;
  return (
    <div className="exercise">
      <p className="exercise-label">Vrai ou faux ?</p>
      <blockquote className="statement">{exercise.statement}</blockquote>
      <div className="options two">
        {[true, false].map((v) => (
          <button
            key={String(v)}
            className={`option big ${selected === v ? "selected" : ""}`}
            disabled={locked}
            onClick={() => {
              sfx.tap();
              onChange({ kind: "truefalse", value: v });
            }}
          >
            {v ? "Vrai" : "Faux"}
          </button>
        ))}
      </div>
    </div>
  );
}

function FillView({ exercise, answer, locked, onChange }: ViewProps<"fill">) {
  const order = useMemo(() => shuffle(exercise.options.map((_, i) => i)), [exercise]);
  const selected = answer?.kind === "fill" ? answer.index : null;
  return (
    <div className="exercise">
      <p className="exercise-label">Complète la phrase</p>
      <p className="fill-sentence">
        {exercise.before}
        {/«$/.test(exercise.before) ? " " : " "}
        <span className={`blank ${selected !== null ? "filled" : ""}`}>{selected !== null ? exercise.options[selected] : " "}</span>
        {/^[.,)]/.test(exercise.after) ? "" : /^[»;:!?]/.test(exercise.after) ? " " : " "}
        {exercise.after}
      </p>
      <div className="chips">
        {order.map((i) => (
          <button
            key={i}
            className={`chip ${selected === i ? "used" : ""}`}
            disabled={locked}
            onClick={() => {
              sfx.tap();
              onChange({ kind: "fill", index: i });
            }}
          >
            {exercise.options[i]}
          </button>
        ))}
      </div>
    </div>
  );
}

function OrderView({ exercise, answer, locked, onChange }: ViewProps<"order">) {
  const bank = useMemo(() => shuffledIndices(exercise.items.length), [exercise]);
  const sequence = answer?.kind === "order" ? answer.sequence : [];
  return (
    <div className="exercise">
      <p className="exercise-label">Remets dans l'ordre</p>
      <h2 className="exercise-prompt">{exercise.prompt}</h2>
      <ol className="order-slots">
        {exercise.items.map((_, slot) => {
          const item = sequence[slot];
          return (
            <li key={slot} className={`order-slot ${item !== undefined ? "filled" : ""}`}>
              <span className="slot-num">{slot + 1}</span>
              {item !== undefined ? (
                <button
                  className="slot-item"
                  disabled={locked}
                  onClick={() => {
                    sfx.tap();
                    onChange({ kind: "order", sequence: sequence.filter((_, i) => i !== slot) });
                  }}
                >
                  {exercise.items[item]}
                </button>
              ) : (
                <span className="slot-empty">…</span>
              )}
            </li>
          );
        })}
      </ol>
      <div className="chips column">
        {bank.map((i) => (
          <button
            key={i}
            className={`chip wide ${sequence.includes(i) ? "used" : ""}`}
            disabled={locked || sequence.includes(i)}
            onClick={() => {
              sfx.tap();
              onChange({ kind: "order", sequence: [...sequence, i] });
            }}
          >
            {exercise.items[i]}
          </button>
        ))}
      </div>
    </div>
  );
}

function MatchView({ exercise, answer, locked, onChange }: ViewProps<"match">) {
  const left = useMemo(() => shuffle(exercise.pairs.map((_, i) => i)), [exercise]);
  const right = useMemo(() => shuffle(exercise.pairs.map((_, i) => i)), [exercise]);
  const [done, setDone] = useState<number[]>([]);
  const [pickLeft, setPickLeft] = useState<number | null>(null);
  const [pickRight, setPickRight] = useState<number | null>(null);
  const [wrong, setWrong] = useState<[number, number] | null>(null);
  const mistakes = answer?.kind === "match" ? answer.mistakes : 0;

  useEffect(() => {
    if (pickLeft === null || pickRight === null) return;
    if (pickLeft === pickRight) {
      sfx.correct();
      const next = [...done, pickLeft];
      setDone(next);
      onChange({ kind: "match", matched: next.length, mistakes });
      setPickLeft(null);
      setPickRight(null);
    } else {
      sfx.wrong();
      setWrong([pickLeft, pickRight]);
      onChange({ kind: "match", matched: done.length, mistakes: mistakes + 1 });
      const t = setTimeout(() => {
        setWrong(null);
        setPickLeft(null);
        setPickRight(null);
      }, 550);
      return () => clearTimeout(t);
    }
    // onChange and mistakes are read at the moment of the pick only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pickLeft, pickRight]);

  const cls = (side: "l" | "r", i: number) => {
    if (done.includes(i)) return "match-item done";
    if (wrong && wrong[side === "l" ? 0 : 1] === i) return "match-item wrong";
    if ((side === "l" ? pickLeft : pickRight) === i) return "match-item selected";
    return "match-item";
  };

  return (
    <div className="exercise">
      <p className="exercise-label">Associe les paires</p>
      <h2 className="exercise-prompt">{exercise.prompt}</h2>
      <div className="match-grid">
        <div className="match-col">
          {left.map((i) => (
            <button
              key={i}
              className={cls("l", i)}
              disabled={locked || done.includes(i) || wrong !== null}
              onClick={() => {
                sfx.tap();
                setPickLeft(i);
              }}
            >
              {exercise.pairs[i][0]}
            </button>
          ))}
        </div>
        <div className="match-col">
          {right.map((i) => (
            <button
              key={i}
              className={cls("r", i)}
              disabled={locked || done.includes(i) || wrong !== null}
              onClick={() => {
                sfx.tap();
                setPickRight(i);
              }}
            >
              {exercise.pairs[i][1]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
