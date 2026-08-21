import { ArrowUpRight, Boxes } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pill } from "@/components/ui/Pill";
import { builtProjects } from "@/data/projects";

export function ProjectsCarousel() {
  return (
    <Section id="projects">
      <SectionHeading
        index="02 / Projects"
        title="Things I've Built"
        description="A collection of AI-powered products that solve real problems and create measurable value."
      />

      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent"
        />
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
          {builtProjects.map((project) => (
            <article
              key={project.id}
              className="group flex w-[290px] shrink-0 snap-start flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-lg shadow-black/20 transition-colors hover:border-accent-dim"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background-elevated text-accent-soft">
                  <Boxes size={18} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.slice(0, 3).map((tech) => (
                    <Pill key={tech}>{tech}</Pill>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-sm">
                {project.tier && (
                  <span className="text-xs text-muted-dim">{project.tier}</span>
                )}
                {project.links.repo ? (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto inline-flex items-center gap-1 text-accent-soft transition-transform group-hover:translate-x-0.5"
                  >
                    View <ArrowUpRight size={14} />
                  </a>
                ) : project.links.demo ? (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto inline-flex items-center gap-1 text-accent-soft transition-transform group-hover:translate-x-0.5"
                  >
                    Live demo <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span className="ml-auto text-xs text-muted-dim">Private</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
