"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section, { SectionHeader } from "@/components/layout/Section";
import SkillCard from "./SkillCard";
import {
  skills,
  Skill,
  SkillCategory,
  skillCategories,
} from "@/lib/skills";
import { cn } from "@/lib/utils";

type FilterOption = "all" | SkillCategory;

export default function TechStack() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");

  const filteredSkills: Skill[] =
    activeFilter === "all"
      ? skills
      : skills.filter((s) => s.category === activeFilter);

  const categories: SkillCategory[] = ["frontend", "backend", "tools"];

  return (
    <Section id="skills">
      <SectionHeader
        title="Tech Stack"
        subtitle="Technologies and tools I use to bring ideas to life."
      />

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-12">
        <FilterPill
          label="All"
          isActive={activeFilter === "all"}
          onClick={() => setActiveFilter("all")}
        />
        {categories.map((category) => (
          <FilterPill
            key={category}
            label={skillCategories[category]}
            isActive={activeFilter === category}
            onClick={() => setActiveFilter(category)}
          />
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
            >
              <SkillCard skill={skill} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

interface FilterPillProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function FilterPill({ label, isActive, onClick }: FilterPillProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
        isActive
          ? "text-primary-foreground"
          : "text-muted-foreground hover:text-foreground bg-surface-1 border border-border"
      )}
    >
      {isActive && (
        <motion.div
          layoutId="activeSkillFilter"
          className="absolute inset-0 bg-primary rounded-full"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </motion.button>
  );
}
