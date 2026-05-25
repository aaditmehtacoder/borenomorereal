"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

interface LogoProps {
  /** Pixel size of the square logo mark */
  size?: number
  /** Force a specific logo regardless of theme (e.g. the always-dark footer) */
  force?: "light" | "dark"
  className?: string
}

/**
 * Renders the BoreNoMore app mark, swapping between the light-background and
 * dark-background artwork so it always sits well on the current surface.
 */
export function Logo({ size = 36, force, className = "" }: LogoProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Until mounted, default to the light-background art to match SSR output.
  const useDark = force ? force === "dark" : mounted && resolvedTheme === "dark"
  const src = useDark ? "/darklogo.png" : "/lightlogo.png"

  return (
    <span
      className={`relative inline-block overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt="BoreNoMore"
        width={size}
        height={size}
        className="h-full w-full object-cover"
        priority
      />
    </span>
  )
}
