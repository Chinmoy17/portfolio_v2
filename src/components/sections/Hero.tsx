import { Download, ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { SmoothLink } from "@/components/ui/SmoothLink";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/motion/Reveal";

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
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <Reveal>
            <p className="font-display text-sm tracking-widest text-accent-soft">
              Hi, I&apos;m
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-3 font-display text-5xl font-bold leading-tight text-foreground sm:text-6xl">
              {site.name.split(" ")[0]}{" "}
              <span className="text-accent-soft">{site.name.split(" ")[1]}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-muted">{site.tagline}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-lg text-muted">{site.shortBio}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton>
                <SmoothLink
                  id="projects"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-soft"
                >
                  Explore My Work
                  <ArrowRight size={16} />
                </SmoothLink>
              </MagneticButton>
              <MagneticButton>
                <a
                  href={site.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent-soft hover:text-accent-soft"
                >
                  Download CV
                  <Download size={16} />
                </a>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
