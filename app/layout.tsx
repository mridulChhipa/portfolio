import type { Metadata } from "next";
import { pixelFont, terminalFont, monoFont, bodyFont } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mridul Chhipa — Portfolio",
  description:
    "CS undergraduate at IIT Delhi building low-latency systems in C++ — CPU simulators, storage engines, trading tooling — and occasionally teaching machines to see logs and hear voices.",
  icons: {
    icon: "/sprites/AshKetchum.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pixelFont.variable} ${terminalFont.variable} ${monoFont.variable} ${bodyFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try { var t = localStorage.getItem('theme'); if (t === 'dark') document.documentElement.dataset.theme = 'dark'; } catch (e) {}",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-body)" }}>
        {children}
      </body>
    </html>
  );
}
