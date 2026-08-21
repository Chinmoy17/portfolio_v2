import { Mail, GraduationCap } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { site } from "@/data/site";

const socials = [
  { href: site.links.email, icon: Mail, label: "Email" },
  { href: site.links.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: site.links.github, icon: GithubIcon, label: "GitHub" },
  { href: site.links.scholar, icon: GraduationCap, label: "Google Scholar" },
];

export function Contact() {
  return (
    <Section id="contact" className="border-b-0">
      <SectionHeading
        index="08 / Contact"
        title="Let's Connect"
        description="I'm always open to discussing new ideas, collaborations, or opportunities."
      />

      <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        <a
          href={site.links.email}
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-soft"
        >
          Get In Touch
        </a>

        <div className="flex gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={social.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-accent-soft hover:text-accent-soft"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-16 text-center text-xs text-muted-dim">
        © {new Date().getFullYear()} {site.name}. Built with Next.js & Tailwind CSS.
      </p>
    </Section>
  );
}
