import { UtensilsCrossed, Star, Flame, ArrowRight, Zap, Award } from 'lucide-react';
import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import { AnimatedSection } from '../../components/AnimatedSection';
import type { AgentWorkflow } from '../../types';

const SAFFRON = '#D4A574';

const workflow: AgentWorkflow = {
  title: 'Reservation & Guest Experience Agent',
  nodes: [
    { id: '1', label: 'Reservation Booked', description: 'Guest completes a reservation via the website, phone, or OpenTable integration.', automated: false, x: 20, y: 40 },
    { id: '2', label: 'Send Confirmation', description: 'Instant personalised email confirmation with directions, dress code, and parking details.', automated: true, x: 200, y: 40 },
    { id: '3', label: 'Occasion Flag to Staff', description: 'If an occasion (birthday, anniversary) is noted, the agent alerts front-of-house with a preparation checklist.', automated: true, x: 380, y: 40 },
    { id: '4', label: 'Day-of Reminder', description: 'A warm SMS reminder is sent on the day with a link to update guest count or dietary requirements.', automated: true, x: 560, y: 40 },
    { id: '5', label: 'Post-Dining Review Request', description: 'Two hours after the reservation slot, the agent sends a Google and Zomato review request.', automated: true, x: 200, y: 160 },
    { id: '6', label: 'Negative Review Alert', description: 'If a 1–2 star review is detected, the manager is alerted within 5 minutes for rapid response.', automated: true, x: 380, y: 160 },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
    { from: '5', to: '6' },
  ],
};

const dishes = [
  {
    name: 'Laal Maas',
    origin: 'Rajput Royal Kitchens',
    region: 'Rajasthan',
    desc: 'Whole mathania chillies, slow-rendered mutton, and two days of patience.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=600',
    badge: 'Signature'
  },
  {
    name: 'Malabar Moilee',
    origin: 'Syrian Christian Coast',
    region: 'Kerala',
    desc: 'Tiger prawns, turmeric-tinted coconut milk, and fresh green chillies.',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb04791?auto=format&fit=crop&q=80&w=600',
    badge: 'Coastal'
  },
  {
    name: 'Dum Biryani',
    origin: 'Nizam\'s Court',
    region: 'Hyderabad',
    desc: 'Aged basmati, twice-marinated lamb, and hand-ground spices.',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=600',
    badge: 'Legendary'
  },
];

const timings = [
  { day: 'Tuesday – Thursday', lunch: '12:00 – 15:00', dinner: '19:00 – 23:00' },
  { day: 'Friday – Saturday', lunch: '12:00 – 15:30', dinner: '19:00 – 23:30' },
  { day: 'Sunday', lunch: '12:00 – 16:00', dinner: '19:00 – 22:30' },
];

