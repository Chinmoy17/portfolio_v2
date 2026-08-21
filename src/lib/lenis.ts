import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  instance = lenis;
}

export function getLenis() {
  return instance;
}

const NAV_OFFSET = -64;

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = instance;
  if (lenis) {
    lenis.scrollTo(el, { offset: NAV_OFFSET });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
