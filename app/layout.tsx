import type { Metadata } from "next";
import { pixelFont, terminalFont, monoFont, bodyFont } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mridul Chhipa — Portfolio",
  description:
    "CS undergraduate at IIT Delhi building low-latency systems in C++ — CPU simulators, storage engines, trading tooling — and occasionally teaching machines to see logs and hear voices.",
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
    >
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-body)" }}>
        {children}
      </body>
    </html>
  );
}
