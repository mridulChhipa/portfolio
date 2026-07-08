const cardStyle: React.CSSProperties = {
  background: "var(--surface)",
  border: "2px solid var(--border)",
  borderRadius: "var(--radius-md)",
  boxShadow: "var(--shadow-pixel)",
  padding: "24px 28px",
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

const eyebrowStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "var(--text-xs)",
  letterSpacing: "var(--tracking-wider)",
  color: "var(--text-faint)",
  textTransform: "uppercase",
};

export default function About() {
  return (
    <section id="about" style={{ padding: "64px 24px", position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        className="pokeball-accent"
        style={{ width: 230, height: 230, top: 10, right: -70, transform: "rotate(28deg)" }}
      />
      <div
        aria-hidden="true"
        className="pokeball-accent"
        style={{ width: 95, height: 95, bottom: -20, left: "30%", transform: "rotate(-15deg)" }}
      />
      <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", flexDirection: "column", gap: 28, position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-sm)",
              color: "var(--accent)",
              letterSpacing: "var(--tracking-wider)",
            }}
          >
            {"// about"}
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
            Trainer data
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: "4px 0" }}>
            <span style={eyebrowStyle}>~$ cat bio.txt</span>
            <p style={{ margin: 0, fontSize: "var(--text-base)", lineHeight: "var(--leading-normal)", color: "var(--text)" }}>
              I&apos;m a junior in Computer Science at IIT Delhi. My favorite problems live close to
              the metal: out-of-order pipelines, LSM-tree storage engines, and code where a
              5-hour runtime becomes 5 seconds because someone cared. I compete on Codeforces as{" "}
              <a href="https://codeforces.com/profile/garfield" style={{ color: "var(--accent)" }}>
                garfield
              </a>{" "}
              and spend the rest of my time on ML pipelines and agentic systems.
            </p>
            <p style={{ margin: 0, fontSize: "var(--text-base)", lineHeight: "var(--leading-normal)", color: "var(--text-muted)" }}>
              Off the clock I curate problemsets for IIT Delhi&apos;s Algorithms and Coding Club and
              build game platforms for the Indian Game Theory Society.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={cardStyle}>
              <span style={eyebrowStyle}>Education</span>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 12, alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "var(--text-strong)", lineHeight: "var(--leading-snug)" }}>
                  B.Tech CSE · IIT Delhi
                </span>
                <span style={{ fontFamily: "var(--font-terminal)", fontSize: 22, color: "var(--accent-2)", whiteSpace: "nowrap" }}>
                  8.56 CGPA
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 12, alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: "var(--leading-snug)" }}>
                  CBSE · Seedling Modern High School
                </span>
                <span style={{ fontFamily: "var(--font-terminal)", fontSize: 22, color: "var(--text-muted)", whiteSpace: "nowrap" }}>
                  94%
                </span>
              </div>
            </div>
            <div style={cardStyle}>
              <span style={eyebrowStyle}>Positions</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <PositionLine>
                  Executive, Algorithms &amp; Coding Club (ANCC) — problemsets &amp; workshops
                </PositionLine>
                <PositionLine>
                  Technical Executive, Indian Game Theory Society — game platforms
                </PositionLine>
                <PositionLine>Research Executive, ARIES — club &amp; external firm projects</PositionLine>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PositionLine({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontSize: "var(--text-sm)", color: "var(--text)" }}>
      <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>&gt;</span> {children}
    </span>
  );
}
