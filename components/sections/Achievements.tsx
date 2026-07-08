import Image from "next/image";
import { ACHIEVEMENTS } from "@/components/data";

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: "64px 24px", position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        className="pokeball-accent"
        style={{ width: 220, height: 220, top: "45%", right: -80, transform: "rotate(-30deg)" }}
      />
      <div
        aria-hidden="true"
        className="pokeball-accent"
        style={{ width: 90, height: 90, top: 25, left: "38%", transform: "rotate(12deg)" }}
      />
      <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", flexDirection: "column", gap: 36, position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-sm)",
                color: "var(--accent)",
                letterSpacing: "var(--tracking-wider)",
              }}
            >
              {"// achievements"}
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
              Gym badges
            </h2>
          </div>
          <Image
            src="/sprites/gengar.png"
            alt="Gengar"
            width={84}
            height={84}
            style={{ imageRendering: "pixelated", animation: "spriteBob 3.6s ease-in-out infinite" }}
          />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: 20 }}>
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.title}
              className="achievement-card"
              style={{
                background: "var(--surface)",
                borderRadius: "var(--radius-md)",
                boxShadow: "var(--shadow-pixel)",
                padding: "20px 24px",
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
                transition: "transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
              }}
            >
              <span style={{ fontFamily: "var(--font-terminal)", fontSize: 26, lineHeight: 1, color: "var(--accent)", minWidth: 64 }}>
                {ach.stat}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "var(--text-strong)", letterSpacing: "var(--tracking-wide)" }}>
                  {ach.title}
                </span>
                <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", lineHeight: "var(--leading-snug)" }}>
                  {ach.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
