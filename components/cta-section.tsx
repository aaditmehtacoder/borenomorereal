"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Sparkles } from "lucide-react"
import { APP_STORE_URL } from "@/lib/constants"

export function CTASection() {
  return (
    <section id="download" className="relative py-20 lg:py-32 bg-gradient-to-b from-white via-violet-50 to-violet-100 dark:from-[#0E0A18] dark:via-[#160E26] dark:to-[#1C1230] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-violet-200/50 dark:from-violet-600/15 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Phone */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative mx-auto w-[260px] sm:w-[300px] lg:w-[320px]">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400/40 to-cyan-400/40 rounded-[3rem] blur-3xl scale-90" />
              
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-lfVYwysmwtsCeJBdsx9lnK90VjhDU6.png"
                alt="BoreNoMore app sign in screen"
                width={320}
                height={650}
                className="relative phone-mockup w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-200 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Available Now
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B1B3F] dark:text-violet-50 mb-6">
              <span className="text-balance">Ready to beat boredom beautifully?</span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-violet-200/65 mb-8 max-w-lg mx-auto lg:mx-0">
              Download BoreNoMore and turn free time into fun, creative, real-world action. Your next adventure is just a tap away.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full gradient-button text-white font-semibold text-lg shadow-xl shadow-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/40 transition-all hover:scale-105"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on App Store
              </Link>
              <Link
                href="#screenshots"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-violet-300 dark:border-violet-300/30 text-violet-700 dark:text-violet-200 font-semibold text-lg hover:bg-violet-50 dark:hover:bg-violet-500/10 transition-all"
              >
                View Screenshots
              </Link>
            </div>

            <p className="mt-6 text-sm text-gray-500 dark:text-violet-200/55">
              Free to download. No credit card required.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
