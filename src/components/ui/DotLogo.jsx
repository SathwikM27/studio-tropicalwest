const POSITIONS = [0, 1, 2].flatMap((row) => [0, 1, 2].map((col) => ({ row, col })));
const ACCENT_POSITION = { row: 2, col: 0 };

export default function DotLogo({ size = 28, tone = "dark", className = "" }) {
  const gap = size * 0.18;
  const dotSize = (size - gap * 2) / 3;
  const dimension = size;
  const dotColor = tone === "light" ? "#ffffff" : "var(--color-ink)";

  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox={`0 0 ${dimension} ${dimension}`}
      className={className}
      role="img"
      aria-label="Studio Tropicalwest"
    >
      {POSITIONS.map(({ row, col }) => {
        const isAccent = row === ACCENT_POSITION.row && col === ACCENT_POSITION.col;
        const cx = col * (dotSize + gap) + dotSize / 2;
        const cy = row * (dotSize + gap) + dotSize / 2;
        return (
          <circle
            key={`${row}-${col}`}
            cx={cx}
            cy={cy}
            r={dotSize / 2}
            fill={isAccent ? "var(--color-accent)" : "none"}
            stroke={isAccent ? "none" : dotColor}
            strokeWidth={Math.max(1, size * 0.03)}
          />
        );
      })}
    </svg>
  );
}
