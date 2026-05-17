import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import { AnimatedSection } from '../../components/AnimatedSection';
import type { AgentWorkflow } from '../../types';
import {
  ArrowUpRight,
  ArrowRight,
  Zap,
  Search,
  BarChart3,
  Paintbrush,
  RefreshCw,
  Rocket,
  MessageSquare,
  FileText,
  Award,
  Globe,
  TrendingUp
} from 'lucide-react';

const terracotta = '#C75B39';

const studioOpsWorkflow: AgentWorkflow = {
  title: 'Studio Intelligence & Project Guard',
  nodes: [
    { id: '1', label: 'Incoming Brief', description: 'Client submits a new project brief via the portal.', automated: false, x: 20, y: 40 },
    { id: '2', label: 'Brief Scoring', description: 'AI scores the brief for clarity, timeline, and strategic depth.', automated: true, x: 200, y: 40 },
    { id: '3', label: 'Conflict Check', description: 'Automated roster audit to ensure zero category conflicts.', automated: true, x: 380, y: 40 },
    { id: '4', label: 'Priority Routing', description: 'Qualified leads are routed to the relevant creative lead.', automated: true, x: 560, y: 40 },
    { id: '5', label: 'Profitability Audit', description: 'AI monitors project margins and team utilization in real-time.', automated: true, x: 380, y: 160 },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
  ],
};

const selectedWork = [
  {
    client: 'Heirloom Co.',
    category: 'Identity + Packaging',
    desc: 'Repositioning legacy tableware for modern minimalists.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&q=80&w=800',
    color: terracotta
  },
  {
    client: 'Kite VC',
    category: 'Digital + Motion',
    desc: 'A conviction-first website for a global seed-stage firm.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    color: '#2D6A4F'
  },
  {
    client: 'Drift Coffee',
    category: 'Retail Experience',
    desc: 'From logo to linen: end-to-end brand for a café chain.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
    color: '#8B5E3C'
  },
];

