"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is BoreNoMore?",
    answer: "BoreNoMore is your personal boredom-to-action companion. It gives you personalized quests, creative ideas, and real-world challenges based on your mood, available time, and interests. Think of it as a fun, gamified way to make the most of your free time."
  },
  {
    question: "How does AI personalization work?",
    answer: "Our optional AI feature analyzes your mood, energy level, available time, and interests to suggest quests that truly match you. It learns from your preferences to get smarter over time. You can turn it on or off anytime in settings."
  },
  {
    question: "Do I have to use AI?",
    answer: "Nope! AI personalization is completely optional and off by default. You can browse and discover quests manually, filter by category, or use our curated recommendations without any AI involvement."
  },
  {
    question: "What kinds of quests are in the app?",
    answer: "We have hundreds of quests across categories like Creative, Social, Outdoor, Learning, Relaxation, Quick Tasks, and more. Quests range from 5-minute activities to longer projects, all designed to be achievable and rewarding."
  },
  {
    question: "How do rewards work?",
    answer: "Complete quests to earn XP (experience points) and coins. XP helps you level up and unlock achievements. Coins can be used to unlock mini-games and special features. Keep a daily streak for bonus rewards!"
  },
  {
    question: "Are there mini-games?",
    answer: "Yes! Complete real-world quests to unlock fun mini-games like Word Quest, Brain Quiz, and Quick Tap. It&apos;s our way of rewarding you for taking action in the real world."
  },
  {
    question: "Is BoreNoMore available on iPhone?",
    answer: "Yes! BoreNoMore is available on the App Store for iPhone. We&apos;re working on an Android version too. Stay tuned!"
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-20 lg:py-32 bg-white dark:bg-[#0E0A18] overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B1B3F] dark:text-violet-50 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-violet-200/65">
            Got questions? We&apos;ve got answers.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-violet-100 dark:border-violet-300/15 dark:bg-white/[0.02] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-violet-50/50 dark:hover:bg-violet-500/10 transition-colors"
              >
                <span className="font-medium text-[#2B1B3F] dark:text-violet-50 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-violet-500 dark:text-violet-300 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-gray-600 dark:text-violet-200/65 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
