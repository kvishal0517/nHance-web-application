import { Heart, Activity, Zap, AlertCircle, Phone, MapPin, Clock, ArrowRight, ShieldCheck, Stethoscope } from 'lucide-react';
import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import { AnimatedSection } from '../../components/AnimatedSection';
import type { AgentWorkflow } from '../../types';

const ACCENT = '#2D6A4F';

const workflow: AgentWorkflow = {
  title: 'Patient Pre-Consultation Agent',
  nodes: [
    {
      id: '1',
      label: 'Books Appointment',
      description: 'Patient schedules a consultation via the online portal or phone.',
      automated: false,
      x: 20,
      y: 40,
    },
    {
      id: '2',
      label: 'Pre-Visit Form',
      description: 'AI automatically sends a health questionnaire for the patient to complete before the visit.',
      automated: true,
      x: 200,
      y: 40,
    },
    {
      id: '3',
      label: '24h Reminder',
      description: 'AI sends a personalised appointment reminder with preparation instructions 24 hours prior.',
      automated: true,
      x: 380,
      y: 40,
    },
    {
      id: '4',
      label: 'Post-Visit Summary',
      description: 'AI generates and emails a structured visit summary and care plan to the patient.',
      automated: true,
      x: 560,
      y: 40,
    },
    {
      id: '5',
      label: 'Renewal Check',
      description: 'AI monitors upcoming prescription expiry dates and flags renewals proactively.',
      automated: true,
      x: 200,
      y: 160,
    },
    {
      id: '6',
      label: 'Flag to Doctor',
      description: 'Critical or time-sensitive items are escalated to Dr. Menon with a brief summary.',
      automated: true,
      x: 380,
      y: 160,
    },
    {
      id: '7',
      label: '30-Day Follow-up',
      description: 'AI sends a 30-day check-in message to assess recovery and schedule follow-up if needed.',
      automated: true,
      x: 560,
      y: 160,
    },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '5', to: '6' },
    { from: '4', to: '7' },
  ],
};

const conditions = [
  {
    icon: Heart,
    title: 'Coronary Care',
    description: 'Comprehensive evaluation and long-term management of coronary artery disease.',
    stat: '98% Success'
  },
  {
    icon: Activity,
    title: 'Arrhythmia',
    description: 'Diagnosis and treatment of irregular heart rhythms including AFib.',
    stat: 'Advanced EP'
  },
  {
    icon: AlertCircle,
    title: 'Hypertension',
    description: 'Evidence-based blood pressure management tailored to your lifestyle.',
    stat: 'Holistic'
  },
  {
    icon: Zap,
    title: 'Heart Failure',
    description: 'Specialised care with multidisciplinary coordination and advanced monitoring.',
    stat: 'Life-saving'
  },
];

