import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import { AnimatedSection } from '../../components/AnimatedSection';
import type { AgentWorkflow } from '../../types';
import {
  Terminal,
  GitBranch,
  ArrowUpRight,
  Zap,
  Code,
  ArrowRight,
  Monitor,
  Activity,
  Command
} from 'lucide-react';

const GREEN = '#3FB950';

const thoughtWorkflow: AgentWorkflow = {
  title: 'Engineering Thought Intelligence Agent',
  nodes: [
    { id: '1', label: 'Monitor HN/arXiv', description: 'Agent filters global CS feeds for Vikram\'s core stack (Go/Rust/Kafka).', automated: true, x: 20, y: 40 },
    { id: '2', label: 'Daily Briefing', description: 'AI compiles a 5-minute prioritised reading list for the morning.', automated: true, x: 200, y: 40 },
    { id: '3', label: 'Draft Post', description: 'Automatically creates technical summaries of new papers for social cross-posting.', automated: true, x: 380, y: 40 },
    { id: '4', label: 'CFP Tracker', description: 'Monitors top-tier conference deadlines (QCon, LeadDev) and notifies 3 weeks out.', automated: true, x: 560, y: 40 },
    { id: '5', label: 'Impact Audit', description: 'AI tracks pickups and citations of Vikram\'s published whitepapers.', automated: true, x: 380, y: 160 },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
  ],
};

const highlights = [
  {
    company: 'Razorpay',
    title: 'Payment Ledger v2',
    scale: '2B+ trx/yr',
    outcome: '99.999% Uptime',
    desc: 'Event-sourced ledger re-arch on Kafka + CockroachDB.'
  },
  {
    company: 'Swiggy',
    title: 'Internal Developer Platform',
    scale: '400+ Engineers',
    outcome: '3x Deploy Speed',
    desc: 'Golden-path templates and SLO-as-code tooling.'
  },
  {
    company: 'Meesho',
    title: 'ML GPU Optimization',
    scale: '50M+ requests/day',
    outcome: '62% Cost Save',
    desc: 'Dynamic batching layer for recommendation inference.'
  },
];

