import Image from "next/image";
import type { Project } from "@/content/portfolio";

export default function ProjectCard({
  project,
  showImage = true,
}: {
  project: Project;
  showImage?: boolean;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      {project.image && showImage ? (
        <div className="relative aspect-[1/1] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain transition duration-300"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>
      ) : null}
      <div className="flex h-full flex-col p-5">
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
          {project.title}
        </h3>
        {project.org && (
          <p className="mt-1 text-xs text-zinc-500">{project.org}</p>
        )}
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          {project.description}
        </p>
        {project.tech && project.tech.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-zinc-200 bg-white px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-block text-sm font-medium text-zinc-900 transition-opacity hover:opacity-80 dark:text-zinc-50"
          >
            View Project →
          </a>
        )}
      </div>
    </article>
  );
}
