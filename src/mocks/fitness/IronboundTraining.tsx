import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import type { AgentWorkflow } from '../../types';
import {
  Dumbbell,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Video,
  Utensils,
  ChevronRight,
  Instagram,
  Youtube,
  TrendingUp,
} from 'lucide-react';

const lime = '#AAFF00';
const black = '#000000';
const darkCard = '#0F0F0F';
const darkBorder = '#1F1F1F';
const darkMid = '#181818';

const checkinWorkflow: AgentWorkflow = {
  title: 'Client Check-in & Progression Agent',
  nodes: [
    {
      id: '1',
      label: 'Weekly Check-in Form',
      description: 'Automated Sunday check-in form sent to every active client — tracks weight, energy, sleep, and adherence.',
      automated: true,
      x: 20,
      y: 40,
    },
    {
      id: '2',
      label: 'Parse Responses',
      description: 'AI reads check-in data and flags trends — plateaus, overtraining signals, or missed targets.',
      automated: true,
      x: 200,
      y: 40,
    },
    {
      id: '3',
      label: 'Flag Fatigue to Coach',
      description: 'Clients showing fatigue, sleep disruption, or declining performance are escalated to the coach with a summary.',
      automated: true,
      x: 380,
      y: 40,
    },
    {
      id: '4',
      label: 'Missed Session Alert',
      description: 'Clients who miss two or more sessions in a week receive an automated check-in message.',
      automated: true,
      x: 560,
      y: 40,
    },
    {
      id: '5',
      label: 'Monthly Progress Report',
      description: 'Auto-generated monthly progress report with before/after metrics, strength gains, and next-month targets.',
      automated: true,
      x: 200,
      y: 160,
    },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '2', to: '4' },
    { from: '4', to: '5' },
  ],
};

const programs = [
  {
    name: 'In-Person PT',
    icon: Dumbbell,
    tagline: '1-on-1 in the gym. No compromise.',
    price: '₹25,000',
    period: '/month',
    sessions: '3 sessions/week',
    features: [
      'Form-perfect technique coaching',
      'Programme updated every 4 weeks',
      'Nutrition macro targets',
      'Direct WhatsApp access to coach',
      'Monthly body composition scan',
    ],
    cta: 'Book a Trial Session',
    highlight: false,
  },
  {
    name: '12-Week Online',
    icon: Video,
    tagline: 'Built for results. Not excuses.',
    price: '₹18,000',
    period: '/12 weeks',
    sessions: 'Self-paced + check-ins',
    features: [
      'Custom training plan (home or gym)',
      'Video exercise library access',
      'Weekly check-ins + plan adjustment',
      'Macro and calorie targets',
      'Private client community access',
    ],
    cta: 'Apply for Next Round',
    highlight: true,
  },
  {
    name: 'Nutrition Add-on',
    icon: Utensils,
    tagline: 'Dial in the other 23 hours.',
    price: '₹6,000',
    period: '/month',
    sessions: 'Add to any programme',
    features: [
      'Full diet audit and reset',
      'Weekly meal plan templates',
      'Supplement guidance',
      'Restaurant-eating strategies',
      'Grocery list and meal prep guide',
    ],
    cta: 'Add Nutrition',
    highlight: false,
  },
];

const results = [
  {
    name: 'Vikram S.',
    change: '-22 kg in 5 months',
    detail: 'Software engineer. No gym history. Took the 12-week online programme twice.',
    before: '98 kg',
    after: '76 kg',
    tag: 'Fat Loss',
  },
  {
    name: 'Priya D.',
    change: 'Deadlift 120 kg in 6 months',
    detail: 'Started with zero barbell experience. Now competes recreationally.',
    before: 'No lifting',
    after: '120 kg 1RM',
    tag: 'Strength',
  },
  {
    name: 'Arjun K.',
    change: '+9 kg muscle in 8 months',
    detail: 'Skinny-fat starting point. In-person PT programme, trained 4x/week.',
    before: '64 kg',
    after: '73 kg lean',
    tag: 'Muscle Gain',
  },
];

const tagColors: Record<string, string> = {
  'Fat Loss': '#EF4444',
  Strength: '#F97316',
  'Muscle Gain': lime,
};

