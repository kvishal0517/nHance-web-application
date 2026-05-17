import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import { AnimatedSection } from '../../components/AnimatedSection';
import type { AgentWorkflow } from '../../types';
import {
  Leaf,
  Sun,
  Moon,
  Wind,
  ArrowRight,
  Heart,
  Compass,
  Calendar,
  Zap,
  Flower2,
  ChevronRight
} from 'lucide-react';

const green = '#1A3C34';

const bookingWorkflow: AgentWorkflow = {
  title: 'Mindful Intake & Journey Agent',
  nodes: [
    { id: '1', label: 'Guest Inquiry', description: 'Initial contact via the site or personal recommendation.', automated: false, x: 20, y: 40 },
    { id: '2', label: 'Intention Matching', description: 'AI captures health goals and spiritual intentions.', automated: true, x: 200, y: 40 },
    { id: '3', label: 'Bespoke Guide', description: 'Automated guide dispatched with reading lists and preparation steps.', automated: true, x: 380, y: 40 },
    { id: '4', label: 'Practice Sync', description: 'Syncs retreat themes with the student\'s current home practice.', automated: true, x: 560, y: 40 },
    { id: '5', label: 'Post-Retreat Log', description: 'Automated 30-day reflection log to integrate the experience.', automated: true, x: 380, y: 160 },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
  ],
};

const classes = [
  { style: 'Vinyasa Flow', icon: Wind, desc: 'Breath-linked movement to build internal heat and presence.', level: 'All Levels' },
  { style: 'Yin Yoga', icon: Moon, desc: 'Long-held postures to release deep connective tissues.', level: 'Beginner+' },
  { style: 'Pranayama', icon: Leaf, desc: 'Controlled breath techniques for nervous system regulation.', level: 'Advanced' },
  { style: 'Meditation', icon: Sun, desc: 'Guided silence to observe the movement of the mind.', level: 'Introductory' },
];

const retreats = [
  {
    title: 'The Silent Valley',
    location: 'Coorg, Karnataka',
    date: 'Oct 12–18, 2025',
    price: '₹75,000',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Coastal Stillness',
    location: 'Gokarna, India',
    date: 'Jan 04–10, 2026',
    price: '₹62,000',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800'
  },
];

