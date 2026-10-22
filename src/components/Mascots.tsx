import type { ReactNode } from "react";

// The two ChristHub companions, drawn in SVG so they stay sharp, light and
// animated: Biblo the Bible and Crucy the wooden cross. Each one has a few moods.

export type Mood = "happy" | "cheer" | "sad" | "think" | "pray";
export type Who = "biblo" | "crucy";

interface Props {
  who: Who;
  mood?: Mood;
  size?: number;
  className?: string;
}

export function Mascot({ who, mood = "happy", size = 96, className = "" }: Props) {
  return (
    <span className={`mascot ${who} mood-${mood} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 120 140" width={size} height={(size * 140) / 120}>
        {who === "biblo" ? <Biblo mood={mood} /> : <Crucy mood={mood} />}
      </svg>
    </span>
  );
}

const INK = "#1d1420";
const GLOVE = "#ffffff";

/** A limb: ink outline with a light core, so it reads on the dark background. */
const Limb = ({ d, color }: { d: string; color: string }) => (
  <g fill="none" strokeLinecap="round">
    <path d={d} stroke={INK} strokeWidth={7} />
    <path d={d} stroke={color} strokeWidth={3.6} />
  </g>
);

function Eyes({ cx, cy, gap, r, mood }: { cx: number; cy: number; gap: number; r: number; mood: Mood }) {
  const xs = [cx - gap / 2, cx + gap / 2];
  if (mood === "pray")
    return (
      <g stroke={INK} strokeWidth={2.6} fill="none" strokeLinecap="round">
        {xs.map((x) => (
          <path key={x} d={`M${x - r} ${cy} Q${x} ${cy + r * 0.9} ${x + r} ${cy}`} />
        ))}
      </g>
    );
  // Pupils look up when thinking, down when sad.
  const look = mood === "think" ? { dx: 1.6, dy: -2.2 } : mood === "sad" ? { dx: 0, dy: 1.8 } : { dx: 0.6, dy: 0.4 };
  return (
    <g className="eyes">
      {xs.map((x) => (
        <g key={x}>
          <ellipse cx={x} cy={cy} rx={r} ry={r * 1.15} fill="#fff" stroke={INK} strokeWidth={1.6} />
          <circle cx={x + look.dx} cy={cy + look.dy} r={r * 0.52} fill={INK} />
          <circle cx={x + look.dx + r * 0.2} cy={cy + look.dy - r * 0.22} r={r * 0.17} fill="#fff" />
        </g>
      ))}
      {mood === "sad" &&
        xs.map((x, i) => (
          <path
            key={`b${x}`}
            d={i === 0 ? `M${x - r} ${cy - r * 1.6} L${x + r * 0.6} ${cy - r * 2}` : `M${x - r * 0.6} ${cy - r * 2} L${x + r} ${cy - r * 1.6}`}
            stroke={INK}
            strokeWidth={2.2}
            strokeLinecap="round"
          />
        ))}
    </g>
  );
}

function Mouth({ cx, cy, w, mood }: { cx: number; cy: number; w: number; mood: Mood }) {
  const h = w / 2;
  if (mood === "cheer")
    return (
      <g>
        <path d={`M${cx - h} ${cy - 2} Q${cx} ${cy + w * 0.95} ${cx + h} ${cy - 2} Z`} fill="#7a1f2b" stroke={INK} strokeWidth={2} strokeLinejoin="round" />
        <path d={`M${cx - h * 0.5} ${cy + w * 0.36} Q${cx} ${cy + w * 0.18} ${cx + h * 0.5} ${cy + w * 0.36} Q${cx} ${cy + w * 0.5} ${cx - h * 0.5} ${cy + w * 0.36} Z`} fill="#ff7d8e" />
      </g>
    );
  if (mood === "sad") return <path d={`M${cx - h * 0.8} ${cy + 4} Q${cx} ${cy - 3} ${cx + h * 0.8} ${cy + 4}`} stroke={INK} strokeWidth={2.6} fill="none" strokeLinecap="round" />;
  if (mood === "think") return <ellipse cx={cx + 2} cy={cy + 1} rx={w * 0.14} ry={w * 0.17} fill="#7a1f2b" stroke={INK} strokeWidth={1.8} />;
  if (mood === "pray") return <path d={`M${cx - h * 0.6} ${cy} Q${cx} ${cy + 4} ${cx + h * 0.6} ${cy}`} stroke={INK} strokeWidth={2.4} fill="none" strokeLinecap="round" />;
  return <path d={`M${cx - h} ${cy - 1} Q${cx} ${cy + w * 0.7} ${cx + h} ${cy - 1} Z`} fill="#7a1f2b" stroke={INK} strokeWidth={2} strokeLinejoin="round" />;
}

const Glove = ({ x, y, r = 6.5 }: { x: number; y: number; r?: number }) => <circle cx={x} cy={y} r={r} fill={GLOVE} stroke={INK} strokeWidth={1.8} />;

function Feet({ y, xs, limb, shoe }: { y: number; xs: [number, number]; limb: string; shoe: string }) {
  return (
    <g className="feet">
      {xs.map((x, i) => (
        <g key={x}>
          <Limb d={`M${x} ${y} L${x + (i ? 2 : -2)} ${y + 13}`} color={limb} />
          <ellipse cx={x + (i ? 6 : -6)} cy={y + 15.5} rx={9} ry={5} fill={shoe} stroke={INK} strokeWidth={1.8} />
        </g>
      ))}
    </g>
  );
}

/** Arms from a left and a right shoulder, posed by mood. */
function Arms({
  l,
  r,
  mood: wanted,
  reach,
  limb,
  tips = false,
}: {
  l: [number, number];
  r: [number, number];
  mood: Mood;
  reach: number;
  limb: string;
  tips?: boolean;
}) {
  // Hands at the tips of a crossbar cannot meet in front: they rise instead (open hands, like in worship).
  const mood: Mood | "lift" = tips && wanted === "pray" ? "lift" : wanted;
  const [lx, ly] = l;
  const [rx, ry] = r;
  let left: [number, number], right: [number, number];
  switch (mood) {
    case "cheer":
      left = [lx - reach * 0.7, ly - reach * 1.2];
      right = [rx + reach * 0.7, ry - reach * 1.2];
      break;
    case "sad":
      left = [lx - reach * 0.35, ly + reach * 1.1];
      right = [rx + reach * 0.35, ry + reach * 1.1];
      break;
    case "lift":
      left = [lx - reach * 0.4, ly - reach * 1.3];
      right = [rx + reach * 0.4, ry - reach * 1.3];
      break;
    case "think":
      left = [lx - reach * 0.6, ly + reach * 0.7];
      right = tips ? [rx + reach * 0.3, ry - reach * 1.2] : [(lx + rx) / 2 + 12, ly + 14];
      break;
    case "pray":
      left = [(lx + rx) / 2 - 3.5, ly + reach * 0.75];
      right = [(lx + rx) / 2 + 3.5, ry + reach * 0.75];
      break;
    default:
      left = [lx - reach * 0.75, ly + reach * 0.75];
      right = [rx + reach, ry - reach * 0.55];
  }
  const lc: [number, number] = [(lx + left[0]) / 2 - 4, (ly + left[1]) / 2 + 4];
  const rc: [number, number] = [(rx + right[0]) / 2 + 4, (ry + right[1]) / 2 + 4];
  const arm = (s: [number, number], c: [number, number], e: [number, number]) => `M${s[0]} ${s[1]} Q${c[0]} ${c[1]} ${e[0]} ${e[1]}`;
  return (
    <g className="arms">
      <Limb d={arm(l, lc, left)} color={limb} />
      <Limb d={arm(r, rc, right)} color={limb} />
      {mood === "pray" ? (
        <g>
          <ellipse cx={left[0] + 0.5} cy={left[1] - 2} rx={4.5} ry={8} fill={GLOVE} stroke={INK} strokeWidth={1.8} />
          <ellipse cx={right[0] - 0.5} cy={right[1] - 2} rx={4.5} ry={8} fill={GLOVE} stroke={INK} strokeWidth={1.8} />
        </g>
      ) : (
        <g>
          <Glove x={left[0]} y={left[1]} />
          <g className={mood === "happy" ? "wave" : ""} style={{ transformOrigin: `${r[0]}px ${r[1]}px` }}>
            <Glove x={right[0]} y={right[1]} />
          </g>
        </g>
      )}
    </g>
  );
}

function Biblo({ mood }: { mood: Mood }) {
  return (
    <g className="body">
      <Feet y={110} xs={[48, 72]} limb="#f6ecd2" shoe="#e8384f" />
      {/* Pages, cover and spine */}
      <rect x={27} y={19} width={70} height={92} rx={9} fill="#f6ecd2" stroke={INK} strokeWidth={2} />
      <path d="M90 26 V104 M86 24 V107" stroke="#d8c9a3" strokeWidth={1.5} />
      <rect x={20} y={13} width={72} height={94} rx={10} fill="#2357a8" stroke={INK} strokeWidth={2.2} />
      <rect x={20} y={13} width={13} height={94} rx={6} fill="#183f7d" />
      <path d="M26 20 V100" stroke="#f5c542" strokeWidth={1.6} strokeDasharray="3 4" />
      {/* Gold cross on the cover */}
      <path d="M62 22 V40 M55 28 H69" stroke="#f5c542" strokeWidth={4} strokeLinecap="round" />
      {/* Ribbon marker */}
      <path d="M78 107 V122 L81.5 118 L85 122 V107" fill="#e8384f" stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <Arms l={[22, 72]} r={[94, 72]} mood={mood} reach={20} limb="#f6ecd2" />
      <Eyes cx={62} cy={60} gap={22} r={7} mood={mood} />
      <circle cx={46} cy={74} r={4.5} fill="#ff8fa3" opacity={0.55} />
      <circle cx={78} cy={74} r={4.5} fill="#ff8fa3" opacity={0.55} />
      <Mouth cx={62} cy={76} w={18} mood={mood} />
    </g>
  );
}

function Crucy({ mood }: { mood: Mood }) {
  const wood = "#d59a55";
  const dark = "#a86d33";
  return (
    <g className="body">
      {mood === "pray" && <circle cx={60} cy={50} r={46} fill="#ffd54a" opacity={0.16} />}
      <Feet y={118} xs={[52, 68]} limb={wood} shoe="#2fb8c4" />
      {/* Beams */}
      <rect x={43} y={6} width={34} height={116} rx={9} fill={wood} stroke={INK} strokeWidth={2.2} />
      <rect x={10} y={32} width={100} height={32} rx={9} fill={wood} stroke={INK} strokeWidth={2.2} />
      <rect x={45} y={34} width={30} height={28} fill={wood} />
      {/* Wood grain */}
      <path d="M52 12 Q55 20 52 28 M68 72 Q65 86 69 100 M57 84 Q59 96 56 110 M20 42 Q28 45 36 41 M88 54 Q96 51 103 55" stroke={dark} strokeWidth={1.6} fill="none" strokeLinecap="round" />
      {/* Hands at the tips of the crossbar */}
      <Arms l={[12, 48]} r={[108, 48]} mood={mood} reach={9} limb={wood} tips />
      <Eyes cx={60} cy={44} gap={17} r={5.6} mood={mood} />
      <circle cx={46} cy={55} r={3.6} fill="#ff8fa3" opacity={0.6} />
      <circle cx={74} cy={55} r={3.6} fill="#ff8fa3" opacity={0.6} />
      <Mouth cx={60} cy={55} w={13} mood={mood} />
    </g>
  );
}

/** A mascot with a speech bubble. */
export function MascotSays({ who, mood, children, size = 84, side = "left" }: Props & { children: ReactNode; side?: "left" | "right" }) {
  return (
    <div className={`mascot-says ${side}`}>
      <Mascot who={who} mood={mood} size={size} />
      <p className="bubble">{children}</p>
    </div>
  );
}
