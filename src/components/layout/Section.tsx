"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
  noPadding?: boolean;
}

export default function Section({
  id,
  className,
  children,
  fullHeight = false,
  noPadding = false,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative",
        fullHeight && "min-h-screen",
        !noPadding && "py-20 lg:py-32 px-6 lg:px-24",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </motion.section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-display font-display font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
