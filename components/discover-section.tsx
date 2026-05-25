"use client"

import { motion } from "framer-motion"
import { Compass, Flame, Star, Coins, TrendingUp, Gamepad2 } from "lucide-react"

const discoverFeatures = [
  "Discover feed with endless ideas",
  "Quick 5-minute activities",
  "Social challenges with friends",
  "Creative projects and hobbies",
  "Outdoor adventures",
  "Learning & skill-building"
]

const progressFeatures = [
  { icon: Flame, label: "Daily Streaks", value: "1-day streak" },
  { icon: Star, label: "XP Points", value: "+50 XP" },
  { icon: Coins, label: "Coins", value: "+10 coins" },
  { icon: TrendingUp, label: "Level Progress", value: "Level 1" },
]

export function DiscoverSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-violet-50 to-white dark:from-[#160E26] dark:to-[#0E0A18] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Discover */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-200 text-sm font-medium mb-4">
              <Compass className="w-4 h-4" />
              Endless Discovery
            </div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B1B3F] dark:text-violet-50 mb-4">
              Endless ideas for any mood
            </h3>
            <p className="text-lg text-gray-600 dark:text-violet-200/65 mb-8">
              Never run out of things to do. Our curated discover feed serves up fresh ideas based on your energy, time, and interests.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {discoverFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                  <span className="text-sm text-gray-700 dark:text-violet-100/80">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Progress */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-200 text-sm font-medium mb-4">
              <Gamepad2 className="w-4 h-4" />
              Gamification
            </div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B1B3F] dark:text-violet-50 mb-4">
              Progress that keeps you going
            </h3>
            <p className="text-lg text-gray-600 dark:text-violet-200/65 mb-8">
              Turn every quest into a rewarding experience. Track your journey with XP, coins, streaks, and achievements.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {progressFeatures.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="p-4 rounded-2xl glass-card"
                >
                  <feature.icon className="w-6 h-6 text-violet-600 dark:text-violet-300 mb-2" />
                  <p className="text-sm text-gray-500 dark:text-violet-200/55">{feature.label}</p>
                  <p className="font-semibold text-[#2B1B3F] dark:text-violet-50">{feature.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
