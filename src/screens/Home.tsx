import { useState } from "react";
import { book, credits } from "../data/book";
import type { Chapter, Portion } from "../data/types";
import {
  BookIcon,
  BrainIcon,
  CheckIcon,
  CrownIcon,
  GraceIcon,
  LampIcon,
  LockIcon,
  PathIcon,
  StarIcon,
  UserIcon,
  XpIcon,
} from "../components/icons";
import { WEEKDAY_LETTERS, addDays, dayKey } from "../lib/day";
import { sfx } from "../lib/feedback";
import { MAX_GRACES, dueReviews, lampLevel, type Progress } from "../lib/progress";

// Home: the book path (Chemin), spaced review (Méditer) and the profile.

export type Tab = "chemin" | "mediter" | "profil";

/** Coming chapters, shown locked on the path. */
const NEXT_CHAPTERS = [
  "Sept principes du but",
  "La création de l'homme",
  "Le dessein de Dieu pour l'homme",
  "Régner plutôt que dominer",
  "Visionnaire et leader",
  "Enseignant et cultivateur",
  "Pourvoyeur et protecteur",
  "L'homme et sa sexualité",
  "Différences entre l'homme et la femme",
  "Être un bon père",
  "Les clés pour devenir un vrai homme",
];

interface Props {
  progress: Progress;
  tab: Tab;
  notice: string | null;
  onTab: (t: Tab) => void;
  onDismissNotice: () => void;
  onStartPortion: (portion: Portion, index: number) => void;
  onStartCheckpoint: (chapter: Chapter) => void;
  onStartReview: (free: boolean) => void;
  onUpdate: (p: Progress) => void;
  onReset: () => void;
}

export function Home(props: Props) {
  const { progress, tab, onTab, notice, onDismissNotice } = props;
  const lamp = lampLevel(progress.streak.count);
  const practisedToday = progress.streak.lastDay === dayKey();
  return (
    <div className="home">
      <header className="topbar">
        <div className="brand" aria-label="ChristHub">
          <img className="brand-mark" src={`${import.meta.env.BASE_URL}mark.png`} alt="" width={30} height={30} />
          <span className="brand-christ">Christ</span>
          <span className="brand-hub">Hub</span>
        </div>
        <div className="counters">
          <span className={`counter lamp ${practisedToday ? "" : "dim"}`} title={lamp.name}>
            <LampIcon size={22} lit={progress.streak.count > 0} /> {progress.streak.count}
          </span>
          <span className="counter grace" title="Grâces">
            <GraceIcon size={20} /> {progress.streak.graces}
          </span>
          <span className="counter xp" title="XP">
            <XpIcon size={20} /> {progress.xp}
          </span>
        </div>
      </header>

      {notice && (
        <button className="notice" onClick={onDismissNotice}>
          {notice}
        </button>
      )}

      <main className="home-body">
        {tab === "chemin" && <PathTab {...props} />}
        {tab === "mediter" && <ReviewTab {...props} />}
        {tab === "profil" && <ProfileTab {...props} />}
      </main>

      <nav className="tabbar">
        {(
          [
            ["chemin", "Chemin", PathIcon],
            ["mediter", "Méditer", BrainIcon],
            ["profil", "Profil", UserIcon],
          ] as const
        ).map(([id, label, Icon]) => (
          <button
            key={id}
            className={`tab ${tab === id ? "active" : ""}`}
            onClick={() => {
              sfx.tap();
              onTab(id);
            }}
          >
            <Icon size={24} />
            <span>{label}</span>
            {id === "mediter" && dueReviews(progress).length > 0 && <i className="dot" />}
          </button>
        ))}
      </nav>
    </div>
  );
}

const OFFSETS = [0, 58, 88, 58, 0, -58, -88, -58];

