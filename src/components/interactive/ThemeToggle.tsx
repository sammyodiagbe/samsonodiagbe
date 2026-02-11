"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-secondary" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-9 h-9 rounded-full bg-secondary hover:bg-secondary/80 transition-colors flex items-center justify-center overflow-hidden"
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : 180,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
      >
        {isDark ? (
          <Sun size={18} className="text-foreground" />
        ) : (
          <Moon size={18} className="text-foreground" />
        )}
      </motion.div>
    </motion.button>
  );
}
