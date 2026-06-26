# ✨ Kotoju Rajeshwari — Personal Portfolio

> A premium, futuristic personal portfolio built with React, Vite, Framer Motion, and Tailwind CSS.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square)
![Tech Stack](https://img.shields.io/badge/Stack-React%20%2B%20Vite%20%2B%20Tailwind-blueviolet?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square)

---

## 🚀 Live Demo

Visit the deployed portfolio → **[rajeshwari-portfolio.replit.app](https://rajeshwari-portfolio.replit.app)**

---

## 👩‍💻 About

Hi, I'm **Kotoju Rajeshwari** — a Computer Science Engineering student at KPRIT, Hyderabad, passionate about building at the intersection of AI, scalable software, and elegant UX.

- 🎓 B.Tech CSE @ KPRIT (2023–2027) · CGPA 8.0+
- 🌐 **Google Gemini Campus Ambassador**
- 🤖 AI/ML Enthusiast · IBM & SmartBridge Intern
- ⚡ Salesforce Developer · Full Stack Builder
- 🏆 National Hackathon Finalist

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 + Vite 6 |
| Language | TypeScript 5.9 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion, GSAP |
| Smooth Scroll | Lenis |
| Icons | Lucide React |
| UI Extras | react-type-animation, react-countup |
| Font | Outfit, Space Grotesk, Space Mono |

---

## 📂 Project Structure

```
artifacts/portfolio/
├── public/
├── src/
│   ├── pages/
│   │   └── Portfolio.tsx          # Root page — mounts all sections
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx           # Animated CSS globe + typing effect
│   │   │   ├── About.tsx          # Bio + education timeline
│   │   │   ├── Skills.tsx         # Searchable skill cards
│   │   │   ├── Experience.tsx     # Work experience timeline
│   │   │   ├── Projects.tsx       # Filterable project cards
│   │   │   ├── Achievements.tsx   # Animated stat counters
│   │   │   ├── Certifications.tsx # Certification glass cards
│   │   │   └── Contact.tsx        # Contact form + socials
│   │   └── ui/
│   │       ├── LoadingScreen.tsx  # "KR." intro animation
│   │       └── MouseFollower.tsx  # Custom cursor glow
│   ├── index.css                  # Brand palette + glassmorphism utils
│   └── main.tsx
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## ✨ Features

- **Cinematic Loading Screen** — "KR. INITIALIZING PROTOCOL" with orbiting rings
- **Hero Section** — GSAP letter reveal, role typing animation, animated CSS orb with floating tech badges
- **About** — Personal bio + vertical education timeline
- **Skills** — Live-searchable grid across 6 categories (AI/ML, Web, Cloud, etc.)
- **Experience** — SmartBridge Salesforce & IBM AI/ML internship timeline
- **Projects** — Filterable cards: Smart Guardian, Tripzy, Medicine Donation Locator
- **Achievements** — Animated counters for hackathons, certifications, and GPA
- **Certifications** — Hover-animated glass cards with issuer badges
- **Contact** — Email form + GitHub, LinkedIn, social links
- **Custom Cursor** — Glow-following cursor dot
- **Lenis Smooth Scroll** — Buttery physics-based scrolling
- **Fully Responsive** — Mobile, tablet, and desktop

---

## 🎨 Design Language

- **Palette:** Deep space dark (`#050816`) · Violet primary · Cyan secondary · Purple accent
- **Typography:** Outfit (display) · Space Grotesk (body) · Space Mono (code/mono)
- **Motif:** Glassmorphism cards · Gradient borders · Animated glow blobs · Futuristic grid overlays

---

## 🏃 Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+

### Installation

```bash
# Clone the repo
git clone https://github.com/Rajeshwari1412/-Raji-Portfolio.git
cd -Raji-Portfolio

# Install dependencies
pnpm install

# Start development server
pnpm --filter @workspace/portfolio run dev
```

The app will be available at `http://localhost:PORT` (port is assigned automatically).

### Build for Production

```bash
pnpm --filter @workspace/portfolio run build
```

### Type Check

```bash
pnpm --filter @workspace/portfolio run typecheck
```

---

## 📬 Contact

| Platform | Link |
|---|---|
| 📧 Email | [rajukjth@gmail.com](mailto:rajukjth@gmail.com) |
| 💼 LinkedIn | [linkedin.com/in/rajeshwari-kotoju](https://linkedin.com/in/rajeshwari-kotoju) |
| 🐙 GitHub | [github.com/Rajeshwari1412](https://github.com/Rajeshwari1412) |

---

## 📄 License

This portfolio is open source under the [MIT License](LICENSE). Feel free to fork and adapt it for your own use — a credit mention is appreciated!

---

<p align="center">
  Built with ❤️ by <strong>Kotoju Rajeshwari</strong>
</p>
