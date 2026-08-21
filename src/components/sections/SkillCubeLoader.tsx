"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { Pill } from "@/components/ui/Pill";
import type { SkillGroup } from "@/data/types";

const SkillCube = dynamic(() => import("@/components/three/SkillCube"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-48 w-48 rounded-3xl bg-[conic-gradient(from_180deg,rgba(124,92,255,0.25),rgba(233,79,161,0.1),transparent_70%)] blur-2xl" />
    </div>
  ),
});

export function SkillCubeShowcase({ groups }: { groups: SkillGroup[] }) {
  const [active, setActive] = useState(0);
  const group = groups[active] ?? groups[0];

  return (
    <div className="grid items-center gap-12 md:grid-cols-2">
      <div>
        <motion.div
          key={group.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-border bg-surface p-6 shadow-lg shadow-black/20"
        >
          <span className="font-display text-sm tracking-widest text-accent-soft">
            {String(active + 1).padStart(2, "0")} / {String(groups.length).padStart(2, "0")}
          </span>
          <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
            {group.name}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>
        </motion.div>
        <p className="mt-4 text-xs text-muted-dim">
          Drag the cube — this panel follows whichever face is in front.
        </p>
      </div>

      <div className="relative aspect-square w-full max-w-md justify-self-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.14),transparent_65%)]"
        />
        <SkillCube groups={groups} onActiveChange={setActive} />
      </div>
    </div>
  );
}
