import { useEffect, useState } from "react";
import { APP_VERSION, DOWNLOAD_URL, RELEASES_URL, checkForUpdate, type UpdateStatus } from "../lib/update";
import { CrownIcon } from "./icons";

// « Tu as tout terminé » card on the path (checks right away), or a small
// « Vérifier les mises à jour » block in the profile (checks on demand).
// `bookComplete`: the whole book is written, so no more chapters will come for it.

export function UpdateCard({ finished, bookComplete = false }: { finished: boolean; bookComplete?: boolean }) {
  const [status, setStatus] = useState<UpdateStatus | null>(null);

  const check = () => {
    setStatus({ state: "checking" });
    void checkForUpdate().then(setStatus);
  };

  useEffect(() => {
    if (finished) check();
  }, [finished]);

  return (
    <section className={`update-card ${finished ? "finished" : ""}`}>
      {finished && (
        <>
          <CrownIcon size={34} className="gold" />
          <h3>{bookComplete ? "Tu as terminé tout le livre, gloire à Dieu !" : "Tu as terminé tout ce que contient ta version !"}</h3>
        </>
      )}

      {status === null && (
        <button className="btn ghost small" onClick={check}>
          Vérifier les mises à jour
        </button>
      )}
      {status?.state === "checking" && <p className="hint">Recherche d'une nouvelle version…</p>}
      {status?.state === "available" && (
        <>
          <p>
            La version <b>{status.version}</b> est disponible{finished ? (bookComplete ? ", peut-être avec de nouveaux livres" : ", avec la suite du parcours") : ""}. Ta progression sera
            conservée.
          </p>
          <a className="btn primary" href={DOWNLOAD_URL} target="_blank" rel="noopener">
            Télécharger la mise à jour
          </a>
          <p className="hint">Ouvre ensuite le fichier ChristHub.apk téléchargé pour l'installer.</p>
        </>
      )}
      {status?.state === "current" && (
        <p>
          Tu as la dernière version
          {finished
            ? bookComplete
              ? ". D'autres livres rejoindront bientôt la bibliothèque : en attendant, continue de méditer chaque jour pour garder ta lampe allumée !"
              : ". De nouveaux chapitres arrivent bientôt : reviens méditer chaque jour pour garder ta lampe allumée !"
            : "."}
        </p>
      )}
      {status?.state === "offline" && (
        <>
          <p>Impossible de vérifier pour l'instant. Connecte-toi à internet, ou ouvre directement la page des versions.</p>
          <div className="update-actions">
            <button className="btn ghost small" onClick={check}>
              Réessayer
            </button>
            <a className="btn ghost small" href={RELEASES_URL} target="_blank" rel="noopener">
              Page des versions
            </a>
          </div>
        </>
      )}
      <p className="version">Version {APP_VERSION === "dev" ? "de développement" : APP_VERSION}</p>
    </section>
  );
}
