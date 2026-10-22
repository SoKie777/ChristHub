import { useMemo, useRef, useState } from "react";
import type { Exercise, Portion } from "../data/types";
import { ExerciseView, correctText, grade, isComplete, type Answer } from "../components/ExerciseView";
import { BookIcon, CheckIcon, CloseIcon, MirrorIcon, PrayIcon } from "../components/icons";
import { sfx } from "../lib/feedback";

// One session. « learn »: Lire → Consolider → Miroir → Prier for one portion.
// « review » and « checkpoint »: exercises only.

export type SessionMode =
  | { kind: "learn"; portion: Portion; index: number }
  | { kind: "review"; exercises: Exercise[] }
  | { kind: "checkpoint"; chapterId: string; exercises: Exercise[] };

export interface SessionResult {
  mode: SessionMode["kind"];
  portion?: Portion;
  chapterId?: string;
  /** First-try result of each exercise. */
  firstTry: Record<string, boolean>;
  maxCombo: number;
  seconds: number;
  mirror?: { choice: string | null; note: string };
}

type Step =
  | { type: "read" }
  | { type: "exercise"; exercise: Exercise; retry: boolean }
  | { type: "mirror" }
  | { type: "pray" };

const PRAISE = ["Bravo !", "Excellent !", "Très bien !", "Parfait !", "Bien vu !", "C'est ça !"];
const PRAYER_SECONDS = 15;

interface Props {
  mode: SessionMode;
  onExit: () => void;
  onFinish: (result: SessionResult) => void;
}

