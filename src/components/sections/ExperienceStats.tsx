import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stats } from "@/data/stats";
import { experience } from "@/data/experience";

function formatDate(date: string | null) {
  if (!date) return "Present";
  const [year, month] = date.split("-");
  const d = new Date(Number(year), Number(month) - 1);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function ExperienceStats() {
  return (
    <Section id="experience">
      <SectionHeading
        index="06 / Experience"
        title="Experience"
        description="My professional journey so far."
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border bg-surface p-5 text-center"
          >
            <p className="font-display text-2xl font-bold text-accent-soft">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-muted-dim">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-6">
        {experience.map((job) => (
          <div
            key={job.company}
            className="flex flex-col gap-2 border-b border-border/60 pb-6 last:border-0 sm:flex-row sm:justify-between"
          >
            <div>
              <p className="font-display text-base font-semibold text-foreground">
                {job.role} · {job.company}
              </p>
              <p className="text-sm text-muted-dim">
                {job.type} · {job.location}
              </p>
              <ul className="mt-3 flex list-disc flex-col gap-1 pl-4 text-sm text-muted">
                {job.highlights.slice(0, 3).map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
            <p className="shrink-0 text-sm text-muted-dim sm:text-right">
              {formatDate(job.start)} – {formatDate(job.end)}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
