"use client"

import { motion } from "framer-motion"
import { Sparkles, Target, Gift, Camera, Compass } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Personalized Quests",
    description: "Real-world challenges for your mood"
  },
  {
    icon: Sparkles,
    title: "AI-Powered Suggestions",
    description: "Smart ideas based on your interests"
  },
  {
    icon: Gift,
    title: "Rewards & Streaks",
    description: "Earn XP, coins, and level up"
  },
  {
    icon: Camera,
    title: "Proof-Based Completion",
    description: "Share what you accomplished"
  },
  {
    icon: Compass,
    title: "Endless Discovery",
    description: "Ideas for any mood or moment"
  }
]

export function TrustStrip() {
  return (
    <section className="relative bg-white dark:bg-[#0E0A18] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-violet-100 to-cyan-50 dark:from-violet-500/20 dark:to-cyan-500/10 flex items-center justify-center transition-transform">
                <value.icon className="w-7 h-7 text-violet-600 dark:text-violet-300" />
              </div>
              <h3 className="font-semibold text-[#2B1B3F] dark:text-violet-50 mb-1">{value.title}</h3>
              <p className="text-sm text-gray-500 dark:text-violet-200/55">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
