"use client";

import { useEffect } from "react";

/**
 * Progressive-enhancement scroll reveals. On mount (JS available, motion
 * allowed) it tags <html> with `has-motion`; only then does CSS hide the
 * candidates below the fold, so content is never hidden without JS or for
 * reduced-motion users. Cards reveal with a small stagger based on their
 * position among siblings (via the --reveal-delay custom property, which
 * only applies pre-reveal so hover transitions stay instant).
 */
const SELECTOR = [
  ".offering",
  ".review-source",
  ".link-card",
  ".feature",
  ".step",
  ".team-member",
  ".contact-detail",
].join(", ");

export function MotionObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    if (els.length === 0) return;

    for (const el of els) {
      const siblings = el.parentElement
        ? Array.from(el.parentElement.children)
        : [];
      const index = Math.max(siblings.indexOf(el), 0);
      el.style.setProperty("--reveal-delay", `${Math.min(index * 60, 280)}ms`);
    }

    document.documentElement.classList.add("has-motion");

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const reveal = (el: HTMLElement) => {
      el.classList.add("is-in");
      // Drop the stagger delay once the entrance finishes so hover
      // transitions are instant from then on.
      const delay = parseInt(el.style.getPropertyValue("--reveal-delay"), 10) || 0;
      timeouts.push(
        setTimeout(() => el.style.removeProperty("--reveal-delay"), delay + 800)
      );
    };

    // Fail-open: if IntersectionObserver is unavailable or errors, reveal
    // everything immediately rather than risk permanently hidden content.
    let io: IntersectionObserver | null = null;
    try {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              reveal(entry.target as HTMLElement);
              io!.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
    } catch {
      io = null;
    }

    for (const el of els) {
      // Anything already in view on load reveals immediately (no pop-in).
      const rect = el.getBoundingClientRect();
      if (!io || rect.top < window.innerHeight * 0.92) {
        reveal(el);
      } else {
        io.observe(el);
      }
    }

    return () => {
      io?.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return null;
}
