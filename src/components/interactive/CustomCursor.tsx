"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device has fine pointer (mouse)
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) {
      setIsHidden(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check for interactive elements
      const isLink = target.closest("a");
      const isButton = target.closest("button");
      const isClickable = target.closest("[data-cursor]");

      if (isLink || isButton || isClickable) {
        setIsPointer(true);

        // Check for custom cursor text
        const cursorData = target.closest("[data-cursor-text]");
        if (cursorData) {
          setCursorText(cursorData.getAttribute("data-cursor-text") || "");
        } else if (isLink) {
          setCursorText("View");
        } else {
          setCursorText("");
        }
      } else {
        setIsPointer(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", handleElementHover);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", handleElementHover);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  if (isHidden) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className={cn(
          "fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference",
          !isVisible && "opacity-0"
        )}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          animate={{
            scale: isPointer ? 2.5 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className={cn(
            "relative flex items-center justify-center",
            "-translate-x-1/2 -translate-y-1/2",
            "w-4 h-4 rounded-full bg-white"
          )}
        >
          {cursorText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute text-[8px] font-bold uppercase text-black whitespace-nowrap"
            >
              {cursorText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className={cn(
          "fixed top-0 left-0 pointer-events-none z-[9998]",
          !isVisible && "opacity-0"
        )}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          animate={{
            scale: isPointer ? 1.5 : 1,
            opacity: isPointer ? 0 : 0.3,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className={cn(
            "-translate-x-1/2 -translate-y-1/2",
            "w-8 h-8 rounded-full border border-primary"
          )}
        />
      </motion.div>

      {/* Hide default cursor */}
      <style jsx global>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
