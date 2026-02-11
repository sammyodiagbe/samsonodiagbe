"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const codeSnippets = [
  { code: "const build = () => {", color: "from-primary/20 to-primary/5" },
  { code: "async function create() {", color: "from-accent/20 to-accent/5" },
  { code: "export default App", color: "from-primary/20 to-primary/5" },
  { code: "return <Component />", color: "from-accent/20 to-accent/5" },
  { code: "npm run deploy", color: "from-primary/20 to-primary/5" },
  { code: "git push origin main", color: "from-accent/20 to-accent/5" },
];

const techIcons = [
  { name: "React", emoji: "⚛️" },
  { name: "TypeScript", emoji: "📘" },
  { name: "Next.js", emoji: "▲" },
  { name: "Node.js", emoji: "🟢" },
  { name: "Python", emoji: "🐍" },
  { name: "Git", emoji: "📦" },
];

interface FloatingItemProps {
  children: React.ReactNode;
  delay: number;
  x: number;
  y: number;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  parallaxStrength?: number;
}

function FloatingItem({
  children,
  delay,
  x,
  y,
  mouseX,
  mouseY,
  parallaxStrength = 0.02,
}: FloatingItemProps) {
  const springConfig = { stiffness: 100, damping: 30 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const moveX = useTransform(springX, (val) => val * parallaxStrength);
  const moveY = useTransform(springY, (val) => val * parallaxStrength);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: delay,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        x: moveX,
        y: moveY,
      }}
      className="transform -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3 + delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isMobile]);

  if (isMobile) {
    return (
      <div className="relative w-full h-64 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-3 gap-3"
        >
          {techIcons.slice(0, 6).map((icon, index) => (
            <motion.div
              key={icon.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-surface-1 to-surface-2 border border-border/50 shadow-sm"
            >
              <span className="text-xl">{icon.emoji}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[500px] overflow-hidden"
    >
      {/* Background gradient orbs */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl"
        style={{
          left: "20%",
          top: "30%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-3xl"
        style={{
          right: "20%",
          bottom: "30%",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating code snippets */}
      {codeSnippets.map((snippet, index) => {
        const positions = [
          { x: 25, y: 20 },
          { x: 75, y: 15 },
          { x: 15, y: 50 },
          { x: 85, y: 45 },
          { x: 30, y: 80 },
          { x: 70, y: 75 },
        ];
        const pos = positions[index % positions.length];

        return (
          <FloatingItem
            key={index}
            delay={0.3 + index * 0.1}
            x={pos.x}
            y={pos.y}
            mouseX={mouseX}
            mouseY={mouseY}
            parallaxStrength={0.02 + (index % 3) * 0.01}
          >
            <div
              className={`px-4 py-2 rounded-lg bg-gradient-to-br ${snippet.color} backdrop-blur-sm border border-border/30 shadow-lg`}
            >
              <code className="text-xs font-mono text-foreground/80">
                {snippet.code}
              </code>
            </div>
          </FloatingItem>
        );
      })}

      {/* Floating tech icons */}
      {techIcons.map((icon, index) => {
        const positions = [
          { x: 50, y: 30 },
          { x: 40, y: 60 },
          { x: 60, y: 55 },
          { x: 35, y: 35 },
          { x: 65, y: 70 },
          { x: 55, y: 45 },
        ];
        const pos = positions[index % positions.length];

        return (
          <FloatingItem
            key={icon.name}
            delay={0.5 + index * 0.15}
            x={pos.x}
            y={pos.y}
            mouseX={mouseX}
            mouseY={mouseY}
            parallaxStrength={0.03 + (index % 2) * 0.02}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-surface-1 to-surface-2 border border-border/50 shadow-lg backdrop-blur-sm">
              <span className="text-xl">{icon.emoji}</span>
            </div>
          </FloatingItem>
        );
      })}
    </div>
  );
}
