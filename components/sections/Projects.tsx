"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/components/data";

export default function Projects() {
  const [hovered, setHovered] = useState(-1);

  return (
    <section id="projects" style={{ padding: "64px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", flexDirection: "column", gap: 36 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-sm)",
              color: "var(--accent)",
              letterSpacing: "var(--tracking-wider)",
            }}
          >
            {"// projects"}
          </span>
          <h2
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-2xl)",
              color: "var(--text-strong)",
              margin: 0,
              letterSpacing: "var(--tracking-wide)",
              textTransform: "uppercase",
            }}
          >
            Party of eight
          </h2>
          <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
            hover a card to summon its partner
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: 28, rowGap: 44 }}>
          {PROJECTS.map((proj, i) => {
            const isHovered = hovered === i;
            return (
            <div
              key={proj.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(-1)}
              style={{
                position: "relative",
                background: "var(--surface)",
                borderLeft: `2px solid ${isHovered ? "var(--border-accent)" : "var(--border)"}`,
                borderRight: `2px solid ${isHovered ? "var(--border-accent)" : "var(--border)"}`,
                borderBottom: `2px solid ${isHovered ? "var(--border-accent)" : "var(--border)"}`,
                borderTop: "3px solid var(--accent)",
                borderRadius: "var(--radius-md)",
                boxShadow: isHovered ? "var(--shadow-pixel-lg)" : "var(--shadow-pixel)",
                padding: 26,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                transform: isHovered ? "translate(-2px,-2px)" : "translate(0,0)",
                transition:
                  "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
              }}
            >
              <div
                role="img"
                aria-label={proj.pokemon}
                style={{
                  position: "absolute",
                  top: -54,
                  right: 18,
                  width: 88,
                  height: 88,
                  pointerEvents: "none",
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "translateY(0) scale(1)" : "translateY(26px) scale(0.6)",
                  transition: "opacity 200ms cubic-bezier(0.16,1,0.3,1), transform 260ms cubic-bezier(0.16,1,0.3,1)",
                  filter: "drop-shadow(3px 3px 0 rgba(15,23,42,0.18))",
                  zIndex: 2,
                }}
              >
                <Image
                  src={proj.sprite}
                  alt={proj.pokemon}
                  width={88}
                  height={88}
                  style={{ imageRendering: "pixelated", objectFit: "contain" }}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-lg)",
                    color: "var(--text-strong)",
                    margin: 0,
                    letterSpacing: "var(--tracking-wide)",
                  }}
                >
                  {proj.title}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-2xs)",
                    letterSpacing: "var(--tracking-wider)",
                    textTransform: "uppercase",
                    padding: "4px 8px",
                    borderRadius: "var(--radius-sm)",
                    border: `2px solid ${proj.typeColor}`,
                    color: proj.typeColor,
                    whiteSpace: "nowrap",
                  }}
                >
                  {proj.type}
                </span>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-xs)",
                  color: "var(--text-faint)",
                  letterSpacing: "var(--tracking-wide)",
                }}
              >
                {proj.meta}
              </span>
              <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: "var(--leading-normal)", color: "var(--text)" }}>
                {proj.line1}
              </p>
              <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: "var(--leading-normal)", color: "var(--text-muted)" }}>
                {proj.line2}
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: "auto", paddingTop: 6 }}>
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-xs)",
                      letterSpacing: "var(--tracking-wide)",
                      lineHeight: 1,
                      padding: "5px 9px",
                      borderRadius: "var(--radius-sm)",
                      background: "var(--surface-2)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
