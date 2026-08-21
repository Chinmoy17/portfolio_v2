import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pill } from "@/components/ui/Pill";
import { SmoothLink } from "@/components/ui/SmoothLink";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SkillCubeShowcase } from "@/components/sections/SkillCubeLoader";
import { skillsAI } from "@/data/skills-ai";

export function AIExpertise() {
  return (
    <Section id="ai-expertise" className="bg-background-elevated/40">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            index="03 / AI & LLMs"
            title="AI & LLMs Expertise"
            description="Six domains, one stack — every side of the cube is a piece of how I build AI systems."
          />
          <SmoothLink
            id="projects"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-accent-soft"
          >
            See it in projects <ArrowRight size={14} />
          </SmoothLink>
        </div>
      </Reveal>

      {/* Interactive cube + face panel — desktop */}
      <Reveal className="hidden md:block">
        <SkillCubeShowcase groups={skillsAI} />
      </Reveal>

      {/* Flat fallback — mobile only */}
      <RevealGroup className="flex flex-col gap-3 md:hidden">
        {skillsAI.map((group) => (
          <RevealItem
            key={group.name}
            className="rounded-xl border border-border bg-surface p-4 shadow-lg shadow-black/20"
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
    </Section>
  );
}
