import { Heart, Zap, ArrowRight, Shield, MessageCircle, Sparkles } from 'lucide-react';
import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import { AnimatedSection } from '../../components/AnimatedSection';
import type { AgentWorkflow } from '../../types';

const SAGE = '#A8C5A0';
const PEACH = '#E8A598';
const SAGE_DARK = '#6E9E65';

const workflow: AgentWorkflow = {
  title: 'Intake & Care Coordination Agent',
  nodes: [
    {
      id: '1',
      label: 'New Patient Inquiry',
      description: 'A prospective patient reaches out via the website contact form or phone.',
      automated: false,
      x: 20,
      y: 40,
    },
    {
      id: '2',
      label: 'Match to Therapist',
      description: 'AI analyses the patient\'s concerns and availability to recommend the best-fit therapist.',
      automated: true,
      x: 200,
      y: 40,
    },
    {
      id: '3',
      label: 'Send Intake Paperwork',
      description: 'Secure digital intake forms and consent documents are dispatched automatically.',
      automated: true,
      x: 380,
      y: 40,
    },
    {
      id: '4',
      label: 'Missed Session Check-in',
      description: 'If a session is missed without notice, AI sends a compassionate check-in message.',
      automated: true,
      x: 560,
      y: 40,
    },
    {
      id: '5',
      label: 'Weekly Admin Digest',
      description: 'Clinicians receive a weekly AI-generated digest of upcoming sessions and care notes.',
      automated: true,
      x: 380,
      y: 160,
    },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
  ],
};

const therapists = [
  {
    name: 'Dr. Ananya Krishnan',
    credentials: 'PhD Clinical Psychology',
    focus: 'Trauma & EMDR',
    bio: '14 years of expertise in evidence-based trauma recovery.',
    initials: 'AK',
    color: SAGE,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Mr. Rohan Desai',
    credentials: 'MA Counselling Psychology',
    focus: 'Relationships',
    bio: 'Specializing in mindful transitions and relationship dynamics.',
    initials: 'RD',
    color: PEACH,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Dr. Meena Subramaniam',
    credentials: 'MD Psychiatry',
    focus: 'ADHD & Mood',
    bio: 'Holistic approach to medication management and wellness.',
    initials: 'MS',
    color: '#C5B8E8',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
  },
];

