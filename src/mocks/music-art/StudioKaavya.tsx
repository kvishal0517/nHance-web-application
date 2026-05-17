import { Grid2x2 as Grid, Layers, MessageSquare, ArrowRight, Paintbrush, Palette, Maximize, ExternalLink, Zap, Compass } from 'lucide-react';
import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import { AnimatedSection } from '../../components/AnimatedSection';
import type { AgentWorkflow } from '../../types';

const BLACK = '#111111';

const workflow: AgentWorkflow = {
  title: 'Commission Intake & Project Management',
  nodes: [
    { id: '1', label: 'Submit Brief', description: 'Client fills in dimensions and theme.', automated: false, x: 20, y: 40 },
    { id: '2', label: 'Design Questionnaire', description: 'AI captures brand palette and mood boards.', automated: true, x: 200, y: 40 },
    { id: '3', label: 'Organize Assets', description: 'Agent creates shared folders and contracts.', automated: true, x: 380, y: 40 },
    { id: '4', label: 'Milestone Reveal', description: 'AI notifies client at sketch and final stages.', automated: true, x: 560, y: 40 },
    { id: '5', label: 'Smart Invoicing', description: 'Auto-generates stage invoices upon approval.', automated: true, x: 380, y: 160 },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
  ],
};

const projects = [
  {
    title: 'The Origin Wall',
    client: 'International Airport — T2',
    size: '18m × 6m',
    desc: 'A floor-to-ceiling narrative of heritage and indigo movement.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Quiet Riot',
    client: 'Bicycle Club, Mumbai',
    size: '8m × 4m',
    desc: 'Geometric forms that fracture and rebuild across three café walls.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Neon Drift',
    client: 'Tech Park, Bangalore',
    size: '12m × 3m',
    desc: 'A fluid exploration of digital motion rendered in hand-painted gradients.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800'
  },
];