export default function WunderkindStudio() {
  return (
    <MockLayout projectName="Wunderkind Studio" accentColor={terracotta} categoryId="creatives">
      <div className="bg-[#0D0D0D] text-white selection:bg-orange-900/30 overflow-hidden font-sans">
        
        {/* Architecturally Bold Hero */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0D0D0D]">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="grid grid-cols-12 h-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-white h-full" />
              ))}
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-10">
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold uppercase tracking-[0.4em] mb-12">
                    <Globe size={14} className="text-orange-500" />
                    Boutique Creative Agency · Mumbai · London
                  </div>

                  <h1 className="text-7xl lg:text-[130px] font-black leading-[0.85] tracking-tighter mb-12">
                    Brands 
                    <br />
                    people <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-200 italic font-serif">talk about.</span>
                  </h1>

                  <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
                    <p className="text-2xl text-slate-400 max-w-sm font-medium leading-relaxed">
                      Strategy, identity, and motion for companies with something real to say. 
                    </p>
                    <button className="px-14 py-6 bg-orange-600 text-white font-black rounded-full text-xl shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center gap-3">
                      Start Project
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>

          {/* Agency Stats bar */}
          <div className="absolute bottom-0 left-0 w-full py-10 border-t border-white/5 bg-white/[0.02] backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
              {[
                { l: 'Brands Built', v: '80+' },
                { l: 'Countries', v: '12' },
                { l: 'Years Active', v: '14' },
                { l: 'ROI Index', v: '3.4x' },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-white tracking-tight">{s.v}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-orange-500">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Grid - High end reveal */}
        <section className="py-32 bg-[#0D0D0D]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-24">
              <AnimatedSection>
                <p className="text-[11px] font-bold uppercase tracking-[0.4em] mb-6 text-orange-600">The Portfolio</p>
                <h2 className="text-6xl font-black tracking-tighter">Impact.</h2>
              </AnimatedSection>
              <button className="hidden sm:flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 border-b-2 border-transparent hover:text-white hover:border-white transition-all pb-1">
                All Case Studies <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {selectedWork.map((w, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div className="group cursor-pointer">
                    <div className="aspect-[4/5] rounded-[48px] overflow-hidden mb-8 relative shadow-2xl bg-zinc-900">
                      <img src={w.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-0 left-0 w-full h-2 group-hover:h-3 transition-all" style={{ backgroundColor: w.color }} />
                    </div>
                    <div className="px-4">
                      <p className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: w.color }}>{w.category}</p>
                      <h3 className="text-2xl font-black text-white tracking-tight mb-4 group-hover:translate-x-2 transition-transform">{w.client}</h3>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology - Five Steps */}
        <section className="py-32 bg-white text-black relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <AnimatedSection>
                <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6 italic">No shortcuts.</h2>
                <p className="text-xl text-slate-500 font-medium">Every brand gets the same strategic rigor.</p>
              </AnimatedSection>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { i: Search, t: 'Discovery', d: 'Deep-dive into market & audience.' },
                { i: BarChart3, t: 'Strategy', d: 'Positioning and messaging arch.' },
                { i: Paintbrush, t: 'Design', d: 'Visual DNA and identity dev.' },
                { i: RefreshCw, t: 'Refinement', d: 'Structured feedback loops.' },
                { i: Rocket, t: 'Launch', d: 'Handoff and growth support.' },
              ].map((step, i) => (
                <div key={i} className="bg-zinc-50 p-8 rounded-[40px] border border-zinc-100 flex flex-col items-center text-center group hover:bg-black hover:text-white transition-all duration-500">
                  <span className="text-[10px] font-black text-orange-600 mb-6 group-hover:scale-125 transition-transform">0{i+1}</span>
                  <step.i size={32} className="mb-8 opacity-20 group-hover:opacity-100 transition-opacity" />
                  <h4 className="text-lg font-black mb-3 tracking-tight">{step.t}</h4>
                  <p className="text-xs font-medium opacity-60">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Studio Workflow */}
        <section className="py-32 bg-[#0D0D0D] text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-orange-600/10 text-orange-500 text-[11px] font-bold uppercase tracking-[0.25em] mb-10 border border-orange-600/20">
                    <Zap size={16} className="fill-orange-500" />
                    Studio Intelligence
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-10 leading-[0.95]">
                    Complex craft,
                    <br />
                    simple ops.
                  </h2>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                    High-end creative work requires focus. Our proprietary studio agent handles the overhead — from brief quality scoring and category conflict detection to automated profitability audits.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      { i: FileText, t: 'Brief Scoring', d: 'AI-driven clarity assessment of incoming briefs.' },
                      { i: MessageSquare, t: 'Guard Protocol', d: 'Automated roster audit to prevent category overlap.' },
                      { i: TrendingUp, t: 'Margin Watch', d: 'Real-time project health and team utility tracking.' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-start">
                        <item.i size={20} className="text-orange-600 mt-1" />
                        <div>
                          <h4 className="font-black text-white text-sm uppercase tracking-widest">{item.t}</h4>
                          <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
              <AnimatedSection delay={200} animationType="scale">
                <div className="p-10 rounded-[64px] bg-white/[0.02] border border-white/5 shadow-inner overflow-hidden backdrop-blur-3xl">
                  <AgentFlowChart workflow={studioOpsWorkflow} />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Team Grid - High contrast reveal */}
        <section className="py-32 bg-white text-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-24">
              <AnimatedSection>
                <h2 className="text-5xl lg:text-6xl font-black tracking-tighter mb-4">The Studio.</h2>
                <p className="text-xl text-slate-500 font-medium">Meet the minds behind the brands.</p>
              </AnimatedSection>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { n: 'Priyanka Bose', r: 'Creative Director', b: '14 years in Ogilvy. Obsessed with brand legacy.' },
                { n: 'Arjun Mehta', r: 'Head of Strategy', b: 'Ex-BCG consultant. Bringing rigor to creative problems.' },
                { n: 'Suki Tanaka', r: 'Lead Motion', b: 'Animating identities. Previously at Buck, New York.' },
                { n: 'Dev Rajan', r: 'Senior Designer', b: 'NID graduate. Typographic systems specialist.' },
              ].map((m, i) => (
                <div key={i} className="group">
                  <div className="aspect-square rounded-[32px] bg-zinc-50 flex items-center justify-center mb-8 border border-zinc-100 group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <span className="text-4xl font-black opacity-10 group-hover:opacity-100 transition-opacity">{m.n[0]}{m.n.split(' ')[1][0]}</span>
                  </div>
                  <h4 className="text-xl font-black tracking-tight">{m.n}</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-orange-600 mb-4">{m.r}</p>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{m.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 bg-zinc-900 relative overflow-hidden text-center text-white">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <AnimatedSection animationType="scale">
              <Award size={48} className="mx-auto text-orange-600 mb-12" />
              <h2 className="text-6xl lg:text-[100px] font-black tracking-tighter mb-12 leading-[0.85]">
                Let's make it 
                <br />
                unforgettable.
              </h2>
              <p className="text-2xl text-slate-400 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                Currently booking for H2 2025. I work with founders and CMOs who are done playing it safe.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <button className="px-14 py-6 bg-orange-600 text-white font-black uppercase tracking-widest text-lg rounded-full shadow-2xl hover:scale-105 transition-all active:scale-95">
                  Request Brief
                </button>
                <button className="text-lg font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  Studio Showreel <ArrowRight size={24} />
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </div>
    </MockLayout>
  );
}
