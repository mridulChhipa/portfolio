"use client";

import type { ReactNode, CSSProperties, MouseEvent } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const dimsMap: Record<Size, number> = { sm: 32, md: 40, lg: 48 };

const variants: Record<Variant, CSSProperties> = {
  primary: {
    background: "var(--accent)",
    color: "var(--text-on-accent)",
    border: "2px solid var(--amber-600)",
    boxShadow: "var(--shadow-pixel)",
  },
  secondary: {
    background: "var(--surface-2)",
    color: "var(--text-strong)",
    border: "2px solid var(--border-strong)",
    boxShadow: "var(--shadow-pixel)",
  },
  ghost: {
    background: "transparent",
    color: "var(--text-muted)",
    border: "2px solid transparent",
    boxShadow: "none",
  },
};

export default function IconButton({
  children,
  variant = "secondary",
  size = "md",
  label,
  onClick,
  style = {},
}: {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  label: string;
  onClick?: () => void;
  style?: CSSProperties;
}) {
  const dims = dimsMap[size];
  const base: CSSProperties = {
    width: dims,
    height: dims,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "var(--radius-md)",
    cursor: "pointer",
    transition:
      "transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)",
    ...variants[variant],
    ...style,
  };

  const onDown = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "translate(2px,2px)";
    if (variant !== "ghost") e.currentTarget.style.boxShadow = "1px 1px 0 0 rgba(0,0,0,0.2)";
  };
  const reset = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "translate(0,0)";
    e.currentTarget.style.boxShadow = variants[variant].boxShadow as string;
    e.currentTarget.style.background = variants[variant].background as string;
    e.currentTarget.style.color = variants[variant].color as string;
  };
  const onEnter = (e: MouseEvent<HTMLButtonElement>) => {
    if (variant === "ghost") {
      e.currentTarget.style.color = "var(--accent)";
      e.currentTarget.style.background = "rgba(217,119,6,0.08)";
    }
    if (variant === "primary") e.currentTarget.style.background = "var(--accent-hover)";
    if (variant === "secondary") e.currentTarget.style.background = "var(--surface-hover)";
  };

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      style={base}
      onClick={onClick}
      onMouseDown={onDown}
      onMouseUp={reset}
      onMouseLeave={reset}
      onMouseEnter={onEnter}
    >
      {children}
    </button>
  );
}
