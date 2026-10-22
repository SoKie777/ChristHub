import { useEffect, useState } from "react";
import type { Portion } from "../data/types";
import { GraceIcon, LampIcon, ShareIcon, StarIcon, XpIcon } from "../components/icons";
import { WEEKDAY_LETTERS, dayKey, weekOf } from "../lib/day";
import { sfx } from "../lib/feedback";
import { lampLevel, type Progress } from "../lib/progress";

// Screens shown one after another when a session ends, like a little ceremony.

export interface EndSummary {
  mode: "learn" | "review" | "checkpoint";
  xp: number;
  breakdown: [string, number][];
  correct: number;
  total: number;
  perfect: boolean;
  maxCombo: number;
  seconds: number;
  streakExtended: boolean;
  graceEarned: boolean;
  passed?: boolean;
  portion?: Portion;
}

interface Props {
  summary: EndSummary;
  progress: Progress;
  onDone: () => void;
}

export function EndScreens({ summary, progress, onDone }: Props) {
  const pages = [
    "result",
    ...(summary.streakExtended ? ["streak"] : []),
    ...(summary.portion ? ["truth"] : []),
  ] as const;
  const [page, setPage] = useState(0);
  const current = pages[page];
  const next = () => (page + 1 < pages.length ? setPage(page + 1) : onDone());

  useEffect(() => {
    if (current === "result") sfx.complete();
    if (current === "streak") sfx.lamp();
  }, [current]);

  return (
    <div className="end">
      {current === "result" && <ResultPage summary={summary} />}
      {current === "streak" && <StreakPage summary={summary} progress={progress} />}
      {current === "truth" && summary.portion && <TruthPage portion={summary.portion} />}
      <footer className="session-foot">
        <button className="btn primary" onClick={next}>
          Continuer
        </button>
      </footer>
    </div>
  );
}

const format = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

function ResultPage({ summary }: { summary: EndSummary }) {
  const accuracy = summary.total ? Math.round((summary.correct / summary.total) * 100) : 100;
  const title =
    summary.mode === "checkpoint"
      ? summary.passed
        ? "Point de contrôle réussi !"
        : "Presque !"
      : summary.mode === "review"
        ? "Méditation terminée !"
        : summary.perfect
          ? "Portion parfaite !"
          : "Portion terminée !";
  return (
    <section className="end-page pop">
      <div className="end-burst">
        {summary.perfect || summary.passed ? <StarIcon size={72} className="gold" /> : <LampIcon size={84} />}
      </div>
      <h1 className="end-title">{title}</h1>
      {summary.mode === "checkpoint" && !summary.passed && (
        <p className="end-sub">Il faut 80 % de bonnes réponses. Relis les portions et réessaie : tu y es presque.</p>
      )}
      <div className="stat-row">
        <div className="stat xp">
          <span>Total XP</span>
          <strong>
            <XpIcon size={18} /> {summary.xp}
          </strong>
        </div>
        <div className="stat acc">
          <span>Précision</span>
          <strong>{accuracy} %</strong>
        </div>
        <div className="stat time">
          <span>Temps</span>
          <strong>{format(summary.seconds)}</strong>
        </div>
      </div>
      <ul className="breakdown">
        {summary.breakdown.map(([label, xp]) => (
          <li key={label}>
            <span>{label}</span>
            <b>+{xp} XP</b>
          </li>
        ))}
      </ul>
    </section>
  );
}

function StreakPage({ summary, progress }: { summary: EndSummary; progress: Progress }) {
  const count = progress.streak.count;
  const lamp = lampLevel(count);
  const today = dayKey();
  const week = weekOf(today);
  const leveledUp = lamp.min === count && count > 0;
  return (
    <section className="end-page pop">
      <div className={`lamp-hero level-${lamp.index}`}>
        <LampIcon size={120} />
      </div>
      <h1 className="end-title big">{count}</h1>
      <p className="end-sub strong">{count === 1 ? "jour de fidélité" : "jours de fidélité d'affilée"}</p>
      {leveledUp && <p className="level-up">Ta lampe brille davantage : {lamp.name} !</p>}
      <div className="week">
        {week.map((d, i) => {
          const active = progress.activeDays.includes(d);
          const grace = progress.streak.graceDays.includes(d);
          return (
            <div key={d} className={`week-day ${active ? "on" : ""} ${grace ? "grace" : ""} ${d === today ? "today" : ""}`}>
              <span>{WEEKDAY_LETTERS[i]}</span>
              <i>{active ? <LampIcon size={18} /> : grace ? <GraceIcon size={16} /> : null}</i>
            </div>
          );
        })}
      </div>
      <p className="end-sub">
        {lamp.next
          ? `Encore ${lamp.next.min - count} jour${lamp.next.min - count > 1 ? "s" : ""} pour atteindre « ${lamp.next.name} ».`
          : "Ta lumière brille sur la montagne. Continue de la porter chaque jour."}
      </p>
      {summary.graceEarned && (
        <div className="grace-earned">
          <GraceIcon size={28} />
          <p>
            Tu as reçu une <b>Grâce</b> ! Elle protégera ta série si tu manques un jour.
          </p>
        </div>
      )}
    </section>
  );
}

function TruthPage({ portion }: { portion: Portion }) {
  const [copied, setCopied] = useState(false);
  const share = async () => {
    const text = `« ${portion.verse.text} » — ${portion.verse.ref}\n\n${portion.keyTruth}\n\nChristHub`;
    try {
      if (navigator.share) await navigator.share({ text });
      else {
        await navigator.clipboard.writeText(text);
        setCopied(true);
      }
    } catch {
      // Share cancelled.
    }
  };
  return (
    <section className="end-page pop">
      <p className="step-kicker center">Le verset à garder aujourd'hui</p>
      <figure className="verse big">
        <blockquote>« {portion.verse.text} »</blockquote>
        <figcaption>{portion.verse.ref}</figcaption>
      </figure>
      <aside className="key-truth">
        <span>À retenir</span>
        {portion.keyTruth}
      </aside>
      <button className="btn ghost" onClick={share}>
        <ShareIcon size={18} /> {copied ? "Copié !" : "Partager"}
      </button>
    </section>
  );
}
