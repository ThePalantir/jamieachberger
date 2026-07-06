# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The Jamie Achberger Group website is a luxury-editorial real estate marketing site built with Next.js 15 + React 19 + TypeScript. The design direction prioritizes restraint and typography: a cream ground with ink text and strategic gold accents, using Bodoni Moda serif for headlines. The site is agent-focused marketing for residential real estate in the Greater Lehigh Valley.

**Before-state audit:** Screenshots of the original WordPress site (2026-07-06) are in `audit/screenshots/` and capture copy used throughout the redesign.

## Common Commands

```bash
# Development
npm run dev           # Start dev server on localhost:3000

# Production
npm run build        # Build static Next.js site
npm start            # Run production build locally (requires npm run build first)

# Quality
npm run lint         # Check TypeScript and ESLint

# Auditing
node audit/screenshot.js <url> [outDir] [settleMs]
# Example: node audit/screenshot.js http://localhost:3000 audit/screenshots
# Captures mobile (390×844), tablet (768×1024), desktop (1440×900) PNGs
# Optional settleMs (default 2500) delays before screenshot for animations/lazy-load
```

## Design System

### Color Palette (CSS Custom Properties in `app/globals.css`)

- `--cream: #f3efe6` — Main background, clean luxury feel
- `--ink: #17150f` — Primary text and dark sections
- `--ink-soft: #4c4636` — Secondary text, softer contrast
- `--gold: #96762a` — Brand accent, used sparingly (italic text, borders, underlines)
- `--gold-light: #b8955c` — Lighter accent variant
- `--hairline: #e8e2d5` — Borders and subtle dividers
- `--photo-dark: #26314a`, `--photo-darker: #171d2e` — Overlays for photo placeholders

### Typography

- **Display:** `--font-display` = Bodoni Moda serif (luxury, headlines only)
  - Weights: 400 (regular), 500 (semi-bold)
  - Falls back to Georgia, Iowan Old Style
  - All headings use 400 weight by default (restrained, not heavy)

- **Body:** `--font-body` = Segoe UI system stack (legible, performant)
  - No external font load — system fonts only

- **Type Scale:** Responsive with `clamp()`:
  - h1: 32px–52px depending on viewport
  - h2: 28px–40px
  - h3: 20px–28px
  - h4: 18px–24px
  - All headings: `text-wrap: balance` for visual symmetry
  - Body: 16px base with line-height 1.65

- **Measure:** `--measure: 65ch` for comfortable reading width; paragraphs capped at this

### Design Principles

1. **Restraint over decoration.** No rounded corners on buttons; engraved plates with `inset` shadows instead. No bright color pops—gold is the only accent and used for specific accents (italic text, borders, hover states).

2. **Asymmetry in layout.** Hero uses a 1.1fr / 0.9fr grid split (content left, visual right) rather than centered symmetry.

3. **Hairline rules and borders.** Use thin 1px dividers (especially under testimonials with gold top border instead of background color).

4. **Inverted sections.** Dark ink background with cream text is used for Positioning section and Closing CTA to create visual rhythm.

5. **Accessibility.** All interactive elements have focus-visible outlines. Reduced-motion media query respected. Button states use shadow + color changes (not just color).

## Architecture

### Page Structure (`app/page.tsx`)

The homepage is assembled from six section components:

1. **SiteHeader** — Sticky header with logo and navigation
2. **Hero** — Asymmetric grid layout, headline + rule + subtext + CTAs (left) and photo placeholder (right)
3. **Positioning** — Dark section asking "Are you Selling or Buying?" with 4 offering cards
4. **Reviews** — Testimonials grid, each with gold top border
5. **ClosingCta** — Centered dark section with "We are Here For You" message
6. **SiteFooter** — Contact grid (direct, office, email, address) + copyright

### Styling Architecture

- **Global styles:** `app/globals.css` defines CSS custom properties (tokens), base element styles (headings, paragraphs), and focus states
- **Component styles:** `app/components.css` contains all section and component styling
  - Organized by component with clear `/* ============ ComponentName ============ */` headers
  - Media queries at the end of each component's styles for mobile/tablet breakpoints (640px, 768px, 1024px)
  - No CSS Modules or CSS-in-JS; plain CSS with BEM-style class naming (`hero__content`, `hero__headline`)

### Component Files (`app/components/`)

- **SiteHeader.tsx** — Logo + nav links (About, Search Homes, Buyers, Sellers, Contact)
- **Hero.tsx** — Main landing message, two CTAs, photo placeholder
- **Positioning.tsx** — Selling/buying positioning statement + 4 offering cards
- **Reviews.tsx** — Array of testimonials with author attribution
- **ClosingCta.tsx** — Final call-to-action before footer
- **SiteFooter.tsx** — Contact details in a grid, copyright

Each component is a simple functional component with no state management (static site). All copy is hardcoded from the before-state audit.

### Responsive Breakpoints

- **640px:** Mobile (header stacks, hero grid becomes single column, buttons stack)
- **768px:** Tablet (refinements to grid gaps and padding)
- **1024px+:** Desktop (full asymmetric layout with side-by-side sections)

## Build & Deployment

- **Build output:** `npm run build` generates static pages in `.next/` directory (prerendered as static content per `next.config.js`)
- **Vercel-ready:** `.vercel/` is in .gitignore but deployments to Vercel require no additional config
- **Image optimization:** Next.js image formats set to webp and avif in config (future: when real images added, use `next/image`)

## Important Notes

- **Typography hierarchy is the main design lever.** The page relies on Bodoni Moda + spacing + restraint, not layout complexity or color. Changes to font stack, heading sizes, or weight distribution can break the luxury feel.

- **Gold accent is intentionally sparse.** Only use `--gold` for: italic text accents (headline), top borders (testimonials), underlines (links). Do not add gold backgrounds or boxes.

- **Photo placeholders:** Hero photo and Positioning section are currently gradient placeholders. Real images should respect the dusk-to-dark gradient style (photo-dark to photo-darker overlay).

- **Dark sections (ink background):** Positioning and ClosingCta invert to dark ink with cream text. Ensure contrast ratios remain accessible (cream on dark should be 4.5:1 minimum).

- **No state or interactivity beyond hover states.** This is a static site for marketing; no forms, modals, or client-side state yet.

- **Screenshot audit script:** `node audit/screenshot.js` takes a URL and optional output directory. It scrolls the full page to trigger lazy content, then captures. Useful for comparing before/after design changes.

## Git Workflow

- **Initial commits:**
  - `8b839f9` — Audit + screenshots (before-state)
  - `6ed0662` — Cleanup (removed local-only files)
  - `edcabe5` — Build luxury-editorial homepage

- **Commit style:** Use `feat:`, `fix:`, `chore:`, `refactor:` prefixes. Keep commits focused and atomic.

## File Tree (Non-Dependencies)

```
.
├── app/
│   ├── components/              # Section components
│   │   ├── SiteHeader.tsx
│   │   ├── Hero.tsx
│   │   ├── Positioning.tsx
│   │   ├── Reviews.tsx
│   │   ├── ClosingCta.tsx
│   │   └── SiteFooter.tsx
│   ├── components.css           # All component styles
│   ├── globals.css              # Design tokens + base styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage (assembles components)
├── audit/
│   ├── screenshot.js            # Playwright-based screenshot tool
│   └── screenshots/             # Before/after audit PNGs
├── package.json
├── next.config.js
├── tsconfig.json
├── .gitignore
└── CLAUDE.md                    # This file
```
