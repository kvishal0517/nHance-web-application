import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import { AnimatedSection } from '../../components/AnimatedSection';
import type { AgentWorkflow } from '../../types';
import {
  Heart,
  MessageCircle,
  ChevronRight,
  Zap,
  ArrowRight,
  ShieldCheck,
  Compass,
  Scale,
  Handshake,
  Calendar,
  Lock
} from 'lucide-react';

const LILAC_DARK = '#4361EE';

const mediationWorkflow: AgentWorkflow = {
  title: 'Compassionate Mediation & Intake Agent',
  nodes: [
    { id: '1', label: 'Confidential Inquiry', description: 'Prospective client reaches out via secure, encrypted portal.', automated: false, x: 20, y: 40 },
    { id: '2', label: 'Conflict Sensitivity', description: 'AI flags sensitive cases (e.g. custody urgency) for immediate human review.', automated: true, x: 200, y: 40 },
    { id: '3', label: 'Send Prep Guide', description: 'Automated "Transitions with Dignity" guide sent to ease initial anxiety.', automated: true, x: 380, y: 40 },
    { id: '4', label: 'Intention Matching', description: 'AI matches client needs with mediation or litigation paths.', automated: true, x: 560, y: 40 },
    { id: '5', label: 'Zero-Friction Booking', description: 'Instant scheduling for a private, 30-minute introductory call.', automated: true, x: 380, y: 160 },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
  ],
};

const specialties = [
  { i: Handshake, t: 'Collaborative Divorce', d: 'Resolution without the courtroom. Protecting relationships and legacy.' },
  { i: Heart, t: 'Child Custody', d: 'Child-centric planning and long-term co-parenting architecture.' },
  { i: Scale, t: 'Asset Division', d: 'Fair, precise, and transparent distribution of matrimonial assets.' },
  { i: ShieldCheck, t: 'Prenuptial Care', d: 'Proactive protection of personal interests before new beginnings.' },
];