function PathTab({ progress, onStartPortion, onStartCheckpoint }: Props) {
  const [open, setOpen] = useState<string | null>(null);
  const todayXp = progress.xpByDay[dayKey()] ?? 0;
  const goal = progress.dailyGoal;

  return (
    <div className="path-tab">
      <section className="goal-card">
        <div className="goal-ring" style={{ ["--p" as string]: Math.min(1, todayXp / goal) }}>
          <XpIcon size={20} />
        </div>
        <div>
          <strong>Objectif du jour</strong>
          <p>
            {Math.min(todayXp, goal)} / {goal} XP{todayXp >= goal ? " — atteint, gloire à Dieu !" : ""}
          </p>
        </div>
      </section>

      <section className="course-head">
        <h1 className="course-title">{book.courseTitle}</h1>
        <p className="course-kicker">{credits.inspired}</p>
        <p className="course-deeper">{credits.deeper}</p>
      </section>

      {book.chapters.map((chapter) => {
        const done = chapter.portions.filter((p) => progress.portions[p.id]).length;
        const currentIndex = chapter.portions.findIndex((p) => !progress.portions[p.id]);
        const allDone = currentIndex === -1;
        const checkpoint = progress.checkpoints[chapter.id];
        return (
          <section key={chapter.id} className="chapter">
            <div className="chapter-banner">
              <div>
                <p className="chapter-kicker">
                  Chapitre {chapter.number} · {done}/{chapter.portions.length} portions
                </p>
                <h2>{chapter.title}</h2>
                <p className="chapter-theme">{chapter.theme}</p>
              </div>
              <BookIcon size={34} />
            </div>

            <ol className="path">
              {chapter.portions.map((portion, i) => {
                const record = progress.portions[portion.id];
                const state = record ? "done" : i === currentIndex ? "current" : "locked";
                return (
                  <li key={portion.id} className="path-row" style={{ transform: `translateX(${OFFSETS[i % OFFSETS.length]}px)` }}>
                    {state === "current" && open !== portion.id && <span className="start-bubble">COMMENCER</span>}
                    <button
                      className={`node ${state} ${record?.perfect ? "perfect" : ""}`}
                      aria-label={portion.title}
                      onClick={() => {
                        sfx.tap();
                        setOpen(open === portion.id ? null : portion.id);
                      }}
                    >
                      {state === "done" ? (
                        record?.perfect ? <StarIcon size={30} /> : <CheckIcon size={30} />
                      ) : state === "current" ? (
                        <BookIcon size={30} />
                      ) : (
                        <LockIcon size={26} />
                      )}
                    </button>
                    {open === portion.id && (
                      <div className={`node-pop ${state}`}>
                        <p className="pop-kicker">Portion {i + 1}</p>
                        <h3>{portion.title}</h3>
                        {state === "locked" ? (
                          <p className="pop-text">Termine la portion précédente pour ouvrir celle-ci.</p>
                        ) : (
                          <button className="btn primary small" onClick={() => onStartPortion(portion, i)}>
                            {state === "done" ? "Revivre cette portion" : "Commencer · +15 XP"}
                          </button>
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
              <li className="path-row">
                <button
                  className={`node checkpoint ${checkpoint ? "done" : allDone ? "current" : "locked"}`}
                  aria-label="Point de contrôle"
                  onClick={() => {
                    sfx.tap();
                    setOpen(open === chapter.id ? null : chapter.id);
                  }}
                >
                  <CrownIcon size={30} />
                </button>
                {open === chapter.id && (
                  <div className="node-pop">
                    <p className="pop-kicker">Point de contrôle</p>
                    <h3>Révision du chapitre {chapter.number}</h3>
                    {allDone ? (
                      <button className="btn primary small" onClick={() => onStartCheckpoint(chapter)}>
                        {checkpoint ? `Refaire (meilleur : ${checkpoint.score} %)` : "Relever le défi · +20 XP"}
                      </button>
                    ) : (
                      <p className="pop-text">Termine les {chapter.portions.length} portions pour débloquer la couronne.</p>
                    )}
                  </div>
                )}
              </li>
            </ol>
          </section>
        );
      })}

      {NEXT_CHAPTERS.map((title, i) => (
        <section key={title} className="chapter locked">
          <div className="chapter-banner">
            <div>
              <p className="chapter-kicker">Chapitre {i + 2} · bientôt</p>
              <h2>{title}</h2>
            </div>
            <LockIcon size={26} />
          </div>
        </section>
      ))}
      <p className="source">{credits.legal}</p>
    </div>
  );
}

function ReviewTab({ progress, onStartReview }: Props) {
  const due = dueReviews(progress).length;
  const learned = book.chapters.flatMap((c) => c.portions).filter((p) => progress.portions[p.id]);
  const waiting = Object.keys(progress.review).length;
  return (
    <div className="review-tab">
      <section className="review-hero">
        <BrainIcon size={44} />
        <h2>Méditer à nouveau</h2>
        <p>
          Les vérités que tu as manquées reviennent au bon moment : le lendemain, puis 3, 7 et 16 jours plus tard. Les XP sont
          doublés.
        </p>
        {due > 0 ? (
          <button className="btn primary" onClick={() => onStartReview(false)}>
            Revoir {due} point{due > 1 ? "s" : ""} · +{due * 4} XP
          </button>
        ) : learned.length > 0 ? (
          <>
            <p className="hint">
              Rien à revoir aujourd'hui{waiting ? ` (${waiting} point${waiting > 1 ? "s" : ""} en attente)` : ""}.
            </p>
            <button className="btn ghost" onClick={() => onStartReview(true)}>
              Révision libre
            </button>
          </>
        ) : (
          <p className="hint">Termine ta première portion pour commencer.</p>
        )}
      </section>

      <h3 className="section-title">Mes vérités ({learned.length})</h3>
      {learned.length === 0 && <p className="hint">Chaque portion terminée ajoute ici sa vérité à retenir.</p>}
      <div className="truths">
        {learned.map((p) => (
          <article key={p.id} className="truth-card">
            <p>{p.keyTruth}</p>
            <span>
              {p.verse.ref} · {p.title}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}

function ProfileTab({ progress, onUpdate, onReset }: Props) {
  const [confirmReset, setConfirmReset] = useState(false);
  const lamp = lampLevel(progress.streak.count);
  const done = Object.keys(progress.portions).length;
  const perfect = Object.values(progress.portions).filter((r) => r.perfect).length;
  const today = dayKey();
  // Last 5 weeks, Monday first.
  const start = addDays(today, -((new Date().getDay() + 6) % 7) - 28);
  const days = Array.from({ length: 35 }, (_, i) => addDays(start, i));

  return (
    <div className="profile-tab">
      <section className="lamp-card">
        <div className={`lamp-hero small level-${lamp.index}`}>
          <LampIcon size={64} lit={progress.streak.count > 0} />
        </div>
        <div>
          <h2>{lamp.name}</h2>
          <p>
            Série : <b>{progress.streak.count}</b> jour{progress.streak.count > 1 ? "s" : ""} · record {progress.streak.longest}
          </p>
          {lamp.next && <p className="hint">Prochaine étape à {lamp.next.min} jours : {lamp.next.name}</p>}
        </div>
      </section>

      <div className="stats-grid">
        <div className="stat-box">
          <XpIcon size={22} />
          <strong>{progress.xp}</strong>
          <span>XP au total</span>
        </div>
        <div className="stat-box">
          <BookIcon size={22} />
          <strong>{done}</strong>
          <span>portions</span>
        </div>
        <div className="stat-box">
          <StarIcon size={22} className="gold" />
          <strong>{perfect}</strong>
          <span>parfaites</span>
        </div>
        <div className="stat-box">
          <GraceIcon size={22} />
          <strong>
            {progress.streak.graces}/{MAX_GRACES}
          </strong>
          <span>Grâces</span>
        </div>
      </div>

      <h3 className="section-title">Calendrier de fidélité</h3>
      <div className="calendar">
        {WEEKDAY_LETTERS.map((l, i) => (
          <span key={`h${i}`} className="cal-head">
            {l}
          </span>
        ))}
        {days.map((d) => (
          <span
            key={d}
            className={`cal-day ${progress.activeDays.includes(d) ? "on" : ""} ${
              progress.streak.graceDays.includes(d) ? "grace" : ""
            } ${d === today ? "today" : ""} ${d > today ? "future" : ""}`}
          >
            {Number(d.slice(8))}
          </span>
        ))}
      </div>
      <p className="hint">
        Une <b>Grâce</b> protège ta série si tu manques un jour. Tu en reçois aux paliers de 3, 7, 14 et 30 jours (2 au maximum).
      </p>

      <h3 className="section-title">Mon journal du miroir</h3>
      {progress.journal.length === 0 && <p className="hint">Tes réponses du miroir apparaîtront ici.</p>}
      <div className="journal">
        {[...progress.journal].reverse().map((e, i) => (
          <article key={i} className="journal-entry">
            <span className="journal-date">{new Date(`${e.day}T12:00`).toLocaleDateString("fr-FR", { day: "numeric", month: "long" })}</span>
            <p className="journal-q">{e.question}</p>
            {e.choice && <p className="journal-a">{e.choice}</p>}
            {e.note && <p className="journal-note">{e.note}</p>}
          </article>
        ))}
      </div>

      <h3 className="section-title">Réglages</h3>
      <div className="settings">
        <label className="setting">
          <span>Sons</span>
          <input type="checkbox" checked={progress.soundOn} onChange={(e) => onUpdate({ ...progress, soundOn: e.target.checked })} />
        </label>
        <div className="setting">
          <span>Objectif quotidien</span>
          <div className="seg">
            {[10, 20, 30, 50].map((g) => (
              <button key={g} className={progress.dailyGoal === g ? "on" : ""} onClick={() => onUpdate({ ...progress, dailyGoal: g })}>
                {g}
              </button>
            ))}
          </div>
        </div>
        {!confirmReset ? (
          <button className="btn ghost danger" onClick={() => setConfirmReset(true)}>
            Effacer ma progression
          </button>
        ) : (
          <div className="confirm">
            <p>Tout effacer (XP, série, journal) ? C'est définitif.</p>
            <button className="btn ghost danger" onClick={onReset}>
              Oui, tout effacer
            </button>
            <button className="btn ghost" onClick={() => setConfirmReset(false)}>
              Annuler
            </button>
          </div>
        )}
      </div>
      <p className="source">
        {credits.inspired}.
        <br />
        {credits.deeper}
        <br />
        {credits.legal}
      </p>
    </div>
  );
}
