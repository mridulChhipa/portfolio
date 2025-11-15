import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { portfolio } from "@/content/portfolio";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Projects</h1>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {portfolio.projects.map((p) => (
            <ProjectCard key={p.id} project={p} showImage={false} />
          ))}
        </div>
      </main>
    </div>
  );
}
