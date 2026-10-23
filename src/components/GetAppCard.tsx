import { DOWNLOAD_URL } from "../lib/update";
import { isAndroidApp, isIOS, isStandalone } from "../lib/platform";
import { ShareIcon } from "./icons";

// On the web version: how to get ChristHub as an app on this device.
// Android gets the APK, iPhone gets « Sur l'écran d'accueil », a computer sees both.

const isAndroid = /Android/i.test(navigator.userAgent);

export function GetAppCard() {
  if (isAndroidApp || isStandalone) return null;

  const iphoneSteps = (
    <p>
      Dans Safari, touche <ShareIcon size={16} /> <b>Partager</b>, puis <b>{"« Sur l'écran d'accueil »"}</b>. L'appli
      s'ouvrira en plein écran et ta progression sera bien gardée.
    </p>
  );

  const apkButton = (
    <a className="btn primary small" href={DOWNLOAD_URL} rel="noopener">
      Télécharger l'appli Android
    </a>
  );

  if (isIOS)
    return (
      <section className="install-card">
        <strong>Installe ChristHub sur ton iPhone</strong>
        {iphoneSteps}
      </section>
    );

  if (isAndroid)
    return (
      <section className="install-card">
        <strong>Installe l'appli ChristHub</strong>
        <p>Télécharge l'appli pour Android, puis ouvre le fichier ChristHub.apk. Ton téléphone te demandera d'autoriser l'installation depuis ton navigateur.</p>
        {apkButton}
      </section>
    );

  return (
    <section className="install-card">
      <strong>ChristHub sur ton téléphone</strong>
      <p>
        <b>Android :</b> télécharge l'appli et installe le fichier ChristHub.apk.
      </p>
      {apkButton}
      <p>
        <b>iPhone :</b> ouvre ce site dans Safari, touche <ShareIcon size={16} /> <b>Partager</b>, puis{" "}
        <b>{"« Sur l'écran d'accueil »"}</b>.
      </p>
    </section>
  );
}
