"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BsGithub, BsTwitterX, BsLinkedin } from "react-icons/bs";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/interactive/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/sammyodiagbe",
    icon: BsGithub,
    label: "GitHub",
  },
  {
    href: "https://twitter.com/samiodiagbe",
    icon: BsTwitterX,
    label: "Twitter",
  },
  {
    href: "https://linkedin.com/in/samson-odiagbe",
    icon: BsLinkedin,
    label: "LinkedIn",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-6 lg:px-24 py-4 transition-all duration-300",
          isScrolled
            ? "glass shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display font-bold text-xl tracking-tight hover:text-primary transition-colors"
          >
            samson<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors hover:text-primary",
                    activeSection === link.href.slice(1)
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side: Social + Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Social Links - Desktop Only */}
            <ul className="hidden lg:flex items-center gap-3">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon size={18} />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden lg:block w-px h-5 bg-border" />

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-background border-l border-border p-8 pt-24"
            >
              <nav className="flex flex-col gap-8">
                <ul className="flex flex-col gap-6">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "text-2xl font-display font-semibold transition-colors",
                          activeSection === link.href.slice(1)
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Social Links */}
                <div className="pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Connect with me
                  </p>
                  <ul className="flex gap-4">
                    {socialLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label={link.label}
                        >
                          <link.icon size={18} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
