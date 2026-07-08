"use client";

import Link from "next/link";
import type { ReactNode, CSSProperties, MouseEvent } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const sizes: Record<Size, { padding: string; fontSize: string; gap: string }> = {
  sm: { padding: "6px 12px", fontSize: "var(--text-xs)", gap: "6px" },
  md: { padding: "10px 18px", fontSize: "var(--text-sm)", gap: "8px" },
  lg: { padding: "14px 24px", fontSize: "var(--text-base)", gap: "10px" },
};

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
    color: "var(--accent)",
    border: "2px solid transparent",
    boxShadow: "none",
  },
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  style = {},
}: {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  target?: string;
  rel?: string;
  style?: CSSProperties;
}) {
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: sizes[size].gap,
    fontFamily: "var(--font-mono)",
    fontSize: sizes[size].fontSize,
    letterSpacing: "var(--tracking-wide)",
    textTransform: "uppercase",
    lineHeight: 1,
    padding: sizes[size].padding,
    borderRadius: "var(--radius-md)",
    cursor: "pointer",
    textDecoration: "none",
    transition:
      "transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
    userSelect: "none",
    ...variants[variant],
    ...style,
  };

  const onDown = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "translate(2px, 2px)";
    if (variant !== "ghost") e.currentTarget.style.boxShadow = "1px 1px 0 0 rgba(0,0,0,0.2)";
  };
  const onUp = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "translate(0,0)";
    if (variant !== "ghost") e.currentTarget.style.boxShadow = variants[variant].boxShadow as string;
  };
  const onEnter = (e: MouseEvent<HTMLElement>) => {
    if (variant === "primary") e.currentTarget.style.background = "var(--accent-hover)";
    if (variant === "secondary") e.currentTarget.style.background = "var(--surface-hover)";
    if (variant === "ghost") e.currentTarget.style.background = "rgba(217,119,6,0.08)";
  };
  const onLeave = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.background = variants[variant].background as string;
    onUp(e);
  };

  return (
    <Link
      href={href ?? "#"}
      target={target}
      rel={rel}
      style={base}
      onMouseDown={onDown}
      onMouseUp={onUp}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {children}
    </Link>
  );
}
