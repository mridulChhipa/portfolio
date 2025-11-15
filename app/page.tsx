import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SelectedProjects from "@/components/SelectedProjects";
import Footer from "@/components/Footer";
import { portfolio } from "@/content/portfolio";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main className="mx-auto max-w-4xl px-6">
        <Hero />

        <SelectedProjects />

        <Footer />
      </main>
    </div>
  );
}
