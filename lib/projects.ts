export type Project = {
  id: string;
  title: string;
  description: string;
  link?: string;
  tech?: string[];
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "This portfolio built with Next.js, showcasing projects and contact.",
    link: "https://example.com",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: "2",
    title: "Task Manager",
    description: "A simple task manager app with local persistence and filters.",
    link: "https://example.com",
    tech: ["React", "LocalStorage"],
  },
  {
    id: "3",
    title: "Open Source Contribution",
    description: "Contributed features and fixes to an open-source library.",
    link: "https://example.com",
    tech: ["TypeScript", "Testing"],
  },
];
