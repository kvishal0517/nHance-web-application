# nHance — Tailored Websites, Portfolios, Apps & AI Agents for Professionals

A modern, production-grade web platform that helps professionals across industries discover and commission custom digital solutions. Built with React, TypeScript, and Tailwind CSS, featuring 20 interactive mock project demos across 10 industries with AI agent workflow visualizations.

---

## Overview

nHance is a digital solutions platform that offers tailored websites, portfolios, Android apps, and AI agents designed specifically for professionals. The site lets users explore interactive mock projects — fully functional previews of what their digital presence could look like — before making a commitment.

---

## Features

### Pages

- **Home** — Hero section with animated gradient, scrolling industry ticker, 3-step "How It Works" flow, services overview, category preview grid, social proof stats, and dual CTA sections
- **Portfolio** — Filterable project gallery across 10 industry categories with active category info display and responsive 2-column grid
- **Services** — Detailed breakdown of 4 core services (Websites, Portfolios, Android Apps, AI Agents) with feature lists and alternating layouts
- **About** — Company story, 3 core values (Precision, Empathy, Innovation), and 3-step process (Discovery, Design & Build, Launch & Support)
- **Contact** — Full enquiry form with contact info sidebar, 4-step process explanation, and Google Sheets webhook integration

### Interactive Mock Projects (20 total)

Each mock project is a fully designed, interactive preview page with its own branding, layout, and AI agent workflow visualization:

| Industry | Projects |
|---|---|
| Academic | IIM Alumni Network, Pinnacle Coaching |
| Medical | Dr. Priya Cardiologist, Clarity Mind Psychiatry |
| Music & Art | Studio Kaavya, Raagas Resonance |
| Food & Hospitality | Chef Arvind, Copper Handi |
| Media | District Lens, Siddharth Journalist |
| Fitness & Wellness | Ironbound Training, Sattvic Space |
| Creatives & Designers | Aanya Brand Designer, Wunderkind Studio |
| Finance & Accounting | Cornerstone Wealth, Vivek CA Firm |
| Legal Advisors | Lakshmi Family Law, Mehra Nair Law |
| Tech Professionals | Buildfast CTO, Vikram Staff Engineer |

### AI Agent Workflow Visualization

Each mock project includes an SVG-based interactive flowchart showing:
- Automated steps (blue, glowing nodes) vs manual steps (gray nodes)
- Animated dashed arrows for automated flows
- Hover tooltips with node descriptions
- Responsive layout with horizontal scrolling on mobile

### Enquiry System

- **Full form** on Contact page with fields: name, email, phone, industry, service interest, description, budget range, timeline
- **Quick enquiry modal** accessible from any mock project page, pre-populated with the relevant industry
- **Google Sheets integration** via Apps Script webhook for real-time lead capture with timestamps
- Success/error state handling with visual feedback

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18.3 + TypeScript 5.5 |
| Build Tool | Vite 5.4 |
| Routing | React Router v7 (lazy-loaded) |
| Styling | Tailwind CSS 3.4 + PostCSS + Autoprefixer |
| Icons | Lucide React |
| Backend | Supabase JS Client (available for future integration) |
| Linting | ESLint with React Hooks + React Refresh plugins |

---

## Project Structure

```
src/
├── App.tsx                    # Router setup with lazy loading + ScrollToTop
├── main.tsx                   # React entry point
├── index.css                  # Tailwind directives + custom utilities + animations
├── vite-env.d.ts
│
├── components/
│   ├── AgentFlowChart.tsx     # SVG interactive AI workflow visualization
│   ├── AnimatedSection.tsx    # Scroll-triggered fade-in animation wrapper
│   ├── EnquiryModal.tsx       # Quick enquiry modal with form
│   ├── Footer.tsx             # Site-wide footer
│   ├── MockLayout.tsx         # Wrapper for mock project pages (header + footer + enquiry)
│   ├── Navbar.tsx             # Sticky nav with scroll effects + mobile menu
│   └── ProjectCard.tsx        # Portfolio card with gradient, badge, hover animation
│
├── hooks/
│   ├── useEnquiryForm.ts      # Form state management + Google Sheets submission
│   └── useScrollAnimation.ts  # Intersection Observer hook for scroll animations
│
├── pages/
│   ├── HomePage.tsx           # Landing page with hero, ticker, services, stats
│   ├── PortfolioPage.tsx      # Filterable project gallery
│   ├── ServicesPage.tsx       # 4 service detail sections
│   ├── AboutPage.tsx          # Mission, values, process
│   └── ContactPage.tsx        # Enquiry form + contact info
│
├── mocks/
│   ├── academic/              # IIMAlumni.tsx, PinnacleCoaching.tsx
│   ├── creatives/             # AanyaBrandDesigner.tsx, WunderkindStudio.tsx
│   ├── finance/               # CornerstoneWealth.tsx, VivekCAFirm.tsx
│   ├── fitness/               # IronboundTraining.tsx, SattvicSpace.tsx
│   ├── food/                  # ChefArvind.tsx, CopperHandi.tsx
│   ├── legal/                 # LakshmiFamilyLaw.tsx, MehraNairLaw.tsx
│   ├── media/                 # DistrictLens.tsx, SiddharthJournalist.tsx
│   ├── medical/               # ClarityMindPsychiatry.tsx, DrPriyaCardiologist.tsx
│   ├── music-art/             # RaagasResonance.tsx, StudioKaavya.tsx
│   └── tech/                  # BuildfastCTO.tsx, VikramStaffEngineer.tsx
│
└── types/
    └── index.ts               # Category, Project, AgentNode, AgentEdge, AgentWorkflow types + CATEGORIES data
```

