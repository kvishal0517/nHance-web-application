import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import { AnimatedSection } from '../../components/AnimatedSection';
import type { AgentWorkflow } from '../../types';
import {
  Search,
  Mail,
  ChevronRight,
  Shield,
  Zap,
  AlertTriangle,
  CheckCircle,
  MapPin,
  Clock,
  Lock,
  ArrowRight,
  TrendingUp,
  Newspaper,
  Globe
} from 'lucide-react';

const accentBlue = '#2563EB';

const editorialWorkflow: AgentWorkflow = {
  title: 'Editorial Workflow & Tip Processing',
  nodes: [
    { id: '1', label: 'Tip Submitted', description: 'Reader submits a tip via encrypted form — anonymity preserved end-to-end.', automated: false, x: 20, y: 40 },
    { id: '2', label: 'Plausibility Check', description: 'AI cross-references the tip against public records and known bad-actor patterns.', automated: true, x: 200, y: 40 },
    { id: '3', label: 'Priority Score', description: 'Tip is scored for public interest, verifiability, and urgency on a 1–10 scale.', automated: true, x: 380, y: 40 },
    { id: '4', label: 'Route to Editor', description: 'High-priority tips routed to the relevant beat editor with a briefing summary.', automated: true, x: 560, y: 40 },
    { id: '5', label: 'Transparency Log', description: 'Automated monthly report on tips received and editorial decisions made.', automated: true, x: 380, y: 160 },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
  ],
};

const stories = [
  {
    tag: 'Housing',
    title: 'Ward 14\'s Affordable Housing Demolitions: Who Approved?',
    author: 'Meera Pillai',
    time: '3h ago',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    featured: true
  },
  {
    tag: 'Civic',
    title: 'Municipal Water Data Withheld Despite Shortage Claims',
    author: 'Rohan Das',
    time: 'Yesterday',
    image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&q=80&w=800',
    featured: false
  },
  {
    tag: 'Budget',
    title: 'Ward Fund 2025: Interactive Spending Breakdown',
    author: 'DL Desk',
    time: '2 days ago',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
    featured: false
  },
];

