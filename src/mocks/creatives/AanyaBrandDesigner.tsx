import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import { AnimatedSection } from '../../components/AnimatedSection';
import type { AgentWorkflow } from '../../types';
import {
  ArrowUpRight,
  Star,
  Zap,
  Eye,
  Layers,
  Film,
  Compass,
  ArrowRight,
  Fingerprint,
  Palette,
  ChevronRight
} from 'lucide-react';

const accentBlack = '#111111';

const clientCommunicationWorkflow: AgentWorkflow = {
  title: 'Discovery & Creative Intake Agent',
  nodes: [
    { id: '1', label: 'Project Inquiry', description: 'Founder submits a brief via the website contact form.', automated: false, x: 20, y: 40 },
    { id: '2', label: 'DNA Questionnaire', description: 'AI instantly sends a discovery questionnaire to qualify brand values.', automated: true, x: 200, y: 40 },
    { id: '3', label: 'Draft Capabilities', description: 'Relevant case studies are matched and assembled into a tailored deck.', automated: true, x: 380, y: 40 },
    { id: '4', label: 'Schedule Discovery', description: 'Automated booking for a 45-minute strategy deep-dive.', automated: true, x: 560, y: 40 },
    { id: '5', label: 'Project Onboarding', description: 'On sign-off, shared workspaces and asset folders are auto-provisioned.', automated: true, x: 380, y: 160 },
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
    title: 'Mira Skincare',
    category: 'Visual Identity',
    year: '2024',
    problem: 'A premium D2C brand with generic aesthetics.',
    outcome: '42% conversion increase through tactile, high-end packaging.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800',
    palette: ['#F5EBE0', '#D4A96A', '#2C1810']
  },
  {
    title: 'Vyom Architecture',
    category: 'Brand & Motion',
    year: '2024',
    problem: 'Lack of cohesive presence for institutional pitches.',
    outcome: 'Secured ₹3Cr project within weeks of rebrand launch.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    palette: ['#1A1A1A', '#C8B89A', '#F5F3EF']
  },
  {
    title: 'Flux Festival',
    category: 'Kinetic Identity',
    year: '2023',
    problem: 'Independent festival needing high-energy digital assets.',
    outcome: 'Sold out 48 hours post-launch. 2M+ social impressions.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
    palette: ['#0A0A0A', '#FF3366', '#00F5D4']
  },
];

