"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const features = [
  {
    title: "Bored? Let's fix that.",
    description: "Get tiny quests, creative ideas, and real-world challenges made for your mood.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-iBVRBr0fOjf35lKfnt5n4hp9ASxjVU.png",
    imageAlt: "BoreNoMore app showing mood-based activity suggestions",
    reverse: false
  },
  {
    title: "Smarter quests with AI",
    description: "Turn your mood, time, and interests into more personal challenge ideas. AI personalization is optional and recommended.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-Solk2tkxC3HtdB5v6TAbk8efVXY3KR.png",
    imageAlt: "AI-powered personalization for smarter quest suggestions",
    reverse: true
  },
  {
    title: "Find a quest that fits",
    description: "See time, difficulty, cost, rewards, and proof type before you start. Every quest is tailored to what works for you.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-0pNHLErNczQLfbpjidIrk4MDQ9eRfJ.png",
    imageAlt: "Quest details showing time, difficulty, and rewards",
    reverse: false
  },
  {
    title: "Show what you did",
    description: "Add photo proof and a quick reflection to complete your quest. Celebrate your accomplishments and build a personal journal.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-XBeEAff2ttzvbGDstXBlMNYg6Gkkw7.png",
    imageAlt: "Submitting proof and reflection for quest completion",
    reverse: true
  },
  {
    title: "Boredom into rewards",
    description: "Earn XP, coins, streaks, and level progress every time you take action. Watch yourself grow with every completed quest.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-O8B6ROij3ttucA4s5f8dm1cNVwQpAS.png",
    imageAlt: "Rewards system showing XP, coins, and level progress",
    reverse: false
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 lg:py-32 bg-gradient-to-b from-white via-violet-50/50 to-white dark:from-[#0E0A18] dark:via-[#160E26] dark:to-[#0E0A18] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-violet-100/50 dark:from-violet-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B1B3F] dark:text-violet-50 mb-4">
            <span className="text-balance">Everything you need to beat boredom</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-violet-200/65 max-w-2xl mx-auto">
            Discover powerful features designed to turn your free time into meaningful action.
          </p>
        </motion.div>

        {/* Features */}
        <div className="space-y-24 lg:space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                feature.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className={`${feature.reverse ? "lg:order-2" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, x: feature.reverse ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-200 text-sm font-medium mb-4">
                    Feature {index + 1}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B1B3F] dark:text-violet-50 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-violet-200/65 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </div>

              {/* Image */}
              <div className={`${feature.reverse ? "lg:order-1" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, x: feature.reverse ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <div className="relative mx-auto w-[260px] sm:w-[300px] lg:w-[340px]">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-400/30 to-cyan-400/30 rounded-[3rem] blur-3xl scale-90" />
                    
                    {/* Phone Image */}
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      width={340}
                      height={700}
                      className="relative phone-mockup w-full h-auto"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
