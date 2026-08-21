"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

export function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const match = value.match(/^(\d+)(.*)$/);
    if (!match || !inView || !ref.current) return;
    const target = Number(match[1]);
    const suffix = match[2];

    if (reduce) {
      ref.current.textContent = value;
      return;
    }

    const controls = animate(0, target, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  const initialText = /^\d/.test(value) ? value.replace(/^\d+/, "0") : value;
  return <span ref={ref}>{initialText}</span>;
}
