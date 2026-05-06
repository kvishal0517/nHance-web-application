import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import type { AgentWorkflow } from '../../types';
import {
  Trophy,
  Star,
  Users,
  BookOpen,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Award,
  TrendingUp,
  Clock,
  CheckCircle,
} from 'lucide-react';

const accentGold = '#F5A623';
const navyDark = '#0A1628';
const navyMid = '#1A2744';

const admissionsWorkflow: AgentWorkflow = {
  title: 'Admissions & Doubt Resolution Agent',
  nodes: [
    {
      id: '1',
      label: 'Student Enquiry',
      description: 'Student submits enquiry via website form, WhatsApp, or call.',
      automated: false,
      x: 20,
      y: 40,
    },
    {
      id: '2',
      label: 'Auto-Classify by Exam',
      description: 'AI detects target exam (JEE/NEET/Foundation) and student grade from enquiry text.',
      automated: true,
      x: 200,
      y: 40,
    },
    {
      id: '3',
      label: 'Send Personalized Brochure',
      description: 'Automatically sends the matching course brochure with fee structure and schedule.',
      automated: true,
      x: 380,
      y: 20,
    },
    {
      id: '4',
      label: 'Schedule Follow-up',
      description: 'Books a counselling call slot and sends a calendar invite to the student.',
      automated: true,
      x: 560,
      y: 20,
    },
    {
      id: '5',
      label: 'Route Doubt to Teacher',
      description: 'Student doubt is classified by topic and routed to the right subject faculty.',
      automated: true,
      x: 200,
      y: 160,
    },
    {
      id: '6',
      label: 'Send Acknowledgment',
      description: 'Student receives instant acknowledgment with estimated resolution time.',
      automated: true,
      x: 380,
      y: 160,
    },
    {
      id: '7',
      label: 'Weekly Report to Director',
      description: 'Automated weekly digest of admissions pipeline and doubt resolution stats.',
      automated: true,
      x: 560,
      y: 160,
    },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '2', to: '5' },
    { from: '5', to: '6' },
    { from: '6', to: '7' },
  ],
};

const courses = [
  {
    name: 'JEE Main',
    tagline: 'Engineering Foundation',
    duration: '1 Year',
    seats: '60 Seats',
    fee: '₹1,20,000',
    features: ['Daily 6-hr sessions', 'Weekly mock tests', 'Personal mentorship', 'Study material included'],
    highlight: false,
  },
  {
    name: 'JEE Advanced',
    tagline: 'IIT Aspirants Programme',
    duration: '2 Years',
    seats: '40 Seats',
    fee: '₹2,40,000',
    features: ['Intensive problem solving', 'IIT faculty guest sessions', 'AIR-focused strategy', 'Hostel facility'],
    highlight: true,
  },
  {
    name: 'NEET',
    tagline: 'Medical Entrance Mastery',
    duration: '1 Year',
    seats: '60 Seats',
    fee: '₹1,10,000',
    features: ['NCERT deep-dive', 'Biology lab sessions', 'Previous year analysis', 'Online revision portal'],
    highlight: false,
  },
  {
    name: 'Foundation',
    tagline: 'Class 8–10 Preparation',
    duration: '3 Years',
    seats: '80 Seats',
    fee: '₹75,000/yr',
    features: ['Olympiad preparation', 'Concept-first approach', 'Parent progress reports', 'Scholarship tests'],
    highlight: false,
  },
];

const faculty = [
  {
    name: 'Prof. Anil Sharma',
    subject: 'Physics',
    credentials: 'IIT Bombay Alumni • 18 Years Experience',
    achievement: '12 students with AIR < 100',
    initials: 'AS',
  },
  {
    name: 'Dr. Kavitha Nair',
    subject: 'Chemistry',
    credentials: 'IISER PhD • Former CBSE Examiner',
    achievement: 'Author of "Organic Edge" textbook',
    initials: 'KN',
  },
  {
    name: 'Prof. Rajesh Gupta',
    subject: 'Mathematics',
    credentials: 'IIT Delhi Alumni • 22 Years Experience',
    achievement: 'Trained 3 AIR Top-10 rankers',
    initials: 'RG',
  },
];

const results = [
  { label: 'Total Selections', value: '1,500+', subtext: 'IIT + NEET Combined' },
  { label: 'Top AIR', value: 'AIR 1', subtext: 'JEE Advanced 2022' },
  { label: 'IIT Selections 2024', value: '312', subtext: 'Across all IITs' },
  { label: 'NEET 690+ Scorers', value: '87', subtext: 'In batch of 2024' },
];

