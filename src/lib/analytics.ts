// Anonymous events for the GoatCounter dashboard (script loaded in index.html).
// Silent when offline or when the counter is blocked.

type GoatCounter = { count?: (vars: { path: string; title?: string; event?: boolean }) => void };

export const track = (path: string, title?: string) => {
  try {
    (window as Window & { goatcounter?: GoatCounter }).goatcounter?.count?.({ path, title, event: true });
  } catch {
    // Counting must never break the app.
  }
};
