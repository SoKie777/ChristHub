import { useState } from "react";
import { bookPortions, books, creditsFor, findBook } from "../data/book";
import { Mascot, MascotSays } from "../components/Mascots";
import { UpdateCard } from "../components/UpdateCard";
import type { Book, Chapter, Portion } from "../data/types";
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

// Home: the library (Livres), the book path (Chemin), spaced review (Méditer)
// and the profile.

export type Tab = "livres" | "chemin" | "mediter" | "profil";

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
  onOpenBook: (book: Book) => void;
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
        {tab === "livres" && <LibraryTab {...props} />}
        {tab === "chemin" && <PathTab {...props} />}
        {tab === "mediter" && <ReviewTab {...props} />}
        {tab === "profil" && <ProfileTab {...props} />}
      </main>

      <nav className="tabbar">
        {(
          [
            ["livres", "Livres", BookIcon],
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

function LibraryTab({ progress, onOpenBook }: Props) {
  return (
    <div className="library-tab">
      <MascotSays who="biblo" mood="happy" size={92}>
        Quel livre veux-tu méditer aujourd'hui ?
      </MascotSays>
      <h1 className="section-title big">Bibliothèque</h1>
      <div className="books">
        {books.map((book) => {
          const portions = bookPortions(book);
          const done = portions.filter((p) => progress.portions[p.id]).length;
          const total = book.chapters.length + book.upcoming.length;
          const current = progress.currentBook === book.id;
          return (
            <button
              key={book.id}
              className={`book-card ${current ? "current" : ""}`}
              onClick={() => {
                sfx.tap();
                onOpenBook(book);
              }}
            >
              <span className="book-cover" style={{ background: `linear-gradient(160deg, ${book.cover[0]}, ${book.cover[1]})` }}>
                <BookIcon size={34} />
              </span>
              <span className="book-info">
                <strong>{book.courseTitle}</strong>
                <span className="book-author">
                  {book.author} · {book.chapters.length}/{total} chapitres disponibles
                </span>
                <span className="book-blurb">{book.blurb}</span>
                <span className="book-bar">
                  <i style={{ width: `${portions.length ? (done / portions.length) * 100 : 0}%` }} />
                </span>
                <span className="book-cta">{done === 0 ? "Commencer" : current ? "Continuer" : "Reprendre"}</span>
              </span>
            </button>
          );
        })}
        <div className="book-card soon">
          <span className="book-cover">
            <LockIcon size={28} />
          </span>
          <span className="book-info">
            <strong>D'autres livres arrivent</strong>
            <span className="book-blurb">La bibliothèque s'agrandira au fil des mises à jour.</span>
          </span>
        </div>
      </div>
    </div>
  );
}

/** The companion stands on the free side of the current node. */
const mascotSide = (i: number) => (OFFSETS[i % OFFSETS.length] > 0 || i % OFFSETS.length === 4 ? "on-left" : "on-right");

function PathTab(props: Props) {
  const { progress, onTab } = props;
  const book = findBook(progress.currentBook);
  if (!book)
    return (
      <div className="path-tab empty">
        <MascotSays who="biblo" mood="think">
          Choisis d'abord un livre dans la bibliothèque.
        </MascotSays>
        <button className="btn primary" onClick={() => onTab("livres")}>
          Ouvrir la bibliothèque
        </button>
      </div>
    );
  return <BookPath {...props} book={book} />;
}

function BookPath({ progress, onStartPortion, onStartCheckpoint, onTab, book }: Props & { book: Book }) {
  const [open, setOpen] = useState<string | null>(null);
  const todayXp = progress.xpByDay[dayKey()] ?? 0;
  const goal = progress.dailyGoal;
  const credits = creditsFor(book);

  return (
    <div className="path-tab">
      <section className="goal-card">
        <div className="goal-ring" style={{ ["--p" as string]: Math.min(1, todayXp / goal) }}>
          <XpIcon size={20} />
        </div>
        <div>
          <strong>Objectif du jour</strong>
          <p>
            {Math.min(todayXp, goal)} / {goal} XP{todayXp >= goal ? " · atteint, gloire à Dieu !" : ""}
          </p>
        </div>
      </section>

      {bookPortions(book).every((p) => progress.portions[p.id]) && <UpdateCard finished />}

      <section className="course-head">
        <button className="switch-book" onClick={() => onTab("livres")}>
          <BookIcon size={16} /> Changer de livre
        </button>
        <h1 className="course-title">{book.courseTitle}</h1>
        <p className="course-kicker">{credits.inspired}</p>
        <p className="course-deeper">{credits.deeper}</p>
      </section>

      {book.chapters.map((chapter, chapterIndex) => {
        const done = chapter.portions.filter((p) => progress.portions[p.id]).length;
        // A chapter opens once every portion of the previous one is done.
        const opened = chapterIndex === 0 || book.chapters[chapterIndex - 1].portions.every((p) => progress.portions[p.id]);
        const currentIndex = opened ? chapter.portions.findIndex((p) => !progress.portions[p.id]) : -2;
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
                    {state === "current" && (
                      <Mascot
                        who={chapterIndex % 2 ? "crucy" : "biblo"}
                        mood="happy"
                        size={70}
                        className={`path-mascot ${mascotSide(i)}`}
                      />
                    )}
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

      {book.upcoming.map((title, i) => (
        <section key={title} className="chapter locked">
          <div className="chapter-banner">
            <div>
              <p className="chapter-kicker">Chapitre {book.chapters.length + i + 1} · bientôt</p>
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
  const learned = books.flatMap(bookPortions).filter((p) => progress.portions[p.id]);
  const waiting = Object.keys(progress.review).length;
  return (
    <div className="review-tab">
      <section className="review-hero">
        <Mascot who="biblo" mood="think" size={88} />
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
  const credits = creditsFor(findBook(progress.currentBook) ?? books[0]);
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
        <UpdateCard finished={false} />
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
