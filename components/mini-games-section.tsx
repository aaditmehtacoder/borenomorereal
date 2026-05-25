"use client"

import { motion } from "framer-motion"
import { Lock, Unlock, Gamepad2 } from "lucide-react"

const games = [
  {
    name: "Word Quest",
    description: "Challenge your vocabulary",
    unlocked: true
  },
  {
    name: "Brain Quiz",
    description: "Test your knowledge",
    unlocked: true
  },
  {
    name: "Quick Tap",
    description: "Speed reaction game",
    unlocked: false
  }
]

export function MiniGamesSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-violet-50 dark:from-[#0E0A18] dark:to-[#160E26] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-200 text-sm font-medium mb-4">
            <Gamepad2 className="w-4 h-4" />
            Bonus Fun
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B1B3F] dark:text-violet-50 mb-4">
            Unlock mini-games
          </h2>
          <p className="text-lg text-gray-600 dark:text-violet-200/65 max-w-2xl mx-auto">
            Complete real-world quests to unlock fun mini-games. A little reward for taking action.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {games.map((game, index) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={game.unlocked ? { y: -6 } : undefined}
              className={`relative p-6 rounded-2xl transition-transform ${
                game.unlocked
                  ? "glass-card"
                  : "bg-gray-100 dark:bg-white/[0.04] dark:border dark:border-white/5 opacity-75"
              }`}
            >
              {/* Lock/Unlock Badge */}
              <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center ${
                game.unlocked
                  ? "bg-gradient-to-br from-violet-500 to-cyan-400"
                  : "bg-gray-300 dark:bg-white/10"
              }`}>
                {game.unlocked ? (
                  <Unlock className="w-5 h-5 text-white" />
                ) : (
                  <Lock className="w-5 h-5 text-gray-500 dark:text-violet-200/50" />
                )}
              </div>

              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-100 to-cyan-50 dark:from-violet-500/20 dark:to-cyan-500/10 flex items-center justify-center mb-4">
                <Gamepad2 className={`w-8 h-8 ${game.unlocked ? "text-violet-600 dark:text-violet-300" : "text-gray-400 dark:text-violet-200/40"}`} />
              </div>

              <h3 className={`font-semibold text-lg mb-1 ${game.unlocked ? "text-[#2B1B3F] dark:text-violet-50" : "text-gray-500 dark:text-violet-200/50"}`}>
                {game.name}
              </h3>
              <p className={`text-sm ${game.unlocked ? "text-gray-600 dark:text-violet-200/65" : "text-gray-400 dark:text-violet-200/40"}`}>
                {game.description}
              </p>

              {!game.unlocked && (
                <p className="text-xs text-violet-500 dark:text-violet-300 mt-3 font-medium">
                  Complete 5 quests to unlock
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
