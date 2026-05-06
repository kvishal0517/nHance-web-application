import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import type { AgentWorkflow } from '../../types';
import {
  Terminal,
  GitBranch,
  Star,
  ArrowUpRight,
  Cpu,
  Database,
  Layers,
  Zap,
  BookOpen,
  Mic,
  TrendingUp,
  Code,
  ChevronRight,
  Github,
} from 'lucide-react';

const GREEN = '#3FB950';
const BG_BLACK = '#0D1117';
const BG_SURFACE = '#161B22';
const BG_CARD = '#1C2128';
const BORDER = '#30363D';

const thoughtWorkflow: AgentWorkflow = {
  title: 'Technical Thought Leadership Agent',
  nodes: [
    {
      id: '1',
      label: 'Monitor HN/arXiv',
      description: 'AI monitors Hacker News, arXiv CS, and curated feeds for relevant papers and discussions daily.',
      automated: true,
      x: 20,
      y: 40,
    },
    {
      id: '2',
      label: 'Daily Reading List',
      description: 'Compiles and delivers a prioritised morning reading digest filtered to Vikram\'s focus areas.',
      automated: true,
      x: 200,
      y: 40,
    },
    {
      id: '3',
      label: 'Cross-Post New Article',
      description: 'When a new blog post is published, AI auto-formats and cross-posts to LinkedIn and Dev.to.',
      automated: true,
      x: 380,
      y: 40,
    },
    {
      id: '4',
      label: 'Conference CFP Monitor',
      description: 'Tracks CFP deadlines for QCon, SRECon, LeadDev, and others — notifies 3 weeks before close.',
      automated: true,
      x: 560,
      y: 40,
    },
    {
      id: '5',
      label: 'Client Stack Changes',
      description: 'Monitors GitHub release feeds and changelogs for tools used by consulting clients; surfaces breaking changes.',
      automated: true,
      x: 200,
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

const highlights = [
  {
    icon: Database,
    company: 'Razorpay',
    title: 'Rebuilt the Payment Ledger',
    description:
      'Led a 14-month re-architecture of the core ledger service, replacing a monolithic PostgreSQL bottleneck with an event-sourced system on Kafka + CockroachDB.',
    scale: '2B+ transactions/year',
    outcome: '99.999% uptime, 4× write throughput',
  },
  {
    icon: Layers,
    company: 'Swiggy',
    title: 'Platform Engineering Team 0→1',
    description:
      'Bootstrapped the internal platform engineering function. Established golden-path templates, Internal Developer Platform (IDP), and SLO-as-code tooling adopted by 120+ services.',
    scale: '120 services, 400 engineers',
    outcome: 'Deployment frequency up 3×',
  },
  {
    icon: Cpu,
    company: 'Meesho',
    title: 'ML Inference Cost Reduction',
    description:
      'Designed a batching and caching layer for the recommendation inference pipeline, reducing p99 latency and GPU spend simultaneously.',
    scale: '50M+ daily requests',
    outcome: '62% cost reduction, 40% latency drop',
  },
  {
    icon: TrendingUp,
    company: 'Coinbase (contract)',
    title: 'On-call Burnout Reduction Programme',
    description:
      'Introduced error budget policies and runbook automation that cut mean time to detect (MTTD) by half and reduced pager noise from 800/week to under 90.',
    scale: '6 teams, 30-engineer org',
    outcome: 'Engineer NPS +42 points',
  },
];

const openSource = [
  {
    name: 'kache',
    description: 'A tiered in-process + distributed cache library for Go with automatic eviction and TTL propagation.',
    stars: '2.1k',
    lang: 'Go',
    langColor: '#00ADD8',
  },
  {
    name: 'slo-validator',
    description: 'CLI tool to validate Prometheus-based SLO definitions against production metrics. Used at 80+ companies.',
    stars: '870',
    lang: 'Go',
    langColor: '#00ADD8',
  },
  {
    name: 'pg-event-tail',
    description: 'Zero-dependency PostgreSQL logical replication consumer for event-sourcing patterns. Battle-tested at scale.',
    stars: '430',
    lang: 'Rust',
    langColor: '#DEA584',
  },
];

const posts = [
  {
    title: 'Why Your Kafka Consumer Group Is Slower Than You Think',
    date: 'Apr 2025',
    readTime: '11 min read',
    tags: ['Kafka', 'Distributed Systems'],
  },
  {
    title: 'The Staff Engineer\'s Guide to Killing Projects Gracefully',
    date: 'Feb 2025',
    readTime: '8 min read',
    tags: ['Engineering Leadership', 'Career'],
  },
  {
    title: 'Error Budgets Are a Promise, Not a Policy',
    date: 'Jan 2025',
    readTime: '7 min read',
    tags: ['SRE', 'Reliability'],
  },
];

const conferences = [
  {
    name: 'QCon London 2025',
    talk: 'Platform Engineering Without the Hype: What Actually Moves Teams',
    date: 'March 2025',
  },
  {
    name: 'SRECon EMEA 2024',
    talk: 'From Pager Hell to Error Budgets: A Case Study in On-call Sanity',
    date: 'October 2024',
  },
];

export default function VikramStaffEngineer() {
  return (
    <MockLayout projectName="Vikram Nair — Staff Engineer" accentColor={GREEN} categoryId="tech">
      <div style={{ backgroundColor: BG_BLACK, color: '#E6EDF3' }}>

        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden border-b"
          style={{ borderColor: BORDER }}
        >
          {/* Terminal scanline effect */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, #3FB950, #3FB950 1px, transparent 1px, transparent 4px)',
            }}
          />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div
              className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded mb-8 border"
              style={{ backgroundColor: `${GREEN}12`, color: GREEN, borderColor: `${GREEN}30` }}
            >
              <Terminal size={12} />
              <span>~ vikram@nair:~$</span>
              <span className="animate-pulse">▌</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-2 font-mono">
              <span className="text-white">Vikram</span>{' '}
              <span style={{ color: GREEN }}>Nair</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-mono font-light mb-6" style={{ color: '#8B949E' }}>
              Staff Engineer · Distributed Systems & Platform
            </h2>

            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-10 font-mono text-sm">
              <span style={{ color: GREEN }}>//</span> 12 years building systems that don't page you at 3am.
              Formerly Razorpay, Swiggy, Meesho. Now advising high-growth startups on infrastructure
              and engineering org design.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-mono font-bold text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: GREEN, color: BG_BLACK }}
              >
                <Code size={16} />
                View Case Studies
              </button>
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-mono font-semibold text-sm border transition-colors hover:border-green-500/40"
                style={{ borderColor: BORDER, color: '#8B949E' }}
              >
                <Github size={16} />
                github.com/vikramnair
              </button>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 text-sm font-mono text-gray-500">
              {['12 yrs experience', 'Staff @ 2 unicorns', '3.4k GitHub stars', 'Speaker: QCon, SRECon'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span style={{ color: GREEN }}>→</span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Engineering Highlights ── */}
        <section className="py-24" style={{ backgroundColor: BG_SURFACE }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: GREEN }}>
                // case-studies
              </p>
              <h2 className="text-2xl font-black text-white font-mono">Engineering Highlights</h2>
              <p className="text-gray-500 mt-2 font-mono text-sm">
                Selected projects with measurable outcomes. Full case studies available on request.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {highlights.map(({ icon: Icon, company, title, description, scale, outcome }) => (
                <div
                  key={title}
                  className="rounded-xl p-6 border group hover:border-green-500/30 transition-colors"
                  style={{ backgroundColor: BG_CARD, borderColor: BORDER }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${GREEN}15` }}
                      >
                        <Icon size={18} style={{ color: GREEN }} />
                      </div>
                      <span className="text-xs font-mono font-bold" style={{ color: GREEN }}>{company}</span>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: GREEN }}
                    />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 font-mono">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{description}</p>
                  <div className="flex flex-wrap gap-3">
                    <span
                      className="text-xs font-mono px-2.5 py-1 rounded-full border"
                      style={{ borderColor: BORDER, color: '#8B949E', backgroundColor: BG_BLACK }}
                    >
                      Scale: {scale}
                    </span>
                    <span
                      className="text-xs font-mono px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: `${GREEN}15`, color: GREEN }}
                    >
                      {outcome}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Open Source ── */}
        <section className="py-24" style={{ backgroundColor: BG_BLACK }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: GREEN }}>
                // open-source
              </p>
              <h2 className="text-2xl font-black text-white font-mono">Open Source</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {openSource.map(({ name, description, stars, lang, langColor }) => (
                <div
                  key={name}
                  className="rounded-xl p-5 border group hover:border-green-500/30 transition-colors cursor-pointer"
                  style={{ backgroundColor: BG_SURFACE, borderColor: BORDER }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <GitBranch size={16} style={{ color: GREEN }} />
                      <span className="font-mono font-bold text-white text-sm">{name}</span>
                    </div>
                    <ArrowUpRight
                      size={15}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: GREEN }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">{description}</p>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-gray-500">
                      <Star size={11} fill="#8B949E" stroke="none" />
                      {stars}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: langColor }} />
                      <span style={{ color: '#8B949E' }}>{lang}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Writing ── */}
        <section className="py-24" style={{ backgroundColor: BG_SURFACE }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: GREEN }}>
                  // writing
                </p>
                <h2 className="text-2xl font-black text-white font-mono">Recent Posts</h2>
              </div>
              <button
                className="flex items-center gap-1.5 text-sm font-mono transition-colors hover:text-white"
                style={{ color: GREEN }}
              >
                All posts <ChevronRight size={14} />
              </button>
            </div>

            <div className="space-y-4">
              {posts.map(({ title, date, readTime, tags }) => (
                <div
                  key={title}
                  className="rounded-xl p-5 border group hover:border-green-500/30 transition-colors cursor-pointer flex items-center justify-between gap-4"
                  style={{ backgroundColor: BG_CARD, borderColor: BORDER }}
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-mono font-bold text-white mb-2 group-hover:text-green-400 transition-colors truncate">
                      {title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                      <span style={{ color: '#8B949E' }}>{date}</span>
                      <span style={{ color: '#8B949E' }}>·</span>
                      <span style={{ color: '#8B949E' }}>{readTime}</span>
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded"
                          style={{ backgroundColor: `${GREEN}15`, color: GREEN }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="flex-shrink-0" style={{ color: GREEN }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Speaking ── */}
        <section className="py-24" style={{ backgroundColor: BG_BLACK }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: GREEN }}>
                // speaking
              </p>
              <h2 className="text-2xl font-black text-white font-mono">Conference Talks</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {conferences.map(({ name, talk, date }) => (
                <div
                  key={name}
                  className="rounded-xl p-6 border"
                  style={{ backgroundColor: BG_SURFACE, borderColor: BORDER }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Mic size={15} style={{ color: GREEN }} />
                    <span className="text-xs font-mono font-bold" style={{ color: GREEN }}>{name}</span>
                    <span className="ml-auto text-xs font-mono" style={{ color: '#8B949E' }}>{date}</span>
                  </div>
                  <p className="font-mono font-semibold text-white text-sm leading-snug">{talk}</p>
                  <button
                    className="flex items-center gap-1.5 mt-4 text-xs font-mono transition-colors hover:text-white"
                    style={{ color: GREEN }}
                  >
                    <BookOpen size={12} />
                    View Slides / Recording
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI Agent Workflow ── */}
        <section className="py-24" style={{ backgroundColor: BG_SURFACE }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full mb-5 border"
                style={{ backgroundColor: `${GREEN}15`, color: GREEN, borderColor: `${GREEN}30` }}
              >
                <Zap size={12} />
                AI Automation
              </div>
              <h2 className="text-2xl font-black text-white mb-3 font-mono">
                Staying Sharp at Scale
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto text-sm font-mono">
                An AI agent handles the feed monitoring, cross-posting, and CFP tracking — so Vikram
                stays at the frontier without the firehose.
              </p>
            </div>

            <div
              className="rounded-xl p-6 lg:p-10 border"
              style={{ backgroundColor: BG_BLACK, borderColor: `${GREEN}25` }}
            >
              <AgentFlowChart workflow={thoughtWorkflow} />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20" style={{ backgroundColor: BG_BLACK, borderTop: `1px solid ${BORDER}` }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: GREEN }}>
              // work-with-me
            </p>
            <h2 className="text-3xl font-black text-white mb-4 font-mono">
              Let's solve something hard.
            </h2>
            <p className="text-gray-400 mb-8 font-mono text-sm max-w-lg mx-auto">
              Available for Staff/Principal advisory engagements, architecture reviews,
              and fractional platform leadership. 2–3 slots open per quarter.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="px-8 py-3.5 rounded-lg font-mono font-bold text-sm"
                style={{ backgroundColor: GREEN, color: BG_BLACK }}
              >
                Enquire About Advisory
              </button>
              <button
                className="px-8 py-3.5 rounded-lg font-mono font-semibold text-sm border transition-colors hover:border-green-500/40"
                style={{ borderColor: BORDER, color: '#8B949E' }}
              >
                Download CV / Resume
              </button>
            </div>
          </div>
        </section>

      </div>
    </MockLayout>
  );
}
