import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import { AnimatedSection } from '../../components/AnimatedSection';
import type { AgentWorkflow } from '../../types';
import {
  Rocket,
  Zap,
  Shield,
  Layers,
  ArrowRight,
  BarChart3,
  Database,
  Activity,
  ChevronRight,
  Award
} from 'lucide-react';

const VIOLET = '#7B2FBE';

const ctoWorkflow: AgentWorkflow = {
  title: 'Tech Debt & Roadmap Intelligence Agent',
  nodes: [
    { id: '1', label: 'Scan Repository', description: 'Agent performs an automated audit of technical debt, circular dependencies, and security vulnerabilities.', automated: true, x: 20, y: 40 },
    { id: '2', label: 'Debt Scoring', description: 'AI scores the codebase for maintainability and scalability on a 1–100 scale.', automated: true, x: 200, y: 40 },
    { id: '3', label: 'Route to Roadmap', description: 'Critical debt is automatically mapped to the next 3 product sprints.', automated: true, x: 380, y: 40 },
    { id: '4', label: 'Cost Analysis', description: 'AI calculates the engineering overhead cost of current bottlenecks.', automated: true, x: 560, y: 40 },
    { id: '5', label: 'Weekly CTO Digest', description: 'Automated executive summary of engineering velocity and risk metrics.', automated: true, x: 380, y: 160 },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
  ],
};

const stack = [
  { t: 'Series A Audit', d: 'Comprehensive technical due-diligence for founders and investors.' },
  { t: 'Fractional CTO', d: 'Strategic technical leadership without the full-time overhead.' },
  { t: 'Scale Architecture', d: 'Re-engineering legacy monoliths into high-throughput systems.' },
  { t: 'Platform Ops', d: 'Building golden-path developer platforms to 3x engineering speed.' },
];

export default function BuildfastCTO() {
  return (
    <MockLayout projectName="Buildfast CTO — Tech Consultancy" accentColor={VIOLET} categoryId="tech">
      <div className="bg-[#050505] text-[#F8F9FA] selection:bg-purple-500/20 overflow-hidden font-sans">
        
        {/* High Velocity Hero */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
          {/* Kinetic Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-8">
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold uppercase tracking-[0.4em] mb-12">
                    <Rocket size={14} className="text-purple-500" />
                    CTO-as-a-Service · Series A to Growth
                  </div>

                  <h1 className="text-7xl lg:text-[110px] font-black leading-[0.9] tracking-tighter mb-12 text-white">
                    Velocity to 
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400 italic">escape velocity.</span>
                  </h1>

                  <p className="text-2xl lg:text-3xl text-slate-400 max-w-2xl mb-16 font-medium leading-relaxed">
                    We bridge the gap between "working prototype" and "infinite scale". High-fidelity technical leadership for founders who move fast.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-8 items-center">
                    <button className="px-14 py-6 bg-purple-600 text-white font-black rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center gap-3">
                      Secure Retainer
                      <ArrowRight size={20} />
                    </button>
                    <button className="text-lg font-bold text-slate-400 hover:text-purple-400 transition-colors border-b-2 border-transparent hover:border-purple-600 pb-1">
                      Our Impact Stack
                    </button>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>

          {/* Kinetic Stats Strip */}
          <div className="absolute bottom-12 right-12 hidden lg:flex flex-col gap-10 text-right">
            <div>
              <p className="text-5xl font-black text-white tracking-tight">14</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-purple-500">Unicorn Exits Advised</p>
            </div>
            <div>
              <p className="text-5xl font-black text-white tracking-tight">3.8x</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-purple-500">Avg. Velocity Boost</p>
            </div>
          </div>
        </section>

        {/* Impact Stack Grid */}
        <section className="py-32 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <AnimatedSection>
                <p className="text-purple-500 font-bold uppercase tracking-[0.4em] text-[11px] mb-6">Fractional Leadership</p>
                <h2 className="text-6xl font-black tracking-tighter">Stack.</h2>
              </AnimatedSection>
              <p className="text-lg text-slate-500 max-w-sm font-medium">Modular technical support tailored to your growth stage. No bloated teams, just direct impact.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {stack.map((s, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div className="group bg-[#0A0A0A] rounded-[48px] p-10 hover:shadow-2xl transition-all duration-700 border border-white/5 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-[24px] bg-white/5 flex items-center justify-center mb-10 group-hover:bg-purple-600 transition-all duration-500">
                      <Zap size={28} className="text-purple-500 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-purple-400 transition-colors">{s.t}</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed flex-1">{s.d}</p>
                    <button className="mt-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-purple-500 group-hover:gap-4 transition-all">
                      Case Study <ArrowRight size={14} />
                    </button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology - Precision Visuals */}
        <section className="py-32 bg-white text-black relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <AnimatedSection>
                <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6">Speed to Scale.</h2>
                <p className="text-xl text-slate-500 font-medium max-w-xl mx-auto">Our roadmap for transforming technical depth into market leverage.</p>
              </AnimatedSection>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { i: Activity, t: 'Audit', d: 'Deep-dive into tech-debt, circular dependencies, and security.' },
                { i: Layers, t: 'Re-Arch', d: 'Structural transformation without stopping product features.' },
                { i: Rocket, t: 'Velocity', d: 'Automated platforms that allow 10x daily deployments.' },
              ].map((m, i) => (
                <div key={i} className="group p-12 rounded-[64px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:bg-black hover:text-white transition-all duration-500">
                  <m.i size={48} className="mb-10 text-purple-600 group-hover:text-purple-400 transition-colors" />
                  <h4 className="text-3xl font-black mb-4 tracking-tight">{m.t}</h4>
                  <p className="text-base font-medium opacity-60 px-4">{m.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI CTO Workflow */}
        <section className="py-32 bg-black text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 text-purple-400 text-[11px] font-bold uppercase tracking-[0.25em] mb-10 border border-white/10">
                    <Zap size={16} className="fill-purple-400" />
                    CTO Intelligence
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-10 leading-[0.95]">
                    Roadmap
                    <br />
                    on Autopilot.
                  </h2>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                    Fractional leadership requires high-fidelity data. Our proprietary roadmap agent handles the administrative overhead — from automated tech-debt scoring to weekly executive briefings — so we can focus on strategic architecture.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      { i: Database, t: 'Debt Scoring', d: 'Real-time maintainability audit of every pull-request.' },
                      { i: BarChart3, t: 'Velocity Audit', d: 'AI-driven analysis of engineering output cost.' },
                      { i: Shield, t: 'Secure Scan', d: 'Automated vulnerability mapping across entire repos.' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-start">
                        <item.i size={20} className="text-purple-500 mt-1" />
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
                <div className="p-10 rounded-[64px] bg-white shadow-2xl border border-white/10 overflow-hidden">
                  <AgentFlowChart workflow={ctoWorkflow} />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 bg-[#050505] relative overflow-hidden text-center text-white border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <AnimatedSection animationType="scale">
              <Award size={48} className="mx-auto text-purple-500 mb-12" />
              <h2 className="text-6xl lg:text-[100px] font-black tracking-tighter mb-12 leading-[0.85]">
                Built to
                <br />
                endure.
              </h2>
              <p className="text-2xl text-slate-400 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                Currently booking H2 fractional CTO retainers and Series A technical audits. Secure your startup's technical foundation today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <button className="px-14 py-6 bg-purple-600 text-white font-black rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all active:scale-95">
                  Secure Consultation
                </button>
                <button className="text-lg font-bold text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2">
                  View Case Archive <ChevronRight size={24} />
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </div>
    </MockLayout>
  );
}
