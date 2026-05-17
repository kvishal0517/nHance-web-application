import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import { AnimatedSection } from '../../components/AnimatedSection';
import type { AgentWorkflow } from '../../types';
import {
  Dumbbell,
  Zap,
  ArrowRight,
  Star,
  Video,
  Utensils,
  Activity,
  Timer,
  Award
} from 'lucide-react';

const lime = '#AAFF00';

const checkinWorkflow: AgentWorkflow = {
  title: 'Client Performance & Recovery Agent',
  nodes: [
    { id: '1', label: 'Weekly Check-in', description: 'Automated performance form sent to every active client.', automated: true, x: 20, y: 40 },
    { id: '2', label: 'Trend Analysis', description: 'AI reads biometric data and flags fatigue or plateaus.', automated: true, x: 200, y: 40 },
    { id: '3', label: 'Protocol Adjustment', description: 'Volume and intensity are auto-scaled based on recovery scores.', automated: true, x: 380, y: 40 },
    { id: '4', label: 'Missed Session Alert', description: 'Automated check-in for unplanned absence with re-scheduling.', automated: true, x: 560, y: 40 },
    { id: '5', label: 'Monthly Gains Report', description: 'Comprehensive digest of strength gains and body composition.', automated: true, x: 380, y: 160 },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
  ],
};

const programs = [
  {
    name: 'Industrial PT',
    icon: Dumbbell,
    price: '₹25,000',
    period: '/month',
    desc: '1-on-1 technique mastery, monthly body scans, and premium equipment access.',
    highlight: true
  },
  {
    name: 'Online Hybrid',
    icon: Video,
    price: '₹12,000',
    period: '/month',
    desc: 'Custom training plans via app and weekly 30-min strategy calls.',
    highlight: false
  },
  {
    name: 'Nutrition Audit',
    icon: Utensils,
    price: '₹8,000',
    period: '/round',
    desc: 'Metabolic baseline testing and 4-week structured meal templates.',
    highlight: false
  },
];

