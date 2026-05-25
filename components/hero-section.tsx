"use client"

import { motion } from "framer-motion"
import { ArrowDown, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { APP_STORE_URL } from "@/lib/constants"

const floatingChips = [
  { label: "Creative", delay: 0 },
  { label: "Relax", delay: 0.1 },
  { label: "Quick", delay: 0.2 },
  { label: "Social", delay: 0.3 },
  { label: "Outside", delay: 0.4 },
  { label: "Learn", delay: 0.5 },
  { label: "Cook", delay: 0.6 },
]

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#8B5CF6] via-[#9F7AEA] to-[#A78BFA] dark:from-[#1A1030] dark:via-[#2A1A4A] dark:to-[#0E0A18]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-400/30 dark:bg-violet-600/25 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-300/10 dark:bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              BoreNoMore v2.0
            </motion.div>

            {/* Headline */}
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight text-shadow mb-6">
              <span className="text-balance">Turn boredom into action.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              BoreNoMore gives you personalized quests, creative ideas, and real-world challenges based on your mood, time, and interests.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <Link
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full gradient-button text-white font-semibold text-lg shadow-xl shadow-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/40 transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on App Store
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold text-lg hover:bg-white/30 transition-all border border-white/30"
              >
                See how it works
                <ArrowDown className="w-5 h-5" />
              </Link>
            </div>

            {/* Microcopy */}
            <p className="text-white/70 text-sm">
              Stop scrolling. Start doing.
            </p>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Floating Chips */}
            <div className="absolute inset-0 pointer-events-none">
              {floatingChips.map((chip, index) => (
                <motion.div
                  key={chip.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + chip.delay, duration: 0.5 }}
                  className={`absolute px-4 py-2 rounded-full glass-card text-[#2B1B3F] dark:text-violet-50 text-sm font-medium shadow-lg ${
                    index === 0 ? "top-[5%] left-[5%]" :
                    index === 1 ? "top-[15%] right-[10%]" :
                    index === 2 ? "top-[35%] left-[0%]" :
                    index === 3 ? "top-[45%] right-[5%]" :
                    index === 4 ? "bottom-[35%] left-[5%]" :
                    index === 5 ? "bottom-[25%] right-[0%]" :
                    "bottom-[10%] left-[15%]"
                  }`}
                  style={{
                    animation: `float ${6 + index * 0.5}s ease-in-out infinite`,
                    animationDelay: `${index * 0.3}s`
                  }}
                >
                  {chip.label}
                </motion.div>
              ))}
            </div>

            {/* Phone Mockup */}
            <div className="relative mx-auto w-[280px] sm:w-[320px] lg:w-[380px] animate-float">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-iBVRBr0fOjf35lKfnt5n4hp9ASxjVU.png"
                alt="BoreNoMore App - Bored? Let's fix that"
                width={380}
                height={780}
                className="phone-mockup w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-white/70" />
        </motion.div>
      </motion.div>
    </section>
  )
}