export default function AanyaBrandDesigner() {
  return (
    <MockLayout projectName="Aanya Sharma — Brand Designer" accentColor={accentBlack} categoryId="creatives">
      <div className="bg-white text-apple-black selection:bg-zinc-100 overflow-hidden">
        
        {/* Explosive Type Hero */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">
          {/* Large Watermark Type */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-zinc-50 select-none pointer-events-none tracking-tighter">
            DESIGN
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-8">
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-apple-black text-white text-[11px] font-bold uppercase tracking-[0.4em] mb-12">
                    <Fingerprint size={14} className="text-zinc-400" />
                    Independent Brand Designer · Global
                  </div>

                  <h1 className="text-7xl lg:text-[140px] font-black leading-[0.8] tracking-tighter mb-12">
                    Brands that 
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-400 italic">hold attention.</span>
                  </h1>

                  <p className="text-2xl lg:text-3xl text-zinc-500 max-w-2xl mb-16 font-medium leading-relaxed">
                    Strategy-first identity and motion design. I build the DNA of modern companies through rigorous thinking and precise craft.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-8 items-center">
                    <button className="px-14 py-6 bg-apple-black text-white font-black rounded-full text-xl shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center gap-3">
                      View Work
                      <ArrowRight size={20} />
                    </button>
                    <button className="text-lg font-bold text-zinc-400 hover:text-apple-black transition-colors border-b-2 border-transparent hover:border-apple-black pb-1">
                      Capabilities Deck
                    </button>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>

          {/* Social Proof Badges */}
          <div className="absolute bottom-12 right-12 hidden lg:flex flex-col gap-4">
            {[
              { b: 'Awwwards', l: 'Site of the Day' },
              { b: 'D&AD', l: 'New Blood 2024' },
              { b: 'Behance', l: 'Featured Portfolio' },
            ].map((a, i) => (
              <div key={i} className="flex items-center gap-4 px-4 py-2 rounded-2xl bg-white border border-zinc-100 shadow-sm animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                <Star size={12} className="fill-zinc-900" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest">{a.b}</p>
                  <p className="text-[9px] font-bold text-zinc-400">{a.l}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Work Grid */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-24">
              <AnimatedSection>
                <p className="text-[11px] font-bold uppercase tracking-[0.4em] mb-6 text-zinc-400">Case Studies</p>
                <h2 className="text-6xl font-black tracking-tighter">Selected.</h2>
              </AnimatedSection>
              <button className="hidden sm:flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-apple-black border-b-2 border-apple-black pb-1">
                All Archives <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {projects.map((p, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div className="group cursor-pointer">
                    <div className="aspect-[4/5] rounded-[48px] overflow-hidden mb-8 relative shadow-2xl bg-zinc-50 border border-zinc-100">
                      <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                        <div className="flex gap-2 mb-6">
                          {p.palette.map((c, j) => (
                            <div key={j} className="w-6 h-6 rounded-full border border-white/20 shadow-xl" style={{ backgroundColor: c }} />
                          ))}
                        </div>
                        <h4 className="text-3xl font-black text-white tracking-tight leading-tight">{p.title}</h4>
                      </div>
                    </div>
                    <div className="px-4">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2">{p.year} · {p.category}</p>
                      <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-zinc-600 transition-colors">{p.problem}</h3>
                      <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-apple-black group-hover:gap-4 transition-all">
                        Full Outcome <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Services - Precision Grid */}
        <section className="py-32 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-24">
              <AnimatedSection>
                <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8">DNA of Design.</h2>
                <p className="text-xl text-zinc-500 font-medium leading-relaxed">
                  I don't just make things look good. I build visual languages that speak the same values as your business.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { i: Compass, t: 'Strategy', d: 'Positioning, naming, and messaging architecture.' },
                { i: Layers, t: 'Identity', d: 'Logo systems, typography, and color architecture.' },
                { i: Film, t: 'Motion', d: 'Brand films and kinetic assets for digital channels.' },
                { i: Eye, t: 'Direction', d: 'Creative oversight for shoots and product launches.' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-[40px] border border-zinc-100 hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center mb-8 group-hover:bg-apple-black transition-colors">
                    <item.i size={24} className="text-apple-black group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-black mb-3 tracking-tight">{item.t}</h4>
                  <p className="text-sm text-zinc-400 font-medium leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Intake Workflow */}
        <section className="py-32 bg-apple-black text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 text-zinc-400 text-[11px] font-bold uppercase tracking-[0.25em] mb-10 border border-white/10">
                    <Zap size={16} className="fill-zinc-400" />
                    Studio Intelligence
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-10 leading-[0.95]">
                    The studio runs 
                    <br />
                    while I design.
                  </h2>
                  <p className="text-xl text-zinc-400 font-medium leading-relaxed mb-12">
                    Creative focus is sacred. My proprietary creative intake agent handles the overhead — from brief qualification via the DNA Questionnaire to automated capabilities deck generation.
                  </p>
                  
                  <div className="space-y-8">
                    {[
                      { t: 'Instant Triage', d: 'Inquiries acknowledged and qualified in under 2 minutes.' },
                      { t: 'Smart Decks', d: 'Auto-assembled case studies based on client industry.' },
                      { t: 'Zero-Admin Sync', d: 'Automated provisioning of project hubs and asset vaults.' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 border-l border-zinc-800 pl-8 hover:border-white transition-colors group">
                        <div>
                          <h4 className="font-black text-white text-sm uppercase tracking-[0.2em] mb-1 group-hover:translate-x-2 transition-transform">{item.t}</h4>
                          <p className="text-xs text-zinc-500 font-medium leading-relaxed">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
              <AnimatedSection delay={200} animationType="scale">
                <div className="p-10 rounded-[64px] bg-white/[0.02] border border-white/5 shadow-inner overflow-hidden backdrop-blur-3xl">
                  <AgentFlowChart workflow={clientCommunicationWorkflow} />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Client Marquee */}
        <div className="py-20 bg-white border-y border-zinc-100 overflow-hidden">
          <div className="flex gap-20 animate-ticker whitespace-nowrap px-6">
            {['BLUME VENTURES', 'ORIGIN COFFEE', 'KASA HOTELS', 'NOOR EDITORIAL', 'FLUX FESTIVAL', 'VYOM ARCH'].map((c, i) => (
              <span key={i} className="text-4xl font-black text-zinc-100 hover:text-apple-black transition-colors cursor-default tracking-tighter italic">{c}</span>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <section className="py-40 bg-white relative overflow-hidden text-center text-apple-black">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <AnimatedSection animationType="scale">
              <Palette size={48} className="mx-auto text-zinc-900 mb-12" />
              <h2 className="text-6xl lg:text-[100px] font-black tracking-tighter mb-12 leading-[0.85]">
                Let's build 
                <br />
                the identity.
              </h2>
              <p className="text-2xl text-zinc-500 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                Currently booking H2 2025. I work with select founders who value precision over speed. Tell me about your DNA.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <button className="px-14 py-6 bg-apple-black text-white font-black uppercase tracking-widest text-lg rounded-full shadow-2xl hover:scale-105 transition-all active:scale-95">
                  Start Conversation
                </button>
                <button className="text-lg font-bold text-zinc-400 hover:text-apple-black transition-colors flex items-center gap-2">
                  View Availability <ChevronRight size={24} />
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </div>
    </MockLayout>
  );
}
