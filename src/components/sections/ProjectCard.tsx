"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
  onClick: () => void;
}

export default function ProjectCard({
  project,
  index,
  featured = false,
  onClick,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "group relative cursor-pointer",
        featured ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl bg-surface-1 border border-border/50",
          "transition-shadow duration-300",
          isHovered && "shadow-xl shadow-primary/10"
        )}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Image container */}
        <div
          className={cn(
            "relative overflow-hidden",
            featured ? "h-80 md:h-96" : "h-48 md:h-56"
          )}
        >
          <Image
            src={`/assets/images/${project.img}`}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          />

          {/* Gradient overlay */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent",
              "transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-70"
            )}
          />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider bg-background/80 backdrop-blur-sm rounded-full border border-border/50">
              {project.category.replace("-", " ")}
            </span>
          </div>

          {/* Year badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-xs font-mono text-muted-foreground bg-background/80 backdrop-blur-sm rounded-full border border-border/50">
              {project.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6" style={{ transform: "translateZ(20px)" }}>
          <h3 className={cn(
            "font-display font-semibold mb-2",
            featured ? "text-2xl" : "text-lg"
          )}>
            {project.name}
          </h3>

          <p
            className={cn(
              "text-muted-foreground line-clamp-2 mb-4",
              featured ? "text-base" : "text-sm"
            )}
          >
            {project.description}
          </p>

          {/* Tech stack */}
          <motion.div
            initial={false}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.2 }}
            className="flex flex-wrap gap-2 mb-4"
          >
            {project.techStack.slice(0, featured ? 4 : 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded-md"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <ExternalLink size={16} />
              View Project
            </motion.a>

            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <Github size={16} />
                Code
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
