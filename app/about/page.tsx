import Header from "@/components/Header";
import { portfolio } from "@/content/portfolio";

export default function About() {
  const { education, achievements, skills, positions } = portfolio;
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">About</h1>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Education</h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            <span className="font-medium">{education.degree}</span> ({education.period}) — CGPA {education.cgpa}
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">{education.institution}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Achievements</h2>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-zinc-700 dark:text-zinc-300">
            {portfolio.achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold">Programming</h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">{skills.programming.join(" • ")}</p>
          </div>
          <div>
            <h3 className="font-semibold">AI</h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">{skills.ai.join(" • ")}</p>
          </div>
          <div>
            <h3 className="font-semibold">Hardware</h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">{skills.hardware.join(" • ")}</p>
          </div>
          <div>
            <h3 className="font-semibold">Relevant Courses</h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">{skills.courses.join(", ")}</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Positions of Responsibility</h2>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-zinc-700 dark:text-zinc-300">
            {positions.map((pos, i) => (
              <li key={i}>
                <span className="font-medium">{pos.role}</span> — {pos.org}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