export default function DistrictLens() {
  return (
    <MockLayout projectName="The District Lens" accentColor={accentBlue} categoryId="media">
      <div className="bg-white text-slate-900 selection:bg-blue-100 overflow-hidden">
        
        {/* Newsroom Masthead */}
        <header className="border-b border-slate-100 py-6 bg-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-black tracking-tighter">THE DISTRICT <span className="text-blue-600 italic">LENS.</span></h1>
              <nav className="hidden lg:flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <a href="#" className="hover:text-blue-600 transition-colors">Investigations</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Hyperlocal</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Data</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Transparency</a>
              </nav>
            </div>
            <div className="flex items-center gap-6">
              <Search size={18} className="text-slate-400 cursor-pointer hover:text-blue-600 transition-colors" />
              <button className="px-6 py-2 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-blue-600 transition-colors">Subscribe</button>
            </div>
          </div>
        </header>

        {/* Hyperlocal Hero */}
        <section className="relative py-20 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-[9px] font-black uppercase tracking-[0.3em] mb-10">
                    <MapPin size={12} />
                    Hyperlocal · Independent · Reader-Funded
                  </div>

                  <h1 className="text-6xl lg:text-[90px] font-black leading-[0.9] tracking-tighter mb-10 text-slate-900">
                    The news your 
                    <br />
                    ward <span className="text-blue-600">needs.</span>
                  </h1>

                  <p className="text-xl lg:text-2xl text-slate-500 max-w-xl mb-12 font-medium leading-relaxed">
                    Accountability where it matters most. We cover the stories corporate media misses — without advertiser pressure or political capture.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 items-center">
                    <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl text-sm shadow-xl hover:scale-105 transition-all active:scale-95 flex items-center gap-3">
                      View Investigations
                      <ArrowRight size={18} />
                    </button>
                    <button className="px-10 py-5 bg-white text-slate-900 border border-slate-200 font-bold rounded-2xl text-sm shadow-sm hover:bg-slate-50 transition-all">
                      Support Our Work
                    </button>
                  </div>
                </AnimatedSection>
              </div>

              <div className="lg:col-span-5">
                <AnimatedSection delay={200} animationType="scale">
                  <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100">
                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-50">
                      <div>
                        <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Impact Report</p>
                        <p className="text-xl font-bold text-slate-900">Ward Accountability</p>
                      </div>
                      <TrendingUp className="text-blue-600" />
                    </div>
                    
                    <div className="space-y-6">
                      {[
                        { l: 'Monthly Readers', v: '18,402', c: '+12%' },
                        { l: 'Investigations', v: '34', c: 'In-progress' },
                        { l: 'RTIs Filed', v: '112', c: 'High Success' },
                      ].map((stat, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{stat.l}</p>
                            <p className="text-lg font-black text-slate-900">{stat.v}</p>
                          </div>
                          <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full uppercase">{stat.c}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-50 flex items-center gap-4 text-xs font-bold text-slate-400">
                      <Newspaper size={16} />
                      100% of revenue from readers.
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Story Grid */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-24">
              <AnimatedSection>
                <p className="text-[11px] font-bold uppercase tracking-[0.4em] mb-6 text-blue-600">The Ledger</p>
                <h2 className="text-6xl font-black tracking-tighter">Latest Stories.</h2>
              </AnimatedSection>
              <button className="hidden sm:flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 transition-all pb-1">
                Full Feed <Globe size={16} />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {stories.map((story, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div className="group cursor-pointer">
                    <div className="aspect-[16/10] rounded-[32px] overflow-hidden mb-8 bg-slate-100 relative shadow-lg">
                      <img src={story.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                      <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[9px] font-black uppercase tracking-widest text-blue-600 border border-slate-100 shadow-sm">
                        {story.tag}
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-4">
                        <span className="flex items-center gap-1"><Clock size={12} /> {story.time}</span>
                        <span>By {story.author}</span>
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 leading-tight mb-6 group-hover:text-blue-600 transition-colors">{story.title}</h3>
                      <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-blue-600 transition-colors">
                        Read Story <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Secure Tip Line - High trust dark section */}
        <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Lock className="w-full h-full" size={400} strokeWidth={0.2} />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-600/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.25em] mb-10 border border-blue-600/30">
                    <Shield size={16} />
                    Secure Tip Line
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-black tracking-tighter mb-10 leading-[0.95]">
                    Know something
                    <br />
                    we should?
                  </h2>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                    We protect our sources end-to-end. Whether it's civic corruption or hidden data, your anonymity is built into our digital architecture. All tips are reviewed by human editors.
                  </p>
                  
                  <div className="flex flex-wrap gap-8">
                    {[
                      { i: Lock, l: 'E2E Encrypted' },
                      { i: AlertTriangle, l: 'Whistleblower Protected' },
                      { i: Shield, l: 'Signal Integrated' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500">
                        <item.i size={16} className="text-blue-500" />
                        {item.l}
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
              <div className="p-1 rounded-[48px] bg-gradient-to-br from-white/10 to-transparent border border-white/5 backdrop-blur-3xl shadow-3xl">
                <div className="bg-slate-900/80 rounded-[44px] p-10">
                  <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-8">Submit Anonymously</p>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Department/Area</label>
                      <input className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500" placeholder="e.g. Ward 14 Water Dept" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">The Lead</label>
                      <textarea rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 resize-none" placeholder="Describe the situation..." />
                    </div>
                    <button className="w-full py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-[11px] rounded-xl hover:bg-blue-500 transition-colors shadow-2xl">Send Encrypted Tip</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Editorial Workflow */}
        <section className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <AnimatedSection delay={200} animationType="scale">
                <div className="p-10 rounded-[64px] bg-slate-50 border border-slate-100 shadow-inner overflow-hidden">
                  <AgentFlowChart workflow={editorialWorkflow} />
                </div>
              </AnimatedSection>
              <div>
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-50 text-blue-600 text-[11px] font-bold uppercase tracking-[0.25em] mb-10 border border-blue-100">
                    <Zap size={16} className="fill-blue-600" />
                    Editorial Intelligence
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-10 leading-[0.95]">
                    Speed to truth,
                    <br />
                    AI-powered.
                  </h2>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                    Hyperlocal newsrooms face immense resource pressure. Our proprietary editorial AI handles the administrative overhead — from plausibility checks on tips to automated transparency logging — so our reporters can stay in the field.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-slate-900 group transition-all duration-500">
                      <CheckCircle size={24} className="text-blue-600 mb-6" />
                      <h4 className="font-black text-slate-900 group-hover:text-white mb-2 transition-colors uppercase text-xs tracking-widest">Fact Triage</h4>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">Instant cross-referencing with public records.</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-slate-900 group transition-all duration-500">
                      <Mail size={24} className="text-blue-600 mb-6" />
                      <h4 className="font-black text-slate-900 group-hover:text-white mb-2 transition-colors uppercase text-xs tracking-widest">Auto-Distro</h4>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">Multi-channel syndication across ward groups.</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Strip */}
        <div className="bg-slate-900 py-20 text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <AnimatedSection>
              <h2 className="text-4xl font-black mb-8 tracking-tighter">Support Independent Local News.</h2>
              <div className="flex flex-wrap justify-center gap-10">
                {[
                  { n: 'Supporter', p: '₹100/mo', d: 'Ad-free reading' },
                  { n: 'Sustainer', p: '₹300/mo', d: 'Priority tip line' },
                  { n: 'Patron', p: '₹1,000/mo', d: 'Named in masthead' },
                ].map((tier, i) => (
                  <div key={i} className="text-center group cursor-pointer">
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2 group-hover:scale-110 transition-transform">{tier.n}</p>
                    <p className="text-2xl font-black mb-1">{tier.p}</p>
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">{tier.d}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Final CTA */}
        <section className="py-40 bg-white relative overflow-hidden text-center text-slate-900 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <AnimatedSection animationType="scale">
              <Newspaper size={48} className="mx-auto text-blue-600 mb-12" />
              <h2 className="text-6xl lg:text-[100px] font-black tracking-tighter mb-12 leading-[0.85]">
                Truth is 
                <br />
                reader-funded.
              </h2>
              <p className="text-2xl text-slate-500 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                Join 18,000+ neighbors who stay informed through The District Lens. Help us keep the news independent and accountable.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <button className="px-14 py-6 bg-blue-600 text-white font-black uppercase tracking-widest text-lg rounded-2xl shadow-2xl hover:scale-105 transition-all active:scale-95">
                  Become a Member
                </button>
                <button className="text-lg font-bold text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-2">
                  Daily Briefing Signup <ChevronRight size={24} />
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </div>
    </MockLayout>
  );
}
