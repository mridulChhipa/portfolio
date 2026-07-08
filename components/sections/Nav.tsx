"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";
import IconButton from "@/components/ui/IconButton";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 880px)");
    const onChange = () => {
      setIsMobile(mq.matches);
      if (!mq.matches) setSidebarOpen(false);
    };
    mq.addEventListener("change", onChange);
    onChange();
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(248,250,252,0.94)",
          backdropFilter: "blur(4px)",
          borderBottom: "1px solid var(--border)",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <a href="#top" style={{ display: "flex", alignItems: "baseline", gap: 8, textDecoration: "none" }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 13,
                color: "var(--text-strong)",
                letterSpacing: "0.04em",
              }}
            >
              MRIDUL<span style={{ color: "var(--accent)" }}>.</span>SYS
            </span>
          </a>
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="nav-link"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    letterSpacing: "var(--tracking-wider)",
                    color: "var(--text-muted)",
                    padding: "8px 10px",
                    textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                </a>
              ))}
              <Badge status="ok" dot>
                Open to internships
              </Badge>
            </div>
          )}
          {isMobile && (
            <IconButton label="Open menu" onClick={() => setSidebarOpen(true)}>
              <Icon name="menu" size={20} />
            </IconButton>
          )}
        </div>
      </nav>

      {/* Mobile sidebar overlay */}
      <div
        onClick={closeSidebar}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(15,23,42,0.45)",
          zIndex: 90,
          opacity: sidebarOpen ? 1 : 0,
          pointerEvents: sidebarOpen ? "auto" : "none",
          transition: "opacity 220ms cubic-bezier(0.16,1,0.3,1)",
        }}
      />
      <aside
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(300px, 85vw)",
          background: "var(--surface)",
          borderLeft: "2px solid var(--border)",
          boxShadow: "-5px 0 0 0 rgba(15,23,42,0.12)",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          transform: sidebarOpen ? "translateX(0)" : "translateX(110%)",
          transition: "transform 260ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            padding: "16px 18px",
            borderBottom: "2px solid var(--border)",
            background: "var(--accent)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                width: 16,
                height: 16,
                borderRadius: 999,
                background: "var(--sky-500)",
                border: "2px solid rgba(15,23,42,0.35)",
                boxShadow: "inset -2px -2px 0 rgba(15,23,42,0.25)",
              }}
            />
            <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--red-400)", border: "1px solid rgba(15,23,42,0.35)" }} />
            <span style={{ width: 8, height: 8, borderRadius: 999, background: "#059669", border: "1px solid rgba(15,23,42,0.35)" }} />
            <span style={{ fontFamily: "var(--font-display)", fontSize: 11, color: "#2a1a00", letterSpacing: "0.04em", marginLeft: 4 }}>
              MENU.SYS
            </span>
          </div>
          <IconButton label="Close menu" size="sm" onClick={closeSidebar}>
            <Icon name="x" size={16} />
          </IconButton>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", padding: "12px 8px", gap: 2 }}>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeSidebar}
              className="sidebar-link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "13px 14px",
                borderRadius: "var(--radius-md)",
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-sm)",
                letterSpacing: "var(--tracking-wider)",
                textTransform: "uppercase",
                color: "var(--text)",
                border: "2px solid transparent",
                textDecoration: "none",
              }}
            >
              <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>&gt;</span>
              {l.label}
            </a>
          ))}
        </nav>
        <div style={{ padding: "8px 22px" }}>
          <Badge status="ok" dot>
            Open to internships
          </Badge>
        </div>
        <div
          style={{
            marginTop: "auto",
            padding: "18px 22px",
            borderTop: "2px solid var(--border)",
            display: "flex",
            alignItems: "center",
            gap: 14,
            background: "var(--bg-deep)",
            backgroundImage: "var(--scanline)",
          }}
        >
          <Image
            src="/sprites/pikachu.png"
            alt="Pikachu"
            width={56}
            height={56}
            style={{ imageRendering: "pixelated", animation: "spriteBob 3s ease-in-out infinite" }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-2xs)",
                letterSpacing: "var(--tracking-wider)",
                color: "var(--text-faint)",
                textTransform: "uppercase",
              }}
            >
              No. 025 · guide
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
              mridul@iitd:~$
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
