# Portfolio — Premium Personal Website

A high-end personal portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Dark aesthetic, smooth animations, and fully responsive across all devices.

---

## Preview

| Section | Description |
|---|---|
| **Hero** | Animated gradient headline, status badge, floating UI chips, scroll indicator |
| **Features** | 6-card grid with icon gradients and hover glow effects |
| **About** | Split layout with animated stat counters and experience timeline |
| **Projects** | 3 project cards with metrics, tags, and GitHub/live links |
| **CTA** | Gradient bordered call-to-action with dual CTAs |
| **Footer** | Links, social icons, and copyright |

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 14.2 | App Router, SSG, routing |
| [TypeScript](https://typescriptlang.org) | 5.4 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | 3.4 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion) | 11 | Animations & transitions |
| [Lucide React](https://lucide.dev) | 0.400 | Icon library |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | latest | Class name utilities |

---

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css              # Tailwind directives, custom keyframes, design tokens
│   ├── layout.tsx               # Root layout, SEO metadata, skip-to-content
│   └── page.tsx                 # Page composition — assembles all sections
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # Sticky glass morphism nav, mobile drawer
│   │   └── Footer.tsx           # 4-column footer with social links
│   │
│   ├── sections/
│   │   ├── Hero.tsx             # Animated hero with gradient text + floating badges
│   │   ├── Features.tsx         # 6-card services grid
│   │   ├── About.tsx            # Split layout + animated counters
│   │   ├── Projects.tsx         # Project showcase cards
│   │   └── CTA.tsx              # Call-to-action section
│   │
│   └── ui/
│       ├── AnimatedSection.tsx  # Reusable Framer Motion fade-up wrapper
│       ├── GradientText.tsx     # Animated gradient text span
│       └── Badge.tsx            # Status / label badge with optional pulse dot
│
├── lib/
│   └── utils.ts                 # cn() helper (clsx + tailwind-merge)
│
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Design System

```
Background:  #050816  (primary)   #0f0f23  (card/surface)
Accent:      #4f8ef7  (blue)  →   #06b6d4  (cyan)  →  #a855f7 (purple)
Text:        #f8fafc  (primary)   #94a3b8  (muted / slate-400)
Border:      rgba(255,255,255,0.06)  →  rgba(255,255,255,0.12) on hover
Radius:      rounded-xl / rounded-2xl
Font:        Inter, system-ui fallback
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Clone & Install

```bash
# Clone the repository
git clone https://github.com/blackice2090/claude-project.git

# Navigate to the portfolio directory
cd claude-project/portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other Commands

```bash
npm run build   # Production build + type check
npm run start   # Serve production build locally
npm run lint    # Run ESLint
```

---

## Customisation

### Personal details
Edit content directly in the section files under `components/sections/`:

| File | What to change |
|---|---|
| `Hero.tsx` | Headline, subtitle, stats (projects, years, clients) |
| `Features.tsx` | Service cards — titles, descriptions, icons |
| `About.tsx` | Bio paragraphs, stat numbers, experience entries |
| `Projects.tsx` | Project names, descriptions, tags, GitHub/live URLs |
| `CTA.tsx` | Email address, Cal.com link, location |
| `Footer.tsx` | Social links, copyright name |

### Colors & theme
All design tokens live in `app/globals.css` (CSS variables) and `tailwind.config.ts` (Tailwind theme extension).

---

## Deployment

### Vercel (recommended — one click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Import the repo on [vercel.com/new](https://vercel.com/new)
2. Set **Root Directory** to `portfolio`
3. Click **Deploy** — done

### Other platforms

Any platform that supports Node.js 18+ works (Netlify, Railway, Render, AWS Amplify). Set the root directory to `portfolio` and the build command to `npm run build`.

---

## Roadmap

- [ ] Blog section with MDX + syntax highlighting
- [ ] Contact form (Resend API)
- [ ] Dark / light mode toggle
- [ ] Cursor trail effect
- [ ] Testimonials section
- [ ] CMS integration (Sanity / Contentlayer)
- [ ] Page transition animations
- [ ] Privacy-first analytics (Plausible)

---

## License

MIT — free to use and adapt for your own portfolio.
