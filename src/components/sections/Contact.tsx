"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, MapPin, Github, Twitter, Linkedin } from "lucide-react";
import Section from "@/components/layout/Section";
import ContactForm from "./ContactForm";

const socialLinks = [
  {
    href: "https://github.com/sammyodiagbe",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://twitter.com/samiodiagbe",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://linkedin.com/in/samson-odiagbe",
    icon: Linkedin,
    label: "LinkedIn",
  },
];

export default function Contact() {
  return (
    <Section id="contact" className="bg-surface-1/50">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-display font-display font-bold tracking-tight mb-6">
            Let&apos;s Build
            <br />
            <span className="text-primary">Something Great</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out!
          </p>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-sm font-medium text-green-600 dark:text-green-400">
              Available for new projects
            </span>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-4 mb-8">
            <motion.a
              href="mailto:sam@samsonodiagbe.online"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                <Mail size={18} className="text-primary" />
              </div>
              <span>sam@samsonodiagbe.online</span>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 text-muted-foreground"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10">
                <MapPin size={18} className="text-accent" />
              </div>
              <span>Remote / Worldwide</span>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm text-muted-foreground mb-4">
              Or find me on social media:
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-8 rounded-2xl bg-background border border-border shadow-lg"
        >
          <h3 className="text-xl font-display font-semibold mb-6">
            Send me a message
          </h3>
          <ContactForm />
        </motion.div>
      </div>
    </Section>
  );
}
