"use client";

import { useEffect, useRef, useState, RefObject } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView<T extends HTMLElement = HTMLElement>(
  options: UseInViewOptions = {}
): [RefObject<T>, boolean] {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let disconnected = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);
        if (inView && triggerOnce) {
          observer.unobserve(element);
          disconnected = true;
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    // Fallback: after 2 animation frames Lenis has had time to settle the
    // scroll position at 0. Check the element's actual viewport position
    // directly with getBoundingClientRect. This catches the race condition
    // where IntersectionObserver fires before Lenis finishes scrolling to top.
    const id1 = requestAnimationFrame(() => {
      const id2 = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el || disconnected) return;
        const rect = el.getBoundingClientRect();
        const visible = rect.top < window.innerHeight && rect.bottom > 0;
        if (visible) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(el);
            disconnected = true;
          }
        }
      });
      return () => cancelAnimationFrame(id2);
    });

    return () => {
      cancelAnimationFrame(id1);
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isInView];
}
