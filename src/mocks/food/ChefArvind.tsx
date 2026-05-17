import { Calendar, ArrowRight, Zap, Award, MapPin, ChefHat } from 'lucide-react';
import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import { AnimatedSection } from '../../components/AnimatedSection';
import type { AgentWorkflow } from '../../types';

const FOREST = '#2D6A4F';

const workflow: AgentWorkflow = {
  title: 'Event Catering Proposal Agent',
  nodes: [
    { id: '1', label: 'Client Inquiry', description: 'Potential client submits an event inquiry with date, guest count, and cuisine preferences.', automated: false, x: 20, y: 40 },
    { id: '2', label: 'Draft Proposal PDF', description: 'AI assembles a tailored proposal PDF with suggested menus and transparent cost breakdown.', automated: true, x: 200, y: 40 },
    { id: '3', label: 'Follow-up Sequence', description: 'If proposal is unopened after 48 hours, the agent sends a polite follow-up with alternate options.', automated: true, x: 380, y: 40 },
    { id: '4', label: 'Planning Doc Sync', description: 'On acceptance, a shared planning document is created covering venue logistics and timeline.', automated: true, x: 560, y: 40 },
    { id: '5', label: '72h Final Review', description: 'Agent requests final headcount and dietary updates 72 hours before the event.', automated: true, x: 380, y: 160 },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
  ],
};

const experiences = [
  {
    title: 'Intimate Dinners',
    guestRange: '6–16 guests',
    desc: 'A private multi-course tasting menu prepared in your home kitchen. Bespoke curation of local produce.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Leadership Offsites',
    guestRange: '20–60 guests',
    desc: 'Full-service catering for retreats. Designed to impress without distracting from the day\'s goals.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Wedding Mastery',
    guestRange: '80–200 guests',
    desc: 'Multi-day catering with full coordination. Traveling from Udaipur to Alibaug for exclusive events.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800'
  },
];

const dishes = [
  {
    name: 'Pork Vindaloo',
    cuisine: 'Goan Heritage',
    desc: 'Three-day brined shoulder, Kashmiri chilli, palm feni vinegar, served with slow-cooked rice congee.',
    stat: 'Signature'
  },
  {
    name: 'Saffron Lamb Raan',
    cuisine: 'Mughal Royal',
    desc: '48-hour marinated leg, slow-roasted in a handi. Served with a pan-reduction jus.',
    stat: 'Legendary'
  },
  {
    name: 'Wild Mushroom Kichdi',
    cuisine: 'Contemporary',
    desc: 'Short-grain rice, foraged forest mushrooms, finished with fresh truffle oil.',
    stat: 'Artisan'
  },
];

