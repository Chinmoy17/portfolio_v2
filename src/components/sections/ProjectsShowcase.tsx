"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/motion/Reveal";
import { builtProjects } from "@/data/projects";
import type { Project } from "@/data/types";

const SWIPE_THRESHOLD = 80;

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "60%" : "-60%",
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-60%" : "60%",
    opacity: 0,
  }),
};

function wrap(index: number, length: number) {
  return ((index % length) + length) % length;
}

function SlideCover({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, 55vw"
        className="object-cover"
      />
    );
  }
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#2a1d5e] via-[#1a1233] to-[#0a0a10]">
      <span className="font-display text-7xl font-bold text-accent-soft/30">
        {project.title
          .split(" ")
          .slice(0, 2)
          .map((w) => w.charAt(0))
          .join("")}
      </span>
    </div>
  );
}

export function ProjectsShowcase() {
  const [[index, direction], setPage] = useState<[number, number]>([0, 0]);
  const reduce = useReducedMotion();
  const project = builtProjects[wrap(index, builtProjects.length)];
  const href = project.links.repo ?? project.links.demo;

  const paginate = (dir: number) => setPage([index + dir, dir]);

  return (
    <Section id="projects">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            index="02 / Projects"
            title="Things I've Built"
            description="A collection of AI-powered products that solve real problems and create measurable value."
          />
          <div className="mb-10 flex items-center gap-3">
            <span className="font-display text-sm tracking-widest text-muted-dim">
              {String(wrap(index, builtProjects.length) + 1).padStart(2, "0")} /{" "}
              {String(builtProjects.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => paginate(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-accent-soft hover:text-accent-soft"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={() => paginate(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-accent-soft hover:text-accent-soft"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </Reveal>

      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={wrap(index, builtProjects.length)}
            custom={direction}
            variants={reduce ? undefined : variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            drag={reduce ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -SWIPE_THRESHOLD) paginate(1);
              else if (info.offset.x > SWIPE_THRESHOLD) paginate(-1);
            }}
            className="grid overflow-hidden rounded-2xl border border-border bg-surface shadow-lg shadow-black/20 md:grid-cols-[1.3fr_1fr]"
          >
            <div className="relative aspect-video md:aspect-auto md:min-h-[380px]">
              <SlideCover project={project} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r md:from-transparent md:to-surface/40" />
            </div>

            <div className="flex flex-col justify-center p-6 md:p-10">
              {project.tier && (
                <span className="text-xs tracking-widest text-accent-soft uppercase">
                  {project.tier}
                </span>
              )}
              <h3 className="mt-2 font-display text-2xl font-semibold text-foreground md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-muted md:text-base">
                {project.summary}
              </p>

              {project.metrics && (
                <ul className="mt-4 flex flex-col gap-1">
                  {project.metrics.slice(0, 3).map((metric) => (
                    <li key={metric} className="text-sm text-accent-soft">
                      — {metric}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.slice(0, 5).map((tech) => (
                  <Pill key={tech}>{tech}</Pill>
                ))}
              </div>

              <div className="mt-6">
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent-soft hover:text-accent-soft"
                  >
                    {project.links.repo ? "View Code" : "Live Demo"}
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span className="text-xs text-muted-dim">
                    Private / enterprise — code not public
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {builtProjects.map((p, i) => (
          <button
            key={p.id}
            type="button"
            aria-label={`Go to ${p.title}`}
            onClick={() => setPage([i, i > wrap(index, builtProjects.length) ? 1 : -1])}
            className={`h-1.5 rounded-full transition-all ${
              i === wrap(index, builtProjects.length)
                ? "w-6 bg-accent-soft"
                : "w-1.5 bg-border-strong hover:bg-muted-dim"
            }`}
          />
        ))}
      </div>
    </Section>
  );
}
