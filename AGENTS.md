# Atlas — Project Context

## What this is

A marketing website for a home-based Uyghur dessert business in Fairfax, Virginia. Single home baker; brand built around her heritage and handmade approach. Operates under Virginia cottage food law (§ 3.2-5130), which means **pickup only — no e-commerce, no online checkout, no delivery, no online ordering**. Orders happen out-of-band via Instagram DM or text. The website is a brochure that showcases the product and routes interested customers to messaging.

The project name "atlas" comes from the traditional Uyghur **etles** textile. Etles motifs (particularly the bodom/almond shape) are used as restrained ornamental accents — favicon, section dividers, the small ornament between hero and story. Never as background patterns or wallpaper.

## Tech stack (locked)

- Next.js 16+ with App Router and Turbopack
- TypeScript (strict mode)
- React 19
- **Tailwind CSS v4 — CSS-first configuration via `@theme` directive in globals.css. No `tailwind.config.ts` file. This is the v4 approach; do not create a JS/TS config file.**
- ESLint 9 with eslint-config-next
- shadcn/ui (to be added; primitives copied into `src/components/ui/`)
- Supabase (Phase 2; not yet)
- Vercel (deployment)
- pnpm (package manager)

## Folder structure

```
src/
├── app/
│   ├── (marketing)/         # Public-facing pages, own layout
│   ├── (admin)/             # Phase 2, not yet
│   ├── layout.tsx           # Root layout (fonts, metadata)
│   ├── globals.css          # Tailwind v4 @theme tokens live here
│   ├── not-found.tsx
│   ├── error.tsx
│   ├── loading.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── features/                # Domain logic by feature
│   └── menu/
│       ├── components/      # UI specific to this feature
│       ├── data.ts          # Phase 1: hardcoded items array
│       ├── queries.ts       # Phase 2: Supabase reads (not yet)
│       ├── actions.ts       # Phase 2: server actions (not yet)
│       ├── schemas.ts       # Phase 2: zod validation (not yet)
│       └── types.ts
├── components/
│   ├── ui/                  # shadcn primitives
│   ├── layout/              # Header, Footer
│   └── shared/              # Used by 2+ features
├── lib/
│   ├── env.ts               # Zod-validated env vars
│   └── utils.ts             # cn() and generic helpers
└── styles/
    └── fonts.ts             # next/font loaders
```

Don't pre-create empty folders. Co-locate code with its feature until something is genuinely used by 2+ features, then graduate to `components/shared/` or `lib/`.

## Conventions

- **Filenames**: kebab-case everywhere (`menu-card.tsx`, `use-debounce.ts`)
- **React components**: PascalCase identifiers (`export function MenuCard()`)
- **Hooks**: `use-` prefix on filename, matching identifier (`use-media-query.ts` → `useMediaQuery`)
- **Server Actions**: verb-noun + `Action` suffix (`createMenuItemAction`)
- **Zod schemas**: `noun-schema` identifier (`createMenuItemSchema`); inferred type drops suffix (`CreateMenuItemInput`)
- **Imports**: ALL internal imports use `@/*` alias — never `../../../`

## Design language

**Direction**: editorial heritage. Warm cream paper background, deep brown body text, terracotta and gold as accents. Inspired by cookbook and food magazine spreads. Photography is the visual centerpiece; the design is the frame around it.

**Color tokens** (defined in `globals.css` via `@theme`):

- `--color-cream: #FAF5EB` (base background)
- `--color-cream-warm: #F2E9D8` (secondary surface)
- `--color-terracotta: #A0522D` (primary accent)
- `--color-terracotta-deep: #7A3B1F` (hover state)
- `--color-brown: #2D1B0F` (body text)
- `--color-brown-soft: #5A4434` (secondary text)
- `--color-gold: #C9A961` (decorative accent)
- `--color-teal: #2F4F4F` (rare secondary)

**Typography**:

- Display: Fraunces (via `next/font`) — italic for emphasis
- Body: Manrope (via `next/font`)
- Do not use Inter, Roboto, or other generic AI-default sans fonts

**Shadows**: warm-tinted only, never pure black. Derive from `--color-brown` at low opacity (~8%). Prefer layered shadows over single shadows.

**Effects to avoid**:

- Gradients (except inside placeholder photo zones during Phase 1)
- Glassmorphism / heavy backdrop-filter blur (subtle use on sticky header only)
- Text shadows on body type
- Pure black shadows
- Generic "Central Asian pattern" overlays — only specifically Uyghur etles motifs (bodom/almond shapes), used as ornaments only

**Etles ornament — where it goes**:

- ✓ Favicon, section dividers, vertical strips at section header edges, divider between menu categories
- ✗ Behind menu card photos, full-page backgrounds, inside body text areas, on buttons

## Component patterns

**Server vs Client**: Server Components are the default. Only add `"use client"` at leaves that need state, effects, event handlers, or browser APIs. Never add it "to be safe" — every `"use client"` pulls the subtree into the browser bundle.

**Client island pattern**: server-rendered pages contain small client-component islands for interactivity. Don't make whole pages client just because one child needs state.

**Forms** (Phase 2+): React Hook Form + zodResolver. Submit to Server Actions. Validate input twice — client-side for UX, server-side inside the action for security.

## Phase 1 scope (active)

- Marketing pages only: Home, Menu, Story, Order
- Menu items as a typed TypeScript array in `src/features/menu/data.ts`
- No database, no auth, no admin
- Deployed to Vercel with custom domain

## Out of scope (do NOT pre-build)

- Supabase integration
- Admin dashboard
- Authentication of any kind
- Online ordering, checkout, or delivery features (illegal under cottage food — never building these)
- Customer accounts
- Payment processing

## Required content

- Cottage food disclaimer in footer: "NOT FOR RESALE — PROCESSED AND PREPARED WITHOUT STATE INSPECTION"
- Allergen information visible on every menu item
- Pickup-only language (no "order now" buttons that imply checkout)

## Working preferences for AI agents

**Atomic execution — non-negotiable:**

- Do ONE coherent task per turn. Never bundle unrelated changes. If asked to "install X and configure Y and create Z," do X, stop, wait for explicit confirmation.
- After completing a task, STOP. Wait for explicit "next" or "continue" before moving to the next item. Do not proactively chain into the next checklist item even if it seems obvious.
- For any task touching more than 2 files, propose a plan first — list the files and what each change does — get approval, then execute.
- No drive-by changes. If you notice something else that should change while doing the current task, mention it after completing the current task. Do not silently include it.

**Per-task workflow:**

1. Restate the task in one sentence to confirm understanding
2. (If >2 files affected) Propose the plan, wait for approval
3. Make the change(s)
4. Show the diff
5. State what was done in one sentence
6. Suggest the git commit message
7. Stop

**Other preferences:**

- Pull from design tokens in `globals.css` — never inline hex values
- When introducing a new pattern or library, briefly explain why before implementing
- If uncertain about a decision, ask before guessing
- Paste error output verbatim when reporting issues, don't paraphrase
