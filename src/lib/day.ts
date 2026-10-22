// Calendar days in local time, as "YYYY-MM-DD" keys.

export const dayKey = (date = new Date()) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const parse = (key: string) => {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
};

export const addDays = (key: string, n: number) => {
  const date = parse(key);
  date.setDate(date.getDate() + n);
  return dayKey(date);
};

/** Whole days from a to b (b - a). */
export const daysBetween = (a: string, b: string) => Math.round((parse(b).getTime() - parse(a).getTime()) / 86_400_000);

/** Monday-first week containing the given day. */
export const weekOf = (key: string) => {
  const date = parse(key);
  const offset = (date.getDay() + 6) % 7;
  return Array.from({ length: 7 }, (_, i) => addDays(key, i - offset));
};

export const WEEKDAY_LETTERS = ["L", "M", "M", "J", "V", "S", "D"];
