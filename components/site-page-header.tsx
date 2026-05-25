"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"

/**
 * Compact sticky header for standalone pages (privacy / terms / contact).
 * Unlike the homepage navbar it always uses the "solid" treatment since these
 * pages have a plain background rather than the violet hero.
 */
export function SitePageHeader() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 bg-white/80 dark:bg-[#0E0A18]/80 backdrop-blur-xl border-b border-violet-100 dark:border-violet-300/10"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18 py-2">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Logo size={36} className="transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3" />
            <span className="font-bold text-xl text-[#2B1B3F] dark:text-violet-50">BoreNoMore</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#2B1B3F] dark:text-violet-100 hover:bg-violet-50 dark:hover:bg-violet-500/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
            <ThemeToggle variant="light" />
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
