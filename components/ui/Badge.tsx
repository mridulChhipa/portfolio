import type { ReactNode, CSSProperties } from "react";

type Status = "ok" | "warn" | "danger" | "info" | "idle";

const STATUS_COLORS: Record<Status, { bg: string; fg: string }> = {
  ok: { bg: "var(--emerald-500)", fg: "#04202b" },
  warn: { bg: "var(--amber-600)", fg: "#2a1a00" },
  danger: { bg: "var(--red-500)", fg: "#2a0606" },
  info: { bg: "var(--sky-500)", fg: "#04202b" },
  idle: { bg: "var(--slate-600)", fg: "#f1f5f9" },
};

export default function Badge({
  children,
  status = "ok",
  dot = false,
  style = {},
}: {
  children: ReactNode;
  status?: Status;
  dot?: boolean;
  style?: CSSProperties;
}) {
  const c = STATUS_COLORS[status];
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontFamily: "var(--font-mono)",
    fontSize: "var(--text-2xs)",
    letterSpacing: "var(--tracking-wider)",
    textTransform: "uppercase",
    lineHeight: 1,
    padding: "4px 8px",
    borderRadius: "var(--radius-sm)",
    whiteSpace: "nowrap",
    background: c.bg,
    color: c.fg,
    border: `2px solid ${c.bg}`,
    ...style,
  };
  return (
    <span style={base}>
      {dot && (
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "999px",
            background: "currentColor",
            display: "inline-block",
          }}
        />
      )}
      {children}
    </span>
  );
}
