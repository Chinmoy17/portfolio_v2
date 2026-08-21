"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Boxes } from "lucide-react";
import { motion, useMotionValue, animate, useReducedMotion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/motion/Reveal";
import { builtProjects } from "@/data/projects";

const CARD_WIDTH = 290;
const GAP = 20;
const STEP = CARD_WIDTH + GAP;

function TiltCard({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  if (reduce) {
    return <div className="w-[290px] shrink-0">{children}</div>;
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    animate(rotateY, px * 10, { duration: 0.2 });
    animate(rotateX, py * -10, { duration: 0.2 });
  }

  function handleMouseLeave() {
    animate(rotateY, 0, { duration: 0.3 });
    animate(rotateX, 0, { duration: 0.3 });
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="w-[290px] shrink-0"
    >
      {children}
    </motion.div>
  );
}

export function ProjectsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxDrag, setMaxDrag] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    function measure() {
      if (!containerRef.current || !trackRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const trackWidth = trackRef.current.scrollWidth;
      setMaxDrag(Math.max(0, trackWidth - containerWidth));
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  function goTo(index: number) {
    const clamped = Math.max(0, Math.min(builtProjects.length - 1, index));
    const targetX = Math.max(-maxDrag, -clamped * STEP);
    if (reduce) {
      x.set(targetX);
    } else {
      animate(x, targetX, { type: "spring", stiffness: 300, damping: 40 });
    }
    setActiveIndex(clamped);
  }

  function handleDragEnd() {
    const index = Math.round(-x.get() / STEP);
    goTo(index);
  }

  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading
          index="02 / Projects"
          title="Things I've Built"
          description="A collection of AI-powered products that solve real problems and create measurable value."
        />
      </Reveal>

      <div ref={containerRef} className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent"
        />
        <motion.div
          ref={trackRef}
          drag={reduce || maxDrag === 0 ? false : "x"}
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.08}
          onDragEnd={handleDragEnd}
          style={{ x }}
          className="flex touch-pan-y gap-5 pb-4"
        >
          {builtProjects.map((project) => (
            <TiltCard key={project.id}>
              <article className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-lg shadow-black/20 transition-colors hover:border-accent-dim">
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
            </TiltCard>
          ))}
        </motion.div>
      </div>

      <div className="mt-2 flex justify-center gap-2">
        {builtProjects.map((project, i) => (
          <button
            key={project.id}
            type="button"
            aria-label={`Go to ${project.title}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === activeIndex ? "w-6 bg-accent-soft" : "w-1.5 bg-border-strong"
            }`}
          />
        ))}
      </div>
    </Section>
  );
}
