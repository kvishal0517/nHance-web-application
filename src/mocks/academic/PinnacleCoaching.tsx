import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import { AnimatedSection } from '../../components/AnimatedSection';
import type { AgentWorkflow } from '../../types';
import {
  Trophy,
  Star,
  ChevronRight,
  Award,
  CheckCircle,
  Zap,
  Users,
  Timer,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const accentGold = '#F5A623';

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
    status: 'Limited Seats'
  },
  {
    name: 'JEE Advanced',
    tagline: 'IIT Aspirants Programme',
    duration: '2 Years',
    seats: '40 Seats',
    fee: '₹2,40,000',
    features: ['Intensive problem solving', 'IIT faculty guest sessions', 'AIR-focused strategy', 'Hostel facility'],
    highlight: true,
    status: 'Filling Fast'
  },
  {
    name: 'NEET',
    tagline: 'Medical Entrance Mastery',
    duration: '1 Year',
    seats: '60 Seats',
    fee: '₹1,10,000',
    features: ['NCERT deep-dive', 'Biology lab sessions', 'Previous year analysis', 'Online revision portal'],
    highlight: false,
    status: 'Enrollment Open'
  },
  {
    name: 'Foundation',
    tagline: 'Class 8–10 Preparation',
    duration: '3 Years',
    seats: '80 Seats',
    fee: '₹75,000/yr',
    features: ['Olympiad preparation', 'Concept-first approach', 'Parent progress reports', 'Scholarship tests'],
    highlight: false,
    status: 'New Batch'
  },
];

const faculty = [
  {
    name: 'Prof. Anil Sharma',
    subject: 'Physics',
    credentials: 'IIT Bombay Alumni • 18 Years Experience',
    achievement: '12 students with AIR < 100',
    initials: 'AS',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Dr. Kavitha Nair',
    subject: 'Chemistry',
    credentials: 'IISER PhD • Former CBSE Examiner',
    achievement: 'Author of "Organic Edge"',
    initials: 'KN',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Prof. Rajesh Gupta',
    subject: 'Mathematics',
    credentials: 'IIT Delhi Alumni • 22 Years Experience',
    achievement: '3 AIR Top-10 rankers',
    initials: 'RG',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  },
];

