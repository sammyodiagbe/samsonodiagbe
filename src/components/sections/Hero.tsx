"use client";

import { motion } from "framer-motion";
import { Download, Mail, ChevronDown } from "lucide-react";
import { AnimatedText, AnimatedWords } from "@/components/interactive/AnimatedText";
import { MagneticButton, MagneticLink } from "@/components/interactive/MagneticButton";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-20 pb-10 px-6 lg:px-24 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-lg text-muted-foreground mb-4"
            >
              Hi there, I&apos;m
            </motion.p>

            {/* Name */}
            <h1 className="text-display-xl font-display font-bold tracking-tight mb-2">
              <AnimatedText text="SAMSON" delay={0.2} />
            </h1>
            <h1 className="text-display-xl font-display font-bold tracking-tight text-primary mb-6">
              <AnimatedText text="ODIAGBE" delay={0.4} />
            </h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mb-6"
            >
              <p className="text-heading font-display font-medium text-foreground/80">
                Software Developer
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              I build exceptional digital experiences that live at the
              intersection of design and technology. Passionate about creating
              intuitive, performant, and accessible web applications.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton
                as="a"
                href="/docs/Samson_Odiagbe_Software_Developer_Resume.docx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={18} />
                Download Resume
              </MagneticButton>

              <MagneticLink href="#contact" onClick={scrollToContact}>
                <Mail size={18} />
                Get in Touch
              </MagneticLink>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
