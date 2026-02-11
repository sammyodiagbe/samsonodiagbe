"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  staggerDelay = 0.03,
}: AnimatedTextProps) {
  const characters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={cn("inline-flex flex-wrap", className)}
      aria-label={text}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={child}
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

interface AnimatedWordsProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedWords({
  text,
  className,
  delay = 0,
}: AnimatedWordsProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={cn("inline-flex flex-wrap gap-x-2", className)}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={child}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
