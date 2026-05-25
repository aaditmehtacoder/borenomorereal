"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun } from "lucide-react"

interface ThemeToggleProps {
  /** Tints the resting icon/border for placement over light vs. transparent surfaces */
  variant?: "light" | "dark"
}

export function ThemeToggle({ variant = "dark" }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"

  // Avoid hydration mismatch: render a stable placeholder until mounted.
  const tone =
    variant === "light"
      ? "text-[#2B1B3F] border-violet-200/70 hover:bg-violet-100/60"
      : "text-white border-white/30 hover:bg-white/15"

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm transition-colors dark:border-violet-300/20 dark:text-violet-100 dark:hover:bg-violet-300/10 ${tone}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted ? (
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </motion.span>
        ) : (
          <span className="flex items-center justify-center opacity-0">
            <Sun className="h-5 w-5" />
          </span>
        )}
      </AnimatePresence>
    </button>
  )
}
