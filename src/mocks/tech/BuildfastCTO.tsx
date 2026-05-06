import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import type { AgentWorkflow } from '../../types';
import {
  Rocket,
  Users,
  TrendingUp,
  Star,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Twitter,
  Linkedin,
  Zap,
  Globe,
  Code,
  BarChart,
  ChevronRight,
  Briefcase,
} from 'lucide-react';

const PURPLE = '#7B2FBE';
const PURPLE_LIGHT = '#F3EAFA';
const PURPLE_MID = '#9B59D4';
const BG_WHITE = '#FFFFFF';
const BG_LIGHT = '#F8F9FA';

const recruitingWorkflow: AgentWorkflow = {
  title: 'Recruiting Pipeline & Candidate Screening Agent',
  nodes: [
    {
      id: '1',
      label: 'Applicant Submits Interest',
      description: 'Candidate submits their interest via the hiring page form with role and background.',
      automated: false,
      x: 20,
      y: 40,
    },
    {
      id: '2',
      label: 'Send Screening Questions',
      description: 'AI immediately sends a role-tailored async screening questionnaire — no scheduling required.',
      automated: true,
      x: 200,
      y: 40,
    },
    {
      id: '3',
      label: 'Evaluate & Score',
      description: 'AI evaluates screening answers against defined criteria and scores each applicant 1–10.',
      automated: true,
      x: 380,
      y: 40,
    },
    {
      id: '4',
      label: 'Schedule Interview',
      description: 'Top-scoring candidates are automatically offered calendar slots for a live interview.',
      automated: true,
      x: 560,
      y: 40,
    },
    {
      id: '5',
      label: 'Personalized Rejection',
      description: 'Below-threshold applicants receive a kind, specific rejection email — never a form letter.',
      automated: true,
      x: 380,
      y: 160,
    },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '3', to: '5' },
  ],
};

const products = [
  {
    name: 'Patchwork',
    tagline: 'AI-native project management for async-first teams',
    description:
      'Built and shipped Patchwork from zero to $1.2M ARR in 18 months. Bootstrapped, profitable, 2,400 active teams. Patchwork replaces standups with async AI-generated context summaries — so remote teams stay aligned without meetings.',
    metrics: [
      { value: '$1.2M', label: 'ARR' },
      { value: '2,400', label: 'Active Teams' },
      { value: '4.8★', label: 'Product Hunt Rating' },
    ],
    tech: ['Next.js', 'Supabase', 'OpenAI', 'Railway'],
    status: 'Live',
    statusColor: '#22C55E',
    accent: PURPLE,
  },
  {
    name: 'Formblast',
    tagline: 'Typeform-killer with built-in AI lead scoring',
    description:
      'Acquired by a European SaaS company in 2023 after reaching $280k ARR. Formblast added AI lead scoring to form submissions — letting B2B SaaS teams prioritise follow-up without manual review.',
    metrics: [
      { value: '$280k', label: 'ARR at Exit' },
      { value: '14 mo', label: 'Time to Exit' },
      { value: '3.2×', label: 'Revenue Multiple' },
    ],
    tech: ['React', 'Node.js', 'Postgres', 'AWS Lambda'],
    status: 'Acquired',
    statusColor: '#F59E0B',
    accent: '#F59E0B',
  },
];

const buildingInPublic = [
  {
    icon: Twitter,
    platform: 'Twitter / X',
    handle: '@buildfast_aniket',
    description: 'Daily updates on building Patchwork — revenue numbers, product decisions, failures.',
    followers: '28.4k',
  },
  {
    icon: Linkedin,
    platform: 'LinkedIn',
    handle: 'Aniket Desai',
    description: 'Monthly founder teardowns: what worked, what I wasted money on, what I\'d do differently.',
    followers: '11.2k',
  },
];

const writingPosts = [
  {
    title: 'How I Hired My First 5 Engineers Without a Recruiter',
    date: 'Apr 2025',
    readTime: '9 min',
    metric: '42k views',
  },
  {
    title: 'The Pricing Page That Doubled Our Conversion',
    date: 'Mar 2025',
    readTime: '6 min',
    metric: '18k views',
  },
];

const openRoles = [
  {
    title: 'Senior Full-Stack Engineer',
    type: 'Full-time · Remote',
    tags: ['React', 'TypeScript', 'Supabase'],
    compensation: '₹28–38 LPA + equity',
  },
  {
    title: 'Growth Engineer',
    type: 'Full-time · Remote',
    tags: ['Analytics', 'A/B Testing', 'SQL'],
    compensation: '₹22–30 LPA + equity',
  },
  {
    title: 'Head of Customer Success',
    type: 'Full-time · Hybrid (Mumbai)',
    tags: ['B2B SaaS', 'Churn Reduction', 'Onboarding'],
    compensation: '₹18–24 LPA + equity',
  },
];

