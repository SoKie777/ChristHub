import type { Progress } from "./progress";

// Daily reminders live in the Android app (native alarms and notifications,
// see Reminders.kt). The web version has no reminders: it would need a push server.

interface AndroidBridge {
  configure(enabled: boolean, hour: number, minute: number, lastDay: string, streak: number): void;
  notificationsAllowed(): boolean;
  requestPermission(): void;
}

const bridge = (window as Window & { ChristHubAndroid?: AndroidBridge }).ChristHubAndroid;

export const remindersAvailable = Boolean(bridge);

/** Times offered in the profile. */
export const REMINDER_TIMES = [
  { label: "Matin", time: "08:00", display: "8 h" },
  { label: "Midi", time: "12:30", display: "12 h 30" },
  { label: "Soir", time: "19:00", display: "19 h" },
  { label: "Nuit", time: "21:00", display: "21 h" },
];

/** Tells the Android app the reminder settings and the last day practised. */
export const syncReminders = (p: Progress) => {
  if (!bridge) return;
  const [hour, minute] = p.reminders.time.split(":").map(Number);
  try {
    bridge.configure(p.reminders.enabled, hour, minute, p.streak.lastDay ?? "", p.streak.count);
  } catch {
    // Older APK without the bridge methods.
  }
};

export const askNotificationPermission = () => {
  try {
    bridge?.requestPermission();
  } catch {
    // Older APK.
  }
};

export const notificationsBlocked = () => {
  try {
    return bridge ? !bridge.notificationsAllowed() : false;
  } catch {
    return false;
  }
};
