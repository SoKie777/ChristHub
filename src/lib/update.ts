// Looks for a newer APK in the GitHub Releases. Builds are numbered by the
// GitHub Actions run (tag v0.1.N); the running build knows its own number.

const REPO = "SoKie777/ChristHub";
export const DOWNLOAD_URL = `https://github.com/${REPO}/releases/latest/download/ChristHub.apk`;
export const RELEASES_URL = `https://github.com/${REPO}/releases/latest`;

export const APP_VERSION: string = __APP_VERSION__;

const buildNumber = (version: string) => {
  const match = /(\d+)\.(\d+)\.(\d+)/.exec(version);
  return match ? match.slice(1).map(Number) : null;
};

const isNewer = (latest: number[], current: number[]) => {
  for (let i = 0; i < 3; i++) if (latest[i] !== current[i]) return latest[i] > current[i];
  return false;
};

export type UpdateStatus =
  | { state: "checking" }
  | { state: "available"; version: string }
  | { state: "current"; version: string }
  | { state: "offline" };

export const checkForUpdate = async (): Promise<UpdateStatus> => {
  try {
    const response = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!response.ok) return { state: "offline" };
    const { tag_name } = (await response.json()) as { tag_name: string };
    const latest = buildNumber(tag_name);
    const current = buildNumber(APP_VERSION);
    const version = tag_name.replace(/^v/, "");
    // A local build (no version) never claims to be up to date.
    if (latest && (!current || isNewer(latest, current))) return { state: "available", version };
    return { state: "current", version };
  } catch {
    return { state: "offline" };
  }
};
