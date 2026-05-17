import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import { AnimatedSection } from '../../components/AnimatedSection';
import type { AgentWorkflow } from '../../types';
import {
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Globe,
  Calendar,
  ArrowRight,
  Zap,
  Lock,
  PieChart,
  Compass,
  ChevronRight,
  Award
} from 'lucide-react';

const gold = '#D4AF37';

const leadNurturingWorkflow: AgentWorkflow = {
  title: 'Fiduciary Care & Portfolio Intelligence',
  nodes: [
    { id: '1', label: 'Financial Intake', description: 'Client shares goal profile and risk appetite via the portal.', automated: false, x: 20, y: 40 },
    { id: '2', label: 'Compliance Audit', description: 'AI cross-checks profile with SEBI regulations and RIA mandates.', automated: true, x: 200, y: 40 },
    { id: '3', label: 'Goal Simulation', description: 'Probabilistic modeling of corpus-growth across 100+ scenarios.', automated: true, x: 380, y: 40 },
    { id: '4', label: 'Draft Strategy', description: 'Automated generation of a conflict-free asset allocation plan.', automated: true, x: 560, y: 40 },
    { id: '5', label: 'Quarterly Rebalance', description: 'AI monitors drift and flags rebalancing opportunities proactively.', automated: true, x: 380, y: 160 },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
  ],
};

const trustSignals = [
  { value: '₹500 Cr+', label: 'Advisory AUM' },
  { value: '18 Yrs', label: 'Clinical Tenure' },
  { value: '340+', label: 'Elite Families' },
  { value: 'RIA', label: 'SEBI Registered' },
];

