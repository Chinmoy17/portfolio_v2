import { FileText, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { publications } from "@/data/publications";
import { site } from "@/data/site";

const statusStyles: Record<string, string> = {
  Published: "text-accent-soft border-accent-dim",
  Accepted: "text-accent-soft border-accent-dim",
  "Under review": "text-muted border-border",
  Submitted: "text-muted border-border",
};

export function Research() {
  return (
    <Section id="research">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          index="04 / Research"
          title="Research That Matters"
          description="Studying how learning systems stay reliable as data, users, and conditions shift — alongside my day-to-day engineering work."
        />
        <a
          href={site.links.scholar}
          target="_blank"
          rel="noreferrer"
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-accent-soft"
        >
          View all on Google Scholar <ExternalLink size={14} />
        </a>
      </div>

      <div className="flex flex-col gap-4">
        {publications.map((pub) => (
          <div
            key={pub.title}
            className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-5 shadow-lg shadow-black/20 transition-colors hover:border-accent-dim sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex gap-4">
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background-elevated text-accent-soft">
                <FileText size={16} />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-foreground">
                  {pub.title}
                </p>
                <p className="mt-1 text-xs text-muted-dim">
                  {pub.venue} · {pub.year}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-3 sm:pl-4">
              <span
                className={`rounded-full border px-3 py-1 text-xs ${statusStyles[pub.status]}`}
              >
                {pub.status}
              </span>
              {pub.link ? (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-accent-soft"
                >
                  View Paper <ExternalLink size={12} />
                </a>
              ) : (
                <span className="text-xs text-muted-dim">Link pending</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
