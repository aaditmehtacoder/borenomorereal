"use client"

import { motion } from "framer-motion"
import { UserCircle, Compass, Play, Camera, Trophy } from "lucide-react"

const steps = [
  {
    icon: UserCircle,
    title: "Build your boredom profile",
    description: "Tell us about your interests, energy level, and available time."
  },
  {
    icon: Compass,
    title: "Discover a quest for your mood",
    description: "Browse personalized suggestions or let AI find the perfect match."
  },
  {
    icon: Play,
    title: "Start a real-world challenge",
    description: "Pick a quest and dive into a meaningful activity."
  },
  {
    icon: Camera,
    title: "Submit proof and reflection",
    description: "Complete your quest with a photo and quick thoughts."
  },
  {
    icon: Trophy,
    title: "Earn rewards and keep your streak",
    description: "Level up with XP, coins, and maintain your daily streak."
  }
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-20 lg:py-32 bg-gradient-to-b from-[#8B5CF6] to-[#7C3AED] dark:from-[#231142] dark:to-[#160B2C] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-400/20 dark:bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-shadow">
            How it works
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Five simple steps to transform boredom into accomplishment.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-white/20 via-white/40 to-white/20" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="relative text-center"
              >
                {/* Icon */}
                <div className="relative mx-auto mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/30 dark:border-white/15 transition-transform">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-violet-400 flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