export default function IronboundTraining() {
  return (
    <MockLayout projectName="Ironbound Training" accentColor={lime} categoryId="fitness">

      {/* Hero */}
      <section style={{ backgroundColor: black, borderBottom: `1px solid ${darkBorder}` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="flex-1 text-center lg:text-left">
              {/* Industrial badge */}
              <div
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest px-4 py-2 mb-6"
                style={{
                  backgroundColor: `${lime}15`,
                  color: lime,
                  border: `1px solid ${lime}40`,
                  borderRadius: 2,
                }}
              >
                <Zap size={13} fill={lime} />
                Personal Training · Mumbai
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight mb-2">
                IRONBOUND
              </h1>
              <h2
                className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-6"
                style={{ color: lime }}
              >
                TRAINING
              </h2>

              <p className="text-gray-400 text-lg mb-3 max-w-xl leading-relaxed">
                Stop spinning your wheels. Get a structured programme, expert coaching, and accountability that actually works.
              </p>
              <p className="text-gray-600 text-sm mb-8 max-w-lg">
                Every transformation below started with someone who thought they'd already tried everything.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <button
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-black text-sm text-black transition-transform hover:scale-105"
                  style={{ backgroundColor: lime, borderRadius: 2 }}
                >
                  Start Your Transformation
                  <ArrowRight size={16} />
                </button>
                <button
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-black text-sm text-white border border-gray-700 hover:border-gray-500 transition-colors"
                  style={{ borderRadius: 2 }}
                >
                  View Results
                </button>
              </div>

              <div className="flex items-center gap-5 mt-8 justify-center lg:justify-start">
                <a href="#" className="text-gray-600 hover:text-gray-300 transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-300 transition-colors">
                  <Youtube size={18} />
                </a>
                <span className="text-xs text-gray-700">47k followers · 1.2M views</span>
              </div>
            </div>

            {/* Stats block */}
            <div className="flex-shrink-0 w-full lg:w-72">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: '200+', label: 'Clients Coached' },
                  { value: '6 yrs', label: 'Experience' },
                  { value: '94%', label: 'Goal Hit Rate' },
                  { value: '4.9★', label: 'Avg. Rating' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-5 text-center"
                    style={{ backgroundColor: darkCard, border: `1px solid ${darkBorder}`, borderRadius: 2 }}
                  >
                    <p className="text-3xl font-black" style={{ color: lime }}>{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section style={{ backgroundColor: darkMid }} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p
              className="text-xs font-black uppercase tracking-widest mb-2"
              style={{ color: lime }}
            >
              The Programmes
            </p>
            <h2 className="text-4xl font-black text-white">Choose Your Path</h2>
            <p className="text-gray-500 mt-2 text-sm">No fluff. No guesswork. Just results-focused coaching.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {programs.map((prog, i) => (
              <div
                key={i}
                className="flex flex-col"
                style={{
                  backgroundColor: prog.highlight ? '#0A0A0A' : darkCard,
                  border: `${prog.highlight ? 2 : 1}px solid ${prog.highlight ? lime : darkBorder}`,
                  borderRadius: 4,
                }}
              >
                {prog.highlight && (
                  <div
                    className="text-center text-xs font-black uppercase tracking-widest py-2 text-black"
                    style={{ backgroundColor: lime }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="p-6 flex-1">
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${lime}15`, borderRadius: 2 }}
                  >
                    <prog.icon size={20} style={{ color: lime }} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-0.5">{prog.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{prog.tagline}</p>

                  <div className="flex items-center gap-2 mb-5">
                    <Clock size={13} style={{ color: lime }} />
                    <span className="text-xs text-gray-500">{prog.sessions}</span>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {prog.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: lime }} />
                        <span className="text-gray-400">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-6 pb-6">
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-3xl font-black text-white">{prog.price}</span>
                    <span className="text-sm text-gray-600 mb-1">{prog.period}</span>
                  </div>
                  <button
                    className="w-full py-3 font-black text-sm transition-opacity hover:opacity-90"
                    style={{
                      backgroundColor: prog.highlight ? lime : 'transparent',
                      color: prog.highlight ? black : lime,
                      border: prog.highlight ? 'none' : `1px solid ${lime}`,
                      borderRadius: 2,
                    }}
                  >
                    {prog.cta} <ChevronRight size={14} className="inline" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Results */}
      <section style={{ backgroundColor: black }} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: lime }}>
              Proof
            </p>
            <h2 className="text-4xl font-black text-white">Client Transformations</h2>
            <p className="text-gray-600 text-sm mt-2">Real clients. Real numbers. No filters.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {results.map((r, i) => (
              <div
                key={i}
                className="p-6"
                style={{ backgroundColor: darkCard, border: `1px solid ${darkBorder}`, borderRadius: 4 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="text-xs font-black uppercase tracking-wider px-2.5 py-1"
                    style={{
                      backgroundColor: `${tagColors[r.tag]}20`,
                      color: tagColors[r.tag],
                      borderRadius: 2,
                    }}
                  >
                    {r.tag}
                  </span>
                  <div className="flex">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={12} fill={lime} style={{ color: lime }} />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-black flex-shrink-0"
                    style={{ backgroundColor: lime }}
                  >
                    {r.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-black text-white text-sm">{r.name}</p>
                    <p className="text-xs font-black" style={{ color: lime }}>{r.change}</p>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mb-4 leading-relaxed">{r.detail}</p>

                <div
                  className="flex items-center justify-between rounded p-3 text-xs"
                  style={{ backgroundColor: `${lime}08` }}
                >
                  <div className="text-center">
                    <p className="text-gray-600 uppercase tracking-wider mb-0.5">Before</p>
                    <p className="font-black text-gray-400">{r.before}</p>
                  </div>
                  <TrendingUp size={16} style={{ color: lime }} />
                  <div className="text-center">
                    <p className="text-gray-600 uppercase tracking-wider mb-0.5">After</p>
                    <p className="font-black" style={{ color: lime }}>{r.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coach Profile */}
      <section style={{ backgroundColor: darkMid, borderTop: `1px solid ${darkBorder}` }} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-shrink-0 lg:w-60">
              <div
                className="w-full aspect-square flex items-center justify-center text-6xl font-black text-black"
                style={{ backgroundColor: lime, borderRadius: 4 }}
              >
                IR
              </div>
              <div className="mt-4 space-y-2">
                {[
                  'NSCA-CSCS Certified',
                  'Precision Nutrition Level 1',
                  '6+ Years Coaching',
                  '200+ Clients Trained',
                ].map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2 text-xs font-semibold text-gray-400"
                  >
                    <CheckCircle size={12} style={{ color: lime }} />
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: lime }}>
                The Coach
              </p>
              <h2 className="text-4xl font-black text-white mb-1">Ishaan Rajan</h2>
              <p className="text-gray-500 text-sm mb-5">Founder, Ironbound Training</p>
              <p className="text-gray-400 leading-relaxed mb-4">
                I spent four years as a competitive powerlifter before I started coaching. I've made every mistake in the book — so my clients don't have to. I work with busy professionals, beginners, and anyone who's tired of programmes that don't account for real life.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-7">
                My approach: heavy compound lifts, progressive overload, sustainable nutrition. No extreme cuts, no crash diets, no bullshit. Just the fundamentals, done consistently, forever.
              </p>
              <button
                className="inline-flex items-center gap-2 px-6 py-3 font-black text-sm text-black"
                style={{ backgroundColor: lime, borderRadius: 2 }}
              >
                Apply to Work with Ishaan
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Workflow */}
      <section style={{ backgroundColor: black, borderTop: `1px solid ${darkBorder}` }} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: lime }}>
              AI-Powered Coaching
            </p>
            <h2 className="text-4xl font-black text-white">Client Check-in System</h2>
            <p className="text-gray-600 mt-2 text-sm max-w-xl mx-auto">
              An automated agent tracks every client's progress, flags issues, and keeps Ishaan focused on coaching — not admin.
            </p>
          </div>
          <div
            className="p-6 lg:p-10"
            style={{ backgroundColor: darkCard, border: `1px solid ${darkBorder}`, borderRadius: 4 }}
          >
            <AgentFlowChart workflow={checkinWorkflow} />
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            {[
              { icon: Zap, title: 'Automated Weekly Forms', desc: 'Every active client gets a Sunday check-in — no manual chasing.' },
              { icon: TrendingUp, title: 'AI Trend Detection', desc: 'Flagged plateaus and fatigue signals before they become setbacks.' },
              { icon: Dumbbell, title: 'Coach Stays in Control', desc: 'AI surfaces the data; Ishaan makes every coaching call.' },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5"
                style={{ backgroundColor: darkCard, border: `1px solid ${darkBorder}`, borderRadius: 4 }}
              >
                <item.icon size={18} className="mb-3" style={{ color: lime }} />
                <p className="text-sm font-black text-white mb-1">{item.title}</p>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </MockLayout>
  );
}
