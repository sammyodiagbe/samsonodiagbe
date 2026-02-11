"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Skill } from "@/lib/skills";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.05,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={cn(
          "relative p-5 rounded-xl border border-border/50 bg-background",
          "transition-shadow duration-300",
          isHovered && "shadow-lg shadow-primary/5"
        )}
      >
        {/* Background gradient on hover */}
        <div
          className={cn(
            "absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 transition-opacity duration-300",
            skill.color,
            isHovered && "opacity-100"
          )}
        />

        <div className="relative z-10">
          {/* Icon and name */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">{skill.icon}</span>
            <h3 className="font-display font-semibold">{skill.name}</h3>
          </div>

          {/* Proficiency dots */}
          <div className="flex gap-1.5 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.05 + i * 0.05 }}
                className={cn(
                  "w-2 h-2 rounded-full",
                  i < skill.proficiency
                    ? "bg-primary"
                    : "bg-muted"
                )}
              />
            ))}
          </div>

          {/* Description on hover */}
          <motion.div
            initial={false}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? "auto" : 0,
            }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted-foreground">
              {skill.description}
            </p>
            {skill.yearsUsed && (
              <p className="mt-2 text-xs text-muted-foreground/70">
                {skill.yearsUsed}+ years experience
              </p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
