import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import type { AgentWorkflow } from '../../types';
import {
  Scale,
  FileText,
  Shield,
  TrendingUp,
  Globe,
  Users,
  CheckCircle,
  ArrowRight,
  Download,
  Zap,
  BookOpen,
  ChevronRight,
  Mail,
  Phone,
} from 'lucide-react';

const ACCENT = '#4361EE';
const BG_DARK = '#1A1A2E';
const BG_MID = '#16213E';
const intakeWorkflow: AgentWorkflow = {
  title: 'Client Intake & Document Review Agent',
  nodes: [
    {
      id: '1',
      label: 'Prospect Submits Quote',
      description: 'Founder submits a project brief via website form describing their legal need.',
      automated: false,
      x: 20,
      y: 40,
    },
    {
      id: '2',
      label: 'Categorize Request',
      description: 'AI reads the brief and routes it to the right practice area — formation, IP, M&A, etc.',
      automated: true,
      x: 200,
      y: 40,
    },
    {
      id: '3',
      label: 'Send Explainer',
      description: 'Automatically sends a plain-language explainer PDF matched to the enquiry category.',
      automated: true,
      x: 380,
      y: 40,
    },
    {
      id: '4',
      label: 'Book 20-min Call',
      description: 'AI offers available calendar slots for a scoped discovery call — no back-and-forth.',
      automated: true,
      x: 560,
      y: 40,
    },
    {
      id: '5',
      label: 'Draft Meeting Notes',
      description: 'Post-call, AI generates structured notes and proposed next steps for the attorney.',
      automated: true,
      x: 200,
      y: 160,
    },
    {
      id: '6',
      label: 'Contract Expiry Alert',
      description: 'AI monitors key contract dates and fires renewal reminders 30 days in advance.',
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
    { from: '5', to: '6' },
  ],
};

const practiceAreas = [
  {
    icon: Users,
    title: 'Startup Formation',
    description: 'Pvt Ltd incorporation, shareholder agreements, founders\' pacts, and cap table structuring from day one.',
  },
  {
    icon: FileText,
    title: 'Term Sheet Review',
    description: 'Rapid turnaround on VC term sheets, SAFEs, and convertible notes — we flag what actually matters.',
  },
  {
    icon: TrendingUp,
    title: 'ESOP Structuring',
    description: 'Design and implement employee stock option plans that attract talent and survive due diligence.',
  },
  {
    icon: Shield,
    title: 'IP & Trademarks',
    description: 'Brand protection strategy, trademark filings, patent landscapes, and IP assignment agreements.',
  },
  {
    icon: Scale,
    title: 'M&A',
    description: 'Buy-side and sell-side M&A advisory, due diligence coordination, and SPA negotiations.',
  },
  {
    icon: Globe,
    title: 'Cross-border',
    description: 'FEMA compliance, overseas holding structures, flip transactions, and cross-border IP licensing.',
  },
];

const packages = [
  {
    name: 'Seed Package',
    price: '₹49,000',
    period: 'one-time',
    tagline: 'Everything a pre-seed startup needs',
    features: [
      'Pvt Ltd incorporation',
      'Founders\' agreement',
      'IP assignment deed',
      'First 3 NDAs included',
      '30-day email support',
    ],
    highlight: false,
  },
  {
    name: 'Series A Ready',
    price: '₹1,49,000',
    period: 'one-time',
    tagline: 'Fundraise-grade legal infrastructure',
    features: [
      'All Seed Package items',
      'ESOP pool creation',
      'Term sheet review (2 rounds)',
      'Investor agreement suite',
      'Data privacy policy (PDPB)',
      '3-month retainer included',
    ],
    highlight: true,
  },
  {
    name: 'Retainer',
    price: '₹25,000',
    period: '/month',
    tagline: 'Ongoing counsel for growing startups',
    features: [
      '10 hours/month legal time',
      'Contract reviews',
      'Regulatory advisory',
      'Monthly compliance check',
      'Priority response SLA',
    ],
    highlight: false,
  },
];

const templates = [
  {
    icon: FileText,
    name: 'Founders\' Agreement Template',
    format: 'DOCX • Free',
    description: 'A battle-tested agreement covering IP, vesting, exit, and deadlock resolution.',
  },
  {
    icon: Shield,
    name: 'NDA (Mutual & One-Way)',
    format: 'DOCX • Free',
    description: 'Two variants covering standard mutual and investor-facing one-way confidentiality.',
  },
  {
    icon: BookOpen,
    name: 'ESOP Policy Template',
    format: 'DOCX • Free',
    description: 'A startup-ready ESOP policy with vesting schedule and exercise mechanics.',
  },
];

export default function MehraNairLaw() {
  return (
    <MockLayout projectName="Mehra & Nair — Corporate Law" accentColor={ACCENT} categoryId="legal">
      <div style={{ backgroundColor: BG_DARK, color: '#E2E8F0' }}>

        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${BG_DARK} 0%, ${BG_MID} 70%, #0D1B35 100%)` }}
        >
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `radial-gradient(${ACCENT} 1px, transparent 1px)`,
              backgroundSize: '32px 32px',
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8"
                style={{ backgroundColor: `${ACCENT}20`, color: ACCENT, border: `1px solid ${ACCENT}40` }}
              >
                <Scale size={13} />
                Corporate Law · Built for Founders
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-6 text-white">
                We speak
                <br />
                <span style={{ color: ACCENT }}>founder.</span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
                Mehra & Nair is a boutique corporate law firm obsessed with startups. Fixed fees. Plain English.
                Fast turnarounds. No billing surprises.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: ACCENT }}
                >
                  Get a Free Quote
                  <ArrowRight size={18} />
                </button>
                <button
                  className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border transition-colors hover:border-white/60"
                  style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#E2E8F0' }}
                >
                  View Fixed-Fee Packages
                </button>
              </div>

              <div className="flex flex-wrap gap-6 mt-10 text-sm text-slate-400">
                {['500+ Startups Advised', 'Avg. 48-hr Turnaround', 'No Hidden Billing', 'Y Combinator Alumni Network'].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle size={14} style={{ color: ACCENT }} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <div style={{ backgroundColor: ACCENT }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
              {[
                { value: '500+', label: 'Startups Advised' },
                { value: '₹2,400 Cr', label: 'Capital Raised by Clients' },
                { value: '48 hrs', label: 'Avg. Contract Turnaround' },
                { value: '98%', label: 'Client Retention Rate' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black">{stat.value}</p>
                  <p className="text-sm font-semibold opacity-80 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Practice Areas ── */}
        <section className="py-24" style={{ backgroundColor: BG_MID }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
                What We Do
              </p>
              <h2 className="text-3xl font-black text-white">Practice Areas</h2>
              <p className="text-slate-400 mt-3 max-w-xl mx-auto">
                Every service is scoped and priced upfront — you always know what you're paying before we start.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {practiceAreas.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl p-6 border group hover:border-blue-500/40 transition-colors cursor-pointer"
                  style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${ACCENT}18` }}
                  >
                    <Icon size={22} style={{ color: ACCENT }} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
                  <div
                    className="flex items-center gap-1 mt-4 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: ACCENT }}
                  >
                    Learn more <ChevronRight size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Fixed-Fee Packages ── */}
        <section className="py-24" style={{ backgroundColor: BG_DARK }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
                Transparent Pricing
              </p>
              <h2 className="text-3xl font-black text-white">Fixed-Fee Packages</h2>
              <p className="text-slate-400 mt-3 max-w-xl mx-auto">
                No hourly billing. No meter running. Just clear scope, clear price, clear deliverables.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="rounded-2xl flex flex-col"
                  style={{
                    backgroundColor: pkg.highlight ? ACCENT : 'rgba(255,255,255,0.04)',
                    border: pkg.highlight ? 'none' : '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {pkg.highlight && (
                    <div className="text-center text-xs font-bold text-white/80 pt-4 uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8 flex-1">
                    <h3 className="text-xl font-black text-white mb-1">{pkg.name}</h3>
                    <p className="text-sm mb-6" style={{ color: pkg.highlight ? 'rgba(255,255,255,0.75)' : '#94A3B8' }}>
                      {pkg.tagline}
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-black text-white">{pkg.price}</span>
                      <span className="text-sm ml-1" style={{ color: pkg.highlight ? 'rgba(255,255,255,0.7)' : '#64748B' }}>
                        {pkg.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle
                            size={15}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: pkg.highlight ? 'rgba(255,255,255,0.9)' : ACCENT }}
                          />
                          <span style={{ color: pkg.highlight ? 'rgba(255,255,255,0.85)' : '#CBD5E1' }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-8 pb-8">
                    <button
                      className="w-full py-3 rounded-xl font-bold text-sm transition-opacity hover:opacity-90"
                      style={{
                        backgroundColor: pkg.highlight ? 'rgba(255,255,255,0.2)' : ACCENT,
                        color: '#FFFFFF',
                      }}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Free Template Library ── */}
        <section className="py-24" style={{ backgroundColor: BG_MID }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
                Founder Resources
              </p>
              <h2 className="text-3xl font-black text-white">Free Template Library</h2>
              <p className="text-slate-400 mt-3 max-w-lg mx-auto">
                Lawyer-drafted, startup-tested. Download, adapt, and use — no strings attached.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {templates.map(({ icon: Icon, name, format, description }) => (
                <div
                  key={name}
                  className="rounded-2xl p-6 border group cursor-pointer hover:border-blue-500/30 transition-colors"
                  style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${ACCENT}18` }}
                  >
                    <Icon size={20} style={{ color: ACCENT }} />
                  </div>
                  <h3 className="font-bold text-white mb-1 leading-snug">{name}</h3>
                  <p className="text-xs mb-3" style={{ color: ACCENT }}>{format}</p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">{description}</p>
                  <button
                    className="flex items-center gap-2 text-sm font-semibold transition-colors"
                    style={{ color: ACCENT }}
                  >
                    <Download size={14} />
                    Download Free
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI Agent Workflow ── */}
        <section className="py-24" style={{ backgroundColor: BG_DARK }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
                style={{ backgroundColor: `${ACCENT}25`, color: ACCENT }}
              >
                <Zap size={12} />
                Powered by AI Automation
              </div>
              <h2 className="text-3xl font-black text-white mb-3">Instant Intake. Zero Admin.</h2>
              <p className="text-slate-400 max-w-xl mx-auto text-sm">
                Our AI agent qualifies your enquiry, sends relevant information, and books a discovery call —
                all before our attorneys even open their inbox.
              </p>
            </div>

            <div
              className="rounded-2xl p-6 lg:p-10 border"
              style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: `${ACCENT}25` }}
            >
              <AgentFlowChart workflow={intakeWorkflow} />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20" style={{ backgroundColor: BG_MID }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-black text-white mb-4">
              Ready to build on a solid legal foundation?
            </h2>
            <p className="text-slate-400 mb-8">
              Most founders wait too long to get legal right. Don't be one of them.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <button
                className="px-8 py-4 rounded-xl font-bold text-white text-base"
                style={{ backgroundColor: ACCENT }}
              >
                Book a Free Discovery Call
              </button>
              <button
                className="px-8 py-4 rounded-xl font-bold text-base border"
                style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#E2E8F0' }}
              >
                View All Packages
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
              <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={15} style={{ color: ACCENT }} />
                hello@mehranairlaw.in
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={15} style={{ color: ACCENT }} />
                +91 98765 43210
              </a>
            </div>
          </div>
        </section>

      </div>
    </MockLayout>
  );
}
