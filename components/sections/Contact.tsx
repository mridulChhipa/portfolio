import Image from "next/image";
import Icon, { type IconName } from "@/components/ui/Icon";

const CONTACTS: { href: string; icon: IconName; label: string; value: string; external?: boolean }[] = [
  { href: "mailto:mridulchhipa@gmail.com", icon: "mail", label: "Email", value: "mridulchhipa@gmail.com" },
  { href: "mailto:cs1240411@iitd.ac.in", icon: "terminal", label: "Institute", value: "cs1240411@iitd.ac.in" },
  { href: "https://github.com/mridulChhipa", icon: "github", label: "GitHub", value: "mridulChhipa", external: true },
  {
    href: "https://www.linkedin.com/in/mridul-chhipa-9761a12a9/",
    icon: "linkedin",
    label: "LinkedIn",
    value: "mridul-chhipa",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "64px 24px 40px", position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        className="pokeball-accent"
        style={{ width: 300, height: 300, bottom: -120, left: -90, transform: "rotate(-14deg)" }}
      />
      <div
        aria-hidden="true"
        className="pokeball-accent"
        style={{ width: 150, height: 150, top: 30, right: "28%", transform: "rotate(20deg)" }}
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
              ~$ ping mridul
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
              Send a signal
            </h2>
          </div>
          <Image
            src="/sprites/pikachu.png"
            alt="Pikachu"
            width={84}
            height={84}
            style={{ imageRendering: "pixelated", animation: "spriteBob 3s ease-in-out infinite" }}
          />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 20 }}>
          {CONTACTS.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener" : undefined}
              className="contact-card"
              style={{
                background: "var(--surface)",
                borderRadius: "var(--radius-md)",
                padding: "22px 24px",
                display: "flex",
                alignItems: "center",
                gap: 14,
                textDecoration: "none",
                transition:
                  "transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
              }}
            >
              <span style={{ color: "var(--accent)", display: "inline-flex" }}>
                <Icon name={c.icon} size={20} />
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 3, minWidth: 0 }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-2xs)",
                    letterSpacing: "var(--tracking-wider)",
                    color: "var(--text-faint)",
                    textTransform: "uppercase",
                  }}
                >
                  {c.label}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "var(--text)", overflowWrap: "anywhere" }}>
                  {c.value}
                </span>
              </div>
            </a>
          ))}
        </div>
        <div
          style={{
            borderTop: "2px solid var(--border)",
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-faint)" }}>
            © 2026 Mridul Chhipa · built with pixel shadows and microsecond budgets
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-faint)" }}>
            mridul@iitd:~$ exit
          </span>
        </div>
      </div>
    </section>
  );
}
