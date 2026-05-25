"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const screenshots = [
  {
    title: "Bored? Let's fix that",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-iBVRBr0fOjf35lKfnt5n4hp9ASxjVU.png"
  },
  {
    title: "Smarter quests with AI",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-Solk2tkxC3HtdB5v6TAbk8efVXY3KR.png"
  },
  {
    title: "Find a quest that fits",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-0pNHLErNczQLfbpjidIrk4MDQ9eRfJ.png"
  },
  {
    title: "Show what you did",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-XBeEAff2ttzvbGDstXBlMNYg6Gkkw7.png"
  },
  {
    title: "Boredom into rewards",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-O8B6ROij3ttucA4s5f8dm1cNVwQpAS.png"
  },
  {
    title: "Endless ideas for any mood",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-lTttDg3zzAvxGlxQCNzNEE73nlIaQG.png"
  }
]

export function ScreenshotsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <section id="screenshots" className="relative py-20 lg:py-32 bg-white dark:bg-[#0E0A18] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B1B3F] dark:text-violet-50 mb-4">
            <span className="text-balance">Take a peek inside</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-violet-200/65 max-w-2xl mx-auto">
            Beautiful, intuitive design that makes beating boredom feel effortless.
          </p>
        </motion.div>

        {/* Screenshot Gallery */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="flex items-center justify-center gap-4 lg:gap-8">
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className="hidden sm:flex w-12 h-12 rounded-full bg-violet-100 hover:bg-violet-200 dark:bg-violet-500/20 dark:hover:bg-violet-500/30 items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-violet-700 dark:text-violet-200" />
            </button>

            {/* Screenshots */}
            <div className="relative w-full max-w-4xl overflow-hidden">
              <div className="flex justify-center items-end gap-4 lg:gap-8 py-8">
                {screenshots.map((screenshot, index) => {
                  const offset = index - activeIndex
                  const isActive = index === activeIndex
                  const isVisible = Math.abs(offset) <= 2

                  if (!isVisible) return null

                  return (
                    <motion.div
                      key={screenshot.title}
                      initial={false}
                      animate={{
                        scale: isActive ? 1 : 0.75,
                        opacity: isActive ? 1 : 0.5,
                        x: offset * 80,
                        zIndex: isActive ? 10 : 5 - Math.abs(offset)
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className={`flex-shrink-0 cursor-pointer ${
                        isActive ? "w-[260px] sm:w-[280px]" : "w-[200px] sm:w-[220px]"
                      }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      <div className="relative">
                        {isActive && (
                          <div className="absolute inset-0 bg-gradient-to-br from-violet-400/40 to-cyan-400/40 rounded-[2rem] blur-2xl scale-90" />
                        )}
                        <Image
                          src={screenshot.image}
                          alt={screenshot.title}
                          width={280}
                          height={600}
                          className={`relative w-full h-auto ${isActive ? "phone-mockup" : ""}`}
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="hidden sm:flex w-12 h-12 rounded-full bg-violet-100 hover:bg-violet-200 dark:bg-violet-500/20 dark:hover:bg-violet-500/30 items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-violet-700 dark:text-violet-200" />
            </button>
          </div>

          {/* Mobile Nav */}
          <div className="flex sm:hidden justify-center gap-4 mt-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-violet-100 hover:bg-violet-200 dark:bg-violet-500/20 dark:hover:bg-violet-500/30 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-violet-700 dark:text-violet-200" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-violet-100 hover:bg-violet-200 dark:bg-violet-500/20 dark:hover:bg-violet-500/30 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-violet-700 dark:text-violet-200" />
            </button>
          </div>

          {/* Caption */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center text-[#2B1B3F] dark:text-violet-50 font-semibold text-lg mt-8"
            >
              {screenshots[activeIndex].title}
            </motion.p>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-gradient-to-r from-violet-500 to-cyan-400"
                    : "bg-violet-200 hover:bg-violet-300 dark:bg-violet-500/30 dark:hover:bg-violet-500/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
