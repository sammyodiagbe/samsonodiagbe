"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, Github, Calendar } from "lucide-react";
import { Project } from "@/lib/data";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-auto bg-background border border-border rounded-2xl shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-secondary transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Image */}
            <div className="relative h-64 md:h-80">
              <Image
                src={`/assets/images/${project.img}`}
                alt={project.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 -mt-16 relative">
              {/* Category & Year */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider bg-primary/10 text-primary rounded-full">
                  {project.category.replace("-", " ")}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-display font-bold mb-4">
                {project.name}
              </h2>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-mono bg-surface-1 border border-border rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink size={18} />
                  View Live Project
                </a>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border rounded-full font-medium hover:border-primary hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                    View Source
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