export default function BuildfastCTO() {
  return (
    <MockLayout projectName="BuildFast — SaaS CTO Portfolio" accentColor={PURPLE} categoryId="tech">
      <div style={{ backgroundColor: BG_WHITE, color: '#111827' }}>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden border-b border-gray-100">
          {/* Abstract shape */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.07] pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${PURPLE} 0%, transparent 70%)`,
              transform: 'translate(30%, -30%)',
            }}
          />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <div
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
                  style={{ backgroundColor: PURPLE_LIGHT, color: PURPLE }}
                >
                  <Rocket size={12} />
                  Founder · CTO · Builder
                </div>

                <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-none mb-4">
                  I build products
                  <br />
                  <span style={{ color: PURPLE }}>that ship.</span>
                </h1>

                <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
                  Aniket Desai. 2× founder. Shipped Patchwork to $1.2M ARR and sold Formblast in 14 months.
                  I help companies build product infrastructure and the teams to run it.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <button
                    className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white text-sm transition-transform hover:scale-[1.02]"
                    style={{ backgroundColor: PURPLE }}
                  >
                    See My Work
                    <ArrowRight size={16} />
                  </button>
                  <button
                    className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm border-2 border-gray-200 text-gray-700 hover:border-gray-300 transition-colors"
                  >
                    <Briefcase size={15} />
                    We're Hiring
                  </button>
                </div>

                <div className="flex flex-wrap gap-5 text-sm text-gray-500">
                  {['$1.5M+ ARR Built', '1 Successful Exit', 'Building in Public Since 2022', '40k Followers'].map((item) => (
                    <span key={item} className="flex items-center gap-1.5">
                      <CheckCircle size={14} style={{ color: PURPLE }} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: quick stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: BarChart, value: '$1.5M+', label: 'ARR Built', sub: 'Across 2 products' },
                  { icon: Rocket, value: '14 mo', label: 'Time to Exit', sub: 'Formblast acquisition' },
                  { icon: Users, value: '2,400', label: 'Paying Teams', sub: 'Patchwork users' },
                  { icon: Star, value: '4.8★', label: 'Product Hunt', sub: '#1 Product of the Day' },
                ].map(({ icon: Icon, value, label, sub }) => (
                  <div
                    key={label}
                    className="rounded-2xl p-6 border border-gray-100 text-center hover:border-purple-200 transition-colors"
                    style={{ backgroundColor: BG_LIGHT }}
                  >
                    <Icon size={22} className="mx-auto mb-2" style={{ color: PURPLE }} />
                    <p className="text-3xl font-black text-gray-900">{value}</p>
                    <p className="text-sm font-bold text-gray-700 mt-0.5">{label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Portfolio Products ── */}
        <section className="py-24" style={{ backgroundColor: BG_WHITE }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: PURPLE }}>
                Portfolio
              </p>
              <h2 className="text-3xl font-black text-gray-900">Products I've Built</h2>
              <p className="text-gray-500 mt-3 max-w-lg mx-auto">
                End-to-end: idea, code, launch, growth, and (in one case) exit.
              </p>
            </div>

            <div className="space-y-8">
              {products.map(({ name, tagline, description, metrics, tech, status, statusColor, accent }) => (
                <div
                  key={name}
                  className="rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-colors"
                  style={{ backgroundColor: BG_LIGHT }}
                >
                  {/* Mock screenshot bar */}
                  <div
                    className="h-48 flex items-center justify-center relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${accent}15 0%, ${accent}08 100%)` }}
                  >
                    <div
                      className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
                      style={{ backgroundColor: `${statusColor}20`, color: statusColor }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: statusColor }} />
                      {status}
                    </div>
                    <Globe size={64} className="opacity-10" style={{ color: accent }} />
                    <div
                      className="absolute bottom-4 right-4 text-xs font-bold px-3 py-1 rounded-lg"
                      style={{ backgroundColor: `${accent}20`, color: accent }}
                    >
                      <ExternalLink size={12} className="inline mr-1" />
                      View Live
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-black text-gray-900 mb-1">{name}</h3>
                        <p className="font-semibold mb-4" style={{ color: accent }}>{tagline}</p>
                        <p className="text-gray-600 leading-relaxed text-sm mb-5">{description}</p>
                        <div className="flex flex-wrap gap-2">
                          {tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs px-2.5 py-1 rounded-lg border font-medium text-gray-600"
                              style={{ borderColor: '#E5E7EB', backgroundColor: BG_WHITE }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex sm:flex-col gap-4 sm:gap-3 flex-shrink-0">
                        {metrics.map(({ value, label }) => (
                          <div key={label} className="text-center min-w-[80px]">
                            <p className="text-2xl font-black" style={{ color: accent }}>{value}</p>
                            <p className="text-xs text-gray-400 font-medium mt-0.5">{label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Building in Public ── */}
        <section className="py-24" style={{ backgroundColor: BG_LIGHT }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: PURPLE }}>
                Building in Public
              </p>
              <h2 className="text-3xl font-black text-gray-900">No black boxes.</h2>
              <p className="text-gray-500 mt-3 max-w-lg mx-auto">
                I share revenue, failures, and product decisions in real time — because the best founders learn from each other.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {buildingInPublic.map(({ icon: Icon, platform, handle, description, followers }) => (
                <div
                  key={platform}
                  className="rounded-2xl p-6 bg-white border border-gray-100 hover:border-purple-200 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: PURPLE_LIGHT }}
                      >
                        <Icon size={18} style={{ color: PURPLE }} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{platform}</p>
                        <p className="text-xs text-gray-400">{handle}</p>
                      </div>
                    </div>
                    <ExternalLink
                      size={15}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: PURPLE }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp size={13} style={{ color: PURPLE }} />
                    <span className="text-sm font-bold" style={{ color: PURPLE }}>{followers} followers</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Technical Writing ── */}
        <section className="py-24" style={{ backgroundColor: BG_WHITE }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: PURPLE }}>
                  Writing
                </p>
                <h2 className="text-3xl font-black text-gray-900">Technical Writing</h2>
              </div>
              <button
                className="flex items-center gap-1 text-sm font-bold transition-colors hover:text-purple-700"
                style={{ color: PURPLE }}
              >
                All posts <ChevronRight size={15} />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {writingPosts.map(({ title, date, readTime, metric }) => (
                <div
                  key={title}
                  className="rounded-2xl p-6 border border-gray-100 hover:border-purple-200 transition-colors cursor-pointer group"
                  style={{ backgroundColor: BG_LIGHT }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors leading-snug">
                      {title}
                    </h3>
                    <ArrowRight size={16} className="flex-shrink-0 mt-1" style={{ color: PURPLE }} />
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>{date}</span>
                    <span>·</span>
                    <span>{readTime} read</span>
                    <span className="ml-auto font-semibold" style={{ color: PURPLE }}>{metric}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Hiring ── */}
        <section className="py-24" style={{ backgroundColor: BG_LIGHT }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: PURPLE }}>
                Join the Team
              </p>
              <h2 className="text-3xl font-black text-gray-900">We're Hiring</h2>
              <p className="text-gray-500 mt-3 max-w-lg mx-auto">
                Small team, big scope. We ship fast, pay fairly, and give real equity. All roles are async-first.
              </p>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {openRoles.map(({ title, type, tags, compensation }) => (
                <div
                  key={title}
                  className="rounded-2xl p-5 bg-white border border-gray-100 hover:border-purple-200 transition-colors cursor-pointer group flex items-center justify-between gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors">{title}</h3>
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-md font-medium"
                          style={{ backgroundColor: PURPLE_LIGHT, color: PURPLE }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={13} />
                        {type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <TrendingUp size={13} style={{ color: PURPLE }} />
                        {compensation}
                      </span>
                    </div>
                  </div>
                  <button
                    className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold text-sm text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: PURPLE }}
                  >
                    Apply
                    <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI Agent Workflow ── */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-5"
                style={{ backgroundColor: `${PURPLE}30`, color: PURPLE_MID }}
              >
                <Zap size={12} />
                Powered by AI Automation
              </div>
              <h2 className="text-2xl font-black text-white mb-3">Hiring Without the HR Tax</h2>
              <p className="text-gray-400 max-w-lg mx-auto text-sm">
                Our AI agent screens every applicant within minutes, scores against role criteria, and
                books interviews automatically — so we only spend time on people we're genuinely excited about.
              </p>
            </div>

            <AgentFlowChart workflow={recruitingWorkflow} />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20" style={{ backgroundColor: BG_WHITE }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Ready to build something great?
            </h2>
            <p className="text-gray-500 mb-8">
              Whether you're hiring, looking for advisory, or want to talk SaaS strategy — my DMs are open.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base"
                style={{ backgroundColor: PURPLE }}
              >
                <Code size={18} />
                Work With Me
              </button>
              <button className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm border-2 border-gray-200 text-gray-700 hover:border-gray-300 transition-colors">
                <Twitter size={16} />
                Follow the Build
              </button>
            </div>
          </div>
        </section>

      </div>
    </MockLayout>
  );
}