export default function SattvicSpace() {
  return (
    <MockLayout projectName="Sattvic Space" accentColor={green} categoryId="fitness">
      <div className="bg-[#FAF9F6] text-slate-900 selection:bg-emerald-50 overflow-hidden">
        
        {/* Ethereal Hero */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#FAF9F6]">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2400" 
              className="w-full h-full object-cover opacity-10 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF9F6]/80 to-[#FAF9F6]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
            <AnimatedSection animationType="blur">
              <div className="flex items-center justify-center gap-3 mb-12">
                <div className="h-[1px] w-12 bg-slate-200" />
                <Flower2 size={16} className="text-emerald-900" />
                <div className="h-[1px] w-12 bg-slate-200" />
              </div>

              <h1 className="text-7xl lg:text-[120px] font-bold leading-[0.85] tracking-tighter mb-12 text-emerald-950">
                Come home
                <br />
                to <span className="italic text-emerald-800/40">yourself.</span>
              </h1>

              <p className="text-xl lg:text-2xl text-slate-500 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
                A sanctuary for classical yoga and mindful living. Rooted in tradition, held inIndiranagar, Bangalore.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <button className="px-14 py-6 bg-emerald-950 text-white font-bold rounded-full text-lg shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center gap-3">
                  Join a Class
                  <ArrowRight size={20} />
                </button>
                <button className="text-lg font-bold text-slate-400 hover:text-emerald-950 transition-colors border-b-2 border-transparent hover:border-emerald-950 pb-1">
                  Upcoming Retreats
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Philosophy Strip */}
        <div className="bg-white border-y border-slate-100 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              {[
                { t: 'Rooted Wisdom', d: 'Drawing from Hatha and Raja Yoga traditions with absolute fidelity.', i: Compass },
                { t: 'Held Space', d: 'Small class sizes ensuring personal alignment and attention.', i: Heart },
                { t: 'Natural Living', d: 'A practice that extends beyond the mat into daily awareness.', i: Leaf },
              ].map((item, i) => (
                <div key={i} className="text-center group cursor-default">
                  <item.i size={32} className="mx-auto mb-8 text-emerald-900/20 group-hover:text-emerald-950 transition-colors" />
                  <h4 className="text-xl font-bold mb-4 tracking-tight text-emerald-950">{item.t}</h4>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed px-8">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Styles Grid */}
        <section className="py-32 bg-[#FAF9F6]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <AnimatedSection>
                <p className="text-emerald-900 font-bold uppercase tracking-[0.4em] text-[11px] mb-6">Curriculum</p>
                <h2 className="text-6xl font-black tracking-tighter text-emerald-950">Practices.</h2>
              </AnimatedSection>
              <p className="text-lg text-slate-400 max-w-sm font-medium italic">"The posture is the portal, but the breath is the guide."</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {classes.map((c, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div className="group bg-white rounded-[48px] p-10 hover:shadow-2xl transition-all duration-700 border border-transparent hover:border-white h-full flex flex-col">
                    <div className="w-16 h-16 rounded-[24px] bg-slate-50 flex items-center justify-center mb-10 group-hover:bg-emerald-950 transition-all duration-500">
                      <c.icon size={28} className="text-emerald-900 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-950 mb-3 tracking-tight">{c.style}</h3>
                    <p className="text-[10px] font-black uppercase tracking-widest text-emerald-800/40 mb-6">{c.level}</p>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed flex-1">{c.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Retreats Showcase - High end visual section */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <AnimatedSection>
                <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-6 text-emerald-950">Gatherings.</h2>
                <p className="text-xl text-slate-400 font-medium">Immersive experiences in nature, away from the digital noise.</p>
              </AnimatedSection>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {retreats.map((r, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div className="group cursor-pointer">
                    <div className="aspect-[16/10] rounded-[64px] overflow-hidden mb-8 relative shadow-xl">
                      <img src={r.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end text-white">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">{r.location}</p>
                          <h4 className="text-3xl font-bold tracking-tight">{r.title}</h4>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Investment</p>
                          <p className="text-xl font-black">{r.price}</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 flex justify-between items-center">
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{r.date}</p>
                      <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-900 group-hover:gap-4 transition-all">
                        View Itinerary <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* AI Mindful Workflow */}
        <section className="py-32 bg-emerald-950 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 text-emerald-400 text-[11px] font-bold uppercase tracking-[0.25em] mb-10 border border-white/10">
                    <Zap size={16} className="fill-emerald-400" />
                    Mindful Protocol
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-10 leading-[0.95]">
                    Thoughtful 
                    <br />
                    touchpoints.
                  </h2>
                  <p className="text-xl text-emerald-100/60 font-medium leading-relaxed mb-12">
                    Our proprietary journey agent ensures every guest touchpoint is warm and timely. From intention-matching during intake to post-retreat reflection logs, technology serves the human experience.
                  </p>
                  
                  <div className="space-y-8">
                    {[
                      { t: 'Intention Mapping', d: 'Personalizing your practice based on mental and physical goals.' },
                      { t: 'Digital Detox Guide', d: 'Automated prep-material to ease your transition into silence.' },
                      { t: 'Integration Loop', d: 'A 30-day post-retreat window for continued guidance.' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <div>
                          <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-1">{item.t}</h4>
                          <p className="text-xs text-emerald-100/40 font-medium leading-relaxed">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
              <AnimatedSection delay={200} animationType="scale">
                <div className="p-10 rounded-[64px] bg-white shadow-2xl border border-white/5 overflow-hidden">
                  <AgentFlowChart workflow={bookingWorkflow} />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 bg-[#FAF9F6] relative overflow-hidden text-center">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <AnimatedSection animationType="scale">
              <Flower2 size={48} className="mx-auto text-emerald-900 mb-12" />
              <h2 className="text-6xl lg:text-[100px] font-bold tracking-tighter mb-12 text-emerald-950 leading-[0.85]">
                Presence is 
                <br />
                the practice.
              </h2>
              <p className="text-2xl text-slate-500 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                Join ourIndiranagar studio or reserve your spot for the Silent Valley retreat. We invite you to step into the space.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <button className="px-14 py-6 bg-emerald-950 text-white font-bold rounded-full text-xl shadow-2xl hover:scale-105 transition-all active:scale-95">
                  Book a Trial
                </button>
                <button className="text-lg font-bold text-slate-400 hover:text-emerald-950 transition-colors flex items-center gap-2">
                  View Public Calendar <Calendar size={20} />
                </button>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Subtle Leaf Visuals */}
          <div className="absolute top-20 right-[-10%] w-96 h-96 bg-emerald-900/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-20 left-[-10%] w-96 h-96 bg-emerald-900/5 rounded-full blur-[120px] pointer-events-none" />
        </section>

      </div>
    </MockLayout>
  );
}
