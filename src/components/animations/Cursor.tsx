"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useReducedMotion, useIsMobile } from "@/hooks/useMediaQuery";

interface CursorState {
  isHovering: boolean;
  isPressed: boolean;
  text: string | null;
}

export function Cursor() {
  const { x, y } = useMousePosition();
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const [cursorState, setCursorState] = useState<CursorState>({
    isHovering: false,
    isPressed: false,
    text: null,
  });

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    cursorX.set(x - 8);
    cursorY.set(y - 8);
  }, [x, y, cursorX, cursorY]);

  useEffect(() => {
    const handleMouseDown = () =>
      setCursorState((prev) => ({ ...prev, isPressed: true }));
    const handleMouseUp = () =>
      setCursorState((prev) => ({ ...prev, isPressed: false }));

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveElement = target.closest(
        'a, button, [data-cursor="pointer"], input, textarea, [role="button"]'
      );
      const cursorText = target.closest("[data-cursor-text]");

      if (cursorText) {
        setCursorState({
          isHovering: true,
          isPressed: false,
          text: cursorText.getAttribute("data-cursor-text"),
        });
      } else if (interactiveElement) {
        setCursorState({
          isHovering: true,
          isPressed: false,
          text: null,
        });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveElement = target.closest(
        'a, button, [data-cursor="pointer"], input, textarea, [role="button"], [data-cursor-text]'
      );

      if (interactiveElement) {
        setCursorState({
          isHovering: false,
          isPressed: false,
          text: null,
        });
      }
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  if (reducedMotion || isMobile) {
    return null;
  }

  const size = cursorState.isHovering ? 60 : cursorState.isPressed ? 12 : 16;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[1000] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="flex items-center justify-center rounded-full bg-white"
          animate={{
            width: size,
            height: size,
            x: cursorState.isHovering ? -22 : 0,
            y: cursorState.isHovering ? -22 : 0,
          }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 400,
          }}
        >
          {cursorState.text && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-xs font-medium text-black"
            >
              {cursorState.text}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