export default function CopperHandi() {
  return (
    <MockLayout projectName="The Copper Handi" accentColor={SAFFRON} categoryId="food">
      <div className="bg-[#1A0F08] text-white selection:bg-amber-900/50 overflow-hidden">
        
        {/* Sumptuous Hero */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2400" 
              className="w-full h-full object-cover opacity-30 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A0F08]/60 to-[#1A0F08]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="max-w-4xl">
              <AnimatedSection animationType="blur">
                <div className="flex items-center gap-2 mb-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#D4A574] text-[#D4A574]" />
                  ))}
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] ml-4 text-white/40">
                    Est. 2003 · Heritage Indian
                  </span>
                </div>

                <h1 className="text-7xl lg:text-[110px] font-bold leading-[0.85] tracking-tighter mb-12">
                  India's 
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A574] to-amber-200 italic">forgotten table.</span>
                </h1>

                <p className="text-xl lg:text-2xl text-white/60 max-w-2xl mb-16 font-medium leading-relaxed">
                  We serve the food eaten at darbars, in coastal kitchens, and on long train journeys before the world homogenised. Provenance is our priority.
                </p>

                <div className="flex flex-col sm:flex-row gap-8 items-center">
                  <button className="px-14 py-6 bg-[#D4A574] text-[#1A0F08] font-bold rounded-full text-xl shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center gap-3">
                    Reserve a Table
                    <UtensilsCrossed size={20} />
                  </button>
                  <button className="text-lg font-bold text-white/60 hover:text-white transition-colors border-b-2 border-transparent hover:border-[#D4A574] pb-1">
                    Explore Menu
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Floating Steam Visual (Simulated) */}
          <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-[#1A0F08] to-transparent opacity-60 pointer-events-none" />
        </section>

        {/* Provenance Grid */}
        <section className="py-32 bg-[#1A0F08]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <AnimatedSection>
                <p className="text-[#D4A574] font-bold uppercase tracking-[0.4em] text-[11px] mb-6">Culinary Roots</p>
                <h2 className="text-6xl font-bold tracking-tighter">Provenance Note.</h2>
              </AnimatedSection>
              <p className="text-lg text-white/40 max-w-sm font-medium italic">"If the kitchen cannot explain where a recipe came from, it will not appear on our menu."</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {dishes.map((dish, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div className="group cursor-default">
                    <div className="aspect-[4/5] rounded-[48px] overflow-hidden mb-8 bg-[#2A1508] relative shadow-2xl">
                      <img src={dish.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F08] via-transparent to-transparent opacity-80" />
                      <div className="absolute top-8 right-8 px-4 py-1.5 rounded-full bg-[#D4A574] text-[#1A0F08] text-[10px] font-bold uppercase tracking-widest">
                        {dish.badge}
                      </div>
                      <div className="absolute bottom-10 left-10">
                        <p className="text-[10px] font-bold text-[#D4A574] uppercase tracking-[0.2em] mb-2">{dish.region}</p>
                        <h4 className="text-3xl font-bold tracking-tight">{dish.name}</h4>
                      </div>
                    </div>
                    <div className="px-4">
                      <p className="text-sm font-bold text-white/30 uppercase tracking-widest mb-4">{dish.origin}</p>
                      <p className="text-base text-white/60 font-medium leading-relaxed">{dish.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* The Darbar Room - High end dark section */}
        <section className="py-40 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2400" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <AnimatedSection animationType="scale">
                <div className="p-1 rounded-[64px] bg-gradient-to-br from-[#D4A574]/40 to-transparent border border-white/10 shadow-3xl overflow-hidden backdrop-blur-3xl">
                  <div className="bg-black/80 rounded-[60px] p-16 text-center">
                    <Award size={48} className="mx-auto text-[#D4A574] mb-10" />
                    <h3 className="text-4xl font-bold mb-6 tracking-tight">The Darbar Room</h3>
                    <p className="text-lg text-white/40 font-medium mb-12 leading-relaxed">
                      An exclusive private sanctuary for up to 18 guests. Featuring a bespoke multi-course degustation menu and vintage wine pairings.
                    </p>
                    <button className="px-10 py-4 border border-[#D4A574] text-[#D4A574] font-bold rounded-full text-xs uppercase tracking-[0.2em] hover:bg-[#D4A574] hover:text-black transition-all">
                      Enquire for Private Event
                    </button>
                  </div>
                </div>
              </AnimatedSection>
              <div>
                <AnimatedSection>
                  <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#D4A574] mb-8">
                    <Flame size={16} />
                    Visionary Kitchen
                  </div>
                  <h2 className="text-6xl font-bold tracking-tighter mb-10 leading-tight">
                    Preserving the
                    <br />
                    dying flame.
                  </h2>
                  <p className="text-xl text-white/60 font-medium leading-relaxed mb-12">
                    Executive Chef Mohan Krishnaswamy spent a decade travelling from Udaipur to Coorg, documenting handwritten recipes that were never meant for restaurants.
                  </p>
                  <div className="grid grid-cols-2 gap-10">
                    <div>
                      <h4 className="text-3xl font-black text-[#D4A574] mb-2">22</h4>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Years of Heritage</p>
                    </div>
                    <div>
                      <h4 className="text-3xl font-black text-[#D4A574] mb-2">140+</h4>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Secret Recipes</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* AI Guest Experience */}
        <section className="py-32 bg-[#1A0F08]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-amber-500/10 text-[#D4A574] text-[11px] font-bold uppercase tracking-[0.25em] mb-10 border border-[#D4A574]/20">
                    <Zap size={16} className="fill-[#D4A574]" />
                    Intelligent Hospitality
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-bold text-white tracking-tight mb-10 leading-[0.95]">
                    Seamlessly
                    <br />
                    Sophisticated.
                  </h2>
                  <p className="text-xl text-white/60 font-medium leading-relaxed mb-12">
                    Our proprietary guest experience agent handles the logistics of fine dining, from intelligent table allocation to automated milestone reminders, allowing our staff to focus on the art of service.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      'Real-time inventory sync',
                      'Automated guest preference tracking',
                      'AI-driven occasion detection',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-sm font-bold text-white/40">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4A574]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
              <AnimatedSection delay={200} animationType="scale">
                <div className="p-10 rounded-[64px] bg-white/[0.02] border border-white/5 shadow-inner overflow-hidden backdrop-blur-3xl">
                  <AgentFlowChart workflow={workflow} />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Availability Strip */}
        <div className="bg-[#D4A574] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {timings.map((t, i) => (
                <div key={i} className="text-[#1A0F08]">
                  <p className="text-sm font-black uppercase tracking-widest mb-3">{t.day}</p>
                  <p className="text-xs font-bold opacity-60">LUNCH: {t.lunch} · DINNER: {t.dinner}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <section className="py-40 bg-[#1A0F08] relative overflow-hidden text-center">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <AnimatedSection animationType="scale">
              <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-16 shadow-2xl text-[#D4A574]">
                <UtensilsCrossed size={48} />
              </div>
              <h2 className="text-6xl lg:text-[100px] font-bold tracking-tighter mb-12 leading-[0.85]">
                Taste the 
                <br />
                timeless.
              </h2>
              <p className="text-2xl text-white/40 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                Reservations are recommended 48 hours in advance. For the Darbar Room, please enquire via phone.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <button className="px-14 py-6 bg-[#D4A574] text-[#1A0F08] font-bold rounded-full text-xl shadow-2xl hover:scale-105 transition-all active:scale-95">
                  Book a Table
                </button>
                <button className="text-lg font-bold text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  Call Concierge <ArrowRight size={20} />
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </div>
    </MockLayout>
  );
}
