// Hand-drawn SVG icons (stroke = currentColor).

type P = { size?: number; className?: string };

const svg = (size: number, className: string | undefined, children: React.ReactNode, fill = "none") => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const LampIcon = ({ size = 24, className, lit = true }: P & { lit?: boolean }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
    {lit && <path d="M12 2.5c1.6 2 2.6 3.4 2.6 4.9a2.6 2.6 0 0 1-5.2 0c0-1.5 1-2.9 2.6-4.9Z" fill="var(--flame)" />}
    {lit && <path d="M12 5.2c.7.9 1.1 1.5 1.1 2.2a1.1 1.1 0 0 1-2.2 0c0-.7.4-1.3 1.1-2.2Z" fill="var(--flame-core)" />}
    <path d="M4 13.5c0-1 .8-1.8 1.8-1.8h12.4c1 0 1.8.8 1.8 1.8 0 3.4-3.6 6-8 6s-8-2.6-8-6Z" fill={lit ? "var(--lamp)" : "var(--muted-2)"} />
    <path d="M18.6 12.4c1.7-.4 3 .3 3 1.6 0 1.4-1.6 2.3-3.6 2.4" fill="none" stroke={lit ? "var(--lamp)" : "var(--muted-2)"} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M9 19.4h6v1.4a.8.8 0 0 1-.8.8H9.8a.8.8 0 0 1-.8-.8Z" fill={lit ? "var(--lamp-dark)" : "var(--muted-2)"} />
    <rect x="11.2" y="9.4" width="1.6" height="2.4" rx=".6" fill={lit ? "var(--lamp-dark)" : "var(--muted-2)"} />
  </svg>
);

export const GraceIcon = ({ size = 24, className }: P) =>
  svg(
    size,
    className,
    <>
      <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.3 7.5 9.5 4.3-1.2 7.5-4.9 7.5-9.5V6Z" fill="var(--grace)" stroke="var(--grace)" />
      <path d="M12 8v8M9 11h6" stroke="#06202b" strokeWidth="2.2" />
    </>,
  );

export const XpIcon = ({ size = 24, className }: P) =>
  svg(size, className, <path d="M13 2 4 14h7l-1 8 9-12h-7Z" fill="var(--xp)" stroke="var(--xp)" />);

export const BookIcon = ({ size = 24, className }: P) =>
  svg(
    size,
    className,
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5Z" />
      <path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5" />
      <path d="M12 7v6M9.5 9.5h5" />
    </>,
  );

export const MirrorIcon = ({ size = 24, className }: P) =>
  svg(
    size,
    className,
    <>
      <ellipse cx="12" cy="10" rx="6.5" ry="8" />
      <path d="M12 18v4M8.5 22h7" />
      <path d="M9.5 7.5c.6-1 1.5-1.6 2.5-1.8" />
    </>,
  );

export const PrayIcon = ({ size = 24, className }: P) =>
  svg(
    size,
    className,
    <>
      {/* Two joined hands, fingertips up */}
      <path d="M11.4 4.2c-.9 0-1.4.6-1.6 1.4L8.3 12l-2.6 3.3a1.5 1.5 0 0 0 .1 2l2.6 2.6a1.5 1.5 0 0 0 2 .1l1.6-1.3V5.2c0-.6-.3-1-.6-1Z" />
      <path d="M12.6 4.2c.9 0 1.4.6 1.6 1.4l1.5 6.4 2.6 3.3a1.5 1.5 0 0 1-.1 2l-2.6 2.6a1.5 1.5 0 0 1-2 .1L12 18.7" />
    </>,
  );

export const BrainIcon = ({ size = 24, className }: P) =>
  svg(
    size,
    className,
    <>
      <path d="M9 4.5A3 3 0 0 0 4.5 7a3 3 0 0 0-.8 5.2A3 3 0 0 0 6 17.5a3 3 0 0 0 6 .5V5.5a3 3 0 0 0-3-1Z" />
      <path d="M15 4.5A3 3 0 0 1 19.5 7a3 3 0 0 1 .8 5.2 3 3 0 0 1-2.3 5.3 3 3 0 0 1-6 .5" />
    </>,
  );

export const CheckIcon = ({ size = 24, className }: P) => svg(size, className, <path d="m5 12.5 4.5 4.5L19 7.5" strokeWidth={3} />);

export const CloseIcon = ({ size = 24, className }: P) => svg(size, className, <path d="M6 6l12 12M18 6 6 18" strokeWidth={2.6} />);

export const LockIcon = ({ size = 24, className }: P) =>
  svg(
    size,
    className,
    <>
      <rect x="5" y="11" width="14" height="10" rx="2.5" fill="currentColor" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>,
  );

export const CrownIcon = ({ size = 24, className }: P) =>
  svg(size, className, <path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5Z" fill="currentColor" />);

export const StarIcon = ({ size = 24, className }: P) =>
  svg(size, className, <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9Z" fill="currentColor" />);

export const PathIcon = ({ size = 24, className }: P) =>
  svg(
    size,
    className,
    <>
      <circle cx="6" cy="19" r="2.2" />
      <circle cx="18" cy="5" r="2.2" />
      <path d="M8 18.5h6.5a3.5 3.5 0 0 0 0-7h-5a3.5 3.5 0 0 1 0-7H16" />
    </>,
  );

export const UserIcon = ({ size = 24, className }: P) =>
  svg(
    size,
    className,
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>,
  );

export const ShareIcon = ({ size = 24, className }: P) =>
  svg(
    size,
    className,
    <>
      <path d="M12 3v12M7.5 7.5 12 3l4.5 4.5" />
      <path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
    </>,
  );

export const CrossIcon = ({ size = 24, className }: P) =>
  svg(size, className, <path d="M10 2h4v6h6v4h-6v10h-4V12H4V8h6Z" fill="currentColor" stroke="none" />);
