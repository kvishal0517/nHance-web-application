import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import type { AgentWorkflow } from '../../types';
import {
  Users,
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  ChevronRight,
  Search,
  Award,
  Globe,
  Building2,
  GraduationCap,
  Mail,
  Linkedin,
  Star,
} from 'lucide-react';

const accentBurgundy = '#8B1A1A';
const charcoal = '#2C2C2C';
const engagementWorkflow: AgentWorkflow = {
  title: 'Alumni Engagement Agent',
  nodes: [
    {
      id: '1',
      label: 'Monitor LinkedIn Updates',
      description: 'Tracks alumni LinkedIn profiles for promotions, new roles, and milestones.',
      automated: true,
      x: 20,
      y: 40,
    },
    {
      id: '2',
      label: 'Auto-Send Congratulations',
      description: 'Sends personalised congratulatory messages for promotions and anniversaries.',
      automated: true,
      x: 200,
      y: 40,
    },
    {
      id: '3',
      label: 'Draft Personalised Invites',
      description: 'Generates tailored event invitations based on alumni industry and interests.',
      automated: true,
      x: 380,
      y: 40,
    },
    {
      id: '4',
      label: 'New Member Onboarding',
      description: 'Detects new graduates and triggers the onboarding sequence automatically.',
      automated: true,
      x: 560,
      y: 40,
    },
    {
      id: '5',
      label: 'Recommend Connections',
      description: 'Suggests relevant alumni connections based on industry, batch, and interests.',
      automated: true,
      x: 200,
      y: 160,
    },
    {
      id: '6',
      label: 'Schedule Orientation Call',
      description: 'Books an orientation call with a senior alumni mentor for new members.',
      automated: true,
      x: 380,
      y: 160,
    },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '1', to: '4' },
    { from: '4', to: '5' },
    { from: '5', to: '6' },
  ],
};

const alumniProfiles = [
  {
    name: 'Aditi Raghavan',
    batch: 'PGP 2008',
    role: 'Managing Director',
    company: 'Goldman Sachs India',
    industry: 'Finance',
    location: 'Mumbai',
    initials: 'AR',
    connections: 312,
  },
  {
    name: 'Vikram Bajaj',
    batch: 'PGP 2011',
    role: 'Co-Founder & CEO',
    company: 'HealthStack Technologies',
    industry: 'Healthcare Tech',
    location: 'Bangalore',
    initials: 'VB',
    connections: 489,
  },
  {
    name: 'Sunita Menon',
    batch: 'PGP 2005',
    role: 'Chief Strategy Officer',
    company: 'Tata Consumer Products',
    industry: 'FMCG',
    location: 'Pune',
    initials: 'SM',
    connections: 276,
  },
  {
    name: 'Rahul Khanna',
    batch: 'FPM 2014',
    role: 'Associate Professor',
    company: 'IIM Ahmedabad',
    industry: 'Academia',
    location: 'Ahmedabad',
    initials: 'RK',
    connections: 198,
  },
];

const events = [
  {
    title: 'Annual Alumni Reunion 2025',
    date: 'December 20–21, 2025',
    location: 'IIM Campus, Ahmedabad',
    type: 'In-Person',
    desc: 'Two-day reunion featuring panel discussions, networking dinner, and the Director\'s address. Open to all batches.',
    badge: 'Flagship Event',
    badgeColor: accentBurgundy,
    attendees: '600+ Alumni',
  },
  {
    title: 'Global Case Competition',
    date: 'September 12, 2025',
    location: 'Hybrid — Mumbai & Online',
    type: 'Hybrid',
    desc: 'Alumni-led case competition open to current students. Winners receive mentorship from participating alumni.',
    badge: 'Open Registration',
    badgeColor: '#2D6A4F',
    attendees: '80 Teams',
  },
  {
    title: 'CFO Leadership Webinar',
    date: 'July 4, 2025',
    location: 'Online — Zoom',
    type: 'Webinar',
    desc: 'Aditi Raghavan (PGP 2008) on "Finance Leadership in Uncertain Markets." Q&A open to all members.',
    badge: 'Free for Members',
    badgeColor: '#1D4ED8',
    attendees: '200+ Seats',
  },
];