export default function LakshmiFamilyLaw() {
  return (
    <MockLayout projectName="Lakshmi — Family Law" accentColor={LILAC_DARK} categoryId="legal">
      <div className="bg-[#FAF9FF] text-slate-900 selection:bg-indigo-50 overflow-hidden font-sans">
        
        {/* Compassionate Hero */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#FAF9FF]">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1516216628859-9bccecd2d577?auto=format&fit=crop&q=80&w=2400" 
              className="w-full h-full object-cover opacity-5 grayscale scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF9FF]/80 to-[#FAF9FF]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="max-w-4xl">
              <AnimatedSection animationType="blur">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white text-indigo-800 text-[11px] font-bold uppercase tracking-[0.25em] mb-12 shadow-sm border border-slate-100">
                  <Lock size={14} className="text-indigo-500" />
                  Absolute Confidentiality · Mediation First
                </div>

                <h1 className="text-7xl lg:text-[110px] font-bold leading-[0.9] tracking-tighter mb-10 text-slate-900">
                  Transitions with
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400 italic">unwavering dignity.</span>
                </h1>

                <p className="text-xl lg:text-2xl text-slate-500 max-w-2xl mb-16 font-medium leading-relaxed">
                  Family law is deeply personal. We provide a calm, supportive, and legally rigorous path through your most sensitive transitions.
                </p>

                <div className="flex flex-col sm:flex-row gap-8 items-center">
                  <button className="px-14 py-6 bg-indigo-600 text-white font-bold rounded-full text-lg shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center gap-3">
                    Start Privately
                    <ArrowRight size={20} />
                  </button>
                  <button className="text-lg font-bold text-slate-400 hover:text-indigo-600 transition-colors border-b-2 border-transparent hover:border-indigo-600 pb-1">
                    How We Help
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Philosophy Strip */}
        <div className="bg-white border-y border-slate-100 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              {[
                { t: 'Mediation First', d: 'We believe the best resolutions are built through dialogue, not litigation.', i: Handshake },
                { t: 'Total Support', d: 'A multidisciplinary approach including emotional and financial guidance.', i: Compass },
                { t: 'Child-Centric', d: 'Ensuring the wellbeing of the next generation remains the top priority.', i: Heart },
              ].map((item, i) => (
                <div key={i} className="text-center group cursor-default">
                  <item.i size={32} className="mx-auto mb-8 text-indigo-900/20 group-hover:text-indigo-600 transition-colors" />
                  <h4 className="text-xl font-bold mb-4 tracking-tight text-slate-900">{item.t}</h4>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed px-8">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Practice Grid */}
        <section className="py-32 bg-[#FAF9FF]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <AnimatedSection>
                <p className="text-indigo-600 font-bold uppercase tracking-[0.4em] text-[11px] mb-6">Expertise</p>
                <h2 className="text-6xl font-black tracking-tighter text-slate-900">Care.</h2>
              </AnimatedSection>
              <p className="text-lg text-slate-400 max-w-sm font-medium italic">"Peace is not the absence of conflict, but the ability to resolve it with grace."</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {specialties.map((s, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div className="group bg-white rounded-[48px] p-10 hover:shadow-2xl transition-all duration-700 border border-transparent hover:border-white h-full flex flex-col">
                    <div className="w-16 h-16 rounded-[24px] bg-indigo-50 flex items-center justify-center mb-10 group-hover:bg-indigo-600 transition-all duration-500">
                      <s.i size={28} className="text-indigo-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{s.t}</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed flex-1">{s.d}</p>
                    <button className="mt-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-600 group-hover:gap-4 transition-all">
                      First Steps <ArrowRight size={14} />
                    </button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* AI Mediation Workflow */}
        <section className="py-32 bg-indigo-900 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 text-indigo-300 text-[11px] font-bold uppercase tracking-[0.25em] mb-10 border border-white/10">
                    <Zap size={16} className="fill-indigo-400" />
                    Intelligent Intake
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-10 leading-[0.95]">
                    Thoughtful 
                    <br />
                    touchpoints.
                  </h2>
                  <p className="text-xl text-indigo-100/60 font-medium leading-relaxed mb-12">
                    Taking the first step is often the hardest. Our proprietary journey agent ensures every client touchpoint is warm, confidential, and timely. From conflict sensitivity audits to automated "Transitions with Dignity" guides, technology serves the human experience.
                  </p>
                  
                  <div className="space-y-8">
                    {[
                      { t: 'Confidential Audit', d: 'End-to-end encrypted briefing vaults for total privacy.' },
                      { t: 'Transition Triage', d: 'AI-driven prioritization of urgent custody or safety concerns.' },
                      { t: 'Pathway Mapping', d: 'Automated matching with mediation or litigation experts.' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <div>
                          <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-1">{item.t}</h4>
                          <p className="text-xs text-indigo-100/40 font-medium leading-relaxed">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
              <AnimatedSection delay={200} animationType="scale">
                <div className="p-10 rounded-[64px] bg-white shadow-2xl border border-white/5 overflow-hidden">
                  <AgentFlowChart workflow={mediationWorkflow} />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Preview Strip */}
        <div className="bg-white py-24 border-y border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <AnimatedSection>
              <h2 className="text-4xl font-black mb-12 tracking-tighter text-slate-900">Understanding the path.</h2>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  'What is Collaborative Divorce?',
                  'How is Child Custody decided?',
                  'Privacy & Matrimonial Assets',
                  'The Mediation Process',
                ].map((q, i) => (
                  <button key={i} className="px-6 py-3 rounded-full border border-slate-100 text-sm font-bold text-slate-400 hover:text-indigo-600 hover:border-indigo-100 transition-all flex items-center gap-2">
                    {q} <ChevronRight size={14} />
                  </button>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Final CTA */}
        <section className="py-40 bg-[#FAF9FF] relative overflow-hidden text-center text-slate-900">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <AnimatedSection animationType="scale">
              <MessageCircle size={48} className="mx-auto text-indigo-600 mb-12" />
              <h2 className="text-6xl lg:text-[100px] font-black tracking-tighter mb-12 leading-[0.85]">
                Dignity is 
                <br />
                the practice.
              </h2>
              <p className="text-2xl text-slate-500 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                Currently booking H2 consultations for mediation and family law. Step into a space of clarity and support.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <button className="px-14 py-6 bg-indigo-600 text-white font-bold rounded-full text-xl shadow-2xl hover:scale-105 transition-all active:scale-95">
                  Book Private Call
                </button>
                <button className="text-lg font-bold text-slate-400 hover:text-indigo-600 transition-colors flex items-center gap-2">
                  View Public Calendar <Calendar size={20} />
                </button>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Subtle Decorative Accents */}
          <div className="absolute top-20 right-[-10%] w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-20 left-[-10%] w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
        </section>

      </div>
    </MockLayout>
  );
}
