import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import type { AgentWorkflow } from '../../types';
import {
  Search,
  Mail,
  ChevronRight,
  Shield,
  Zap,
  Users,
  AlertTriangle,
  CheckCircle,
  MapPin,
  Clock,
  Tag,
  Lock,
} from 'lucide-react';

const accentBlue = '#2563EB';
const charcoal = '#1E293B';
const lightBg = '#F8FAFC';
const cardBg = '#FFFFFF';
const borderGray = '#E2E8F0';
const textMuted = '#64748B';

const editorialWorkflow: AgentWorkflow = {
  title: 'Editorial Workflow & Tip Processing',
  nodes: [
    {
      id: '1',
      label: 'Tip Submitted',
      description: 'Reader submits a tip via encrypted form, Signal, or email — anonymity preserved end-to-end.',
      automated: false,
      x: 20,
      y: 40,
    },
    {
      id: '2',
      label: 'Plausibility Check',
      description: 'AI cross-references the tip against public records, past coverage, and known bad-actor patterns.',
      automated: true,
      x: 200,
      y: 40,
    },
    {
      id: '3',
      label: 'Priority Score',
      description: 'Tip is scored for public interest, verifiability, and urgency on a 1–10 scale.',
      automated: true,
      x: 380,
      y: 40,
    },
    {
      id: '4',
      label: 'Route to Editor',
      description: 'High-priority tips routed to the relevant beat editor with a briefing summary.',
      automated: true,
      x: 560,
      y: 40,
    },
    {
      id: '5',
      label: 'Auto Cross-Post',
      description: 'Published stories are automatically cross-posted to newsletter, social media, and partner syndications.',
      automated: true,
      x: 200,
      y: 160,
    },
    {
      id: '6',
      label: 'Monthly Transparency Report',
      description: 'Automated monthly report on tips received, stories published, and editorial decisions made.',
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

const stories = [
  {
    tag: 'Housing',
    title: 'Ward 14\'s Affordable Housing Demolitions: Who Approved the Plans?',
    author: 'Meera Pillai',
    time: '3 hours ago',
    readTime: '8 min read',
    summary: 'Documents obtained via RTI reveal approvals were granted without mandatory public hearings in three sub-wards.',
    featured: true,
  },
  {
    tag: 'Water',
    title: 'Groundwater Levels Drop 12% in Eastern Zones — Municipal Data Withheld',
    author: 'Rohan Das',
    time: 'Yesterday',
    readTime: '6 min read',
    summary: 'Internal reports show crisis warnings raised in 2022 were buried.',
    featured: false,
  },
  {
    tag: 'Education',
    title: 'Six Government Schools Still Without Functional Toilets',
    author: 'Anjali Srivastava',
    time: '2 days ago',
    readTime: '5 min read',
    summary: 'A field audit across 18 schools finds basic infrastructure gaps years after official completion claims.',
    featured: false,
  },
  {
    tag: 'Budget',
    title: 'Ward Fund Allocation 2025: The Full Breakdown',
    author: 'District Lens Desk',
    time: '3 days ago',
    readTime: '12 min read',
    summary: 'An interactive breakdown of how ₹42 crore in ward funds was spent — and what was left unspent.',
    featured: false,
  },
];

const membershipTiers = [
  {
    name: 'Supporter',
    price: '₹100',
    period: '/month',
    perks: ['Ad-free reading', 'Daily newsletter', 'Supporter badge'],
    cta: 'Join as Supporter',
    highlight: false,
  },
  {
    name: 'Sustainer',
    price: '₹300',
    period: '/month',
    perks: ['Everything in Supporter', 'Monthly Q&A with editors', 'Exclusive data briefings', 'Early access to investigations'],
    cta: 'Become a Sustainer',
    highlight: true,
  },
  {
    name: 'Patron',
    price: '₹1,000',
    period: '/month',
    perks: ['Everything in Sustainer', 'Annual editorial dinner invite', 'Named in masthead', 'Direct tip line access'],
    cta: 'Become a Patron',
    highlight: false,
  },
];

const tagColors: Record<string, string> = {
  Housing: '#7C3AED',
  Water: '#0284C7',
  Education: '#059669',
  Budget: '#D97706',
};

export default function DistrictLens() {
  return (
    <MockLayout projectName="The District Lens" accentColor={accentBlue} categoryId="media">

      {/* Navigation bar */}
      <nav style={{ backgroundColor: cardBg, borderBottom: `1px solid ${borderGray}` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-6">
              <span className="text-xl font-black" style={{ color: charcoal }}>
                The District <span style={{ color: accentBlue }}>Lens</span>
              </span>
              <div className="hidden md:flex items-center gap-5 text-sm font-medium text-slate-600">
                {['News', 'Investigations', 'Data', 'Opinion', 'About'].map((item) => (
                  <a key={item} href="#" className="hover:text-slate-900 transition-colors">{item}</a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-1.5 text-slate-500 hover:text-slate-800 transition-colors">
                <Search size={17} />
              </button>
              <a
                href="#"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold px-4 py-1.5 rounded-lg text-white"
                style={{ backgroundColor: accentBlue }}
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ backgroundColor: charcoal }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col lg:flex-row items-start gap-10">
            <div className="flex-1">
              <div
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-5"
                style={{ backgroundColor: `${accentBlue}25`, color: '#93C5FD' }}
              >
                <MapPin size={12} />
                Hyperlocal. Independent. Accountable.
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
                The news your ward <br />deserves to know.
              </h1>
              <p className="text-slate-400 text-base mb-8 max-w-xl leading-relaxed">
                The District Lens is a reader-funded, independent newsroom covering local governance, civic accountability, and community affairs — without advertiser pressure or political capture.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white"
                  style={{ backgroundColor: accentBlue }}
                >
                  <Mail size={15} />
                  Get the Daily Newsletter
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold border border-slate-600 text-slate-300 hover:border-slate-400 transition-colors"
                >
                  Support Our Work
                </a>
              </div>
            </div>

            <div className="flex-shrink-0 lg:w-80 w-full">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: '18,000+', label: 'Monthly Readers' },
                  { value: '340+', label: 'Stories Published' },
                  { value: '12', label: 'RTIs Filed' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg p-4 text-center"
                    style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                  >
                    <p className="text-2xl font-black text-white">{stat.value}</p>
                    <p className="text-xs text-slate-400 mt-1 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div
                className="mt-4 rounded-lg p-4 border"
                style={{ backgroundColor: 'rgba(37,99,235,0.15)', borderColor: `${accentBlue}40` }}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-1">Reader-Funded</p>
                <p className="text-sm text-slate-400 leading-snug">
                  100% of our revenue comes from reader memberships. No corporate sponsors. No government grants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Stories */}
      <section style={{ backgroundColor: lightBg }} className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black" style={{ color: charcoal }}>Latest Stories</h2>
            <a
              href="#"
              className="flex items-center gap-1 text-sm font-semibold"
              style={{ color: accentBlue }}
            >
              All Stories <ChevronRight size={14} />
            </a>
          </div>

          {/* Featured story */}
          {stories.filter((s) => s.featured).map((story, i) => (
            <div
              key={i}
              className="rounded-xl p-6 mb-5 border-l-4 cursor-pointer group"
              style={{
                backgroundColor: cardBg,
                borderLeftColor: accentBlue,
                border: `1px solid ${borderGray}`,
                borderLeft: `4px solid ${accentBlue}`,
              }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded"
                  style={{
                    backgroundColor: `${tagColors[story.tag] || accentBlue}15`,
                    color: tagColors[story.tag] || accentBlue,
                  }}
                >
                  <Tag size={10} className="inline mr-1" />
                  {story.tag}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Clock size={11} />
                  {story.time}
                </span>
                <span className="text-xs text-gray-400">{story.readTime}</span>
              </div>
              <h3
                className="text-xl font-bold mb-2 leading-snug group-hover:underline"
                style={{ color: charcoal }}
              >
                {story.title}
              </h3>
              <p className="text-sm text-slate-500 mb-3">{story.summary}</p>
              <p className="text-xs text-slate-400">By {story.author}</p>
            </div>
          ))}

          {/* Story grid */}
          <div className="grid sm:grid-cols-3 gap-5">
            {stories.filter((s) => !s.featured).map((story, i) => (
              <div
                key={i}
                className="rounded-xl p-5 border cursor-pointer group hover:shadow-md transition-shadow"
                style={{ backgroundColor: cardBg, borderColor: borderGray }}
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: `${tagColors[story.tag] || accentBlue}12`,
                      color: tagColors[story.tag] || accentBlue,
                    }}
                  >
                    {story.tag}
                  </span>
                  <span className="text-xs text-gray-400 ml-auto">{story.time}</span>
                </div>
                <h3
                  className="text-sm font-bold mb-2 leading-snug group-hover:underline"
                  style={{ color: charcoal }}
                >
                  {story.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">{story.summary}</p>
                <p className="text-xs text-slate-400 mt-3">{story.readTime} · {story.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter signup */}
      <section style={{ backgroundColor: accentBlue }} className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2">Free Daily Briefing</p>
          <h2 className="text-3xl font-black text-white mb-3">Stay Informed. Stay Local.</h2>
          <p className="text-blue-100 mb-7 text-sm">
            The District Lens Morning Brief lands in 18,000+ inboxes each day. District news, civic alerts, and one story worth your time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-sm text-slate-800 outline-none"
              style={{ backgroundColor: '#FFFFFF' }}
            />
            <button className="px-6 py-3 rounded-lg text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors whitespace-nowrap">
              Subscribe Free
            </button>
          </div>
          <p className="text-blue-300 text-xs mt-3">No spam. Unsubscribe anytime. 100% free.</p>
        </div>
      </section>

      {/* Membership */}
      <section style={{ backgroundColor: lightBg }} className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: accentBlue }}>
              Reader-Funded Journalism
            </p>
            <h2 className="text-3xl font-black" style={{ color: charcoal }}>Support Independent Reporting</h2>
            <p className="text-slate-500 mt-2 text-sm max-w-xl mx-auto">
              Every membership directly funds investigations, RTI filings, and the reporters who do the work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {membershipTiers.map((tier, i) => (
              <div
                key={i}
                className="rounded-xl p-6 border flex flex-col"
                style={{
                  backgroundColor: tier.highlight ? charcoal : cardBg,
                  borderColor: tier.highlight ? accentBlue : borderGray,
                  borderWidth: tier.highlight ? 2 : 1,
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: tier.highlight ? '#93C5FD' : accentBlue }}
                >
                  {tier.name}
                </p>
                <div className="flex items-end gap-1 mb-5">
                  <span
                    className="text-4xl font-black"
                    style={{ color: tier.highlight ? '#FFFFFF' : charcoal }}
                  >
                    {tier.price}
                  </span>
                  <span className="text-sm mb-1" style={{ color: tier.highlight ? '#94A3B8' : textMuted }}>
                    {tier.period}
                  </span>
                </div>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm">
                      <CheckCircle
                        size={14}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: tier.highlight ? '#60A5FA' : accentBlue }}
                      />
                      <span style={{ color: tier.highlight ? '#CBD5E1' : '#475569' }}>{perk}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-2.5 rounded-lg text-sm font-bold transition-colors"
                  style={{
                    backgroundColor: tier.highlight ? accentBlue : `${accentBlue}10`,
                    color: tier.highlight ? '#FFFFFF' : accentBlue,
                  }}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tip Submission */}
      <section style={{ backgroundColor: cardBg, borderTop: `1px solid ${borderGray}`, borderBottom: `1px solid ${borderGray}` }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Shield size={20} style={{ color: accentBlue }} />
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: accentBlue }}>
                  Secure Tip Line
                </p>
              </div>
              <h2 className="text-3xl font-black mb-3" style={{ color: charcoal }}>
                Know Something We Should?
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                We protect our sources. Tips can be submitted anonymously via encrypted form, Signal, or SecureDrop. All submissions are reviewed by editors, not automated systems.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Lock, label: 'End-to-end encrypted' },
                  { icon: Shield, label: 'Anonymous option' },
                  { icon: AlertTriangle, label: 'Whistleblower protected' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg"
                    style={{ backgroundColor: `${accentBlue}08`, color: accentBlue }}
                  >
                    <item.icon size={13} />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            <div
              className="flex-shrink-0 lg:w-72 w-full rounded-xl p-5 border"
              style={{ backgroundColor: lightBg, borderColor: borderGray }}
            >
              <p className="text-sm font-bold mb-4" style={{ color: charcoal }}>Submit a Tip</p>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Subject (optional)"
                  className="w-full px-3.5 py-2.5 rounded-lg border text-sm outline-none"
                  style={{ borderColor: borderGray, backgroundColor: cardBg, color: charcoal }}
                />
                <textarea
                  rows={4}
                  placeholder="Describe what you know..."
                  className="w-full px-3.5 py-2.5 rounded-lg border text-sm outline-none resize-none"
                  style={{ borderColor: borderGray, backgroundColor: cardBg, color: charcoal }}
                />
                <button
                  className="w-full py-2.5 rounded-lg text-sm font-bold text-white"
                  style={{ backgroundColor: accentBlue }}
                >
                  Submit Securely
                </button>
                <p className="text-xs text-center text-slate-400">Your identity is never stored without consent.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Workflow */}
      <section style={{ backgroundColor: charcoal }} className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-4" style={{ backgroundColor: `${accentBlue}25`, color: '#93C5FD' }}>
              <Zap size={12} />
              AI-Assisted Editorial
            </div>
            <h2 className="text-3xl font-black text-white">How Tips Become Stories</h2>
            <p className="text-slate-400 mt-2 text-sm max-w-xl mx-auto">
              Our editorial AI helps prioritise tips and automate distribution — keeping editors free for the reporting that matters.
            </p>
          </div>
          <div
            className="rounded-xl p-6 lg:p-10 border"
            style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <AgentFlowChart workflow={editorialWorkflow} />
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {[
              { icon: Shield, title: 'Source Protection First', desc: 'Tip processing never logs IP addresses or sender metadata.' },
              { icon: Users, title: 'Editor-Reviewed', desc: 'Every routed tip is reviewed by a human editor before any action.' },
              { icon: Zap, title: 'Transparent Reporting', desc: 'Monthly public reports on tips received and editorial decisions.' },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl p-5 border"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <item.icon size={18} className="mb-3" style={{ color: '#93C5FD' }} />
                <p className="text-sm font-bold text-white mb-1">{item.title}</p>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </MockLayout>
  );
}
