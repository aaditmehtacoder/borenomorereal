"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Copy, Mail, Send } from "lucide-react"

const CONTACT_EMAIL = "aaditmehtacoder@gmail.com"

interface Errors {
  name?: string
  email?: string
  message?: string
}

const inputClass =
  "w-full rounded-2xl border border-violet-200 dark:border-violet-300/20 bg-white dark:bg-white/[0.04] px-4 py-3 text-[#2B1B3F] dark:text-violet-50 placeholder:text-gray-400 dark:placeholder:text-violet-200/40 outline-none transition-all focus:border-violet-400 focus:ring-2 focus:ring-violet-400/30"

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)

  const validate = () => {
    const next: Errors = {}
    if (!name.trim()) next.name = "Please tell us your name."
    if (!email.trim()) next.email = "We need an email to reply to."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "That email doesn't look right."
    if (!message.trim()) next.message = "Don't forget your message."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const buildMailto = () => {
    const finalSubject = subject.trim() || `New message from ${name.trim()} — BoreNoMore`
    const body = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(body)}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    // Hand off to the visitor's email client, pre-filled and addressed to us.
    window.location.href = buildMailto()
    setSent(true)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable — the address is shown in full as a fallback */
    }
  }

  return (
    <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
      {/* Direct contact card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-2 rounded-2xl glass-card p-6 sm:p-8 h-fit"
      >
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center mb-5">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2B1B3F] dark:text-violet-50 mb-2">
          Email us directly
        </h2>
        <p className="text-gray-600 dark:text-violet-200/65 mb-5">
          Prefer your own email app? Reach us anytime at the address below — we read every message.
        </p>

        <div className="flex items-center justify-between gap-3 rounded-2xl border border-violet-200 dark:border-violet-300/20 bg-white/60 dark:bg-white/[0.04] px-4 py-3">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-violet-700 dark:text-violet-300 font-medium truncate hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            aria-label="Copy email address"
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 dark:text-violet-300 hover:text-violet-800 dark:hover:text-violet-200 transition-colors"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="lg:col-span-3 rounded-2xl glass-card p-6 sm:p-8"
      >
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="sent"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2B1B3F] dark:text-violet-50 mb-2">
                Your email app is opening
              </h2>
              <p className="text-gray-600 dark:text-violet-200/65 mb-6 max-w-md mx-auto">
                We&apos;ve pre-filled a message to <strong className="text-[#2B1B3F] dark:text-violet-100">{CONTACT_EMAIL}</strong>.
                Just hit send. If nothing opened, you can email us directly using the card on the left.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-button text-white font-semibold hover:scale-105 transition-transform"
              >
                Write another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#2B1B3F] dark:text-violet-100 mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={inputClass}
                  />
                  {errors.name && <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2B1B3F] dark:text-violet-100 mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                  {errors.email && <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#2B1B3F] dark:text-violet-100 mb-1.5">
                  Subject <span className="text-gray-400 dark:text-violet-200/40 font-normal">(optional)</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="What's this about?"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2B1B3F] dark:text-violet-100 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what's on your mind…"
                  className={`${inputClass} resize-y`}
                />
                {errors.message && <p className="mt-1.5 text-sm text-red-500">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full gradient-button text-white font-semibold shadow-lg shadow-violet-500/30"
              >
                <Send className="w-5 h-5" />
                Send message
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
