import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import type { AgentWorkflow } from '../../types';
import {
  ArrowUpRight,
  Sparkles,
  Play,
  Star,
  Award,
  Zap,
  Eye,
  Layers,
  Film,
  Compass,
} from 'lucide-react';

const accentBlack = '#111111';

const clientCommunicationWorkflow: AgentWorkflow = {
  title: 'New Business & Client Communication Agent',
  nodes: [
    {
      id: '1',
      label: 'Project Inquiry',
      description: 'Potential client submits a project inquiry via the website contact form.',
      automated: false,
      x: 20,
      y: 40,
    },
    {
      id: '2',
      label: 'Send Questionnaire',
      description: 'AI instantly sends a branded discovery questionnaire to qualify the lead.',
      automated: true,
      x: 200,
      y: 40,
    },
    {
      id: '3',
      label: 'Draft Capabilities Deck',
      description: 'Relevant case studies are assembled into a tailored capabilities deck automatically.',
      automated: true,
      x: 380,
      y: 40,
    },
    {
      id: '4',
      label: 'Follow-up Reminder',
      description: 'If no response in 48 hrs, a gentle follow-up is sent on behalf of Aanya.',
      automated: true,
      x: 560,
      y: 40,
    },
    {
      id: '5',
      label: 'Create Project Hub',
      description: 'On client confirmation, a shared Notion workspace and folder structure are created.',
      automated: true,
      x: 380,
      y: 160,
    },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
  ],
};

const projects = [
  {
    title: 'Mira Skincare Rebrand',
    category: 'Brand Identity',
    year: '2024',
    problem: 'A D2C skincare brand with loyal customers but packaging that looked generic and failed to justify its premium price point.',
    outcome: 'Full visual identity overhaul — logo, typography, color system, and packaging. 42% increase in DTC conversion within 3 months of relaunch.',
    palette: ['#F5EBE0', '#D4A96A', '#2C1810'],
    tags: ['Brand Strategy', 'Packaging', 'Art Direction'],
    accent: '#D4A96A',
  },
  {
    title: 'Vyom Architecture',
    category: 'Visual Identity + Motion',
    year: '2024',
    problem: 'A boutique architecture firm relying on word-of-mouth, with no cohesive brand presence to support pitching institutional clients.',
    outcome: 'Minimal identity system with animated brand films for pitch decks. Helped secure a ₹3Cr commercial project within weeks of the rebrand.',
    palette: ['#1A1A1A', '#C8B89A', '#F5F3EF'],
    tags: ['Identity', 'Motion Design', 'Pitch Decks'],
    accent: '#C8B89A',
  },
  {
    title: 'Flux Music Festival',
    category: 'Event Branding + Motion',
    year: '2023',
    problem: 'An independent music festival needing a visual identity that could carry the energy of electronic and experimental acts.',
    outcome: 'Kinetic identity system with generative motion assets, stage visuals, and merchandise. Festival sold out 48 hours after launch.',
    palette: ['#0A0A0A', '#FF3366', '#00F5D4'],
    tags: ['Event Branding', 'Motion', 'Merch Design'],
    accent: '#FF3366',
  },
  {
    title: 'Noor Editorial',
    category: 'Art Direction',
    year: '2023',
    problem: 'A luxury lifestyle magazine launching in print and digital, needing a visual language that balanced editorial authority with modern aesthetics.',
    outcome: 'Full art direction across 4 issues — layout system, photography direction, and digital edition design. Featured in D&AD New Blood.',
    palette: ['#1C1C1C', '#B8A99A', '#F9F4EE'],
    tags: ['Art Direction', 'Editorial', 'Photography'],
    accent: '#B8A99A',
  },
];

const services = [
  {
    icon: Compass,
    title: 'Brand Strategy',
    description: 'Positioning, naming, messaging architecture, and competitive landscape analysis. The thinking before the making.',
  },
  {
    icon: Layers,
    title: 'Visual Identity',
    description: 'Logo systems, typography, color, iconography, and brand guidelines built to scale across every touchpoint.',
  },
  {
    icon: Film,
    title: 'Motion Graphics',
    description: 'Brand films, animated logos, social content, and UI micro-animations that make static identities breathe.',
  },
  {
    icon: Eye,
    title: 'Art Direction',
    description: 'Creative oversight for campaigns, editorial shoots, and product launches — ensuring every visual decision lands.',
  },
];

const clientLogos = [
  'Mira Skincare', 'Vyom Architecture', 'Flux Festival', 'Noor Editorial',
  'Kasa Hotels', 'Deepika Menon', 'Origin Coffee', 'Blume Ventures',
];