export default function StudioKaavya() {
  return (
    <MockLayout projectName="Studio Kaavya" accentColor={BLACK} categoryId="music-art">
      <div className="bg-white text-apple-black selection:bg-slate-100 overflow-hidden">
        
        {/* Architecturally Bold Hero */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#F8F8F8]">
          {/* Large Scale Structural Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=2400" 
              className="w-full h-full object-cover opacity-5 grayscale"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#00000008_0%,transparent_70%)]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-8">
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-apple-black text-white text-[11px] font-bold uppercase tracking-[0.4em] mb-12">
                    <Compass size={14} className="text-apple-silver" />
                    Mural Artist · Bengaluru
                  </div>

                  <h1 className="text-7xl lg:text-[130px] font-bold leading-[0.8] tracking-tighter mb-12">
                    Surfaces
                    <br />
                    with <span className="italic text-slate-300">soul.</span>
                  </h1>

                  <p className="text-2xl lg:text-3xl text-apple-darkGray max-w-2xl mb-16 font-medium leading-relaxed">
                    Walls are not neutral. We transform architectural volumes into narrative environments through hand-painted precision.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-8 items-center">
                    <button className="px-14 py-6 bg-apple-black text-white font-bold rounded-full text-xl shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center gap-3">
                      Start Commission
                      <ArrowRight size={20} />
                    </button>
                    <button className="text-lg font-bold text-apple-darkGray hover:text-apple-black transition-colors border-b-2 border-transparent hover:border-apple-black pb-1">
                      Explore Portfolio
                    </button>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>

          {/* Bottom Sidebar Statistics */}
          <div className="absolute bottom-12 right-12 hidden lg:flex flex-col gap-8 text-right">
            <div>
              <p className="text-4xl font-black text-apple-black tracking-tight">40+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Murals Completed</p>
            </div>
            <div>
              <p className="text-4xl font-black text-apple-black tracking-tight">12k</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Sq. Ft. Painted</p>
            </div>
          </div>
        </section>

        {/* Selected Works Grid */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-24">
              <AnimatedSection>
                <p className="text-[11px] font-bold uppercase tracking-[0.4em] mb-6 text-slate-400">Archive</p>
                <h2 className="text-6xl font-bold tracking-tighter">Scale & Scope.</h2>
              </AnimatedSection>
              <button className="hidden sm:flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-apple-black border-b-2 border-apple-black pb-1">
                Full Catalogue <Maximize size={16} />
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((p, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div className="group cursor-pointer">
                    <div className="aspect-[4/5] rounded-[48px] overflow-hidden mb-8 bg-apple-gray relative shadow-xl">
                      <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-apple-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                        <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-2">{p.size}</p>
                        <h4 className="text-2xl font-bold text-white tracking-tight">{p.title}</h4>
                      </div>
                    </div>
                    <div className="px-4">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold tracking-tight">{p.title}</h3>
                        <ExternalLink size={16} className="text-slate-200 group-hover:text-apple-black transition-colors" />
                      </div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">{p.client}</p>
                      <p className="text-sm text-apple-darkGray font-medium leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* The Process - Minimalist Structural Section */}
        <section className="py-32 bg-apple-black text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]">
            <Grid className="w-full h-full" size={200} strokeWidth={0.5} />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-apple-silver mb-8">
                    <Paintbrush size={14} />
                    Methodology
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-bold tracking-tighter mb-10 leading-tight">
                    From thought
                    <br />
                    to timber.
                  </h2>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                    Our process is as rigorous as the architecture we inhabit. We begin with deep site analysis, followed by digital mockups and color chemistry testing.
                  </p>
                  
                  <div className="space-y-10">
                    {[
                      { t: 'Site Resonance', d: 'Understanding light, volume, and viewer flow.' },
                      { t: 'Palette Curation', d: 'Custom pigments mixed for longevity and brand alignment.' },
                      { t: 'Execution', d: 'Precision application using premium industrial materials.' },
                    ].map((item, i) => (
                      <div key={i} className="group cursor-default">
                        <div className="flex items-center gap-6 mb-4">
                          <span className="text-2xl font-black text-apple-silver/20 group-hover:text-white transition-colors italic">0{i+1}</span>
                          <h4 className="text-lg font-bold tracking-widest uppercase">{item.t}</h4>
                        </div>
                        <p className="text-sm text-slate-500 font-medium pl-14">{item.d}</p>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
              <AnimatedSection delay={200} animationType="scale">
                <div className="aspect-square rounded-[64px] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-3xl p-1 shadow-3xl">
                  <div className="w-full h-full rounded-[60px] overflow-hidden bg-white/5 flex flex-col items-center justify-center p-20 text-center">
                    <Palette size={64} className="text-apple-silver/20 mb-8" />
                    <h3 className="text-3xl font-bold mb-4">Materiality.</h3>
                    <p className="text-slate-500 font-medium italic">"We believe the wall is a participant in the narrative, not just a substrate."</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* AI Project Workflow */}
        <section className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <AnimatedSection delay={200} animationType="scale">
                <div className="p-10 rounded-[64px] bg-apple-gray shadow-inner border border-slate-100 overflow-hidden">
                  <AgentFlowChart workflow={workflow} />
                </div>
              </AnimatedSection>
              <div>
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-50 text-apple-black text-[11px] font-bold uppercase tracking-[0.25em] mb-10 border border-slate-200 shadow-sm">
                    <Zap size={16} className="fill-apple-black" />
                    Project Intelligence
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-bold text-apple-black tracking-tight mb-10 leading-[0.95]">
                    Complex art,
                    <br />
                    simple management.
                  </h2>
                  <p className="text-xl text-apple-darkGray font-medium leading-relaxed mb-12">
                    High-scale art projects require flawless logistics. Our proprietary AI agent handles the overhead — from capturing the initial brief to managing milestone approvals and automated invoicing.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div className="p-8 rounded-[32px] bg-[#F8F8F8] border border-slate-100 hover:bg-apple-black group transition-all duration-500">
                      <Layers size={24} className="text-apple-black group-hover:text-white mb-6 transition-colors" />
                      <h4 className="font-bold text-apple-black group-hover:text-white mb-2 transition-colors">Asset Sync</h4>
                      <p className="text-xs text-slate-500 group-hover:text-slate-400 font-medium">Automatic cloud backup of sketches and references.</p>
                    </div>
                    <div className="p-8 rounded-[32px] bg-[#F8F8F8] border border-slate-100 hover:bg-apple-black group transition-all duration-500">
                      <MessageSquare size={24} className="text-apple-black group-hover:text-white mb-6 transition-colors" />
                      <h4 className="font-bold text-apple-black group-hover:text-white mb-2 transition-colors">Feedback AI</h4>
                      <p className="text-xs text-slate-500 group-hover:text-slate-400 font-medium">Context-aware iteration logging and tracking.</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 bg-apple-gray relative overflow-hidden text-center">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <AnimatedSection animationType="scale">
              <div className="w-24 h-24 rounded-[32px] bg-apple-black flex items-center justify-center mx-auto mb-16 shadow-2xl text-white">
                <Paintbrush size={48} className="fill-white" />
              </div>
              <h2 className="text-6xl lg:text-[100px] font-bold tracking-tighter mb-12 leading-[0.85]">
                Let's start the 
                <br />
                conversation.
              </h2>
              <p className="text-2xl text-apple-darkGray font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                Currently booking commissions for H2 2025. Whether it's a corporate lobby or a boutique café, we create environments that speak.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <button className="px-14 py-6 bg-apple-black text-white font-bold rounded-full text-xl shadow-2xl hover:scale-105 transition-all active:scale-95">
                  Request a Quote
                </button>
                <button className="text-lg font-bold text-apple-darkGray hover:text-apple-black transition-colors flex items-center gap-2">
                  View Availability <ArrowRight size={20} />
                </button>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-[0.01] pointer-events-none">
            <div className="grid grid-cols-12 h-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-apple-black h-full" />
              ))}
            </div>
          </div>
        </section>

      </div>
    </MockLayout>
  );
}
