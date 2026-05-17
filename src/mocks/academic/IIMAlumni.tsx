import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import { AnimatedSection } from '../../components/AnimatedSection';
import type { AgentWorkflow } from '../../types';
import {
  Users,
  Calendar,
  MapPin,
  ChevronRight,
  Search,
  Award,
  Globe,
  Building2,
  GraduationCap,
  Zap,
  Linkedin,
  TrendingUp,
  MessageSquare,
  ArrowUpRight,
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
    skills: ['Strategic Finance', 'Investment Banking'],
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
    skills: ['SaaS', 'Digital Health'],
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
    skills: ['Global Supply Chain', 'Brand Strategy'],
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
    skills: ['Behavioral Economics', 'Research'],
  },
];

const events = [
  {
    title: 'Annual Alumni Reunion 2025',
    date: 'December 20–21, 2025',
    location: 'IIM Campus, Ahmedabad',
    type: 'In-Person',
    desc: 'Two-day reunion featuring panel discussions, networking dinner, and the Director\'s address.',
    badge: 'Flagship Event',
    badgeColor: accentBurgundy,
    attendees: '600+ Alumni',
  },
  {
    title: 'Global Case Competition',
    date: 'September 12, 2025',
    location: 'Hybrid — Mumbai & Online',
    type: 'Hybrid',
    desc: 'Alumni-led case competition open to current students. Winners receive mentorship.',
    badge: 'Open Registration',
    badgeColor: '#2D6A4F',
    attendees: '80 Teams',
  },
  {
    title: 'CFO Leadership Webinar',
    date: 'July 4, 2025',
    location: 'Online — Zoom',
    type: 'Webinar',
    desc: 'Aditi Raghavan (PGP 2008) on "Finance Leadership in Uncertain Markets."',
    badge: 'Free for Members',
    badgeColor: '#1D4ED8',
    attendees: '200+ Seats',
  },
];

const networkStats = [
  { value: '28,000+', label: 'Global Alumni', icon: Users },
  { value: '62', label: 'Countries', icon: Globe },
  { value: '140+', label: 'Chapters', icon: Building2 },
  { value: '1974', label: 'Established', icon: GraduationCap },
];

