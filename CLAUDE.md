# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # start dev server (localhost:3000)
pnpm build    # production build
pnpm start    # serve production build
pnpm lint     # eslint
```

There is no test suite. `pnpm-lock.yaml` is the source of truth (a stray `package-lock.json` also exists — prefer pnpm).

## What this is

A single-page marketing/landing site for "BoreNoMore" (an iOS app). Next.js 16 App Router + React 19 + Tailwind v4 + TypeScript. There is no backend, database, or API — every page route lives under `app/`.

## Architecture

- **`app/page.tsx`** is the whole homepage: it imports and stacks section components in visual order (`Navbar` → `HeroSection` → ... → `Footer`). To reorder or add a section, edit this file. Each section is a self-contained `"use client"` component in `components/` (e.g. `hero-section.tsx`, `faq-section.tsx`). Sections link to each other by `#id` anchors (`#home`, `#features`, `#how-it-works`, `#screenshots`, `#faq`, `#download`) — the `id` lives on the section's root element.
- **`app/layout.tsx`** loads Google fonts (Playfair Display for headlines, Inter/Geist for body) as CSS variables and sets global metadata. Note: `<html>` has a hardcoded `bg-[#8B5CF6]`.
- **`components/ui/`** is shadcn/ui (new-york style, lucide icons). Generated primitives — extend rather than hand-rewrite.

## Styling system (Tailwind v4)

There is **no `tailwind.config`**. All design tokens are CSS-first in **`app/globals.css`**:
- `:root` defines color variables; `@theme inline` maps them to Tailwind color/font/radius utilities.
- Custom utility classes you'll see reused: `glass-card` / `glass-card-dark` (frosted panels), `gradient-text`, `gradient-button`, `animate-float` / `animate-float-delayed`, `phone-mockup`, `text-shadow`.
- Brand palette is violet→cyan (`#8B5CF6` → `#22D3EE`). `--radius` is `1rem`.
- `@custom-variant dark (&:is(.dark *))` is declared, so `dark:` variants work once a `.dark` class is on an ancestor.

`styles/globals.css` is an unused duplicate — the active stylesheet is `app/globals.css` (referenced by `components.json` and imported in the layout).

## Conventions

- **Animation**: framer-motion is used pervasively. Entrance animations use `initial`/`animate` (hero) or `whileInView` with `viewport={{ once: true }}` (scroll sections). Match these patterns when adding sections.
- **Imports**: use the `@/` alias (maps to repo root), e.g. `@/components/...`, `@/lib/utils`, `@/hooks/...`. `cn()` from `@/lib/utils` merges class names.
- Section components are client components (`"use client"`); keep them so unless there's a reason not to.

## Dark mode (currently inactive)

`next-themes` is installed and `components/theme-provider.tsx` wraps it, but the provider is **not** mounted in `app/layout.tsx`, so theme switching is not wired up yet. To enable it: mount `ThemeProvider` in the layout (`attribute="class"`), remove/adjust the hardcoded `<html>` background, and add `dark:` styles.

## Build gotchas

`next.config.mjs` sets `typescript.ignoreBuildErrors: true` and `images.unoptimized: true` — type errors will NOT fail the build, so check types deliberately, and `next/image` is unoptimized (remote images like the hero phone mockup load from a vercel blob URL).
