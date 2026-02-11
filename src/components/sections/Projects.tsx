"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section, { SectionHeader } from "@/components/layout/Section";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import {
  portfolioData,
  Project,
  ProjectCategory,
  categoryLabels,
  getAllCategories,
} from "@/lib/data";
import { cn } from "@/lib/utils";

type FilterOption = "all" | ProjectCategory;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = getAllCategories();

  const filteredProjects =
    activeFilter === "all"
      ? portfolioData
      : portfolioData.filter((p) => p.category === activeFilter);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <Section id="projects" className="bg-surface-1/50">
      <SectionHeader
        title="Selected Work"
        subtitle="A collection of projects that showcase my skills and passion for building great digital experiences."
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
            label={categoryLabels[category]}
            isActive={activeFilter === category}
            onClick={() => setActiveFilter(category)}
          />
        ))}
      </div>

      {/* Bento Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={cn(
                project.featured && "md:col-span-2 md:row-span-2"
              )}
            >
              <ProjectCard
                project={project}
                index={index}
                featured={project.featured}
                onClick={() => handleProjectClick(project)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-lg text-muted-foreground">
            No projects found in this category.
          </p>
        </motion.div>
      )}

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
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
          : "text-muted-foreground hover:text-foreground bg-background border border-border"
      )}
    >
      {isActive && (
        <motion.div
          layoutId="activeFilter"
          className="absolute inset-0 bg-primary rounded-full"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </motion.button>
  );
}