export default function CornerstoneWealth() {
  return (
    <MockLayout projectName="Cornerstone Wealth Advisory" accentColor={gold} categoryId="finance">
      <div className="bg-white text-apple-black selection:bg-blue-50 overflow-hidden font-sans">
        
        {/* Institutional Hero */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A1A2F]">
          {/* Grainy, Deep Blue Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2400" 
              className="w-full h-full object-cover opacity-10 grayscale scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A1A2F]/80 to-[#0A1A2F]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="grid lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-7">
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold uppercase tracking-[0.4em] mb-12">
                    <ShieldCheck size={14} className="text-amber-500" />
                    SEBI Registered Investment Advisor · Fiduciary Only
                  </div>

                  <h1 className="text-7xl lg:text-[110px] font-bold text-white leading-[0.9] tracking-tighter mb-12">
                    Wealth with 
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600 italic">absolute clarity.</span>
                  </h1>

                  <p className="text-2xl lg:text-3xl text-slate-400 max-w-xl mb-16 font-medium leading-relaxed">
                    Fee-only, conflict-free wealth advisory for senior professionals and business owners. Your goals are our only mandate.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-8 items-center">
                    <button className="px-14 py-6 bg-amber-600 text-[#0A1A2F] font-bold rounded-full text-xl shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center gap-3">
                      Start Discovery
                      <ArrowRight size={20} />
                    </button>
                    <button className="text-lg font-bold text-slate-400 hover:text-white transition-colors border-b-2 border-transparent hover:border-amber-600 pb-1">
                      Our Fiduciary Oath
                    </button>
                  </div>
                </AnimatedSection>
              </div>

              <div className="lg:col-span-5 relative">
                <AnimatedSection delay={200} animationType="scale">
                  {/* Wealth Dashboard Visual */}
                  <div className="p-1 rounded-[48px] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-3xl shadow-3xl overflow-hidden">
                    <div className="bg-[#0A1A2F]/80 rounded-[44px] p-10">
                      <div className="flex items-center justify-between mb-10">
                        <p className="text-[10px] font-black uppercase tracking-widest text-amber-500">Live Impact</p>
                        <TrendingUp className="text-amber-500" size={16} />
                      </div>
                      <div className="space-y-8">
                        {trustSignals.map((s, i) => (
                          <div key={i} className="flex items-center justify-between group">
                            <div>
                              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter mb-1 group-hover:text-amber-500 transition-colors">{s.label}</p>
                              <p className="text-3xl font-black text-white tracking-tight">{s.value}</p>
                            </div>
                            <ChevronRight size={20} className="text-white/10 group-hover:text-amber-500 group-hover:translate-x-2 transition-all" />
                          </div>
                        ))}
                      </div>
                      <div className="mt-10 pt-10 border-t border-white/5 flex items-center gap-4">
                        <Lock size={16} className="text-slate-500" />
                        <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Bank-grade data security enabled.</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Fiduciary Strip */}
        <div className="bg-white py-20 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { t: 'Zero Commissions', d: 'We never accept kickbacks from fund houses. We work only for you.', i: Zap },
                { t: 'Conflict-Free', d: 'No products to sell. Just rigorous, objective advice.', i: Compass },
                { t: 'Clinical Rigor', d: 'A decade of data-driven investment philosophy.', i: PieChart },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-amber-600 transition-all">
                    <item.i size={20} className="text-amber-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 tracking-tight text-[#0A1A2F]">{item.t}</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Advisory Services Grid */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:items-end md:flex-row justify-between mb-24 gap-8">
              <AnimatedSection>
                <p className="text-amber-600 font-bold uppercase tracking-[0.4em] text-[11px] mb-6">Core Offering</p>
                <h2 className="text-6xl font-black tracking-tighter text-[#0A1A2F]">Architecture.</h2>
              </AnimatedSection>
              <p className="text-lg text-slate-400 max-w-sm font-medium italic">"Wealth is not just a number; it's the freedom to choose your next chapter."</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { i: TrendingUp, t: 'Wealth Strategy', d: 'Comprehensive plans for multi-generational growth.' },
                { i: BarChart3, t: 'Tax Hygiene', d: 'Legal optimization for high-net-worth complexity.' },
                { i: Globe, t: 'NRI Advisory', d: 'Cross-border compliance and FEMA-aligned structures.' },
                { i: Calendar, t: 'Retirement', d: 'Structured corpus building for total lifestyle autonomy.' },
              ].map((s, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div className="group bg-white rounded-[48px] p-10 hover:shadow-2xl transition-all duration-700 border border-transparent hover:border-white flex flex-col h-full">
                    <div className="w-16 h-16 rounded-[24px] bg-slate-50 flex items-center justify-center mb-10 group-hover:bg-[#0A1A2F] transition-all">
                      <s.i size={28} className="text-[#0A1A2F] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-black text-[#0A1A2F] mb-4 tracking-tight">{s.t}</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed flex-1">{s.d}</p>
                    <button className="mt-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0A1A2F] group-hover:gap-4 transition-all">
                      Learn More <ArrowRight size={14} />
                    </button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* AI Fiduciary Workflow */}
        <section className="py-32 bg-[#0A1A2F] text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 text-amber-500 text-[11px] font-bold uppercase tracking-[0.25em] mb-10 border border-white/10">
                    <Zap size={16} className="fill-amber-500" />
                    Neural Advisory
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-10 leading-[0.95]">
                    Predictive
                    <br />
                    Fiduciary.
                  </h2>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                    Our proprietary wealth agent maintains constant vigilance over your portfolio. From automated compliance audits to Monte Carlo goal simulations, we use technology to protect your legacy 24/7.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      'Real-time regulatory sync with SEBI/CBDT.',
                      'Probabilistic risk-drift monitoring.',
                      'Automated multi-generational tax mapping.',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-sm font-bold text-white/40">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
              <AnimatedSection delay={200} animationType="scale">
                <div className="p-10 rounded-[64px] bg-white/[0.02] border border-white/5 shadow-inner backdrop-blur-3xl overflow-hidden">
                  <AgentFlowChart workflow={leadNurturingWorkflow} />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 bg-white relative overflow-hidden text-center text-apple-black">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <AnimatedSection animationType="scale">
              <Award size={48} className="mx-auto text-amber-600 mb-12" />
              <h2 className="text-6xl lg:text-[100px] font-bold tracking-tighter mb-12 leading-[0.85]">
                Secure the 
                <br />
                destination.
              </h2>
              <p className="text-2xl text-slate-500 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                We accept a limited number of new families each quarter to ensure clinical attention. Start your discovery call with Srini today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <button className="px-14 py-6 bg-[#0A1A2F] text-white font-bold rounded-full text-xl shadow-2xl hover:scale-105 transition-all active:scale-95">
                  Book Discovery Call
                </button>
                <button className="text-lg font-bold text-slate-400 hover:text-[#0A1A2F] transition-colors flex items-center gap-2">
                  Download Sample Plan <ChevronRight size={24} />
                </button>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Subtle Grid Lines */}
          <div className="absolute inset-0 opacity-[0.01] pointer-events-none">
            <div className="grid grid-cols-12 h-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-black h-full" />
              ))}
            </div>
          </div>
        </section>

      </div>
    </MockLayout>
  );
}
