import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import { AnimatedSection } from '../../components/AnimatedSection';
import type { AgentWorkflow } from '../../types';
import {
  Scale,
  FileText,
  ArrowRight,
  Download,
  Zap,
  Gavel,
  ShieldCheck,
  Building2,
  Lock
} from 'lucide-react';

const ACCENT = '#4361EE';

const intakeWorkflow: AgentWorkflow = {
  title: 'Statutory Intake & Document Review Agent',
  nodes: [
    { id: '1', label: 'Brief Submission', description: 'Client submits project brief or case summary via the portal.', automated: false, x: 20, y: 40 },
    { id: '2', label: 'Technical Classification', description: 'AI identifies practice areas and regulatory overlaps (MCA/SEBI).', automated: true, x: 200, y: 40 },
    { id: '3', label: 'Conflicts Audit', description: 'Automated audit of existing client roster for ethical conflicts.', automated: true, x: 380, y: 40 },
    { id: '4', label: 'Route to Partner', description: 'Brief is routed to the relevant practice partner with a technical summary.', automated: true, x: 560, y: 40 },
    { id: '5', label: '24h Action Plan', description: 'On approval, an automated 24-hour action plan is sent to the client.', automated: true, x: 380, y: 160 },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
  ],
};

const practices = [
  { i: Building2, t: 'Corporate M&A', d: 'Due diligence, deal structuring, and SPA negotiations.' },
  { i: Scale, t: 'Litigation', d: 'High-stakes dispute resolution across NCLT and High Courts.' },
  { i: ShieldCheck, t: 'IP Protection', d: 'Trademark prosecution and comprehensive patent audits.' },
  { i: FileText, t: 'Governance', d: 'Board-level advisory and regulatory compliance mapping.' },
];

