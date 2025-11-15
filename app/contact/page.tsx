import Header from "@/components/Header";
import { portfolio } from "@/content/portfolio";

export default function Contact() {
  const { socials } = portfolio;
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Contact</h1>
        <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">
          I’m open to collaboration and opportunities. Reach me at
          <a className="ml-2 font-medium text-zinc-900 underline dark:text-zinc-50" href={`mailto:${socials.email}`}>
            {socials.email}
          </a>
          {socials.phone ? (
            <>
              <span className="mx-2">•</span>
              <a className="font-medium text-zinc-900 underline dark:text-zinc-50" href={`tel:${socials.phone}`}>
                {socials.phone}
              </a>
            </>
          ) : null}
        </p>

        <div className="mt-6 flex gap-4 text-sm">
          {socials.github && (
            <a className="transition-opacity hover:opacity-80" href={socials.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {socials.linkedin && (
            <a className="transition-opacity hover:opacity-80" href={socials.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
        </div>
      </main>
    </div>
  );
}
