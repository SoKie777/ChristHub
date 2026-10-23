// Where the app is running: inside the Android APK (WebView served from
// appassets.androidplatform.net) or as the web version in a browser.

export const isAndroidApp = location.hostname === "appassets.androidplatform.net";

export const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

/** Opened from the home screen icon rather than in a browser tab. */
export const isStandalone =
  matchMedia("(display-mode: standalone)").matches || (navigator as Navigator & { standalone?: boolean }).standalone === true;

/** The web version caches itself to work offline (never inside the APK, which is already offline). */
export const registerServiceWorker = () => {
  if (isAndroidApp || !import.meta.env.PROD || !("serviceWorker" in navigator)) return;
  // Asks the browser not to clear the progress kept in localStorage.
  void navigator.storage?.persist?.().catch(() => false);
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).catch(() => {
      // No offline mode, the app still works online.
    });
  });
};
