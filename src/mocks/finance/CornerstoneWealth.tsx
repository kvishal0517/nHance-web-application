import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import type { AgentWorkflow } from '../../types';
import {
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Globe,
  Calendar,
  FileText,
  ArrowRight,
  Calculator,
  CheckCircle,
  Lock,
  Star,
  Bell,
} from 'lucide-react';

const navy = '#0B2545';
const navyLight = '#13315D';
const gold = '#D4AF37';

const leadNurturingWorkflow: AgentWorkflow = {
  title: 'Lead Nurturing & Financial Review Agent',
  nodes: [
    {
      id: '1',
      label: 'Prospect Uses Calculator',
      description: 'A prospect uses the SIP or retirement calculator on the website.',
      automated: false,
      x: 20,
      y: 40,
    },
    {
      id: '2',
      label: 'Capture & Tag Lead',
      description: 'Lead is captured with their goal type, age, and income bracket automatically tagged.',
      automated: true,
      x: 200,
      y: 40,
    },
    {
      id: '3',
      label: 'Send Relevant Resource',
      description: 'A curated guide or case study matching the lead\'s financial goal is sent instantly.',
      automated: true,
      x: 380,
      y: 40,
    },
    {
      id: '4',
      label: 'Pre-Call Questionnaire',
      description: 'Before a discovery call, a detailed financial questionnaire is sent to save advisor time.',
      automated: true,
      x: 560,
      y: 40,
    },
    {
      id: '5',
      label: 'Quarterly Portfolio Check',
      description: 'Existing clients receive automated quarterly portfolio review summaries.',
      automated: true,
      x: 200,
      y: 160,
    },
    {
      id: '6',
      label: 'Regulatory Update Alert',
      description: 'Clients are notified of tax law or SEBI regulation changes relevant to their portfolio.',
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

const services = [
  {
    icon: TrendingUp,
    title: 'Financial Planning',
    description: 'Goal-based plans for wealth accumulation, major milestones, and life events — with clear, actionable steps.',
    highlight: false,
  },
  {
    icon: BarChart3,
    title: 'Tax Optimization',
    description: 'Legal tax minimization strategies for salaried individuals, business owners, and HUFs.',
    highlight: true,
  },
  {
    icon: Globe,
    title: 'NRI Advisory',
    description: 'Investment and compliance guidance for Non-Resident Indians navigating FEMA and cross-border taxation.',
    highlight: false,
  },
  {
    icon: Calendar,
    title: 'Retirement Planning',
    description: 'Structured corpus-building using NPS, EPF, annuities, and equity for a fully-funded retirement.',
    highlight: false,
  },
  {
    icon: FileText,
    title: 'Estate Planning',
    description: 'Wills, trusts, and succession planning to ensure your wealth transfers exactly as intended.',
    highlight: false,
  },
];

const personas = [
  {
    title: 'Senior Professionals',
    description: 'Ages 35–55 with complex compensation — ESOP, bonus, equity. We untangle the tax implications and build portfolios that match their risk maturity.',
    tags: ['Portfolio Review', 'ESOP Planning', 'Tax Filing'],
    icon: TrendingUp,
  },
  {
    title: 'NRI Clients',
    description: 'Indians overseas navigating double taxation, FEMA compliance, and repatriation. We handle both sides of the border.',
    tags: ['FEMA Compliance', 'Cross-Border Tax', 'Repatriation'],
    icon: Globe,
  },
  {
    title: 'Business Owners',
    description: 'Entrepreneurs separating business and personal wealth, planning exits, and structuring for generational transfer.',
    tags: ['Business Valuation', 'Succession', 'HUF Planning'],
    icon: BarChart3,
  },
];

const calculators = [
  {
    title: 'SIP Returns',
    description: 'See how your monthly investment compounds over time.',
    metric: '₹50L in 15 yrs',
    sub: 'at ₹10K/month, 12% p.a.',
  },
  {
    title: 'Retirement Corpus',
    description: 'How much do you need to retire comfortably?',
    metric: '₹3.2 Cr',
    sub: 'needed at 60 for 25yr retirement',
  },
  {
    title: 'Tax Savings',
    description: 'Maximum deductions you\'re eligible for this year.',
    metric: '₹46,800',
    sub: 'max savings under 80C + NPS',
  },
];

const trustSignals = [
  { value: '₹500 Cr+', label: 'Assets Under Advisory' },
  { value: '18 Yrs', label: 'In Practice' },
  { value: '340+', label: 'Client Families' },
  { value: 'SEBI RIA', label: 'Registered' },
];

export default function CornerstoneWealth() {
  return (
    <MockLayout projectName="Cornerstone Wealth Advisory" accentColor={gold} categoryId="finance">
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${navy} 0%, ${navyLight} 70%, #0F2E5A 100%)` }}
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(${gold} 1px, transparent 1px), linear-gradient(90deg, ${gold} 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Trust badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 border"
                style={{ borderColor: `${gold}40`, backgroundColor: `${gold}10`, color: gold }}
              >
                <ShieldCheck size={13} />
                SEBI Registered Investment Advisor · Reg. No. INA000000000
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Your financial
                <br />
                clarity starts
                <br />
                <span style={{ color: gold }}>here.</span>
              </h1>

              <p className="text-lg text-blue-200 mb-10 max-w-lg leading-relaxed">
                Fee-only, fiduciary wealth advisory for senior professionals, business owners, and NRI families.
                No commissions. No conflicts. Only your best interest.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-bold text-sm text-black transition-transform hover:scale-105"
                  style={{ backgroundColor: gold }}
                >
                  Book a Free Discovery Call
                  <ArrowRight size={16} />
                </button>
                <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-bold text-sm text-white border border-white/20 hover:border-white/40 transition-colors">
                  <Calculator size={16} />
                  Use Free Calculators
                </button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-blue-300">
                {[
                  'No product commissions',
                  'Transparent fee structure',
                  'SEBI registered & compliant',
                ].map((item, i) => (
                  <span key={i} className="flex items-center gap-1.5">
                    <CheckCircle size={14} style={{ color: gold }} />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Trust stats card */}
            <div>
              <div
                className="rounded-2xl p-8 border"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: `${gold}30` }}
              >
                <p className="text-xs uppercase tracking-widest mb-6" style={{ color: gold }}>
                  Track Record
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {trustSignals.map((s, i) => (
                    <div key={i}>
                      <p className="text-3xl font-black mb-1" style={{ color: gold }}>{s.value}</p>
                      <p className="text-xs text-blue-300 uppercase tracking-wide">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-black text-black"
                      style={{ backgroundColor: gold }}
                    >
                      SC
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Srinivas Chakravarthy</p>
                      <p className="text-blue-400 text-xs">Founder & Lead Advisor · CFA, CFP®</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm italic text-blue-300">
                    "Cornerstone turned our financial chaos into a clear 10-year roadmap. Worth every rupee."
                  </p>
                  <p className="text-xs text-blue-500 mt-1">— Client since 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24" style={{ backgroundColor: navy }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: gold }}>What We Offer</p>
            <h2 className="text-3xl font-black text-white mb-3">Advisory Services</h2>
            <p className="text-blue-300 max-w-xl mx-auto">
              Comprehensive wealth management across every dimension of your financial life.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <div
                key={i}
                className={`rounded-2xl p-7 border transition-all hover:scale-[1.01] ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                style={{
                  backgroundColor: service.highlight ? `${gold}10` : 'rgba(255,255,255,0.04)',
                  borderColor: service.highlight ? `${gold}40` : 'rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${gold}15` }}
                >
                  <service.icon size={22} style={{ color: gold }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-blue-300 leading-relaxed mb-5">{service.description}</p>
                <button
                  className="inline-flex items-center gap-1.5 text-xs font-semibold"
                  style={{ color: gold }}
                >
                  Learn More <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24" style={{ backgroundColor: navyLight }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: gold }}>Our Clients</p>
            <h2 className="text-3xl font-black text-white mb-3">Who We Serve</h2>
            <p className="text-blue-300">
              We specialize in complexity. If your financial situation has more moving parts than a standard plan can handle, you've found the right advisor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {personas.map((persona, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 border"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.07)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${gold}12` }}
                >
                  <persona.icon size={22} style={{ color: gold }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{persona.title}</h3>
                <p className="text-sm text-blue-300 leading-relaxed mb-5">{persona.description}</p>
                <div className="flex flex-wrap gap-2">
                  {persona.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: `${gold}15`, color: gold }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculators Teaser */}
      <section className="py-24" style={{ backgroundColor: navy }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: gold }}>Free Tools</p>
            <h2 className="text-3xl font-black text-white mb-3">Financial Calculators</h2>
            <p className="text-blue-300 max-w-xl mx-auto">
              Start with clarity. Use our calculators to understand your numbers — no sign-up required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {calculators.map((calc, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 border group hover:border-yellow-600/40 transition-all cursor-pointer"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.07)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${gold}12` }}
                >
                  <Calculator size={20} style={{ color: gold }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{calc.title} Calculator</h3>
                <p className="text-sm text-blue-300 mb-5">{calc.description}</p>

                {/* Sample output */}
                <div
                  className="rounded-xl p-4 mb-5"
                  style={{ backgroundColor: `${gold}08`, border: `1px solid ${gold}20` }}
                >
                  <p className="text-2xl font-black mb-0.5" style={{ color: gold }}>{calc.metric}</p>
                  <p className="text-xs text-blue-400">{calc.sub}</p>
                </div>

                <button
                  className="w-full py-2.5 rounded-lg text-sm font-semibold border transition-colors"
                  style={{ borderColor: `${gold}40`, color: gold }}
                >
                  Try Calculator
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-blue-400 flex items-center justify-center gap-2">
              <Lock size={13} />
              All calculations are private. We never store your data without consent.
            </p>
          </div>
        </div>
      </section>

      {/* AI Agent Workflow */}
      <section className="py-24" style={{ backgroundColor: navyLight }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs mb-6"
              style={{ borderColor: `${gold}30`, backgroundColor: `${gold}08`, color: gold }}
            >
              <Bell size={12} />
              Always-On Client Care
            </div>
            <h2 className="text-3xl font-black text-white mb-4">
              From Calculator to Conversation — Automatically
            </h2>
            <p className="text-blue-300 max-w-xl mx-auto">
              Our AI agent nurtures every lead intelligently and keeps existing clients informed on their portfolio and regulatory changes.
            </p>
          </div>

          <div
            className="rounded-2xl p-6 lg:p-10 border"
            style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: `${gold}20` }}
          >
            <AgentFlowChart workflow={leadNurturingWorkflow} />
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mt-10">
            {[
              { icon: Calculator, title: 'Smart Lead Capture', detail: 'Every calculator user tagged with goal type and income bracket' },
              { icon: FileText, title: 'Personalized Nurture', detail: 'Resources matched to each prospect\'s financial objective automatically' },
              { icon: ShieldCheck, title: 'Compliant Communication', detail: 'All automated messages follow SEBI communication guidelines' },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border"
                style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}
              >
                <item.icon size={18} className="mb-3" style={{ color: gold }} />
                <p className="font-bold text-sm text-white mb-1">{item.title}</p>
                <p className="text-xs text-blue-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MockLayout>
  );
}
