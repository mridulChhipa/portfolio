import Link from "next/link";
import { portfolio } from "@/content/portfolio";

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-200 bg-white dark:bg-black dark:border-zinc-800">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold font-heading tracking-tight">
          {portfolio.profile.name}
        </Link>
        <nav className="flex gap-4 text-sm">
          <Link href="/about" className="transition-opacity hover:opacity-80">
            About
          </Link>
          <Link href="/projects" className="transition-opacity hover:opacity-80">
            Projects
          </Link>
          <Link href="/contact" className="transition-opacity hover:opacity-80">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
