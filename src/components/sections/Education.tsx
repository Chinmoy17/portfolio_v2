"use client";

import { motion, useReducedMotion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { education } from "@/data/education";

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Education() {
  const reduce = useReducedMotion();

  return (
    <Section id="education" className="bg-background-elevated/40">
      <Reveal>
        <SectionHeading
          index="07 / Education"
          title="Education"
          description="Academic background and continuous learning."
        />
      </Reveal>

      <motion.ol
        initial={reduce ? undefined : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="relative flex flex-col gap-8 border-l border-border pl-8"
      >
        {education.map((entry) => (
          <motion.li
            key={entry.institution}
            variants={reduce ? undefined : itemVariants}
            className="relative"
          >
            <span className="absolute top-1.5 -left-[calc(2rem+4.5px)] h-2 w-2 rounded-full bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <p className="font-display text-base font-semibold text-foreground">
                {entry.degree}
              </p>
              <span className="text-sm text-muted-dim">{entry.date}</span>
            </div>
            <p className="text-sm text-muted">
              {entry.institution} · {entry.location}
            </p>
            {entry.score && (
              <p className="mt-1 text-xs text-muted-dim">{entry.score}</p>
            )}
            {entry.thesis && (
              <p className="mt-2 text-sm text-muted">
                Thesis: <span className="text-foreground">{entry.thesis.title}</span>
                {" — "}
                <span className="text-muted-dim">Supervised by {entry.thesis.supervisor}</span>
              </p>
            )}
            {entry.awards && (
              <div className="mt-2 flex flex-wrap gap-2">
                {entry.awards.map((award) => (
                  <span
                    key={award}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-dim"
                  >
                    {award}
                  </span>
                ))}
              </div>
            )}
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
