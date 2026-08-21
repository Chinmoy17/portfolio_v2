import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-16 relative flex min-h-[70vh] items-center overflow-hidden border-b border-border/60 px-6 py-16 sm:min-h-[90vh] sm:px-10 sm:py-20 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,92,255,0.18),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(233,79,161,0.10),transparent_40%)]"
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="font-display text-sm tracking-widest text-accent-soft">
            Hi, I&apos;m
          </p>
          <h1 className="mt-3 font-display text-5xl font-bold leading-tight text-foreground sm:text-6xl">
            {site.name.split(" ")[0]}{" "}
            <span className="text-accent-soft">{site.name.split(" ")[1]}</span>
          </h1>
          <p className="mt-4 text-lg text-muted">{site.tagline}</p>
          <p className="mt-6 max-w-lg text-muted">{site.shortBio}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-soft"
            >
              Explore My Work
              <ArrowRight size={16} />
            </Link>
            <a
              href={site.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent-soft hover:text-accent-soft"
            >
              Download CV
              <Download size={16} />
            </a>
          </div>
        </div>

        <div className="relative hidden aspect-square items-center justify-center md:flex">
          <div className="h-72 w-72 rounded-full bg-[conic-gradient(from_180deg,rgba(124,92,255,0.35),rgba(233,79,161,0.15),transparent_70%)] blur-2xl" />
        </div>
      </div>
    </section>
  );
}
