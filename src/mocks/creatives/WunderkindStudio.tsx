import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import type { AgentWorkflow } from '../../types';
import {
  ArrowUpRight,
  ArrowRight,
  Zap,
  Users,
  Search,
  BarChart3,
  Paintbrush,
  RefreshCw,
  Rocket,
  MessageSquare,
  Clock,
  FileText,
} from 'lucide-react';

const terracotta = '#C75B39';
const inkBlack = '#1A1A1A';
const cream = '#F5F0E8';

const studioOpsWorkflow: AgentWorkflow = {
  title: 'Studio Operations & Briefing Agent',
  nodes: [
    {
      id: '1',
      label: 'Incoming Brief',
      description: 'Client submits a new project brief via the website or direct email.',
      automated: false,
      x: 20,
      y: 40,
    },
    {
      id: '2',
      label: 'Completeness Check',
      description: 'AI scores the brief for completeness — flags missing timelines, budgets, or deliverables.',
      automated: true,
      x: 200,
      y: 40,
    },
    {
      id: '3',
      label: 'Conflict of Interest Check',
      description: 'Cross-checks the prospective client against active client roster for category conflicts.',
      automated: true,
      x: 380,
      y: 40,
    },
    {
      id: '4',
      label: 'Weekly Priorities Email',
      description: 'Every Monday, a prioritized project pipeline is sent to the studio director.',
      automated: true,
      x: 560,
      y: 40,
    },
    {
      id: '5',
      label: 'Monthly Utilization Report',
      description: 'Automated report on team utilization, capacity forecast, and profitability per project.',
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

const selectedWork = [
  {
    client: 'Heirloom Co.',
    category: 'Brand Identity + Packaging',
    description: 'Legacy tableware brand repositioned for modern homes. New visual language across 400+ SKUs.',
    year: '2024',
    color: '#C75B39',
  },
  {
    client: 'Kite VC',
    category: 'Website + Motion',
    description: 'Clean, conviction-first website for a seed-stage venture firm. Launched to 40K views in week one.',
    year: '2024',
    color: '#2D6A4F',
  },
  {
    client: 'Drift Coffee',
    category: 'Retail Identity',
    description: 'End-to-end brand for a specialty café chain. Identity, interiors concept, and digital presence.',
    year: '2023',
    color: '#8B5E3C',
  },
  {
    client: 'Sona Health',
    category: 'Brand Strategy + Digital',
    description: 'Complete rebrand for a women\'s health platform from seed to Series A.',
    year: '2023',
    color: '#7C3AED',
  },
  {
    client: 'Open Atlas',
    category: 'Editorial Design',
    description: 'Art direction and layout for a geography and culture magazine across print and iPad.',
    year: '2023',
    color: '#0B4F6C',
  },
  {
    client: 'Reverie Hotels',
    category: 'Hospitality Branding',
    description: 'Brand identity for a boutique hotel group across 3 properties. From logo to linen.',
    year: '2022',
    color: '#BF9B30',
  },
];

const processSteps = [
  {
    icon: Search,
    step: '01',
    title: 'Discovery',
    description: 'We dig into your business, competition, and audience before touching a single design file. Most projects are won or lost here.',
  },
  {
    icon: BarChart3,
    step: '02',
    title: 'Strategy',
    description: 'Positioning, naming, and narrative — the scaffolding that makes every design decision defensible.',
  },
  {
    icon: Paintbrush,
    step: '03',
    title: 'Design',
    description: 'Multiple visual directions explored in parallel. Bold moves, not safe defaults.',
  },
  {
    icon: RefreshCw,
    step: '04',
    title: 'Refinement',
    description: 'Two rounds of structured feedback, then execution across all touchpoints with obsessive craft.',
  },
  {
    icon: Rocket,
    step: '05',
    title: 'Launch',
    description: 'Brand guidelines, asset handoff, and launch support. We don\'t vanish after delivery.',
  },
];

const team = [
  {
    name: 'Priyanka Bose',
    role: 'Founder & Creative Director',
    bio: 'Former design lead at Ogilvy Mumbai. 14 years building brands across India and Southeast Asia.',
    initials: 'PB',
  },
  {
    name: 'Arjun Mehta',
    role: 'Head of Strategy',
    bio: 'Ex-BCG consultant who crossed over to brand. Brings analytical rigour to creative problems.',
    initials: 'AM',
  },
  {
    name: 'Suki Tanaka',
    role: 'Lead Motion Designer',
    bio: 'Animates identities and campaigns. Previously at Buck, New York.',
    initials: 'ST',
  },
  {
    name: 'Dev Rajan',
    role: 'Senior Designer',
    bio: 'NID graduate. Obsessive about typography and spatial systems.',
    initials: 'DR',
  },
];

export default function WunderkindStudio() {
  return (
    <MockLayout projectName="Wunderkind Studio" accentColor={terracotta} categoryId="creatives">
      {/* Hero */}
      <section
        className="min-h-[95vh] flex flex-col justify-between relative overflow-hidden"
        style={{ backgroundColor: inkBlack }}
      >
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, ${cream} 0, ${cream} 1px, transparent 0, transparent 50%)`,
            backgroundSize: '20px 20px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 flex-1 flex flex-col justify-center">
          {/* Label row */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-px" style={{ backgroundColor: terracotta }} />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: terracotta }}>
              Boutique Brand Studio — Mumbai
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-10" style={{ color: cream }}>
            We make
            <br />
            <span style={{ color: terracotta }}>brands</span>
            <br />
            people talk about.
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-20">
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Strategy, identity, and motion for companies with something real to say. We work with founders and CMOs who
              are done playing it safe.
            </p>
            <button
              className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-transform hover:scale-105"
              style={{ backgroundColor: terracotta, color: '#fff' }}
            >
              Start a Project
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="relative border-t py-8"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              {[
                { value: '80+', label: 'Brands Built' },
                { value: '6', label: 'Countries' },
                { value: '14', label: 'Years in Practice' },
                { value: '3x', label: 'Avg. Client Growth' },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-black mb-1" style={{ color: terracotta }}>{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-24" style={{ backgroundColor: '#111111' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: terracotta }}>
                Work
              </p>
              <h2 className="text-4xl font-black" style={{ color: cream }}>Selected Projects</h2>
            </div>
            <button className="hidden sm:flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors">
              All Work <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {selectedWork.map((work, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden border transition-all hover:border-white/20"
                style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}
              >
                {/* Color band */}
                <div className="h-1.5 w-full" style={{ backgroundColor: work.color }} />

                <div className="p-7">
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <p className="text-lg font-black mb-1" style={{ color: cream }}>{work.client}</p>
                      <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: work.color }}>
                        {work.category}
                      </p>
                    </div>
                    <span className="text-xs text-gray-600 mt-0.5">{work.year}</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">{work.description}</p>
                  <button className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-gray-300 transition-colors group-hover:gap-2.5">
                    View Case Study <ArrowUpRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24" style={{ backgroundColor: inkBlack }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-16">
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: terracotta }}>
              How We Work
            </p>
            <h2 className="text-4xl font-black mb-4" style={{ color: cream }}>Our Process</h2>
            <p className="text-gray-400">
              Five steps, no shortcuts. Every client gets the same rigor regardless of budget.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 border relative overflow-hidden"
                style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}
              >
                <span
                  className="absolute -top-3 -right-2 text-7xl font-black leading-none select-none"
                  style={{ color: 'rgba(255,255,255,0.04)' }}
                >
                  {step.step}
                </span>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${terracotta}20` }}
                >
                  <step.icon size={18} style={{ color: terracotta }} />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: terracotta }}>
                  {step.step}
                </p>
                <h3 className="text-base font-black mb-3" style={{ color: cream }}>{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24" style={{ backgroundColor: '#111111' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: terracotta }}>
              The People
            </p>
            <h2 className="text-4xl font-black" style={{ color: cream }}>Meet the Studio</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 border"
                style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-black mb-5"
                  style={{ backgroundColor: terracotta, color: '#fff' }}
                >
                  {member.initials}
                </div>
                <h3 className="font-black text-lg mb-0.5" style={{ color: cream }}>{member.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: terracotta }}>
                  {member.role}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>

          {/* Hiring note */}
          <div
            className="mt-10 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border"
            style={{ borderColor: `${terracotta}30`, backgroundColor: `${terracotta}08` }}
          >
            <div className="flex items-center gap-3">
              <Users size={20} style={{ color: terracotta }} />
              <div>
                <p className="font-bold" style={{ color: cream }}>We're hiring a mid-weight designer</p>
                <p className="text-sm text-gray-500">Mumbai-based or willing to relocate. NID/NIFT preferred.</p>
              </div>
            </div>
            <button
              className="flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-bold border transition-colors hover:bg-white/5"
              style={{ borderColor: terracotta, color: terracotta }}
            >
              See Opening
            </button>
          </div>
        </div>
      </section>

      {/* AI Agent Workflow */}
      <section className="py-24" style={{ backgroundColor: inkBlack }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs mb-6"
              style={{ borderColor: `${terracotta}30`, color: terracotta }}
            >
              <Zap size={12} />
              AI-Powered Operations
            </div>
            <h2 className="text-3xl font-black mb-4" style={{ color: cream }}>
              Intelligent Studio Infrastructure
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Our AI agent manages brief intake, conflict checks, and weekly reporting — so the team stays focused on craft.
            </p>
          </div>

          <div
            className="rounded-2xl p-6 lg:p-10 border"
            style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}
          >
            <AgentFlowChart workflow={studioOpsWorkflow} />
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mt-10">
            {[
              {
                icon: FileText,
                title: 'Brief Quality',
                detail: 'Every incoming brief is scored before the team sees it',
              },
              {
                icon: MessageSquare,
                title: 'No Conflicts',
                detail: 'Automated category conflict detection protects client relationships',
              },
              {
                icon: Clock,
                title: 'Always Informed',
                detail: 'Weekly priorities keep leadership ahead of capacity crunches',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border"
                style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}
              >
                <item.icon size={18} className="mb-3" style={{ color: terracotta }} />
                <p className="font-bold text-sm mb-1" style={{ color: cream }}>{item.title}</p>
                <p className="text-xs text-gray-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MockLayout>
  );
}