const results = [
  { name: 'Vikram Sahay', change: '-22kg', tag: 'Fat Loss', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400' },
  { name: 'Priya Das', change: '+15kg Bench', tag: 'Strength', image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=400' },
  { name: 'Arjun Kapoor', change: '+9kg Lean', tag: 'Muscle', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=400' },
];

export default function IronboundTraining() {
  return (
    <MockLayout projectName="Ironbound Training" accentColor={lime} categoryId="fitness">
      <div className="bg-black text-white selection:bg-lime-500/30 overflow-hidden font-sans">
        
        {/* High Octane Hero */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden border-b border-white/5 bg-black">
          {/* Grainy, Raw Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2400" 
              className="w-full h-full object-cover opacity-20 grayscale scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-8">
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold uppercase tracking-[0.4em] mb-12">
                    <Zap size={14} className="text-lime-400 fill-lime-400" />
                    Industrial Strength Coaching · Indiranagar
                  </div>

                  <h1 className="text-7xl lg:text-[140px] font-black leading-[0.8] tracking-tighter mb-12">
                    EARN 
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400 italic">RESULT.</span>
                  </h1>

                  <p className="text-2xl lg:text-3xl text-slate-400 max-w-2xl mb-16 font-medium leading-relaxed">
                    Stop spinning your wheels. We build durable humans through structured programming and relentless accountability.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-8 items-center">
                    <button className="px-14 py-6 bg-lime-400 text-black font-black rounded-full text-xl shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center gap-3">
                      Start Your Prep
                      <ArrowRight size={20} strokeWidth={3} />
                    </button>
                    <button className="text-lg font-bold text-slate-400 hover:text-white transition-colors border-b-2 border-transparent hover:border-lime-400 pb-1">
                      View Transformations
                    </button>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>

          {/* Performance Data Strips */}
          <div className="absolute bottom-12 right-12 hidden lg:flex flex-col gap-10 text-right">
            <div>
              <p className="text-5xl font-black text-white tracking-tight">94%</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-lime-400">Client Goal Success</p>
            </div>
            <div>
              <p className="text-5xl font-black text-white tracking-tight">6yr</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-lime-400">Industrial Tenure</p>
            </div>
          </div>
        </section>

        {/* Real Gains Wall - Transformation Cards */}
        <section className="py-32 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <AnimatedSection>
                <p className="text-[11px] font-bold uppercase tracking-[0.4em] mb-6 text-lime-400">Proof of Concept</p>
                <h2 className="text-6xl font-black tracking-tighter">Real Gains.</h2>
              </AnimatedSection>
              <p className="text-lg text-slate-500 max-w-sm font-medium">Verified case studies from our Indiranagar headquarters. No filters, just hard work.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {results.map((r, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div className="group cursor-default">
                    <div className="aspect-square rounded-[48px] overflow-hidden mb-8 bg-zinc-900 relative shadow-2xl border border-white/5">
                      <img src={r.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                      <div className="absolute top-8 left-8 px-4 py-1.5 rounded-full bg-lime-400 text-black text-[10px] font-black uppercase tracking-widest shadow-xl">
                        {r.tag}
                      </div>
                      <div className="absolute bottom-10 left-10">
                        <h4 className="text-4xl font-black text-white tracking-tight mb-1">{r.change}</h4>
                        <p className="text-sm font-bold text-lime-400 uppercase tracking-widest">{r.name}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 justify-center opacity-20 group-hover:opacity-100 transition-opacity">
                      {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-lime-400 text-lime-400" />)}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Grid - Pricing & Service */}
        <section className="py-32 bg-white text-black relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <AnimatedSection>
                <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6">Choose Your Path.</h2>
                <p className="text-xl text-slate-500 font-medium">Professional-grade coaching for serious contenders.</p>
              </AnimatedSection>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {programs.map((p, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div className={`p-12 rounded-[48px] h-full flex flex-col transition-all duration-500 border ${
                    p.highlight 
                    ? 'bg-black text-white border-black shadow-2xl scale-105' 
                    : 'bg-zinc-50 border-zinc-100 hover:bg-white hover:shadow-xl'
                  }`}>
                    <div className={`w-16 h-16 rounded-[24px] flex items-center justify-center mb-10 ${
                      p.highlight ? 'bg-lime-400 text-black' : 'bg-black text-white'
                    }`}>
                      <p.icon size={28} />
                    </div>
                    <h3 className="text-3xl font-black mb-4 tracking-tight">{p.name}</h3>
                    <p className={`text-base font-medium leading-relaxed mb-12 flex-1 ${
                      p.highlight ? 'text-slate-400' : 'text-slate-500'
                    }`}>{p.desc}</p>
                    <div className="pt-10 border-t border-current opacity-10 mt-auto flex items-end gap-2 mb-10">
                      <span className="text-4xl font-black tracking-tight">{p.price}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2">{p.period}</span>
                    </div>
                    <button className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all ${
                      p.highlight 
                      ? 'bg-lime-400 text-black hover:scale-105 shadow-xl' 
                      : 'bg-black text-white hover:bg-zinc-800'
                    }`}>
                      Secure Spot
                    </button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* AI Performance Workflow */}
        <section className="py-32 bg-black text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-lime-400/10 text-lime-400 text-[11px] font-bold uppercase tracking-[0.25em] mb-10 border border-lime-400/20">
                    <Activity size={16} className="fill-lime-400" />
                    Intelligence Protocol
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-10 leading-[0.95]">
                    Predictive
                    <br />
                    Performance.
                  </h2>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                    We don't guess. Our proprietary performance agent monitors your weekly biometrics and training logs to auto-scale intensity and volume, ensuring zero plateaus and optimal recovery.
                  </p>
                  
                  <div className="space-y-8">
                    {[
                      { t: 'Biometric Sync', d: 'Automated recovery tracking through wearable integration.' },
                      { t: 'Dynamic Scaling', d: 'AI-driven session volume adjustment in real-time.' },
                      { t: 'Fatigue Monitoring', d: 'Proactive injury prevention through CNS stress detection.' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 border-l-2 border-zinc-900 pl-8 hover:border-lime-400 transition-colors group">
                        <div>
                          <h4 className="font-black text-white text-sm uppercase tracking-[0.2em] mb-1 group-hover:text-lime-400 transition-colors">{item.t}</h4>
                          <p className="text-xs text-slate-500 font-medium">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
              <AnimatedSection delay={200} animationType="scale">
                <div className="p-10 rounded-[64px] bg-white shadow-inner overflow-hidden border border-slate-200">
                  <AgentFlowChart workflow={checkinWorkflow} />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 bg-zinc-900 relative overflow-hidden text-center">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <AnimatedSection animationType="scale">
              <Award size={48} className="mx-auto text-lime-400 mb-12" />
              <h2 className="text-6xl lg:text-[100px] font-black tracking-tighter mb-12 leading-[0.85]">
                Leave the 
                <br />
                weakness.
              </h2>
              <p className="text-2xl text-slate-400 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                Currently accepting only 10 new intake requests for the H2 2025 prep cycle. Don't waste another season.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <button className="px-14 py-6 bg-lime-400 text-black font-black rounded-full text-xl shadow-2xl hover:scale-105 transition-all active:scale-95">
                  Apply for Intake
                </button>
                <button className="text-lg font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  Call Indiranagar HQ <Timer size={20} />
                </button>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Subtle Strength Lines Background */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.1" />
            </svg>
          </div>
        </section>

      </div>
    </MockLayout>
  );
}