export default function VikramStaffEngineer() {
  return (
    <MockLayout projectName="Vikram Sahay — Staff Engineer" accentColor={GREEN} categoryId="tech">
      <div className="bg-[#0D1117] text-[#E6EDF3] selection:bg-green-500/20 overflow-hidden font-mono">
        
        {/* Terminal Hero */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0D1117]">
          {/* Scanline Effect Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#3FB950_3px,transparent_3px)]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-8">
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-md bg-green-500/10 border border-green-500/20 text-green-400 text-[11px] font-bold uppercase tracking-[0.4em] mb-12">
                    <Terminal size={14} />
                    ~ vikram@nair:~$ status --active
                  </div>

                  <h1 className="text-7xl lg:text-[110px] font-black leading-[0.9] tracking-tighter mb-12 text-white">
                    Built for 
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-300 italic">resilience.</span>
                  </h1>

                  <p className="text-xl lg:text-2xl text-slate-400 max-w-2xl mb-16 font-medium leading-relaxed font-sans">
                    Staff Engineer specializing in distributed systems and platform architecture. I build systems that don't page you at 3am. Formerly Razorpay, Swiggy, and Meesho.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-8 items-center">
                    <button className="px-12 py-6 bg-green-500 text-[#0D1117] font-black rounded-xl text-lg shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center gap-3">
                      View Case Studies
                      <Command size={20} />
                    </button>
                    <button className="text-lg font-bold text-slate-400 hover:text-green-400 transition-colors border-b-2 border-transparent hover:border-green-500 pb-1">
                      github.com/vikramnair
                    </button>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>

          {/* Code Stats Strip */}
          <div className="absolute bottom-12 right-12 hidden lg:flex flex-col gap-8 text-right">
            <div>
              <p className="text-4xl font-black text-white tracking-tight">3.4k</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-green-500">GitHub Stars</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white tracking-tight">12yr</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-green-500">Engineering Tenure</p>
            </div>
          </div>
        </section>

        {/* Highlights Grid - High contrast reveal */}
        <section className="py-32 bg-[#161B22]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <AnimatedSection>
                <p className="text-green-500 font-bold uppercase tracking-[0.4em] text-[11px] mb-6">// engineering-highlights</p>
                <h2 className="text-6xl font-black tracking-tighter text-white">Impact.</h2>
              </AnimatedSection>
              <p className="text-lg text-slate-500 max-w-sm font-medium font-sans">"The hardest part of engineering is not building; it's deciding what not to build."</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {highlights.map((h, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div className="group bg-[#0D1117] rounded-3xl p-10 hover:border-green-500/30 transition-all duration-500 border border-[#30363D] flex flex-col h-full">
                    <div className="flex justify-between items-start mb-10">
                      <div className="w-12 h-12 rounded-xl bg-[#161B22] flex items-center justify-center border border-[#30363D] group-hover:bg-green-500/10 transition-colors">
                        <Activity size={20} className="text-green-500" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{h.company}</span>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight leading-tight">{h.title}</h3>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed font-sans mb-10 flex-1">{h.desc}</p>
                    <div className="pt-8 border-t border-[#30363D] flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                      <span className="text-slate-500">{h.scale}</span>
                      <span className="text-green-500">{h.outcome}</span>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Writing - List View */}
        <section className="py-32 bg-[#0D1117]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-24">
              <AnimatedSection>
                <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6 text-white">The Digest.</h2>
                <p className="text-xl text-slate-500 font-medium font-sans max-w-xl mx-auto">Deep-dives into distributed systems, engineering leadership, and reliability.</p>
              </AnimatedSection>
            </div>

            <div className="space-y-4">
              {[
                { t: 'Why Your Kafka Consumer Group Is Slower Than You Think', d: 'Apr 2025 · 11 min read', c: 'Distributed Systems' },
                { t: 'The Staff Engineer\'s Guide to Killing Projects Gracefully', d: 'Feb 2025 · 8 min read', c: 'Leadership' },
                { t: 'Error Budgets Are a Promise, Not a Policy', d: 'Jan 2025 · 7 min read', c: 'SRE' },
              ].map((post, i) => (
                <div key={i} className="group bg-[#161B22] p-8 rounded-2xl border border-[#30363D] flex items-center justify-between hover:border-green-500/30 transition-all cursor-pointer">
                  <div className="flex-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-green-500 mb-2 block">{post.c}</span>
                    <h4 className="text-xl font-black text-white group-hover:text-green-400 transition-colors leading-tight mb-2">{post.t}</h4>
                    <p className="text-xs font-bold text-slate-500">{post.d}</p>
                  </div>
                  <ArrowUpRight size={24} className="text-slate-700 group-hover:text-green-500 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Engineering Workflow */}
        <section className="py-32 bg-[#161B22] text-[#E6EDF3]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-green-500/10 text-green-400 text-[11px] font-bold uppercase tracking-[0.25em] mb-10 border border-green-500/20">
                    <Zap size={16} className="fill-green-400" />
                    Staying Sharp at Scale
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-10 leading-[0.95] text-white">
                    Human depth,
                    <br />
                    AI filtered.
                  </h2>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed font-sans mb-12">
                    In a world of constant tech-churn, focus is the ultimate competitive advantage. My proprietary engineering agent handles the noise — monitoring HN/arXiv, compiling daily briefs, and tracking CFP deadlines — so I can stay at the frontier without the firehose.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div className="p-8 rounded-3xl bg-[#0D1117] border border-[#30363D] group hover:border-green-500/30 transition-all">
                      <Monitor size={24} className="text-green-500 mb-6" />
                      <h4 className="font-black text-sm uppercase tracking-widest mb-2 text-white">Feed Intelligence</h4>
                      <p className="text-xs text-slate-500 font-medium font-sans">Automated arXiv filtering for core-stack papers.</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-[#0D1117] border border-[#30363D] group hover:border-green-500/30 transition-all">
                      <GitBranch size={24} className="text-green-500 mb-6" />
                      <h4 className="font-black text-sm uppercase tracking-widest mb-2 text-white">Impact Tracker</h4>
                      <p className="text-xs text-slate-500 font-medium font-sans">Automated pickup tracking for OSS contributions.</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              <AnimatedSection delay={200} animationType="scale">
                <div className="p-10 rounded-[64px] bg-[#0D1117] border border-[#30363D] shadow-inner overflow-hidden">
                  <AgentFlowChart workflow={thoughtWorkflow} />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 bg-[#0D1117] relative overflow-hidden text-center text-white border-t border-[#30363D]">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <AnimatedSection animationType="scale">
              <Code size={48} className="mx-auto text-green-500 mb-12" />
              <h2 className="text-6xl lg:text-[100px] font-black tracking-tighter mb-12 leading-[0.85]">
                Solve hard 
                <br />
                problems.
              </h2>
              <p className="text-2xl text-slate-400 font-medium mb-16 max-w-2xl mx-auto leading-relaxed font-sans">
                Available for Staff-level architecture reviews, fractional platform leadership, and distributed systems consulting. 2–3 slots per quarter.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <button className="px-14 py-6 bg-green-500 text-[#0D1117] font-black rounded-xl text-lg shadow-2xl hover:scale-105 transition-all active:scale-95">
                  Enquire About Advisory
                </button>
                <button className="text-lg font-bold text-slate-400 hover:text-green-400 transition-colors flex items-center gap-2">
                  Download CV <ArrowRight size={24} />
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </div>
    </MockLayout>
  );
}