export default function IIMAlumni() {
  return (
    <MockLayout projectName="IIM Alumni Network" accentColor={accentBurgundy} categoryId="academic">
      <div className="bg-white text-apple-black selection:bg-red-100">
        {/* Prestige Hero */}
        <section
          className="relative min-h-screen flex flex-col overflow-hidden bg-apple-black"
        >
          {/* Immersive Campus Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=2400" 
              alt="University Campus" 
              className="w-full h-full object-cover opacity-15 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-apple-black/40 via-apple-black to-apple-black" />
          </div>

          {/* Premium Sub-Nav */}
          <div className="relative z-20 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-white text-xl shadow-2xl"
                  style={{ backgroundColor: accentBurgundy }}
                >
                  IIM
                </div>
                <div className="hidden sm:block">
                  <p className="text-white font-bold text-base tracking-tight leading-none mb-1">Alumni Network</p>
                  <p className="text-white/30 text-[9px] font-bold uppercase tracking-[0.2em]">Global Executive Portal</p>
                </div>
              </div>
              <nav className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-widest text-white/40">
                <a href="#" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-accent-500 pb-1">Directory</a>
                <a href="#" className="hover:text-white transition-colors">Career Center</a>
                <a href="#" className="hover:text-white transition-colors">Chapters</a>
                <a href="#" className="hover:text-white transition-colors">Mentorship</a>
              </nav>
              <button
                className="text-[11px] px-8 py-3 rounded-full font-bold uppercase tracking-widest text-white shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                style={{ backgroundColor: accentBurgundy }}
              >
                Join Network
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="max-w-4xl">
              <AnimatedSection animationType="blur">
                <div
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full mb-12 bg-white/5 backdrop-blur-md border border-white/10 text-[#E8A0A0]"
                >
                  <Award size={14} />
                  A Global Legacy of Leadership
                </div>

                <h1 className="text-7xl lg:text-[110px] font-bold text-white leading-[0.9] tracking-tighter mb-12">
                  Reconnect with
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A0A0] to-red-600">Influence.</span>
                </h1>

                <p className="text-xl lg:text-2xl text-slate-400 mb-16 max-w-2xl font-medium leading-relaxed">
                  The exclusive ecosystem for IIM graduates. Over 28,000 leaders, 140 chapters, and infinite opportunities.
                </p>

                <div className="p-2 rounded-[32px] bg-white/5 backdrop-blur-2xl border border-white/10 flex flex-col sm:flex-row gap-2 max-w-2xl shadow-3xl">
                  <div className="relative flex-1">
                    <Search size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      placeholder="Search by name, company, or batch..."
                      className="w-full bg-transparent border-none pl-14 pr-6 py-5 text-white text-base placeholder-slate-600 focus:ring-0"
                    />
                  </div>
                  <button
                    className="px-10 py-5 rounded-[24px] font-bold text-white shadow-2xl transition-all hover:scale-[1.02] active:scale-95"
                    style={{ backgroundColor: accentBurgundy }}
                  >
                    Find Alumni
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Bottom Reveal Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 animate-bounce">
            <TrendingUp size={24} />
          </div>
        </section>

        {/* Global Stats - Sleek Dark Strip */}
        <div className="bg-[#1A1A1A] border-y border-white/5 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
              {networkStats.map((s, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <s.icon size={24} className="text-[#E8A0A0]" />
                  </div>
                  <p className="text-4xl font-bold text-white tracking-tight mb-2">{s.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Executive Directory - Card Grid */}
        <section className="py-32 bg-apple-gray">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <div className="max-w-xl">
                <AnimatedSection>
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] mb-4" style={{ color: accentBurgundy }}>The Network</p>
                  <h2 className="text-5xl lg:text-6xl font-bold text-apple-black tracking-tight mb-8">Executive Talent.</h2>
                  <p className="text-xl text-apple-darkGray font-medium leading-relaxed">
                    Connect with industry captains, visionary founders, and strategic minds from across batches.
                  </p>
                </AnimatedSection>
              </div>
              <button className="px-10 py-4 bg-white border border-slate-200 rounded-full font-bold text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2">
                Launch Full Directory <Search size={16} />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {alumniProfiles.map((alumni, i) => (
                <AnimatedSection key={i} delay={i * 50} animationType="scale">
                  <div
                    className="group bg-white rounded-[40px] p-10 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 border border-transparent hover:border-slate-100 flex flex-col h-full"
                  >
                    <div className="flex items-start justify-between mb-10">
                      <div
                        className="w-16 h-16 rounded-[24px] flex items-center justify-center text-xl font-bold text-white shadow-xl group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundColor: charcoal }}
                      >
                        {alumni.initials}
                      </div>
                      <span
                        className="text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider bg-red-50 text-red-900 border border-red-100"
                      >
                        {alumni.batch}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-apple-black mb-1 group-hover:text-red-900 transition-colors">{alumni.name}</h3>
                    <p className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-tight">{alumni.role}</p>
                    <p className="text-base font-bold text-apple-black mb-8">{alumni.company}</p>

                    <div className="flex flex-wrap gap-2 mb-10 flex-1">
                      {alumni.skills.map((skill, j) => (
                        <span key={j} className="px-3 py-1 bg-apple-gray rounded-lg text-[10px] font-bold text-apple-darkGray group-hover:bg-red-50 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                      <div className="flex items-center gap-2">
                        <Users size={14} className="text-slate-300" />
                        <span className="text-[11px] font-bold text-slate-400">{alumni.connections}+</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <MessageSquare size={18} className="text-slate-300 hover:text-red-900 cursor-pointer transition-colors" />
                        <Linkedin size={18} className="text-slate-300 hover:text-red-900 cursor-pointer transition-colors" />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Global Events - Dark High-Contrast Section */}
        <section className="py-32 bg-apple-black text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-24">
              <AnimatedSection>
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] mb-4 text-[#E8A0A0]">Knowledge & Networking</p>
                <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">Calendar 2025.</h2>
              </AnimatedSection>
              <button className="hidden sm:flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                View All Events <ChevronRight size={16} />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {events.map((event, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div
                    className="group rounded-[48px] p-12 h-full flex flex-col border border-white/5 bg-white/[0.02] backdrop-blur-3xl hover:bg-white/[0.05] transition-all duration-500"
                  >
                    <div className="mb-10">
                      <span
                        className="text-[10px] font-bold px-4 py-2 rounded-full text-white uppercase tracking-wider shadow-2xl border border-white/10"
                        style={{ backgroundColor: event.badgeColor }}
                      >
                        {event.badge}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold mb-6 tracking-tight leading-tight group-hover:text-[#E8A0A0] transition-colors">{event.title}</h3>
                    <p className="text-slate-400 font-medium mb-12 leading-relaxed text-lg">{event.desc}</p>

                    <div className="space-y-6 pt-10 border-t border-white/5 mt-auto">
                      <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white/30">
                        <Calendar size={16} className="text-red-600" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white/30">
                        <MapPin size={16} className="text-red-600" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white/30">
                        <Users size={16} className="text-red-600" />
                        {event.attendees} Registered
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* AI Engagement - Technology Showcase */}
        <section className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-red-50 text-red-900 text-[11px] font-bold uppercase tracking-[0.2em] mb-10 border border-red-100">
                    <Zap size={16} className="fill-red-900" />
                    Neural Networking
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-bold text-apple-black tracking-tight mb-10">
                    AI-Powered
                    <br />
                    Connections.
                  </h2>
                  <p className="text-xl text-apple-darkGray font-medium leading-relaxed mb-12">
                    Our platform doesn't just store data; it actively fosters growth. The AI Engagement Agent monitors professional milestones and intelligently bridges gaps between expertise and opportunity.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div className="p-6 rounded-3xl bg-apple-gray border border-slate-100">
                      <Award size={24} className="text-red-900 mb-4" />
                      <h4 className="font-bold text-apple-black mb-2">Milestone Tracking</h4>
                      <p className="text-xs text-slate-500 font-medium">Automatic detection of promotions and honors.</p>
                    </div>
                    <div className="p-6 rounded-3xl bg-apple-gray border border-slate-100">
                      <Globe size={24} className="text-red-900 mb-4" />
                      <h4 className="font-bold text-apple-black mb-2">Smart Chaptering</h4>
                      <p className="text-xs text-slate-500 font-medium">Industry-specific group auto-scaling.</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              <AnimatedSection delay={200} animationType="scale">
                <div className="p-10 rounded-[64px] bg-white border border-slate-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)]">
                  <AgentFlowChart workflow={engagementWorkflow} />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Closing CTA - The "Walled Garden" feel */}
        <section className="py-40 bg-apple-gray relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-900/20 to-transparent" />
          <div className="max-w-4xl mx-auto px-6 text-center">
            <AnimatedSection animationType="blur">
              <div className="w-24 h-24 rounded-[32px] bg-red-900 flex items-center justify-center text-white text-4xl font-black mx-auto mb-16 shadow-[0_32px_64px_-16px_rgba(139,26,26,0.4)]">
                IIM
              </div>
              <h2 className="text-6xl lg:text-8xl font-bold text-apple-black mb-12 tracking-tighter">
                Lead.
                <br />
                Reconnect.
                <br />
                Mentor.
              </h2>
              <p className="text-2xl text-apple-darkGray mb-16 max-w-xl mx-auto font-medium">
                The most powerful business network in the country is waiting for you. Verify your status to enter.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <button
                  className="px-14 py-6 bg-red-900 text-white font-bold rounded-full text-xl shadow-2xl hover:scale-105 transition-all active:scale-95"
                >
                  Verify via LinkedIn
                </button>
                <button className="text-lg font-bold text-apple-darkGray hover:text-apple-black transition-colors border-b-2 border-slate-200 hover:border-red-900 pb-1">
                  Chapter Directory
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </MockLayout>
  );
}
