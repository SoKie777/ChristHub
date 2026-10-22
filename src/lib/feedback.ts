// Little sounds made on the fly with Web Audio (no audio files), plus haptics.

let ctx: AudioContext | null = null;
let enabled = true;

export const setSoundEnabled = (on: boolean) => {
  enabled = on;
};

const audio = () => {
  if (!ctx) {
    const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    ctx = new Ctor();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
};

const tone = (freq: number, start: number, duration: number, type: OscillatorType = "sine", gain = 0.18) => {
  const a = audio();
  if (!a) return;
  const t = a.currentTime + start;
  const osc = a.createOscillator();
  const vol = a.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  vol.gain.setValueAtTime(0, t);
  vol.gain.linearRampToValueAtTime(gain, t + 0.015);
  vol.gain.exponentialRampToValueAtTime(0.0001, t + duration);
  osc.connect(vol).connect(a.destination);
  osc.start(t);
  osc.stop(t + duration + 0.05);
};

const vibrate = (pattern: number | number[]) => {
  try {
    navigator.vibrate?.(pattern);
  } catch {
    // Not available: silent.
  }
};

export const sfx = {
  tap() {
    if (enabled) tone(660, 0, 0.06, "triangle", 0.06);
    vibrate(8);
  },
  correct() {
    if (enabled) {
      tone(784, 0, 0.14, "triangle");
      tone(1175, 0.09, 0.22, "triangle");
    }
    vibrate(20);
  },
  wrong() {
    if (enabled) {
      tone(220, 0, 0.18, "sawtooth", 0.08);
      tone(185, 0.12, 0.22, "sawtooth", 0.08);
    }
    vibrate([40, 50, 40]);
  },
  combo() {
    if (enabled) [880, 1109, 1319].forEach((f, i) => tone(f, i * 0.06, 0.12, "triangle", 0.1));
  },
  complete() {
    if (enabled) [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, i * 0.09, 0.3, "triangle", 0.14));
    vibrate([30, 60, 30, 60, 60]);
  },
  lamp() {
    if (enabled) [392, 523, 659, 784].forEach((f, i) => tone(f, i * 0.12, 0.5, "sine", 0.12));
    vibrate(60);
  },
  amen() {
    if (enabled) {
      tone(523, 0, 1.2, "sine", 0.1);
      tone(659, 0, 1.2, "sine", 0.08);
      tone(784, 0, 1.2, "sine", 0.07);
    }
    vibrate(30);
  },
};