const jobListings = [
  {
    role: 'VP Strategy & Growth',
    company: 'Meesho',
    location: 'Bangalore',
    type: 'Full-time',
    referredBy: 'Kiran Sharma (PGP 2012)',
    tags: ['Strategy', 'E-commerce', '10+ Years'],
  },
  {
    role: 'Chief of Staff — CEO Office',
    company: 'Zepto',
    location: 'Mumbai',
    type: 'Full-time',
    referredBy: 'Priya Iyer (PGP 2016)',
    tags: ['Ops', 'Quick Commerce', '5–8 Years'],
  },
  {
    role: 'Visiting Faculty — Finance',
    company: 'IIM Rohtak',
    location: 'Rohtak (Remote Eligible)',
    type: 'Contract',
    referredBy: 'Dr. Rahul Khanna (FPM 2014)',
    tags: ['Teaching', 'Finance', 'PhD Preferred'],
  },
];

const networkStats = [
  { value: '28,000+', label: 'Global Alumni', icon: Users },
  { value: '62', label: 'Countries', icon: Globe },
  { value: '140+', label: 'Chapters Worldwide', icon: Building2 },
  { value: '1974', label: 'Established', icon: GraduationCap },
];

export default function IIMAlumni() {
  return (
    <MockLayout projectName="IIM Alumni Network" accentColor={accentBurgundy} categoryId="academic">
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${charcoal} 0%, #1A1A1A 100%)` }}
      >
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Top navigation bar */}
        <div className="relative border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-white text-sm"
                style={{ backgroundColor: accentBurgundy }}
              >
                IIM
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">Alumni Network</p>
                <p className="text-slate-400 text-xs">Member Portal</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Directory</a>
              <a href="#" className="hover:text-white transition-colors">Events</a>
              <a href="#" className="hover:text-white transition-colors">Jobs</a>
              <a href="#" className="hover:text-white transition-colors">Mentorship</a>
            </nav>
            <button
              className="text-sm px-4 py-2 rounded-lg font-semibold text-white"
              style={{ backgroundColor: accentBurgundy }}
            >
              Member Login
            </button>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: `${accentBurgundy}25`, color: '#E8A0A0', border: `1px solid ${accentBurgundy}50` }}
            >
              <Award size={14} />
              50+ Years of Alumni Excellence
            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
              Where Leaders
              <br />
              <span style={{ color: '#E8A0A0' }}>Stay Connected</span>
            </h1>

            <p className="text-lg text-slate-300 mb-10 max-w-xl">
              The exclusive network of IIM alumni spanning 62 countries. Access opportunities, reconnect with
              batchmates, and give back to the community that shaped you.
            </p>

            {/* Search bar */}
            <div className="flex gap-2 max-w-lg mb-10">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search alumni by name, company, or batch..."
                  className="w-full bg-white/10 border border-white/20 rounded-lg pl-9 pr-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-white/40"
                />
              </div>
              <button
                className="px-5 py-3 rounded-lg text-sm font-bold text-white flex-shrink-0"
                style={{ backgroundColor: accentBurgundy }}
              >
                Search
              </button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <Users size={14} style={{ color: '#E8A0A0' }} />
                28,000+ Members
              </span>
              <span className="flex items-center gap-1.5">
                <Globe size={14} style={{ color: '#E8A0A0' }} />
                140+ City Chapters
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase size={14} style={{ color: '#E8A0A0' }} />
                Alumni Referral Jobs Board
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Network Stats */}
      <div style={{ backgroundColor: accentBurgundy }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {networkStats.map((s, i) => (
              <div key={i} className="flex items-center justify-center gap-3">
                <s.icon size={20} className="text-red-200 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xl font-black text-white">{s.value}</p>
                  <p className="text-xs text-red-200">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alumni Directory */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-1" style={{ color: accentBurgundy }}>
                Member Directory
              </p>
              <h2 className="text-3xl font-black text-gray-900">Featured Alumni</h2>
            </div>
            <button
              className="text-sm font-semibold flex items-center gap-1 hover:underline"
              style={{ color: accentBurgundy }}
            >
              View All 28,000+ <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {alumniProfiles.map((alumni, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-base font-black text-white flex-shrink-0"
                    style={{ backgroundColor: charcoal }}
                  >
                    {alumni.initials}
                  </div>
                  <span
                    className="text-xs font-semibold px-2 py-1 rounded-full"
                    style={{ backgroundColor: `${accentBurgundy}12`, color: accentBurgundy }}
                  >
                    {alumni.batch}
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 mb-0.5">{alumni.name}</h3>
                <p className="text-sm font-semibold text-gray-700 mb-0.5">{alumni.role}</p>
                <p className="text-sm text-gray-500 mb-3">{alumni.company}</p>

                <div className="flex flex-wrap gap-2 text-xs text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Briefcase size={11} />
                    {alumni.industry}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={11} />
                    {alumni.location}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{alumni.connections} connections</span>
                  <div className="flex items-center gap-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <Linkedin size={15} />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Mail size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Calendar */}
      <section
        className="py-20"
        style={{ backgroundColor: charcoal }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-1" style={{ color: '#E8A0A0' }}>
                Community Events
              </p>
              <h2 className="text-3xl font-black text-white">Upcoming Events</h2>
            </div>
            <button className="text-sm font-semibold text-slate-400 flex items-center gap-1 hover:text-white transition-colors">
              Full Calendar <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {events.map((event, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 border flex flex-col"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: event.badgeColor }}
                  >
                    {event.badge}
                  </span>
                  <span className="text-xs text-slate-400 bg-white/10 px-2 py-1 rounded-full">
                    {event.type}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base mb-2 flex-1">{event.title}</h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">{event.desc}</p>

                <div className="space-y-2 text-xs text-slate-400 mb-5">
                  <div className="flex items-center gap-2">
                    <Calendar size={13} style={{ color: '#E8A0A0' }} />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={13} style={{ color: '#E8A0A0' }} />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={13} style={{ color: '#E8A0A0' }} />
                    {event.attendees}
                  </div>
                </div>

                <button
                  className="w-full py-2.5 rounded-lg text-sm font-semibold text-white border border-white/20 hover:border-white/40 transition-colors"
                >
                  Register / Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Board */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-1" style={{ color: accentBurgundy }}>
                Opportunities
              </p>
              <h2 className="text-3xl font-black text-gray-900">Alumni-Referred Jobs</h2>
              <p className="text-gray-500 text-sm mt-1">
                Positions referred directly by network members. Apply with a warm introduction.
              </p>
            </div>
            <button
              className="text-sm font-semibold flex items-center gap-1 hover:underline"
              style={{ color: accentBurgundy }}
            >
              Post a Role <ExternalLink size={14} />
            </button>
          </div>

          <div className="space-y-4">
            {jobListings.map((job, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: charcoal }}
                  >
                    {job.company.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{job.role}</h3>
                    <p className="text-sm font-semibold text-gray-600 mb-1">
                      {job.company} · {job.location}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Star size={12} style={{ color: accentBurgundy }} />
                      Referred by {job.referredBy}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ backgroundColor: `${accentBurgundy}10`, color: accentBurgundy }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 flex-shrink-0"
                  >
                    {job.type}
                  </span>
                  <button
                    className="text-sm font-bold px-5 py-2.5 rounded-lg text-white flex-shrink-0"
                    style={{ backgroundColor: accentBurgundy }}
                  >
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agent Workflow */}
      <section
        className="py-20"
        style={{ background: `linear-gradient(180deg, #1A1A1A 0%, ${charcoal} 100%)` }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#E8A0A0' }}>
              Powered by AI
            </p>
            <h2 className="text-3xl font-black text-white">Intelligent Alumni Engagement</h2>
            <p className="text-slate-400 mt-2 max-w-xl mx-auto">
              Our AI agent monitors the network, celebrates milestones, and ensures every alumnus feels connected
              — automatically, at scale.
            </p>
          </div>

          <div
            className="rounded-2xl p-6 lg:p-10 border"
            style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: `${accentBurgundy}30` }}
          >
            <AgentFlowChart workflow={engagementWorkflow} />
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section
        className="py-16"
        style={{ backgroundColor: '#F5F0EF' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-white text-xl mx-auto mb-6"
            style={{ backgroundColor: accentBurgundy }}
          >
            IIM
          </div>
          <h2 className="text-3xl font-black mb-4" style={{ color: charcoal }}>
            Not Yet a Member?
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            If you are an IIM graduate, claim your member profile and unlock the full network — jobs, events,
            mentorship, and more.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <button
              className="px-8 py-3 rounded-lg font-bold text-sm text-white"
              style={{ backgroundColor: accentBurgundy }}
            >
              Claim Your Profile <ChevronRight size={16} className="inline" />
            </button>
            <button
              className="px-8 py-3 rounded-lg font-bold text-sm border"
              style={{ borderColor: charcoal, color: charcoal }}
            >
              Contact Chapter Coordinator
            </button>
          </div>
        </div>
      </section>
    </MockLayout>
  );
}