export default function AanyaBrandDesigner() {
  return (
    <MockLayout projectName="Aanya Verma — Brand Identity" accentColor={accentBlack} categoryId="creatives">
      {/* Hero */}
      <section className="bg-white min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
        {/* Decorative type watermark */}
        <div
          className="absolute -right-10 top-1/2 -translate-y-1/2 text-[200px] font-black leading-none select-none pointer-events-none"
          style={{ color: '#F0F0F0', letterSpacing: '-0.05em' }}
        >
          AV
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-black" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gray-500">
                Brand Identity & Motion Design
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-black leading-[0.9] tracking-tight mb-8">
              Aanya
              <br />
              Verma
            </h1>

            <p className="text-lg text-gray-500 max-w-lg mb-10 leading-relaxed">
              I build brands that hold attention — from strategy to identity to motion. My work lives at the intersection
              of rigorous thinking and precise craft.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white transition-transform hover:scale-105"
                style={{ backgroundColor: accentBlack }}
              >
                View Selected Work
                <ArrowUpRight size={16} />
              </button>
              <button className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-black transition-colors">
                <Play size={14} className="fill-current" />
                Watch Showreel
              </button>
            </div>
          </div>

          {/* Award badges */}
          <div className="absolute bottom-12 right-4 sm:right-8 lg:right-16 flex flex-col gap-3">
            {[
              { badge: 'D&AD', detail: 'New Blood 2024' },
              { badge: 'Awwwards', detail: 'SOTD' },
              { badge: 'Behance', detail: 'Featured' },
            ].map((a, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 bg-white shadow-sm"
              >
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-bold text-black">{a.badge}</span>
                <span className="text-xs text-gray-400">{a.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">Case Studies</p>
              <h2 className="text-4xl font-black text-black">Selected Work</h2>
            </div>
            <span className="text-sm text-gray-400 hidden sm:block">2023 — 2024</span>
          </div>

          <div className="space-y-24">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Visual block */}
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div
                    className="aspect-[4/3] rounded-2xl flex items-center justify-center relative overflow-hidden"
                    style={{ backgroundColor: project.palette[0] }}
                  >
                    {/* Color swatches */}
                    <div className="absolute bottom-6 left-6 flex gap-2">
                      {project.palette.map((color, j) => (
                        <div
                          key={j}
                          className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    {/* Project letter mark */}
                    <span
                      className="text-[120px] font-black leading-none opacity-10 select-none"
                      style={{ color: project.palette[2] }}
                    >
                      {project.title[0]}
                    </span>
                    {/* Category tag */}
                    <div
                      className="absolute top-5 right-5 px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: project.accent, color: '#fff' }}
                    >
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Content block */}
                <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">{project.year}</span>
                    <span className="w-4 h-px bg-gray-300" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">{project.category}</span>
                  </div>

                  <h3 className="text-3xl font-black text-black mb-6">{project.title}</h3>

                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">The Problem</p>
                      <p className="text-gray-600 leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: project.accent }}>
                        The Outcome
                      </p>
                      <p className="text-gray-600 leading-relaxed">{project.outcome}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold border"
                        style={{ borderColor: '#E5E7EB', color: '#374151' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-2 text-sm font-bold text-black hover:gap-3 transition-all">
                    View Case Study
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">What I Do</p>
            <h2 className="text-4xl font-black text-black mb-4">Services</h2>
            <p className="text-gray-500">
              Strategy-first design practice. I work with founders, brand managers, and agencies on projects that demand
              both conceptual rigor and exceptional execution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-gray-100 group hover:border-black transition-colors"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-black group-hover:bg-gray-800 transition-colors"
                >
                  <service.icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-black text-black mb-3">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Pricing note */}
          <div className="mt-10 p-6 bg-black rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold mb-1">Starting from ₹1.5L per project</p>
              <p className="text-gray-400 text-sm">Select clients only. Enquire with brief.</p>
            </div>
            <button className="flex-shrink-0 px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-100 transition-colors">
              Start a Conversation
            </button>
          </div>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <section className="py-16 bg-white overflow-hidden border-y border-gray-100">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Clients & Collaborators</p>
        </div>
        <div className="flex gap-12 animate-marquee-slow whitespace-nowrap">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <span
              key={i}
              className="text-xl font-black text-gray-200 hover:text-gray-400 transition-colors cursor-default flex-shrink-0"
            >
              {logo}
            </span>
          ))}
        </div>
      </section>

      {/* AI Agent Workflow */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs text-gray-400 mb-6">
              <Sparkles size={12} />
              AI-Powered Studio Operations
            </div>
            <h2 className="text-3xl font-black text-white mb-4">
              The Studio Runs While I Design
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              An AI agent handles new business communication, freeing up focus for the work that actually matters.
            </p>
          </div>

          <div className="rounded-2xl p-6 lg:p-10 border border-white/8 bg-white/3">
            <AgentFlowChart workflow={clientCommunicationWorkflow} />
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            {[
              { icon: Zap, label: 'Instant Response', detail: 'Every inquiry acknowledged in under 2 minutes' },
              { icon: Award, label: 'Tailored Decks', detail: 'Case studies matched to client industry automatically' },
              { icon: Sparkles, label: 'Zero Admin', detail: 'Project setup handled end-to-end without manual work' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl border border-white/8 bg-white/3">
                <item.icon size={18} className="text-gray-400 mb-3" />
                <p className="text-sm font-bold text-white mb-1">{item.label}</p>
                <p className="text-xs text-gray-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MockLayout>
  );
}