---

## Design System

### Colors

- **Brand**: Indigo-based palette (`#6366F1` primary)
- **Accent**: Rose-based palette (`#E11D48` for CTAs and highlights)
- **Neutrals**: Slate palette with extended 25/75 shades
- **Semantic**: Success (emerald), Warning (amber), Error (red)

### Typography

- System font stack (SF Pro, Segoe UI, etc.)
- Display sizes: 4.5rem down to 1.875rem
- Body line height: 150%, heading line height: 120%
- 3 font weights maximum

### Spacing

- 8px base grid system
- Consistent section padding via `.section-padding` utility
- Container widths: narrow (max-w-5xl) and wide (max-w-7xl)

### Components

- **Cards**: `.card-base` with `.card-hover` for interactive lift effect
- **Buttons**: `.btn-primary` (indigo fill), `.btn-secondary` (outline), `.btn-ghost` (transparent)
- **Text**: `.gradient-text` for brand gradient effect

### Animations

- `glow` — pulsing glow effect for AI automated nodes
- `dash` — animated SVG stroke for flow arrows
- `ticker` — horizontal scrolling for industry ticker
- `smooth-appear` — fade + slide up on scroll
- `slide-up`, `fade-in`, `float`, `pulse-soft` — general purpose

### Shadows

- `soft` — subtle elevation
- `medium` — card-level depth
- `elevated` — prominent elements
- `brand` — indigo-tinted shadow for brand elements

---

## Services Offered

### Custom Websites
Responsive, SEO-optimized websites with lead capture forms, analytics integration, and fast load times.

### Professional Portfolios
Visual case study showcases with testimonials, booking integration, and contact forms.

### Android Apps
Native-quality apps with push notifications, offline functionality, and Play Store deployment.

### AI Agents
Automated workflows for lead nurturing, appointment scheduling, customer support, and analytics dashboards.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/kvishal0517/nHance-web-application.git
cd nHance-web-application
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_GOOGLE_SHEETS_WEBHOOK_URL=your_google_apps_script_webhook_url
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

### Type Checking

```bash
npm run typecheck
```

### Linting

```bash
npm run lint
```

---

## Google Sheets Integration

The enquiry form submits data to a Google Sheets webhook via Apps Script:

1. Create a Google Sheet with columns matching the form fields
2. Open Extensions > Apps Script
3. Deploy as a web app with "Anyone" access
4. Set the deployment URL as `VITE_GOOGLE_SHEETS_WEBHOOK_URL`

Submitted fields: fullName, email, phone, profession, serviceInterest, description, budget, timeline, timestamp

---

## Performance

- **Code splitting**: All pages and mock projects are lazy-loaded via `React.lazy()` + `Suspense`
- **Icon optimization**: Lucide React renders SVGs inline (no font/icon file overhead)
- **CSS**: Tailwind purges unused styles in production
- **Build output**: ~196 KB main chunk (64 KB gzipped), individual page chunks 4-17 KB each

---

## Responsive Design

- Mobile-first approach with Tailwind breakpoints (sm, md, lg)
- Collapsible mobile navigation with full-screen overlay
- Flexible grids that adapt from 1 to 2+ columns
- Touch-friendly tap targets and spacing
- Horizontal scroll for AI workflow charts on small screens

---

## License

Private. All rights reserved.