export default function ClarityMindPsychiatry() {
  return (
    <MockLayout projectName="ClarityMind Psychiatry" accentColor={SAGE_DARK} categoryId="medical">
      <div className="bg-[#FAF9F6] text-apple-black selection:bg-sage-100">

        {/* Serene Hero */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=2400" 
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF9F6]/80 to-[#FAF9F6]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="max-w-4xl">
              <AnimatedSection animationType="blur">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white text-apple-black text-[11px] font-bold uppercase tracking-[0.25em] mb-12 shadow-sm border border-slate-100">
                  <Shield size={14} className="text-sage-600" />
                  Your privacy is our priority
                </div>

                <h1 className="text-7xl lg:text-[110px] font-bold text-apple-black leading-[0.9] tracking-tighter mb-10">
                  The path to
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-sage-600 italic">inner clarity.</span>
                </h1>

                <p className="text-xl lg:text-2xl text-apple-darkGray max-w-2xl mb-16 font-medium leading-relaxed">
                  ClarityMind is a warm, boutique psychiatry and counselling practice. We offer a safe, judgment-free space to explore your mental wellness.
                </p>

                <div className="flex flex-col sm:flex-row gap-8 items-center">
                  <button className="px-14 py-6 bg-emerald-900 text-white font-bold rounded-full text-lg shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center gap-3">
                    Start Your Journey
                    <ArrowRight size={20} />
                  </button>
                  <button className="text-lg font-bold text-apple-darkGray hover:text-emerald-900 transition-colors border-b-2 border-transparent hover:border-emerald-900 pb-1">
                    How it works
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Philosophy Strip */}
        <div className="bg-white border-y border-slate-100 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              {[
                { t: 'Empathetic Care', d: 'Every session is guided by deep listening and compassionate understanding.', i: Heart },
                { t: 'Evidence-Based', d: 'Combining traditional wisdom with modern psychiatric breakthroughs.', i: Sparkles },
                { t: 'Total Privacy', d: 'Secure end-to-end encryption for all digital and in-person sessions.', i: Shield },
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <item.i size={32} className="mx-auto mb-8 text-emerald-900/30 group-hover:text-emerald-900 transition-colors" />
                  <h4 className="text-xl font-bold mb-4 tracking-tight">{item.t}</h4>
                  <p className="text-sm text-apple-darkGray font-medium leading-relaxed px-4">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Care Team Display */}
        <section className="py-32 bg-[#FAF9F6]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <AnimatedSection>
                <p className="text-[11px] font-bold uppercase tracking-[0.4em] mb-6 text-emerald-900/40">The Collective</p>
                <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-8">Specialists in Wellness.</h2>
                <p className="text-xl text-apple-darkGray font-medium">A diverse team of clinicians dedicated to your growth.</p>
              </AnimatedSection>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {therapists.map((t, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div className="group bg-white rounded-[48px] p-10 hover:shadow-2xl transition-all duration-700 border border-transparent hover:border-white">
                    <div className="relative aspect-square rounded-[32px] overflow-hidden mb-10 bg-apple-gray">
                      <img src={t.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 via-transparent to-transparent opacity-60" />
                    </div>
                    <h3 className="text-2xl font-bold text-apple-black mb-1 tracking-tight">{t.name}</h3>
                    <p className="text-emerald-900 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">{t.credentials}</p>
                    <div className="px-4 py-1.5 rounded-full bg-apple-gray text-[10px] font-bold text-apple-darkGray inline-block mb-8 uppercase tracking-widest">
                      {t.focus}
                    </div>
                    <p className="text-sm text-apple-darkGray font-medium leading-relaxed mb-10">{t.bio}</p>
                    <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-emerald-900 group-hover:gap-4 transition-all">
                      View Profile <ArrowRight size={14} />
                    </button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* AI Intake Workflow */}
        <section className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-50 text-emerald-900 text-[11px] font-bold uppercase tracking-[0.25em] mb-10 border border-emerald-100">
                    <Zap size={16} className="fill-emerald-900" />
                    Intelligent Intake
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-bold text-apple-black tracking-tight mb-10 leading-[0.95]">
                    Simplicity for
                    <br />
                    the soul.
                  </h2>
                  <p className="text-xl text-apple-darkGray font-medium leading-relaxed mb-12">
                    Taking the first step shouldn't be stressful. Our proprietary care coordination agent handles all the logistics, from matching you with the right therapist to managing secure digital intake.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div className="p-8 rounded-3xl bg-[#FAF9F6] border border-slate-100 group hover:bg-emerald-50 transition-colors">
                      <MessageCircle size={24} className="text-emerald-900 mb-6" />
                      <h4 className="font-bold text-apple-black mb-3">24/7 Support</h4>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">Instant scheduling and responsive care coordination.</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-[#FAF9F6] border border-slate-100 group hover:bg-emerald-50 transition-colors">
                      <Shield size={24} className="text-emerald-900 mb-6" />
                      <h4 className="font-bold text-apple-black mb-3">Zero Referral</h4>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">Access specialist care directly without administrative delays.</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              <AnimatedSection delay={200} animationType="scale">
                <div className="p-10 rounded-[64px] bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] border border-slate-50">
                  <AgentFlowChart workflow={workflow} />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 bg-[#FAF9F6] relative overflow-hidden text-center">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <AnimatedSection animationType="scale">
              <div className="w-24 h-24 rounded-[32px] bg-white flex items-center justify-center mx-auto mb-16 shadow-xl text-emerald-900">
                <Heart size={48} className="fill-emerald-900" />
              </div>
              <h2 className="text-6xl lg:text-[100px] font-bold tracking-tighter mb-12 leading-[0.85]">
                Wellness is a
                <br />
                shared journey.
              </h2>
              <p className="text-2xl text-apple-darkGray font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                Take the first step towards clarity. Book a complimentary discovery call with our care coordinator today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <button className="px-14 py-6 bg-emerald-900 text-white font-bold rounded-full text-xl shadow-2xl hover:scale-105 transition-all active:scale-95">
                  Book Discovery Call
                </button>
                <button className="text-lg font-bold text-apple-darkGray hover:text-emerald-900 transition-colors flex items-center gap-2">
                  Take Self-Assessment <ArrowRight size={20} />
                </button>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Decorative Leaf-like graphic */}
          <div className="absolute top-20 right-[-10%] w-96 h-96 bg-emerald-900/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-20 left-[-10%] w-96 h-96 bg-sage-500/5 rounded-full blur-[120px] pointer-events-none" />
        </section>

      </div>
    </MockLayout>
  );
}
