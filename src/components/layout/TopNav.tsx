"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { navItems } from "@/lib/constants";
import { site } from "@/data/site";
import { SmoothLink } from "@/components/ui/SmoothLink";
import { cn } from "@/lib/utils";

export function TopNav() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const links = navItems.filter((item) => item.id !== "home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-16">
        <SmoothLink
          id="home"
          className="font-display text-sm font-bold tracking-widest text-accent-soft"
        >
          CM
        </SmoothLink>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((item) => (
            <li key={item.id}>
              <SmoothLink
                id={item.id}
                className={cn(
                  "text-sm transition-colors hover:text-foreground",
                  activeId === item.id ? "text-foreground" : "text-muted",
                )}
              >
                {item.label}
              </SmoothLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={site.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-accent-soft hover:text-accent-soft"
          >
            Resume
            <Download size={14} />
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((item) => (
              <li key={item.id}>
                <SmoothLink
                  id={item.id}
                  onNavigate={() => setOpen(false)}
                  className={cn(
                    "text-sm transition-colors hover:text-foreground",
                    activeId === item.id ? "text-foreground" : "text-muted",
                  )}
                >
                  {item.label}
                </SmoothLink>
              </li>
            ))}
            <li>
              <a
                href={site.resumeUrl}
                download
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent-soft"
              >
                Resume
                <Download size={14} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