export default function ChefArvind() {
  return (
    <MockLayout projectName="Chef Arvind Krishnan" accentColor={FOREST} categoryId="food">
      <div className="bg-black text-white selection:bg-emerald-900/30 overflow-hidden">
        
        {/* Luxury Minimal Hero */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2400" 
              className="w-full h-full object-cover opacity-20 grayscale scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-8">
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold uppercase tracking-[0.4em] mb-12">
                    <ChefHat size={14} className="text-emerald-500" />
                    Private Chef · Bengaluru · Global
                  </div>

                  <h1 className="text-7xl lg:text-[130px] font-bold leading-[0.8] tracking-tighter mb-12">
                    Culinary 
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-200 italic font-serif">Artistry.</span>
                  </h1>

                  <p className="text-2xl lg:text-3xl text-slate-400 max-w-2xl mb-16 font-medium leading-relaxed">
                    Food that makes guests put down their phones. A decade of crafting exclusive dining experiences for the discerning few.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-8 items-center">
                    <button className="px-14 py-6 bg-emerald-700 text-white font-bold rounded-full text-xl shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center gap-3">
                      Book an Event
                      <Calendar size={20} />
                    </button>
                    <button className="text-lg font-bold text-slate-400 hover:text-white transition-colors border-b-2 border-transparent hover:border-emerald-600 pb-1">
                      View Repertoire
                    </button>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <div className="absolute bottom-12 right-12 hidden lg:flex flex-col gap-10 text-right">
            <div>
              <p className="text-5xl font-black text-white tracking-tight">17</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Years of Fire</p>
            </div>
            <div>
              <p className="text-5xl font-black text-white tracking-tight">800+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Private Events</p>
            </div>
          </div>
        </section>

        {/* Experiences Grid */}
        <section className="py-32 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-24">
              <AnimatedSection>
                <p className="text-[11px] font-bold uppercase tracking-[0.4em] mb-6 text-emerald-900">The Offering</p>
                <h2 className="text-6xl font-bold tracking-tighter">Curation.</h2>
              </AnimatedSection>
              <p className="hidden md:block text-lg text-slate-500 max-w-sm font-medium">Bespoke culinary journeys tailored to the architecture of your evening.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {experiences.map((exp, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div className="group cursor-pointer">
                    <div className="aspect-[4/5] rounded-[48px] overflow-hidden mb-8 bg-zinc-900 relative shadow-2xl">
                      <img src={exp.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
                      <div className="absolute bottom-10 left-10 right-10">
                        <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-2">{exp.guestRange}</p>
                        <h4 className="text-3xl font-bold text-white tracking-tight">{exp.title}</h4>
                      </div>
                    </div>
                    <div className="px-4">
                      <p className="text-base text-slate-400 font-medium leading-relaxed mb-8">{exp.desc}</p>
                      <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-emerald-500 group-hover:gap-4 transition-all">
                        Learn More <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* The Repertoire - High contrast list */}
        <section className="py-32 bg-black text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
              <AnimatedSection>
                <p className="text-[11px] font-bold uppercase tracking-[0.4em] mb-6 text-emerald-900">Menu Highlights</p>
                <h2 className="text-5xl lg:text-6xl font-bold tracking-tighter">The Repertoire.</h2>
              </AnimatedSection>
            </div>

            <div className="space-y-0 border-t border-white/5">
              {dishes.map((dish, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className="group py-16 border-b border-white/5 hover:bg-emerald-950/10 transition-all duration-500 px-8 cursor-default">
                    <div className="grid md:grid-cols-12 gap-8 items-center">
                      <div className="md:col-span-1">
                        <span className="text-2xl font-black text-white/10 group-hover:text-emerald-500 transition-colors">0{i+1}</span>
                      </div>
                      <div className="md:col-span-5">
                        <h3 className="text-3xl font-bold tracking-tight mb-2">{dish.name}</h3>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700">{dish.cuisine}</p>
                      </div>
                      <div className="md:col-span-4">
                        <p className="text-slate-400 font-medium leading-relaxed">{dish.desc}</p>
                      </div>
                      <div className="md:col-span-2 text-right">
                        <span className="px-3 py-1 rounded-full border border-white/10 text-[9px] font-bold uppercase tracking-widest text-slate-500 group-hover:border-emerald-500 group-hover:text-emerald-500 transition-all">
                          {dish.stat}
                        </span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* AI Proposal Workflow */}
        <section className="py-32 bg-white text-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <AnimatedSection delay={200} animationType="scale">
                <div className="p-10 rounded-[64px] bg-zinc-50 border border-zinc-100 shadow-inner overflow-hidden">
                  <AgentFlowChart workflow={workflow} />
                </div>
              </AnimatedSection>
              <div>
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-50 text-emerald-900 text-[11px] font-bold uppercase tracking-[0.25em] mb-10 border border-emerald-100">
                    <Zap size={16} className="fill-emerald-900" />
                    Event Intelligence
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-bold text-black tracking-tight mb-10 leading-[0.95]">
                    Complex hosting,
                    <br />
                    simple planning.
                  </h2>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                    High-end catering requires flawless logistics. Our proprietary AI agent manages the overhead — from capturing the initial brief to drafting tailored proposals and managing dietary headcount sync.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div className="p-8 rounded-[32px] bg-zinc-50 border border-zinc-100 hover:bg-black group transition-all duration-500">
                      <Award size={24} className="text-emerald-900 group-hover:text-emerald-500 mb-6 transition-colors" />
                      <h4 className="font-bold text-black group-hover:text-white mb-2 transition-colors">Precision Proposals</h4>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">Instant menus based on seasonality and theme.</p>
                    </div>
                    <div className="p-8 rounded-[32px] bg-zinc-50 border border-zinc-100 hover:bg-black group transition-all duration-500">
                      <MapPin size={24} className="text-emerald-900 group-hover:text-emerald-500 mb-6 transition-colors" />
                      <h4 className="font-bold text-black group-hover:text-white mb-2 transition-colors">Venue Sync</h4>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">Automated kitchen audit and logistics mapping.</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 bg-zinc-50 relative overflow-hidden text-center">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <AnimatedSection animationType="scale">
              <div className="w-24 h-24 rounded-[32px] bg-black flex items-center justify-center mx-auto mb-16 shadow-2xl text-white">
                <ChefHat size={48} />
              </div>
              <h2 className="text-6xl lg:text-[100px] font-bold tracking-tighter mb-12 text-black leading-[0.85]">
                Let's set 
                <br />
                the table.
              </h2>
              <p className="text-2xl text-slate-500 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                Currently accepting bookings for private events and corporate offsites in Bengaluru and Pan-India. Tell us about your vision.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <button className="px-14 py-6 bg-black text-white font-bold rounded-full text-xl shadow-2xl hover:scale-105 transition-all active:scale-95">
                  Request Proposal
                </button>
                <button className="text-lg font-bold text-slate-500 hover:text-black transition-colors flex items-center gap-2">
                  View Availability <ArrowRight size={20} />
                </button>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Subtle Grainy Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />
        </section>

      </div>
    </MockLayout>
  );
}
