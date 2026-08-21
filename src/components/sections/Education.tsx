import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/education";

export function Education() {
  return (
    <Section id="education" className="bg-background-elevated/40">
      <SectionHeading
        index="07 / Education"
        title="Education"
        description="Academic background and continuous learning."
      />

      <ol className="relative flex flex-col gap-8 border-l border-border pl-8">
        {education.map((entry) => (
          <li key={entry.institution} className="relative">
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
          </li>
        ))}
      </ol>
    </Section>
  );
}
