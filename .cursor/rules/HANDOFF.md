# Darya — Handoff Context

This document gives any AI agent the full context needed to continue working on this project effectively. Read this AFTER reading `AGENTS.md`. AGENTS.md is the source of truth for conventions; this file captures decisions, history, and pending work.

---

## What this project is

A marketing website for **Darya** — a home-based Uyghur dessert business in Fairfax, Virginia. Single home baker (the owner's mother). Brand built around heritage and handmade approach. Operates under Virginia cottage food law — pickup only, no e-commerce, no checkout, no delivery, no online ordering. Orders happen via Instagram DM or text. The website is a brochure that routes interested customers to messaging.

The GitHub repository remains **`atlas`** (etles textile reference). Customer-facing brand is **Darya** (capital D).

The bodom (almond) motif from Uyghur **etles** is used as ornamental accents — favicon, between sections, next to wordmarks. Never as background patterns.

## Who I'm talking to

The owner is a CS student at George Mason University building this for his mother. He prefers honest direct feedback. Challenge weak logic, point out mistakes, don't default to agreement. Prioritize truth and critical thinking over reassurance. He's learning professional engineering practices through this project, so explain reasoning when introducing patterns.

## Current state (as of handoff)

**Live at:** https://atlas-snowy-xi.vercel.app
**GitHub:** https://github.com/rehemuWulugebige/atlas
**Auto-deploys** to Vercel on every push to `main`.

**Tech stack (locked):**

- Next.js 16+ with App Router and Turbopack
- TypeScript strict mode, React 19
- Tailwind CSS v4 (CSS-first config via `@theme` directive, no `tailwind.config.ts`)
- pnpm package manager
- ESLint 9 + Prettier 3.8 + prettier-plugin-tailwindcss
- Hosted on Vercel

## Brand & theme

- **Wordmark:** Darya (header, footer, metadata)
- **Palette:** Warm bone/cream field with walnut/dark-walnut text and honey/terracotta accents (blue palette reverted)
- **Hero copy:** Urumqi / farthest-from-ocean story; intro mentions family recipes from Urumqi
- **Ornament:** Bodom kept in header, footer, section dividers

### Color tokens (mirror of `globals.css`)

| Token | Hex | Use |
|-------|-----|-----|
| bone | `#F7F2E8` | Page background |
| cream | `#EDE4D1` | Secondary surfaces |
| walnut | `#6B5947` | Body text |
| dark-walnut | `#3D2D1F` | Headings, Order CTA |
| honey | `#C9924A` | Primary accent (bodom, links) |
| terracotta | `#9D5538` | Rare accent |

## Phase history

- **Phase A:** Token swap + metadata title
- **Phase B:** Wordmark, favicon, hero headline (roman)
- **Phase C:** Glass borders, CTA shadows, `#story` / `#order` anchors
- **Phase D:** Customer-facing copy + docs aligned to Darya
- **Theme revert:** Blue-cream palette reverted; warm tokens restored (Darya name + Newsreader kept)

## Still placeholder / open

- Instagram `@darya-handle` and phone `(XXX) XXX-XXXX` in footer
- Menu item names/descriptions (photos wired, copy temporary)
- Story and Order as dedicated pages (home uses section anchors for now)
- Favicon/hero may need further art direction under blue palette
