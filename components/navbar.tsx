"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { Menu, X, Download, LifeBuoy } from "lucide-react"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { APP_STORE_URL } from "@/lib/constants"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Screenshots", href: "#screenshots" },
  { name: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-[#0E0A18]/80 backdrop-blur-xl shadow-lg shadow-violet-500/10 dark:shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Logo size={36} className="transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3" />
            <span
              className={`font-bold text-xl transition-colors ${
                isScrolled ? "text-[#2B1B3F] dark:text-violet-50" : "text-white"
              }`}
            >
              BoreNoMore
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-violet-400 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-gradient-to-r after:from-violet-500 after:to-cyan-400 after:transition-all hover:after:w-full ${
                  isScrolled ? "text-[#2B1B3F] dark:text-violet-100/90" : "text-white/90"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side: theme toggle + Support + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle variant={isScrolled ? "light" : "dark"} />
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all hover:scale-[1.03] ${
                isScrolled
                  ? "border-[#2B1B3F]/15 text-[#2B1B3F] hover:bg-[#2B1B3F]/5 dark:border-violet-300/25 dark:text-violet-100 dark:hover:bg-violet-300/10"
                  : "border-white/30 text-white hover:bg-white/15"
              }`}
            >
              <LifeBuoy className="w-4 h-4" />
              Support
            </Link>
            <Link
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2B1B3F] dark:bg-gradient-to-br dark:from-violet-500 dark:to-cyan-500 text-white text-sm font-medium hover:bg-[#3d2a57] transition-all shadow-lg shadow-violet-500/20 hover:scale-[1.03]"
            >
              <Download className="w-4 h-4" />
              Download App
            </Link>
          </div>

          {/* Mobile: toggle + menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle variant={isScrolled ? "light" : "dark"} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className={`p-2 rounded-full transition-colors ${
                isScrolled ? "text-[#2B1B3F] dark:text-violet-50" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="h-0.5 origin-left bg-gradient-to-r from-violet-500 via-cyan-400 to-violet-500"
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 dark:bg-[#0E0A18]/95 backdrop-blur-xl border-t border-violet-100 dark:border-violet-300/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2.5 text-[#2B1B3F] dark:text-violet-100 font-medium rounded-xl hover:bg-violet-50 dark:hover:bg-violet-300/10 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full border border-[#2B1B3F]/15 dark:border-violet-300/25 text-[#2B1B3F] dark:text-violet-100 font-medium hover:bg-violet-50 dark:hover:bg-violet-300/10 transition-colors"
              >
                <LifeBuoy className="w-4 h-4" />
                Support
              </Link>
              <Link
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-[#2B1B3F] dark:bg-gradient-to-br dark:from-violet-500 dark:to-cyan-500 text-white font-medium"
              >
                <Download className="w-4 h-4" />
                Download App
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
