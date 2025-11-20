"use client";

import { useCallback, useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { portfolio } from "@/content/portfolio";

function getSelectedProjects() {
  const trust = portfolio.projects.find((p) => p.id === "the-trust-gambit");
  const timber = portfolio.projects.find((p) => p.id === "timber-logs-distribution-predictor");
  const others = portfolio.projects.filter(
    (p) => p.id !== "the-trust-gambit" && p.id !== "timber-logs-distribution-predictor"
  );
  const ordered: typeof portfolio.projects = [] as any;
  if (others[0]) ordered.push(others[0]);
  if (trust) ordered.push(trust);
  if (timber) ordered.push(timber);
  if (others[1]) ordered.push(others[1]);
  return ordered.slice(0, 4);
}

export default function SelectedProjects() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Find card elements inside the scroller and compute one-card delta
    const cards = scroller.querySelectorAll<HTMLDivElement>("div.snap-start");
    let delta = 320; // fallback scroll amount
    if (cards.length >= 2) {
      const r0 = cards[0].getBoundingClientRect();
      const r1 = cards[1].getBoundingClientRect();
      delta = r1.left - r0.left; // width + gap between cards
    } else if (cards.length === 1) {
      delta = cards[0].getBoundingClientRect().width + 16;
    }

    scroller.scrollBy({ left: direction * delta, behavior: "smooth" });
  }, []);

  const selected = getSelectedProjects();

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Selected Projects</h2>
        <Link href="/projects" className="text-sm font-medium transition-opacity hover:opacity-80">
          View all →
        </Link>
      </div>

      <div className="relative mt-4 -mx-6">
        <div ref={scrollerRef} className="no-scrollbar overflow-x-auto px-6">
          <div className="flex items-stretch snap-x snap-mandatory gap-4">
            {selected.map((p) => (
              <div key={p.id} className="min-w-[260px] sm:min-w-[320px] md:min-w-[360px] snap-start flex">
                <ProjectCard project={p} showImage={false} />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 hidden items-center justify-between px-1 sm:flex">
          <button
            aria-label="Previous"
            className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            onClick={() => scrollByCard(-1)}
          >
            ‹
          </button>
          <button
            aria-label="Next"
            className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            onClick={() => scrollByCard(1)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