const topRankers = [
  { name: 'Aryan Mehta', air: 'AIR 7', year: 'JEE Adv. 2024', college: 'IIT Bombay', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200' },
  { name: 'Sneha Pillai', air: 'AIR 23', year: 'JEE Adv. 2024', college: 'IIT Delhi', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200' },
  { name: 'Rohan Verma', air: 'AIR 1', year: 'JEE Adv. 2022', college: 'IIT Bombay', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200' },
];

export default function PinnacleCoaching() {
  return (
    <MockLayout projectName="Pinnacle IIT Coaching" accentColor={accentGold} categoryId="academic">
      <div className="bg-white text-apple-black overflow-hidden">
        {/* Immersive Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col justify-center bg-apple-black">
          {/* Advanced Background with Particles feel */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1523050338691-c5e70721883f?auto=format&fit=crop&q=80&w=2400" 
              alt="Coaching Center" 
              className="w-full h-full object-cover opacity-20 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-apple-black via-apple-black/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
                    <Sparkles size={14} className="text-accent-500" />
                    Admissions Open for 2025-26
                  </div>

                  <h1 className="text-7xl lg:text-[100px] font-bold text-white leading-[0.95] tracking-tight mb-8">
                    Built for
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-amber-200">the top 1%.</span>
                  </h1>

                  <p className="text-xl text-slate-400 max-w-xl mb-12 font-medium leading-relaxed">
                    India's most selective coaching institute for JEE and NEET. We don't just teach; we engineer top ranks through precision and discipline.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <button className="px-10 py-5 bg-accent-500 hover:bg-accent-600 text-apple-black font-bold rounded-full transition-all hover:scale-105 shadow-2xl active:scale-95 flex items-center justify-center gap-2">
                      Start Your Journey
                      <ArrowRight size={18} />
                    </button>
                    <button className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/20 font-bold rounded-full transition-all flex items-center justify-center gap-2">
                      View Results
                    </button>
                  </div>
                </AnimatedSection>
              </div>

              <div className="lg:col-span-5 relative">
                <AnimatedSection delay={200} animationType="scale">
                  <div className="relative p-1 rounded-[48px] bg-gradient-to-br from-white/20 to-transparent backdrop-blur-3xl border border-white/10 shadow-2xl overflow-hidden">
                    <div className="bg-white/5 rounded-[44px] p-8">
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2 text-accent-500 font-bold uppercase tracking-widest text-[11px]">
                          <Trophy size={16} />
                          Live Success Wall
                        </div>
                        <div className="flex -space-x-3">
                          {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-apple-black bg-slate-800" />
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        {topRankers.map((ranker, i) => (
                          <div key={i} className="flex items-center gap-4 p-4 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <img src={ranker.image} className="w-12 h-12 rounded-2xl object-cover" />
                            <div className="flex-1">
                              <h4 className="text-white font-bold text-sm">{ranker.name}</h4>
                              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{ranker.college}</p>
                            </div>
                            <div className="text-right">
                              <span className="text-accent-500 font-black text-lg">{ranker.air}</span>
                              <p className="text-[8px] text-white/30 uppercase tracking-tighter mt-1">{ranker.year}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                        <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Global Ranking</div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-accent-500 text-accent-500" />)}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Live Stats Strip */}
        <div className="bg-white border-y border-slate-100 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {[
                { label: 'Total Selections', val: '1,500+', icon: Users },
                { label: 'Avg Rank Improvement', val: '40%', icon: Timer },
                { label: 'PhD Educators', val: '18+', icon: Award },
                { label: 'Success Rate', val: '92%', icon: CheckCircle },
              ].map((stat, i) => (
                <div key={i} className="group cursor-default">
                  <div className="w-10 h-10 rounded-full bg-apple-gray flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon size={18} className="text-accent-500" />
                  </div>
                  <p className="text-3xl font-black text-apple-black tracking-tight mb-1">{stat.val}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Course Discovery Section */}
        <section className="section-padding bg-apple-gray">
          <div className="container-wide">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <AnimatedSection>
                  <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-8">
                    Precision Engineered
                    <br />
                    <span className="text-slate-400">Curriculums.</span>
                  </h2>
                  <p className="text-xl text-apple-darkGray font-medium leading-relaxed">
                    Every course is a meticulously planned roadmap. We leverage AI-driven analytics to identify and bridge your concept gaps.
                  </p>
                </AnimatedSection>
              </div>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white transition-all shadow-sm">
                  <ChevronRight size={20} className="rotate-180" />
                </button>
                <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white transition-all shadow-sm">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {courses.map((course, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div className="group relative bg-white rounded-[40px] p-10 flex flex-col h-full border border-transparent hover:border-slate-100 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500">
                    <div className="flex items-center justify-between mb-10">
                      <div className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                        course.highlight ? 'bg-accent-500 text-apple-black' : 'bg-apple-gray text-slate-400'
                      }`}>
                        {course.status}
                      </div>
                      {course.highlight && <Zap size={20} className="text-accent-500 fill-accent-500" />}
                    </div>

                    <h3 className="text-2xl font-bold text-apple-black mb-2 tracking-tight group-hover:text-accent-500 transition-colors">
                      {course.name}
                    </h3>
                    <p className="text-sm font-semibold text-apple-darkGray mb-8 italic">
                      {course.tagline}
                    </p>

                    <div className="space-y-4 mb-10 flex-1">
                      {course.features.map((f, j) => (
                        <div key={j} className="flex items-start gap-3 text-sm font-medium text-slate-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>

                    <div className="pt-8 border-t border-slate-50 mt-auto">
                      <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-3xl font-black text-apple-black">{course.fee}</span>
                        <span className="text-xs text-slate-400 font-bold uppercase">/ session</span>
                      </div>
                      <button className={`w-full py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all ${
                        course.highlight 
                        ? 'bg-apple-black text-white hover:bg-accent-500 hover:text-apple-black' 
                        : 'bg-apple-gray text-apple-black hover:bg-slate-200'
                      }`}>
                        Reserve Seat
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* The Faculty - High end portrait display */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <AnimatedSection>
                <h2 className="text-5xl font-bold tracking-tight mb-6">World Class Minds.</h2>
                <p className="text-lg text-apple-darkGray font-medium">Mentorship by legends who have lived the IIT journey.</p>
              </AnimatedSection>
            </div>

            <div className="grid md:grid-cols-3 gap-16">
              {faculty.map((f, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="blur">
                  <div className="relative group">
                    <div className="aspect-[4/5] rounded-[48px] overflow-hidden mb-8 bg-apple-gray">
                      <img src={f.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-apple-black via-transparent to-transparent opacity-60" />
                    </div>
                    <div className="text-center">
                      <h4 className="text-2xl font-bold mb-1 tracking-tight">{f.name}</h4>
                      <p className="text-accent-500 text-[11px] font-bold uppercase tracking-widest mb-4">{f.subject}</p>
                      <p className="text-sm text-slate-500 font-medium px-4">{f.credentials}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* AI Agent Workflow - Integrated smoothly */}
        <section className="py-32 bg-apple-black text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 text-accent-500 text-[11px] font-bold uppercase tracking-widest mb-8">
                    <Zap size={14} />
                    Proprietary Tech
                  </div>
                  <h2 className="text-5xl font-bold tracking-tight mb-8">
                    Smart Learning,
                    <br />
                    Automated.
                  </h2>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                    Our AI agent handles 24/7 doubt resolution and personalized study planning. We use technology to ensure no question goes unanswered.
                  </p>
                  <div className="space-y-6">
                    {[
                      'Instant doubt classification',
                      'Automated progress tracking',
                      'Predictive rank modeling',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-sm font-bold text-white/60">
                        <div className="w-2 h-2 rounded-full bg-accent-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
              <AnimatedSection delay={200} animationType="scale">
                <div className="p-8 rounded-[48px] bg-white/5 border border-white/10 shadow-3xl overflow-hidden">
                  <AgentFlowChart workflow={admissionsWorkflow} />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#F5A62308_0%,transparent_70%)]" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <AnimatedSection animationType="scale">
              <Trophy size={64} className="mx-auto text-accent-500 mb-12" />
              <h2 className="text-6xl sm:text-8xl font-bold tracking-tighter mb-10">
                Your pinnacle
                <br />
                is within reach.
              </h2>
              <p className="text-xl text-apple-darkGray font-medium mb-16 leading-relaxed">
                Join India's most results-driven academic ecosystem.
                <br />
                Limited seats available for the 2025 Scholarship Test.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <button className="px-12 py-6 bg-apple-black text-white font-bold rounded-full text-lg shadow-2xl hover:bg-accent-500 hover:text-apple-black transition-all hover:scale-105 active:scale-95">
                  Register for Scholarship
                </button>
                <button className="text-lg font-bold text-apple-darkGray hover:text-apple-black transition-colors flex items-center gap-2">
                  Download Prospectus <ArrowRight size={20} />
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </MockLayout>
  );
}
