import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist'
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900']
})
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

// Set NEXT_PUBLIC_SITE_URL to your real production domain so social/share
// image URLs resolve absolutely. Falls back for local/dev builds.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://borenomore.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'BoreNoMore - Turn Boredom Into Action',
  description: 'BoreNoMore gives you personalized quests, creative ideas, and real-world challenges based on your mood, time, and interests. Stop scrolling. Start doing.',
  keywords: ['boredom', 'activities', 'quests', 'challenges', 'productivity', 'self-improvement', 'gamification'],
  authors: [{ name: 'BoreNoMore' }],
  applicationName: 'BoreNoMore',
  icons: {
    // Theme-aware tab icon: the dark app mark reads well on light browser
    // chrome, the light mark on dark chrome. The plain entry is the fallback.
    icon: [
      { url: '/darklogo.png', type: 'image/png', media: '(prefers-color-scheme: light)' },
      { url: '/lightlogo.png', type: 'image/png', media: '(prefers-color-scheme: dark)' },
      { url: '/darklogo.png', type: 'image/png' },
    ],
    shortcut: [{ url: '/darklogo.png' }],
    apple: [{ url: '/lightlogo.png' }],
  },
  openGraph: {
    title: 'BoreNoMore - Turn Boredom Into Action',
    description: 'Get personalized quests, creative ideas, and real-world challenges made for your mood.',
    type: 'website',
    siteName: 'BoreNoMore',
    url: siteUrl,
    images: [{ url: '/darklogo.png', width: 512, height: 512, alt: 'BoreNoMore' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BoreNoMore - Turn Boredom Into Action',
    description: 'Get personalized quests, creative ideas, and real-world challenges made for your mood.',
    images: ['/darklogo.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#8B5CF6',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geist.variable} ${geistMono.variable} ${playfair.variable} ${inter.variable} font-sans antialiased bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
