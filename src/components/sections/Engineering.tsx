import { Server, Cloud, Database, Rocket, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pill } from "@/components/ui/Pill";
import { skillsEngineering } from "@/data/skills-engineering";

const icons: Record<string, LucideIcon> = {
  Backend: Server,
  DevOps: Cloud,
  Databases: Database,
  Deployment: Rocket,
};

export function Engineering() {
  return (
    <Section id="engineering" className="bg-background-elevated/40">
      <SectionHeading
        index="05 / Engineering"
        title="Engineering & Deployment"
        description="Designing scalable, reliable, and production-ready AI systems."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {skillsEngineering.map((group) => {
          const Icon = icons[group.name] ?? Server;
          return (
            <div
              key={group.name}
              className="group rounded-xl border border-border bg-surface p-5 shadow-lg shadow-black/20 transition-colors hover:border-accent-dim"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background-elevated text-muted transition-colors group-hover:text-accent-soft">
                <Icon size={16} />
              </div>
              <p className="mt-3 font-display text-sm font-semibold text-foreground">
                {group.name}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
