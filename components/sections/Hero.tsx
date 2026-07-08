"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const FULL_TEXT = "> optimizing for microseconds, one instruction at a time";

export default function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setTyped(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) clearInterval(timer);
    }, 45);
    return () => clearInterval(timer);
  }, []);

  return (
    <header
      id="top"
      style={{
        padding: "clamp(56px, 10vw, 110px) 24px clamp(56px, 9vw, 96px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span
        aria-hidden="true"
        className="prompt-watermark"
        style={{ fontSize: "clamp(80px, 11vw, 150px)", bottom: -18, left: -8, lineHeight: 1 }}
      >
        mridul@iitd:~$
      </span>
      <div
        aria-hidden="true"
        className="pokeball-accent"
        style={{ width: 380, height: 380, top: -90, right: -110, transform: "rotate(18deg)" }}
      />
      <div
        aria-hidden="true"
        className="pokeball-accent"
        style={{ width: 110, height: 110, top: "24%", left: "44%", transform: "rotate(-24deg)" }}
      />
      <div
        aria-hidden="true"
        className="pokeball-accent"
        style={{ width: 200, height: 200, bottom: -70, right: "20%", transform: "rotate(-12deg)" }}
      />
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(420px, 100%), 1fr))",
          gap: 48,
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 22, minWidth: 0 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-sm)",
              color: "var(--accent-2)",
              letterSpacing: "var(--tracking-wide)",
            }}
          >
            mridul@iitd:~$ whoami
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(22px, 3.4vw, 38px)",
              lineHeight: 1.45,
              color: "var(--text-strong)",
              margin: 0,
              letterSpacing: "0.02em",
            }}
          >
            MRIDUL
            <br />
            CHHIPA
          </h1>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-lg)",
              color: "var(--text)",
              minHeight: "1.6em",
            }}
          >
            {typed}
            <span
              style={{
                display: "inline-block",
                width: 10,
                height: "1.1em",
                background: "var(--accent)",
                verticalAlign: "text-bottom",
                marginLeft: 3,
                animation: "cursorBlink 1.1s steps(1) infinite",
              }}
            />
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-base)",
              lineHeight: "var(--leading-normal)",
              color: "var(--text-muted)",
              maxWidth: 540,
              margin: 0,
            }}
          >
            CS undergraduate at IIT Delhi. I build low-latency systems in C++ — CPU simulators,
            storage engines, trading tooling — and occasionally teach machines to see logs and
            hear voices.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 6 }}>
            <Button href="#projects" size="lg">
              View projects
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Contact
            </Button>
          </div>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap", marginTop: 14 }}>
            <Stat value="8.56" color="var(--accent)" label="CGPA · IIT Delhi" />
            <Stat value="1600+" color="var(--accent-2)" label="Codeforces · Expert" />
            <Stat value="5h→5s" color="var(--info)" label="KNN rewrite · C++" />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, justifySelf: "center" }}>
          <div
            style={{
              position: "relative",
              width: 240,
              height: 240,
              background: "var(--surface)",
              border: "2px solid var(--border)",
              borderRadius: "var(--radius-md)",
              boxShadow: "var(--shadow-pixel-lg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", inset: 0, background: "var(--scanline)" }} />
            <Image
              src="/sprites/charizard.png"
              alt="Charizard"
              width={190}
              height={190}
              style={{
                imageRendering: "pixelated",
                animation: "spriteBob 3.2s ease-in-out infinite",
              }}
              priority
            />
            <span
              style={{
                position: "absolute",
                top: 8,
                left: 10,
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-2xs)",
                letterSpacing: "var(--tracking-wider)",
                color: "var(--text-faint)",
              }}
            >
              No. 006
            </span>
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              letterSpacing: "var(--tracking-wider)",
              color: "var(--text-muted)",
              textTransform: "uppercase",
            }}
          >
            Charizard · partner
          </span>
        </div>
      </div>
    </header>
  );
}

function Stat({ value, color, label }: { value: string; color: string; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <span style={{ fontFamily: "var(--font-terminal)", fontSize: 34, lineHeight: 1, color }}>{value}</span>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-2xs)",
          letterSpacing: "var(--tracking-wider)",
          color: "var(--text-faint)",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );
}
