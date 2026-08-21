import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pill } from "@/components/ui/Pill";
import { SmoothLink } from "@/components/ui/SmoothLink";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { skillsAI } from "@/data/skills-ai";

export function AIExpertise() {
  return (
    <Section id="ai-expertise" className="bg-background-elevated/40">
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <div>
            <SectionHeading
              index="03 / AI & LLMs"
              title="AI & LLMs Expertise"
              description="Building with the architectures that power modern LLM and agentic systems today."
            />
            <SmoothLink
              id="projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-soft"
            >
              See it in projects <ArrowRight size={14} />
            </SmoothLink>
          </div>
        </Reveal>

        <RevealGroup className="flex flex-col gap-3">
          {skillsAI.map((group) => (
            <RevealItem
              key={group.name}
              className="rounded-xl border border-border bg-surface p-4 shadow-lg shadow-black/20 transition-colors hover:border-accent-dim"
            >
              <p className="font-display text-sm font-semibold text-foreground">
                {group.name}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
