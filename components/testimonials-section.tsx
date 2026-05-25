"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const DEV_RESPONSE = "Thank you so much for the kind words and taking time to try the app."

const reviews = [
  {
    title: "Solves boredom",
    author: "💀💀😆😵🔥🔥",
    date: "08/28/2025",
    rating: 5,
    text: "Amazing app, really gave creative challenges and hooked me into by the addicting games. Really easy to swipe when your bored and have fun planning snd competing activities. Overall, great app!",
    response: DEV_RESPONSE,
  },
  {
    title: "The Best Game",
    author: "Baseball@02",
    date: "08/23/2025",
    rating: 5,
    text: "This a wonderful game has cool games to play and different levels. Also lots of ideas to do when you are bored which is very useful.",
    response: DEV_RESPONSE,
  },
  {
    title: "Amazing",
    author: "Chogsreviews",
    date: "Mar 22",
    rating: 5,
    text: "Bro this app is so amazing, it solved some of my many addictions. The app lets me try new things yets let me have fun. The games are so interesting too. Amazing. Dev is so cool too",
    response: DEV_RESPONSE,
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#8B5CF6] to-[#7C3AED] dark:from-[#231142] dark:to-[#160B2C] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-400/20 dark:bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-medium mb-5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            Rated 5 out of 5
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-shadow">
            Loved by doers
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Real five-star reviews from people on the App Store.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {reviews.map((review, index) => (
            <motion.div
              key={review.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="flex flex-col p-6 sm:p-7 rounded-2xl glass-card"
            >
              {/* Header: title + meta */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="min-w-0">
                  <h3 className="font-semibold text-[#2B1B3F] dark:text-violet-50 truncate">{review.title}</h3>
                  <div className="flex gap-0.5 mt-1.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="text-right text-xs leading-tight text-gray-500 dark:text-violet-200/55 shrink-0">
                  <p>{review.date}</p>
                  <p className="mt-1 max-w-[7rem] truncate">{review.author}</p>
                </div>
              </div>

              {/* Review body */}
              <p className="text-[#2B1B3F]/90 dark:text-violet-100/85 leading-relaxed">
                {review.text}
              </p>

              {/* Developer Response */}
              <div className="mt-5 pt-4 border-t border-violet-200/60 dark:border-violet-300/15">
                <p className="text-sm font-semibold text-[#2B1B3F] dark:text-violet-100 mb-1">
                  Developer Response
                </p>
                <p className="text-sm text-gray-600 dark:text-violet-200/60 leading-relaxed">
                  {review.response}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
