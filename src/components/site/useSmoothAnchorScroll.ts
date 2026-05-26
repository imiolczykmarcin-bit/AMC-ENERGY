import { useEffect } from "react";

const EASE = (t: number) => 0.5 - Math.cos(Math.PI * t) / 2;

function smoothScrollTo(targetY: number, duration: number) {
  const startY = window.scrollY;
  const maxY = document.documentElement.scrollHeight - window.innerHeight;
  const endY = Math.max(0, Math.min(targetY, maxY));
  const diff = endY - startY;
  const startT = performance.now();

  return new Promise<void>((resolve) => {
    const step = (now: number) => {
      const t = Math.min(1, (now - startT) / duration);
      window.scrollTo({ top: startY + diff * EASE(t), behavior: "auto" });
      if (t < 1) requestAnimationFrame(step);
      else resolve();
    };
    requestAnimationFrame(step);
  });
}

/**
 * Intercepts in-page anchor clicks and scrolls with an eased animation.
 * No blur, no filter — just smooth motion.
 */
export function useSmoothAnchorScroll() {
  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";

    const onClick = async (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();

      const headerOffset = document.querySelector("header")?.getBoundingClientRect().height ?? 88;
      const targetY = el.getBoundingClientRect().top + window.scrollY - headerOffset;

      const distance = Math.abs(targetY - window.scrollY);
      const duration = Math.min(1250, Math.max(650, distance * 0.45));

      await smoothScrollTo(targetY, duration);
      history.replaceState(null, "", href);
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      document.documentElement.style.scrollBehavior = prev;
    };
  }, []);
}
