# Kotoju Rajeshwari — Portfolio

A premium, futuristic personal portfolio website for Kotoju Rajeshwari — CS student, Google Gemini Campus Ambassador, AI/ML enthusiast, and Salesforce Developer.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — run portfolio (port assigned by workflow)
- `pnpm --filter @workspace/portfolio run typecheck` — typecheck portfolio
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19 + Vite + Tailwind CSS
- Animations: Framer Motion, GSAP, Lenis smooth scroll
- UI extras: react-type-animation, react-countup, lucide-react
- No backend required (static portfolio)

## Where things live

- `artifacts/portfolio/src/pages/Portfolio.tsx` — root page, orchestrates all sections
- `artifacts/portfolio/src/components/sections/` — Hero, About, Skills, Experience, Projects, Achievements, Certifications, Contact
- `artifacts/portfolio/src/components/layout/` — Navbar, Footer
- `artifacts/portfolio/src/components/ui/LoadingScreen.tsx` — animated KR. intro screen
- `artifacts/portfolio/src/components/ui/MouseFollower.tsx` — custom cursor glow
- `artifacts/portfolio/src/index.css` — brand palette + glassmorphism utilities

## Architecture decisions

- **No Three.js/WebGL**: The hero globe is a pure CSS/Framer Motion orb — WebGL is unavailable in the Replit preview sandbox, so a CSS sphere with orbiting badges was used instead.
- **Loading screen**: 2.5s animated "KR. — INITIALIZING PROTOCOL" loading screen on first visit before hero reveals.
- **Lenis smooth scroll**: Initialised in Portfolio.tsx; `scroll-behavior: auto` on html to avoid conflict.
- **Framer Motion variants typed**: `itemVariants` typed as `Variants` with cubic-bezier easing arrays instead of string ease names to satisfy strict TS typings.

## Product

Single-page portfolio with 9 sections: Hero (CSS animated globe + typing animation), About (bio + education timeline), Skills (searchable categorised cards), Experience (vertical timeline), Projects (glass cards with filtering), Achievements (animated counters), Certifications (glass cards), Contact (form + social links), Footer.

## User preferences

_Populate as you build._

## Gotchas

- Do NOT add Three.js/React Three Fiber — WebGL context fails in Replit preview.
- Framer Motion `Variants` type requires cubic-bezier arrays `[n,n,n,n]` not string ease names in nested transition objects.
- Google Fonts `@import` must be the first line in `index.css` (before `@import 'tailwindcss'`).

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
