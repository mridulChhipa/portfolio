function tierColor(pct: number) {
  if (pct >= 0.85) return "var(--accent-2)";
  if (pct >= 0.7) return "var(--accent)";
  return "var(--info)";
}

export default function StatBar({
  label,
  value,
  max = 100,
  segments = 10,
  color,
}: {
  label: string;
  value: number;
  max?: number;
  segments?: number;
  color?: string;
}) {
  const pct = Math.max(0, Math.min(1, value / max));
  const filled = Math.round(pct * segments);
  const fillColor = color ?? tierColor(pct);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            letterSpacing: "var(--tracking-wide)",
            color: "var(--text)",
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
        <span style={{ fontFamily: "var(--font-terminal)", fontSize: "var(--text-lg)", lineHeight: 1, color: fillColor }}>
          {value}
          <span style={{ color: "var(--text-faint)" }}>/{max}</span>
        </span>
      </div>
      <div style={{ display: "flex", gap: "3px" }}>
        {Array.from({ length: segments }).map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 10,
              borderRadius: "var(--radius-sm)",
              background: i < filled ? fillColor : "var(--slate-700)",
              boxShadow: i < filled ? "inset 0 0 0 1px rgba(255,255,255,0.5)" : "none",
              transition: "background var(--dur-base) var(--ease-out)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