export default function MehraNairLaw() {
  return (
    <MockLayout projectName="Mehra & Nair — Corporate Law" accentColor={ACCENT} categoryId="legal">
      <div className="bg-white text-apple-black selection:bg-blue-50 overflow-hidden font-sans">
        
        {/* Majestic Hero */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A1A2F]">
          {/* Subtle Institutional Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2400" 
              className="w-full h-full object-cover opacity-10 grayscale scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A1A2F]/80 to-[#0A1A2F]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="grid lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-8">
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold uppercase tracking-[0.4em] mb-12">
                    <Gavel size={14} className="text-blue-400" />
                    Full-Spectrum Institutional Law · Est. 1994
                  </div>

                  <h1 className="text-7xl lg:text-[130px] font-black leading-[0.85] tracking-tighter mb-12 text-white">
                    Built on 
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 italic">decisive power.</span>
                  </h1>

                  <p className="text-2xl lg:text-3xl text-slate-400 max-w-2xl mb-16 font-medium leading-relaxed">
                    Corporate counsel for India's market leaders. We deliver strategic clarity in high-stakes environments through technical mastery and absolute integrity.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-8 items-center">
                    <button className="px-14 py-6 bg-blue-600 text-white font-black rounded-full text-xl shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center gap-3">
                      Secure Counsel
                      <ArrowRight size={20} />
                    </button>
                    <button className="text-lg font-bold text-slate-400 hover:text-white transition-colors border-b-2 border-transparent hover:border-blue-400 pb-1">
                      View Practice Areas
                    </button>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>

          {/* Institutional Stats Strip */}
          <div className="absolute bottom-12 right-12 hidden lg:flex flex-col gap-10 text-right">
            <div>
              <p className="text-5xl font-black text-white tracking-tight">₹14k Cr+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Transaction Volume H1</p>
            </div>
            <div>
              <p className="text-5xl font-black text-white tracking-tight">28yr</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Legal Legacy</p>
            </div>
          </div>
        </section>

        {/* Practice Grid */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <AnimatedSection>
                <p className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[11px] mb-6">Expertise</p>
                <h2 className="text-6xl font-black tracking-tighter">Practices.</h2>
              </AnimatedSection>
              <p className="text-lg text-slate-400 max-w-sm font-medium italic">"Strategy is the silent partner of every legal victory."</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {practices.map((s, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div className="group bg-slate-50 rounded-[48px] p-10 hover:bg-blue-600 hover:shadow-2xl transition-all duration-700 border border-slate-100 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-[24px] bg-white flex items-center justify-center mb-10 group-hover:bg-blue-500 transition-all shadow-sm">
                      <s.i size={28} className="text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-white transition-colors">{s.t}</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed flex-1 group-hover:text-blue-100 transition-colors">{s.d}</p>
                    <button className="mt-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-600 group-hover:text-white transition-all">
                      Full Scope <ArrowRight size={14} />
                    </button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Free Resource Library - High end list */}
        <section className="py-32 bg-slate-50 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-24">
              <AnimatedSection>
                <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6">Founders' Kit.</h2>
                <p className="text-xl text-slate-500 font-medium max-w-xl mx-auto">Vetted legal templates for the modern ecosystem. Open to the community.</p>
              </AnimatedSection>
            </div>

            <div className="space-y-4">
              {[
                { n: 'Mutual Non-Disclosure Agreement', f: 'DOCX · 2024 V3', d: '8.4k Downloads' },
                { n: 'Founders\' Shareholders Agreement', f: 'PDF · Institutional Grade', d: '4.2k Downloads' },
                { n: 'Standard Advisor Agreement', f: 'DOCX · Equity-ready', d: '3.1k Downloads' },
              ].map((item, i) => (
                <div key={i} className="group bg-white p-8 rounded-[32px] border border-slate-200 flex items-center justify-between hover:shadow-xl transition-all cursor-pointer">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Download size={20} className="text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-slate-900 mb-1">{item.n}</h4>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.f}</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">{item.d}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Intake Workflow */}
        <section className="py-32 bg-[#0A1A2F] text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 text-blue-400 text-[11px] font-bold uppercase tracking-[0.25em] mb-10 border border-white/10">
                    <Zap size={16} className="fill-blue-400" />
                    Intake Intelligence
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-10 leading-[0.95]">
                    Technical velocity,
                    <br />
                    AI-powered.
                  </h2>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                    Legal intake shouldn't be a bottleneck. Our proprietary statutory agent handles the technical classification and ethical audit of every inquiry, ensuring partners receive a high-fidelity summary within minutes.
                  </p>
                  
                  <div className="space-y-10">
                    {[
                      { t: 'Ethical Guard', d: 'Automated roster cross-referencing to prevent conflicts of interest.' },
                      { t: 'Regulatory Mapping', d: 'AI-driven identification of MCA and SEBI statutory overlaps.' },
                      { t: 'Velocity Audit', d: 'Proactive 24-hour action plan generation for every brief.' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-8 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <div>
                          <h4 className="font-black text-white text-sm uppercase tracking-widest mb-2">{item.t}</h4>
                          <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
              <AnimatedSection delay={200} animationType="scale">
                <div className="p-10 rounded-[64px] bg-white/[0.02] border border-white/5 shadow-inner backdrop-blur-3xl overflow-hidden">
                  <AgentFlowChart workflow={intakeWorkflow} />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 bg-white relative overflow-hidden text-center text-apple-black">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <AnimatedSection animationType="scale">
              <ShieldCheck size={48} className="mx-auto text-blue-600 mb-12" />
              <h2 className="text-6xl lg:text-[100px] font-black tracking-tighter mb-12 leading-[0.85]">
                Legacy is 
                <br />
                the bedrock.
              </h2>
              <p className="text-2xl text-slate-500 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                Currently booking H2 retainer consultations. For high-stakes institutional advisory, reach out via our secure partner portal.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <button className="px-14 py-6 bg-blue-600 text-white font-black rounded-full text-xl shadow-2xl hover:scale-105 transition-all active:scale-95">
                  Secure Counsel
                </button>
                <button className="text-lg font-bold text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-2">
                  Partner Portal <Lock size={20} />
                </button>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Subtle Pattern Background */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M0 0 L100 100 M100 0 L0 100" stroke="currentColor" strokeWidth="0.05" />
            </svg>
          </div>
        </section>

      </div>
    </MockLayout>
  );
}
