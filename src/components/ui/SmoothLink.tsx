"use client";

import Link from "next/link";
import { scrollToId } from "@/lib/lenis";

export function SmoothLink({
  id,
  children,
  className,
  onNavigate,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToId(id);
        window.history.pushState(null, "", `#${id}`);
        onNavigate?.();
      }}
      className={className}
    >
      {children}
    </Link>
  );
}