const topRankers = [
  { name: 'Aryan Mehta', air: 'AIR 7', year: 'JEE Adv. 2024', college: 'IIT Bombay' },
  { name: 'Sneha Pillai', air: 'AIR 23', year: 'JEE Adv. 2024', college: 'IIT Delhi' },
  { name: 'Rohan Verma', air: 'AIR 1', year: 'JEE Adv. 2022', college: 'IIT Bombay' },
  { name: 'Priya Krishnan', air: '698/720', year: 'NEET 2024', college: 'AIIMS Delhi' },
  { name: 'Karthik Iyer', air: 'AIR 41', year: 'JEE Adv. 2023', college: 'IIT Madras' },
  { name: 'Aisha Siddiqui', air: 'AIR 12', year: 'JEE Adv. 2023', college: 'IIT Kharagpur' },
];

export default function PinnacleCoaching() {
  return (
    <MockLayout projectName="Pinnacle IIT Coaching" accentColor={accentGold} categoryId="academic">
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${navyDark} 0%, ${navyMid} 60%, #0F1E38 100%)` }}
      >
        {/* Grid decoration */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(${accentGold} 1px, transparent 1px), linear-gradient(90deg, ${accentGold} 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left content */}
            <div className="flex-1 text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: `${accentGold}20`, color: accentGold, border: `1px solid ${accentGold}40` }}
              >
                <Trophy size={14} />
                India's Premier IIT-JEE & NEET Institute
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                Pinnacle
                <br />
                <span style={{ color: accentGold }}>IIT Coaching</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                Where AIR 1 is not just a dream. Join 1,500+ students who cracked IIT and AIIMS with Pinnacle's
                proven methodology, world-class faculty, and relentless support.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
                <button
                  className="px-8 py-3 rounded-lg font-bold text-sm text-black transition-transform hover:scale-105"
                  style={{ backgroundColor: accentGold }}
                >
                  Apply for 2025 Batch
                </button>
                <button className="px-8 py-3 rounded-lg font-bold text-sm text-white border border-white/30 hover:border-white/60 transition-colors">
                  Download Brochure
                </button>
              </div>

              <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={15} style={{ color: accentGold }} />
                  Est. 2003 — 22 Years of Excellence
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={15} style={{ color: accentGold }} />
                  NAAC A+ Certified Institute
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={15} style={{ color: accentGold }} />
                  Hostel & Day Scholar Options
                </span>
              </div>
            </div>

            {/* Rank board */}
            <div className="flex-shrink-0 w-full lg:w-80">
              <div
                className="rounded-2xl p-5 border"
                style={{ backgroundColor: `${navyDark}CC`, borderColor: `${accentGold}40` }}
              >
                <div
                  className="flex items-center gap-2 mb-4 text-sm font-semibold uppercase tracking-wider"
                  style={{ color: accentGold }}
                >
                  <Award size={16} />
                  2024 Hall of Fame
                </div>
                <div className="space-y-2">
                  {topRankers.map((ranker, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2.5 px-3 rounded-lg"
                      style={{ backgroundColor: i === 0 ? `${accentGold}15` : 'rgba(255,255,255,0.04)' }}
                    >
                      <div>
                        <p className="text-white text-sm font-semibold">{ranker.name}</p>
                        <p className="text-slate-400 text-xs">{ranker.college}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-sm" style={{ color: accentGold }}>
                          {ranker.air}
                        </p>
                        <p className="text-slate-500 text-xs">{ranker.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results counter strip */}
      <div style={{ backgroundColor: accentGold }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {results.map((r, i) => (
              <div key={i}>
                <p className="text-3xl font-black text-black">{r.value}</p>
                <p className="text-sm font-bold text-black/70">{r.label}</p>
                <p className="text-xs text-black/50">{r.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Catalog */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: accentGold }}>
              Academic Programmes
            </p>
            <h2 className="text-3xl font-black text-gray-900">Course Catalog 2025</h2>
            <p className="text-gray-500 mt-2">Choose the programme built for your target exam and timeline.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden flex flex-col"
                style={{
                  border: course.highlight ? `2px solid ${accentGold}` : '2px solid #E5E7EB',
                  backgroundColor: course.highlight ? navyDark : '#FFFFFF',
                }}
              >
                {course.highlight && (
                  <div
                    className="absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded-full text-black"
                    style={{ backgroundColor: accentGold }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="p-6 flex-1">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: course.highlight ? `${accentGold}20` : `${navyDark}10`,
                    }}
                  >
                    <BookOpen size={20} style={{ color: course.highlight ? accentGold : navyDark }} />
                  </div>
                  <h3
                    className="text-xl font-black mb-1"
                    style={{ color: course.highlight ? '#FFFFFF' : '#111827' }}
                  >
                    {course.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: course.highlight ? '#94A3B8' : '#6B7280' }}>
                    {course.tagline}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {course.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <CheckCircle
                          size={14}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: accentGold }}
                        />
                        <span style={{ color: course.highlight ? '#CBD5E1' : '#4B5563' }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-4 text-xs mb-4" style={{ color: course.highlight ? '#94A3B8' : '#9CA3AF' }}>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={12} />
                      {course.seats}
                    </span>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black" style={{ color: course.highlight ? accentGold : navyDark }}>
                      {course.fee}
                    </span>
                  </div>
                  <button
                    className="w-full py-2.5 rounded-lg text-sm font-bold transition-colors"
                    style={{
                      backgroundColor: course.highlight ? accentGold : `${navyDark}10`,
                      color: course.highlight ? '#000000' : navyDark,
                    }}
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section
        className="py-20"
        style={{ background: `linear-gradient(180deg, ${navyDark} 0%, ${navyMid} 100%)` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: accentGold }}>
              Our Educators
            </p>
            <h2 className="text-3xl font-black text-white">World-Class Faculty</h2>
            <p className="text-slate-400 mt-2">IIT alumni and subject matter experts with decades of results.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {faculty.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 border"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: `${accentGold}25` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-black text-black flex-shrink-0"
                    style={{ backgroundColor: accentGold }}
                  >
                    {f.initials}
                  </div>
                  <div>
                    <p className="font-bold text-white">{f.name}</p>
                    <p className="text-sm font-semibold" style={{ color: accentGold }}>
                      {f.subject}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-400 mb-3">{f.credentials}</p>
                <div
                  className="flex items-center gap-2 text-sm rounded-lg px-3 py-2"
                  style={{ backgroundColor: `${accentGold}12` }}
                >
                  <Star size={13} style={{ color: accentGold }} />
                  <span className="text-slate-300">{f.achievement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Wall */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: accentGold }}>
              Track Record
            </p>
            <h2 className="text-3xl font-black text-gray-900">Results Speak Louder</h2>
            <p className="text-gray-500 mt-2">22 years of consistent selections across India's toughest exams.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { icon: TrendingUp, value: '1,500+', label: 'Total Selections', sub: 'IIT + AIIMS since 2003' },
              { icon: Trophy, value: 'AIR 1', label: 'All India Rank', sub: 'JEE Advanced 2022' },
              { icon: Users, value: '312', label: 'IITians in 2024', sub: 'Single batch output' },
              { icon: Award, value: '94%', label: 'Repeat Referrals', sub: 'Parents recommend us' },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 text-center border"
                style={{ borderColor: `${accentGold}30`, backgroundColor: `${accentGold}05` }}
              >
                <stat.icon size={28} className="mx-auto mb-3" style={{ color: accentGold }} />
                <p className="text-3xl font-black mb-1" style={{ color: navyDark }}>
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-gray-700">{stat.label}</p>
                <p className="text-xs text-gray-400 mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Top ranker grid */}
          <h3 className="text-center text-lg font-bold text-gray-800 mb-6">Selected Toppers — 2024 Batch</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {topRankers.map((r, i) => (
              <div
                key={i}
                className="rounded-xl p-3 text-center border"
                style={{
                  borderColor: i === 0 ? accentGold : '#E5E7EB',
                  backgroundColor: i === 0 ? `${accentGold}10` : '#F9FAFB',
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white mx-auto mb-2"
                  style={{ backgroundColor: navyDark }}
                >
                  {r.name.split(' ').map(n => n[0]).join('')}
                </div>
                <p className="text-xs font-bold text-gray-800 leading-tight">{r.name}</p>
                <p className="text-xs font-black mt-1" style={{ color: accentGold }}>{r.air}</p>
                <p className="text-xs text-gray-400">{r.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agent Workflow */}
      <section
        className="py-20"
        style={{ background: `linear-gradient(180deg, #0D1626 0%, ${navyDark} 100%)` }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: accentGold }}>
              Powered by AI
            </p>
            <h2 className="text-3xl font-black text-white">Automated Admissions & Support</h2>
            <p className="text-slate-400 mt-2 max-w-xl mx-auto">
              Our AI agent handles student enquiries, routes doubts, and keeps the director informed — so faculty
              can focus on teaching.
            </p>
          </div>

          <div
            className="rounded-2xl p-6 lg:p-10 border"
            style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: `${accentGold}20` }}
          >
            <AgentFlowChart workflow={admissionsWorkflow} />
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Admissions Open for{' '}
            <span style={{ color: accentGold }}>2025–26 Batch</span>
          </h2>
          <p className="text-gray-500 mb-8">Limited seats. Early applicants receive scholarship consideration.</p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-8">
            <a href="#" className="flex items-center gap-2 hover:text-gray-900">
              <Phone size={16} style={{ color: accentGold }} />
              +91 98765 43210
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-900">
              <Mail size={16} style={{ color: accentGold }} />
              admissions@pinnacle-iit.in
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} style={{ color: accentGold }} />
              Kota, Rajasthan — 324005
            </span>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <button
              className="px-8 py-3 rounded-lg font-bold text-sm text-black"
              style={{ backgroundColor: accentGold }}
            >
              Apply Now <ChevronRight size={16} className="inline" />
            </button>
            <button
              className="px-8 py-3 rounded-lg font-bold text-sm border"
              style={{ borderColor: navyDark, color: navyDark }}
            >
              Schedule Campus Visit
            </button>
          </div>
        </div>
      </section>
    </MockLayout>
  );
}
