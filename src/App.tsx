import { useEffect, useState } from "react";
import { allPortions, findExercise } from "./data/book";
import type { Chapter, Exercise, Portion } from "./data/types";
import { dayKey } from "./lib/day";
import { setSoundEnabled } from "./lib/feedback";
import {
  XP,
  creditDay,
  dueReviews,
  emptyProgress,
  loadProgress,
  reconcileStreak,
  reviewAnswered,
  saveProgress,
  scheduleMissed,
  type Progress,
} from "./lib/progress";
import { EndScreens, type EndSummary } from "./screens/EndScreens";
import { Home, type Tab } from "./screens/Home";
import { Session, type SessionMode, type SessionResult } from "./screens/Session";

type Screen = { name: "home" } | { name: "session"; mode: SessionMode } | { name: "end"; summary: EndSummary };

const shuffle = <T,>(list: T[]) => [...list].sort(() => Math.random() - 0.5);

const initialState = () => {
  const { progress, gracesUsed, lost } = reconcileStreak(loadProgress());
  const notice =
    gracesUsed > 0
      ? `Une Grâce a protégé ta série pendant ton absence. Ta lampe brûle encore !`
      : lost > 0
        ? `Ta série de ${lost} jour${lost > 1 ? "s" : ""} s'est éteinte. Rallume ta lampe aujourd'hui : chaque jour est un nouveau départ.`
        : null;
  return { progress, notice };
};

export default function App() {
  const [{ progress, notice }, setState] = useState(initialState);
  const [screen, setScreen] = useState<Screen>({ name: "home" });
  const [tab, setTab] = useState<Tab>("chemin");

  useEffect(() => {
    saveProgress(progress);
    setSoundEnabled(progress.soundOn);
  }, [progress]);

  // Android back button / browser back: leave a session instead of the app.
  useEffect(() => {
    if (screen.name === "home") return;
    history.pushState({ christhub: true }, "");
    const onPop = () => setScreen({ name: "home" });
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [screen.name]);

  const setProgress = (p: Progress) => setState((s) => ({ ...s, progress: p }));
  const goHome = () => {
    if (history.state?.christhub) history.back();
    setScreen({ name: "home" });
  };

  const startPortion = (portion: Portion, index: number) => setScreen({ name: "session", mode: { kind: "learn", portion, index } });

  const startCheckpoint = (chapter: Chapter) =>
    setScreen({
      name: "session",
      mode: { kind: "checkpoint", chapterId: chapter.id, exercises: shuffle(chapter.portions.flatMap((p) => p.exercises)).slice(0, 10) },
    });

  const startReview = (free: boolean) => {
    let exercises: Exercise[];
    if (free) {
      const learned = allPortions.filter((p) => progress.portions[p.id]).flatMap((p) => p.exercises);
      exercises = shuffle(learned).slice(0, 6);
    } else {
      exercises = dueReviews(progress)
        .map((id) => findExercise(id)?.exercise)
        .filter((e): e is Exercise => Boolean(e))
        .slice(0, 10);
    }
    if (exercises.length) setScreen({ name: "session", mode: { kind: "review", exercises } });
  };

  const finish = (result: SessionResult) => {
    const answers = Object.entries(result.firstTry);
    const correct = answers.filter(([, ok]) => ok).length;
    const missed = answers.filter(([, ok]) => !ok).map(([id]) => id);
    const breakdown: [string, number][] = [];
    let p = progress;
    let passed: boolean | undefined;

    if (result.mode === "learn" && result.portion) {
      const portion = result.portion;
      const perfect = missed.length === 0;
      breakdown.push(["Portion terminée", XP.portion]);
      if (perfect) breakdown.push(["Aucune erreur", XP.perfectBonus]);
      if (result.mirror && (result.mirror.choice || result.mirror.note)) breakdown.push(["Face au miroir", XP.mirror]);
      breakdown.push(["Prière", XP.prayer]);
      if (result.maxCombo >= 3) breakdown.push([`Combo ×${result.maxCombo}`, result.maxCombo - 2]);
      const previous = p.portions[portion.id];
      p = {
        ...scheduleMissed(p, missed),
        portions: {
          ...p.portions,
          [portion.id]: {
            completedAt: previous?.completedAt ?? dayKey(),
            times: (previous?.times ?? 0) + 1,
            perfect: Boolean(previous?.perfect) || perfect,
          },
        },
        journal:
          result.mirror && (result.mirror.choice || result.mirror.note)
            ? [
                ...p.journal,
                {
                  portionId: portion.id,
                  day: dayKey(),
                  question: portion.mirror.question,
                  choice: result.mirror.choice,
                  note: result.mirror.note,
                },
              ]
            : p.journal,
      };
    } else if (result.mode === "review") {
      for (const [id, ok] of answers) p = reviewAnswered(p, id, ok);
      breakdown.push(["Méditer à nouveau", Math.max(2, correct * XP.reviewItem)]);
    } else if (result.mode === "checkpoint" && result.chapterId) {
      const score = answers.length ? Math.round((correct / answers.length) * 100) : 0;
      passed = score >= 80;
      breakdown.push(["Bonnes réponses", correct]);
      if (passed) breakdown.push(["Couronne du chapitre", XP.checkpoint]);
      const best = p.checkpoints[result.chapterId];
      if (passed && (!best || best.score < score))
        p = { ...p, checkpoints: { ...p.checkpoints, [result.chapterId]: { passedAt: dayKey(), score } } };
    }

    const xp = breakdown.reduce((sum, [, n]) => sum + n, 0);
    const credit = creditDay(p, xp);
    setProgress(credit.progress);
    setScreen({
      name: "end",
      summary: {
        mode: result.mode,
        xp,
        breakdown,
        correct,
        total: answers.length,
        perfect: result.mode !== "checkpoint" && missed.length === 0,
        maxCombo: result.maxCombo,
        seconds: result.seconds,
        streakExtended: credit.streakExtended,
        graceEarned: credit.graceEarned,
        passed,
        portion: result.portion,
      },
    });
  };

  if (screen.name === "session")
    return <Session key={JSON.stringify(screen.mode.kind)} mode={screen.mode} onExit={goHome} onFinish={finish} />;

  if (screen.name === "end") return <EndScreens summary={screen.summary} progress={progress} onDone={goHome} />;

  return (
    <Home
      progress={progress}
      tab={tab}
      notice={notice}
      onTab={setTab}
      onDismissNotice={() => setState((s) => ({ ...s, notice: null }))}
      onStartPortion={startPortion}
      onStartCheckpoint={startCheckpoint}
      onStartReview={startReview}
      onUpdate={setProgress}
      onReset={() => setState({ progress: emptyProgress(), notice: null })}
    />
  );
}
