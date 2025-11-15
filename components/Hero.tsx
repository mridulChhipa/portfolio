import { portfolio } from "@/content/portfolio";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center sm:text-left">
      <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50">
        Hi, I’m {portfolio.profile.name}.
      </h1>
      <p className="mt-2 text-base font-medium text-zinc-700 dark:text-zinc-300">
        {portfolio.profile.tagline}
      </p>
      <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
        {portfolio.profile.summary}
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-center sm:justify-start">
        <Link
          href="/projects"
          className="inline-flex h-9 items-center rounded-full bg-zinc-900 px-5 text-sm font-medium text-white hover:opacity-95"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="inline-flex h-9 items-center rounded-full border border-zinc-300 px-5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100/60 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800/40"
        >
          Get in touch
        </Link>
      </div>

      {(() => {
        const targets = portfolio.positions.filter((p) =>
          /ARIES|Algorithms and Coding Club/i.test(p.org)
        );
        if (!targets.length) return null;
        return (
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
            <span className="mr-1 text-zinc-500">Affiliations:</span>
            {targets.map((pos, i) => (
              <span
                key={i}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 dark:border-zinc-800 dark:bg-black"
              >
                {pos.org}
              </span>
            ))}
          </div>
        );
      })()}
    </section>
  );
}