export default function DrPriyaCardiologist() {
  return (
    <MockLayout projectName="Dr. Priya Menon — Cardiologist" accentColor={ACCENT} categoryId="medical">
      <div className="bg-white text-apple-black selection:bg-emerald-50">
        
        {/* Prestige Hero */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-apple-gray hidden lg:block skew-x-[-6deg] translate-x-20" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <AnimatedSection animationType="blur">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-apple-gray text-apple-black text-[11px] font-bold uppercase tracking-[0.2em] mb-10 shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Accepting New Patients
                </div>

                <h1 className="text-7xl lg:text-[100px] font-bold text-apple-black leading-[0.9] tracking-tight mb-8">
                  The future of
                  <br />
                  <span className="text-emerald-900">Cardiac Care.</span>
                </h1>

                <p className="text-xl lg:text-2xl text-apple-darkGray max-w-lg mb-12 font-medium leading-relaxed">
                  Dr. Priya Menon is a pioneer in interventional cardiology, combining AI-driven diagnostics with 20+ years of clinical excellence.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 mb-16">
                  <button className="px-10 py-5 bg-emerald-900 text-white font-bold rounded-full transition-all hover:scale-105 shadow-2xl active:scale-95 flex items-center justify-center gap-2">
                    Book Consultation
                    <ArrowRight size={18} />
                  </button>
                  <button className="px-10 py-5 border-2 border-emerald-900 text-emerald-900 font-bold rounded-full transition-all flex items-center justify-center gap-2 hover:bg-emerald-50">
                    <Phone size={18} />
                    Call Clinic
                  </button>
                </div>

                <div className="flex flex-wrap gap-10">
                  {[
                    { label: 'Procedures', val: '4,200+' },
                    { label: 'Patient Rating', val: '4.9/5.0' },
                    { label: 'Clinical Years', val: '22' },
                  ].map((stat, i) => (
                    <div key={i}>
                      <p className="text-2xl font-bold text-apple-black">{stat.val}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200} animationType="scale">
                <div className="relative group">
                  <div className="aspect-[4/5] rounded-[64px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-apple-gray relative">
                    <img 
                      src="https://images.unsplash.com/photo-1559839734-2b71f1e3c77e?auto=format&fit=crop&q=80&w=1200" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent opacity-60" />
                    
                    {/* Floating Info Card */}
                    <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/80 backdrop-blur-2xl rounded-[32px] shadow-2xl border border-white/20">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-900 flex items-center justify-center text-white">
                          <Stethoscope size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-apple-black">Dr. Priya Menon</p>
                          <p className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">MD, DM (Cardiology)</p>
                        </div>
                      </div>
                      <p className="text-xs text-apple-darkGray font-medium leading-relaxed">
                        "Your heart deserves precision. We combine compassionate care with cutting-edge technology."
                      </p>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute -top-6 -right-6 p-6 rounded-[32px] bg-white shadow-2xl border border-slate-50 animate-float">
                    <Activity size={32} className="text-emerald-500 mb-4 animate-pulse" />
                    <p className="text-2xl font-black text-apple-black">EKG+</p>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Live Diagnostics</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Clinical Info Strip */}
        <div className="bg-emerald-950 py-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,#fff,transparent_70%)]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-wrap justify-center gap-16 text-white/80 text-[11px] font-bold uppercase tracking-[0.25em]">
              <span className="flex items-center gap-3"><MapPin size={16} className="text-emerald-400" /> Apollo Hospitals, Greams Road</span>
              <span className="flex items-center gap-3"><Clock size={16} className="text-emerald-400" /> Mon — Sat: 09:00 — 17:00</span>
              <span className="flex items-center gap-3"><ShieldCheck size={16} className="text-emerald-400" /> Accredited Facility</span>
            </div>
          </div>
        </div>

        {/* Specialties Grid */}
        <section className="py-32 bg-apple-gray">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-xl">
                <AnimatedSection>
                  <p className="text-emerald-900 font-bold uppercase tracking-[0.3em] text-[11px] mb-4">Core Expertise</p>
                  <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-8 italic">Life-saving precision.</h2>
                  <p className="text-xl text-apple-darkGray font-medium">Advanced diagnostics and interventional procedures tailored to each individual's cardiac profile.</p>
                </AnimatedSection>
              </div>
              <button className="text-[11px] font-bold uppercase tracking-widest text-emerald-900 border-b-2 border-emerald-900 pb-1">View All Treatments</button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {conditions.map((item, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div className="group bg-white rounded-[40px] p-10 hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-transparent hover:border-slate-100">
                    <div className="w-16 h-16 rounded-[24px] bg-apple-gray flex items-center justify-center mb-10 group-hover:bg-emerald-900 transition-all duration-500">
                      <item.icon size={28} className="text-emerald-900 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-apple-black mb-4 group-hover:text-emerald-900 transition-colors">{item.title}</h3>
                    <p className="text-sm text-apple-darkGray font-medium leading-relaxed mb-10 flex-1">{item.description}</p>
                    <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">{item.stat}</span>
                      <ArrowRight size={16} className="text-slate-200 group-hover:text-emerald-900 transform group-hover:translate-x-2 transition-all" />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* AI Patient Journey */}
        <section className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <AnimatedSection delay={200} animationType="scale">
                <div className="p-10 rounded-[64px] bg-apple-gray shadow-inner overflow-hidden border border-slate-200/50">
                  <AgentFlowChart workflow={workflow} />
                </div>
              </AnimatedSection>
              <div>
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-50 text-emerald-900 text-[11px] font-bold uppercase tracking-[0.25em] mb-10 border border-emerald-100">
                    <Zap size={16} className="fill-emerald-900" />
                    Patient Intelligence
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-bold text-apple-black tracking-tight mb-10 leading-[0.95]">
                    Seamless care,
                    <br />
                    wherever you are.
                  </h2>
                  <p className="text-xl text-apple-darkGray font-medium leading-relaxed mb-12">
                    Our proprietary medical AI agent streamlines your journey from first inquiry to post-operative recovery. Experience zero-latency communication and proactive health monitoring.
                  </p>
                  
                  <div className="space-y-8">
                    {[
                      { t: 'Pre-Visit Triage', d: 'Automated health screening and documentation.' },
                      { t: 'Remote Monitoring', d: 'Secure telemetry data integration for heart health.' },
                      { t: 'Instant Follow-ups', d: '24/7 care coordination and prescription renewals.' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2" />
                        <div>
                          <h4 className="font-bold text-apple-black text-sm uppercase tracking-widest">{item.t}</h4>
                          <p className="text-xs text-slate-500 font-medium">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 bg-apple-gray relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <AnimatedSection animationType="scale">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-12 shadow-xl">
                <Heart size={40} className="text-emerald-900 fill-emerald-900" />
              </div>
              <h2 className="text-6xl lg:text-[100px] font-bold tracking-tighter mb-10 leading-[0.85]">
                Your heart,
                <br />
                in expert hands.
              </h2>
              <p className="text-2xl text-apple-darkGray font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                Consultations available at Apollo Hospitals and via our secure telehealth platform. Start your cardiac wellness journey today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <button className="px-14 py-6 bg-emerald-900 text-white font-bold rounded-full text-xl shadow-2xl hover:scale-105 transition-all active:scale-95">
                  Secure Consultation
                </button>
                <button className="text-lg font-bold text-apple-darkGray hover:text-emerald-900 transition-colors flex items-center gap-2">
                  Call Clinic Directly <ArrowRight size={20} />
                </button>
              </div>
            </AnimatedSection>
          </div>
          {/* Subtle heartbeat line visual */}
          <div className="absolute bottom-0 left-0 w-full h-32 opacity-[0.03] pointer-events-none">
            <svg viewBox="0 0 1000 100" className="w-full h-full">
              <path d="M0 50 L100 50 L120 20 L140 80 L160 50 L1000 50" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </section>

      </div>
    </MockLayout>
  );
}
