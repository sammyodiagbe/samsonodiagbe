"use client";

import Link from "next/link";
import { BsGithub, BsTwitterX, BsLinkedin } from "react-icons/bs";

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-1 py-12 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link
              href="/"
              className="font-display font-bold text-xl tracking-tight"
            >
              samson<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Building digital experiences
            </p>
          </div>

          {/* Social Links */}
          <ul className="flex items-center gap-4">
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

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Samson Odiagbe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
