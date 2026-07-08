import Badge from "@/components/ui/Badge";
import StatBar from "@/components/ui/StatBar";
import { SKILL_TAGS } from "@/components/data";

const cardStyle: React.CSSProperties = {
  background: "var(--surface)",
  border: "2px solid var(--border)",
  borderRadius: "var(--radius-md)",
  boxShadow: "var(--shadow-pixel)",
  padding: 28,
  display: "flex",
  flexDirection: "column",
  gap: 18,
};

const eyebrowStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "var(--text-xs)",
  letterSpacing: "var(--tracking-wider)",
  color: "var(--text-faint)",
  textTransform: "uppercase",
};

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "64px 24px" }}>
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
            {"// skills"}
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
            Base stats
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: 24 }}>
          <div style={cardStyle}>
            <span style={eyebrowStyle}>Proficiency</span>
            <StatBar label="C++ / systems" value={92} />
            <StatBar label="Python / ML" value={85} />
            <StatBar label="Algorithms / CP" value={88} color="var(--accent)" />
            <StatBar label="React / full-stack" value={74} />
            <StatBar label="Verilog / FPGA" value={68} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ ...cardStyle, gap: 14 }}>
              <span style={eyebrowStyle}>Moveset</span>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {SKILL_TAGS.map((skill) => (
                  <span
                    key={skill}
                    className="tag-chip"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-xs)",
                      letterSpacing: "var(--tracking-wide)",
                      lineHeight: 1,
                      padding: "5px 9px",
                      borderRadius: "var(--radius-sm)",
                      background: "var(--surface-2)",
                      color: "var(--text-muted)",
                      transition: "border-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div
              style={{
                ...cardStyle,
                padding: "24px 28px",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={eyebrowStyle}>Codeforces</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "var(--text)" }}>
                  handle: <a href="https://codeforces.com/profile/garfield">garfield</a>
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span style={{ fontFamily: "var(--font-terminal)", fontSize: 44, lineHeight: 1, color: "var(--accent-2)" }}>
                  1600+
                </span>
                <Badge status="ok">Expert</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
