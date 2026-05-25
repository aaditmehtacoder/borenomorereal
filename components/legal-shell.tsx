import type { ReactNode } from "react"
import { SitePageHeader } from "@/components/site-page-header"
import { Footer } from "@/components/footer"

interface LegalShellProps {
  title: string
  subtitle?: string
  lastUpdated?: string
  children: ReactNode
}

/**
 * Shared layout for the standalone pages: sticky header, a gradient banner,
 * a comfortably-typeset content column, then the site footer. Body prose is
 * styled via child selectors so individual pages only write semantic markup.
 */
export function LegalShell({ title, subtitle, lastUpdated, children }: LegalShellProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SitePageHeader />

      {/* Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-violet-50 to-white dark:from-[#160E26] dark:to-[#0E0A18] border-b border-violet-100 dark:border-violet-300/10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-radial from-violet-200/40 dark:from-violet-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <h1
            className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-[#2B1B3F] dark:text-violet-50 mb-4"
            style={{ animation: "reveal-up 0.6s ease both" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="text-lg text-gray-600 dark:text-violet-200/65 max-w-2xl"
              style={{ animation: "reveal-up 0.6s ease 0.08s both" }}
            >
              {subtitle}
            </p>
          )}
          {lastUpdated && (
            <p
              className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-white/5 border border-violet-100 dark:border-violet-300/15 text-sm text-gray-500 dark:text-violet-200/60"
              style={{ animation: "reveal-up 0.6s ease 0.16s both" }}
            >
              Last updated: {lastUpdated}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <main className="flex-1">
        <div
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 text-gray-600 dark:text-violet-200/70 leading-relaxed space-y-5 [&_h2]:font-[family-name:var(--font-playfair)] [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#2B1B3F] dark:[&_h2]:text-violet-50 [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:leading-relaxed [&_a]:text-violet-600 dark:[&_a]:text-violet-300 [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_strong]:text-[#2B1B3F] dark:[&_strong]:text-violet-100"
          style={{ animation: "reveal-up 0.6s ease 0.1s both" }}
        >
          {children}
        </div>
      </main>

      <Footer />
    </div>
  )
}
