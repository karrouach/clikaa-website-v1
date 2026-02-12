"use client";

import { useEffect, useRef, useCallback } from "react";
import Lenis from "lenis";

export function useLenis(callback?: (lenis: Lenis) => void) {
  const lenisRef = useRef<Lenis | null>(null);

  const scrollTo = useCallback(
    (
      target: string | number | HTMLElement,
      options?: {
        offset?: number;
        duration?: number;
        immediate?: boolean;
        lock?: boolean;
      }
    ) => {
      lenisRef.current?.scrollTo(target, options);
    },
    []
  );

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const frameId = requestAnimationFrame(raf);

    if (callback) {
      lenis.on("scroll", () => callback(lenis));
    }

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, [callback]);

  return { lenis: lenisRef.current, scrollTo };
}