export function Session({ mode, onExit, onFinish }: Props) {
  const initial = useMemo<Step[]>(() => {
    if (mode.kind === "learn")
      return [
        { type: "read" },
        ...mode.portion.exercises.map((exercise) => ({ type: "exercise" as const, exercise, retry: false })),
        { type: "mirror" },
        { type: "pray" },
      ];
    return mode.exercises.map((exercise) => ({ type: "exercise" as const, exercise, retry: false }));
  }, [mode]);

  const [steps, setSteps] = useState(initial);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [verdict, setVerdict] = useState<null | { correct: boolean; praise: string }>(null);
  const [combo, setCombo] = useState(0);
  const [quitOpen, setQuitOpen] = useState(false);
  const [mirrorChoice, setMirrorChoice] = useState<string | null>(null);
  const [mirrorNote, setMirrorNote] = useState("");
  const firstTry = useRef<Record<string, boolean>>({});
  const maxCombo = useRef(0);
  const started = useRef(Date.now());

  const step = steps[index];
  const progress = index / steps.length;

  const finish = () =>
    onFinish({
      mode: mode.kind,
      portion: mode.kind === "learn" ? mode.portion : undefined,
      chapterId: mode.kind === "checkpoint" ? mode.chapterId : undefined,
      firstTry: firstTry.current,
      maxCombo: maxCombo.current,
      seconds: Math.round((Date.now() - started.current) / 1000),
      mirror: mode.kind === "learn" ? { choice: mirrorChoice, note: mirrorNote.trim() } : undefined,
    });

  const next = () => {
    setAnswer(null);
    setVerdict(null);
    if (index + 1 >= steps.length) finish();
    else setIndex(index + 1);
  };

  const check = () => {
    if (step.type !== "exercise" || !answer) return;
    const correct = grade(step.exercise, answer);
    if (!step.retry) firstTry.current[step.exercise.id] = correct;
    if (correct) {
      const c = combo + 1;
      setCombo(c);
      maxCombo.current = Math.max(maxCombo.current, c);
      if (c >= 3) sfx.combo();
      else sfx.correct();
    } else {
      setCombo(0);
      sfx.wrong();
      // Like a good teacher: a missed exercise comes back before the end of the
      // practice (not in checkpoints, which are a test).
      if (mode.kind !== "checkpoint" && !step.retry) {
        const insertAt = steps.findIndex((s, i) => i > index && s.type !== "exercise");
        const at = insertAt === -1 ? steps.length : insertAt;
        setSteps([...steps.slice(0, at), { type: "exercise", exercise: step.exercise, retry: true }, ...steps.slice(at)]);
      }
    }
    setVerdict({ correct, praise: PRAISE[Math.floor(Math.random() * PRAISE.length)] });
  };

  // A match exercise is checked as soon as every pair is found.
  const onAnswer = (a: Answer) => {
    setAnswer(a);
  };

  const exerciseReady = step.type === "exercise" && isComplete(step.exercise, answer);

  return (
    <div className="session">
      <header className="session-top">
        <button className="icon-btn" aria-label="Quitter" onClick={() => (index === 0 ? onExit() : setQuitOpen(true))}>
          <CloseIcon />
        </button>
        <div className="progress" role="progressbar" aria-valuenow={Math.round(progress * 100)}>
          <div className="progress-fill" style={{ width: `${Math.max(progress * 100, 3)}%` }} />
        </div>
        {combo >= 3 ? <span className="combo-pill">COMBO ×{combo}</span> : <span className="combo-pill ghost" />}
      </header>

      <main className="session-body" key={index}>
        {step.type === "read" && mode.kind === "learn" && <ReadStep portion={mode.portion} number={mode.index + 1} />}
        {step.type === "exercise" && (
          <>
            {step.retry && <p className="retry-tag">Une seconde chance</p>}
            <ExerciseView exercise={step.exercise} answer={answer} locked={verdict !== null} onChange={onAnswer} />
          </>
        )}
        {step.type === "mirror" && mode.kind === "learn" && (
          <MirrorStep
            portion={mode.portion}
            choice={mirrorChoice}
            note={mirrorNote}
            onChoice={setMirrorChoice}
            onNote={setMirrorNote}
          />
        )}
        {step.type === "pray" && mode.kind === "learn" && <PrayStep portion={mode.portion} onAmen={next} />}
      </main>

      {step.type === "read" && (
        <footer className="session-foot">
          <button className="btn primary" onClick={next}>
            J'ai lu, passer à la suite
          </button>
        </footer>
      )}
      {step.type === "exercise" && !verdict && (
        <footer className="session-foot">
          <button className="btn primary" disabled={!exerciseReady} onClick={check}>
            Vérifier
          </button>
        </footer>
      )}
      {step.type === "mirror" && (
        <footer className="session-foot">
          <button className="btn primary" onClick={next}>
            {mirrorChoice || mirrorNote.trim() ? "Continuer" : "Passer"}
          </button>
        </footer>
      )}

      {verdict && step.type === "exercise" && (
        <div className={`verdict ${verdict.correct ? "good" : "bad"}`} role="status">
          <div className="verdict-head">
            <span className="verdict-badge">{verdict.correct ? <CheckIcon size={22} /> : <CloseIcon size={20} />}</span>
            <strong>{verdict.correct ? verdict.praise : "Pas tout à fait…"}</strong>
          </div>
          {!verdict.correct && (
            <p className="verdict-answer">
              <span>Bonne réponse :</span>
              {correctText(step.exercise)}
            </p>
          )}
          <p className="verdict-explain">{step.exercise.explain}</p>
          <button className={`btn ${verdict.correct ? "good" : "bad"}`} onClick={next}>
            Continuer
          </button>
        </div>
      )}

      {quitOpen && (
        <div className="modal-back" onClick={() => setQuitOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Tu t'arrêtes déjà ?</h3>
            <p>Si tu quittes maintenant, tu perdras ta progression et les XP de cette séance.</p>
            <button className="btn primary" onClick={() => setQuitOpen(false)}>
              Continuer la séance
            </button>
            <button className="btn ghost danger" onClick={onExit}>
              Quitter et perdre mes XP
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ReadStep({ portion, number }: { portion: Portion; number: number }) {
  const words = portion.reading.join(" ").split(/\s+/).length;
  return (
    <article className="read">
      <p className="step-kicker">
        <BookIcon size={18} /> Lire · Portion {number} · {Math.max(1, Math.round(words / 180))} min
      </p>
      <h1 className="read-title">{portion.title}</h1>
      {portion.reading.map((p, i) => (
        <p key={i} className="read-p">
          {p}
        </p>
      ))}
      <aside className="key-truth">
        <span>À retenir</span>
        {portion.keyTruth}
      </aside>
      <figure className="verse">
        <blockquote>« {portion.verse.text} »</blockquote>
        <figcaption>{portion.verse.ref}</figcaption>
      </figure>
    </article>
  );
}

function MirrorStep({
  portion,
  choice,
  note,
  onChoice,
  onNote,
}: {
  portion: Portion;
  choice: string | null;
  note: string;
  onChoice: (c: string | null) => void;
  onNote: (n: string) => void;
}) {
  return (
    <section className="mirror">
      <div className="mirror-glass">
        <MirrorIcon size={40} />
      </div>
      <p className="step-kicker center">Face au miroir</p>
      <h2 className="mirror-q">{portion.mirror.question}</h2>
      <div className="chips">
        {portion.mirror.choices.map((c) => (
          <button
            key={c}
            className={`chip ${choice === c ? "picked" : ""}`}
            onClick={() => {
              sfx.tap();
              onChoice(choice === c ? null : c);
            }}
          >
            {c}
          </button>
        ))}
      </div>
      <textarea
        className="mirror-note"
        placeholder="Écris ce qui te vient, pour toi seul (facultatif)"
        value={note}
        rows={3}
        onChange={(e) => onNote(e.target.value)}
      />
      <p className="hint">Tes réponses restent sur ton téléphone, dans ton journal.</p>
    </section>
  );
}

function PrayStep({ portion, onAmen }: { portion: Portion; onAmen: () => void }) {
  const [phase, setPhase] = useState<"ready" | "praying" | "done">("ready");
  const [left, setLeft] = useState(PRAYER_SECONDS);

  const start = () => {
    setPhase("praying");
    const end = Date.now() + PRAYER_SECONDS * 1000;
    const tick = () => {
      const s = Math.max(0, Math.ceil((end - Date.now()) / 1000));
      setLeft(s);
      if (s > 0) requestAnimationFrame(tick);
      else setPhase("done");
    };
    requestAnimationFrame(tick);
  };

  const r = 54;
  const circ = 2 * Math.PI * r;
  const ratio = phase === "ready" ? 0 : 1 - left / PRAYER_SECONDS;

  return (
    <section className="pray">
      <p className="step-kicker center">
        <PrayIcon size={18} /> Prier · 15 secondes
      </p>
      <p className="prayer-text">« {portion.prayer} »</p>
      <div className={`pray-ring ${phase}`}>
        <svg viewBox="0 0 120 120" width="160" height="160">
          <circle cx="60" cy="60" r={r} className="ring-bg" />
          <circle cx="60" cy="60" r={r} className="ring-fg" strokeDasharray={circ} strokeDashoffset={circ * (1 - ratio)} />
        </svg>
        <div className="ring-center">{phase === "ready" ? <PrayIcon size={40} /> : phase === "praying" ? left : "✓"}</div>
      </div>
      {phase === "ready" && (
        <button className="btn primary" onClick={start}>
          Commencer à prier
        </button>
      )}
      {phase === "praying" && <p className="hint">Dis-la à voix haute ou dans ton cœur…</p>}
      {phase === "done" && (
        <button
          className="btn primary amen"
          onClick={() => {
            sfx.amen();
            onAmen();
          }}
        >
          Amen
        </button>
      )}
    </section>
  );
}
