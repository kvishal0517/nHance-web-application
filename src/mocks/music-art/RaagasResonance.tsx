import { Play, Pause, Volume2, SkipForward, Disc, Mic2, Star, ChevronRight, ArrowRight, Zap, History } from 'lucide-react';
import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import { AnimatedSection } from '../../components/AnimatedSection';
import type { AgentWorkflow } from '../../types';

const GOLD = '#D4AF37';

const workflow: AgentWorkflow = {
  title: 'Student Onboarding & Practice Tracker',
  nodes: [
    { id: '1', label: 'Student Inquiry', description: 'Student submits interest via the website form.', automated: false, x: 20, y: 40 },
    { id: '2', label: 'Send Welcome Pack', description: 'AI sends a personalised welcome with Gurukul philosophy.', automated: true, x: 200, y: 40 },
    { id: '3', label: 'Schedule Trial', description: 'Agent books a complimentary 30-minute session.', automated: true, x: 380, y: 40 },
    { id: '4', label: 'Practice Note', description: 'After each lesson, AI generates a tailored riyaz note.', automated: true, x: 560, y: 40 },
    { id: '5', label: '30-Day Report', description: 'AI compiles lesson notes into a monthly progress report.', automated: true, x: 200, y: 160 },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
  ],
};

const albums = [
  {
    title: 'Prahar — The Turning Hours',
    year: '2022',
    label: 'Bandish Records',
    description: 'A full-cycle exploration of time-bound raags — from Bhairav at dawn to Yaman at dusk.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=600',
    tracks: 4
  },
  {
    title: 'Shringaar',
    year: '2019',
    label: 'ITC SRA Archive',
    description: 'Devotion rendered as longing. Extended khayal compositions in raags of the romantic canon.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600',
    tracks: 3
  },
];

export default function RaagasResonance() {
  return (
    <MockLayout projectName="Raagas & Resonance" accentColor={GOLD} categoryId="music-art">
      <div className="bg-apple-black text-white selection:bg-amber-900/30 overflow-hidden">
        
        {/* Cinematic Hero */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
          {/* Ambient Video-like Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=2400" 
              className="w-full h-full object-cover opacity-20 scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-apple-black/40 to-apple-black" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="grid lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-7">
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold uppercase tracking-[0.4em] mb-12">
                    <Mic2 size={14} className="text-amber-500" />
                    Classical Vocalist · Jaipur-Atrauli Gharana
                  </div>

                  <h1 className="text-7xl lg:text-[120px] font-bold leading-[0.85] tracking-tighter mb-12">
                    Raagas &
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600 italic">Resonance.</span>
                  </h1>

                  <p className="text-xl lg:text-2xl text-slate-400 max-w-xl mb-16 font-medium leading-relaxed italic">
                    "Every note is a conversation between the present and centuries of listening."
                  </p>

                  <div className="flex flex-col sm:flex-row gap-8 items-center">
                    <button className="px-14 py-6 bg-amber-600 text-apple-black font-bold rounded-full text-lg shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center gap-3">
                      <Play size={20} fill="currentColor" />
                      Listen Now
                    </button>
                    <button className="text-lg font-bold text-slate-400 hover:text-white transition-colors border-b-2 border-transparent hover:border-amber-600 pb-1">
                      Teaching Inquiries
                    </button>
                  </div>
                </AnimatedSection>
              </div>

              <div className="lg:col-span-5 relative">
                <AnimatedSection delay={200} animationType="scale">
                  {/* Floating Player Visual */}
                  <div className="relative p-1 rounded-[48px] bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl border border-white/10 shadow-3xl overflow-hidden">
                    <div className="bg-white/5 rounded-[44px] p-8">
                      <div className="aspect-square rounded-3xl overflow-hidden mb-8 shadow-2xl relative group">
                        <img src="https://images.unsplash.com/photo-1516280440614-37939bbdd4f1?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110" />
                        <div className="absolute inset-0 bg-apple-black/20 group-hover:bg-apple-black/40 transition-colors flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform">
                            <Play size={32} fill="white" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="flex justify-between items-end">
                          <div>
                            <h4 className="text-xl font-bold tracking-tight">Raag Yaman</h4>
                            <p className="text-xs font-bold text-amber-500 uppercase tracking-widest">Live at ITC SRA · 2024</p>
                          </div>
                          <Disc className="text-white/20 animate-spin-slow" size={32} />
                        </div>
                        
                        <div className="space-y-2">
                          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-1/3 bg-amber-500 rounded-full" />
                          </div>
                          <div className="flex justify-between text-[10px] font-bold text-white/30 uppercase tracking-tighter">
                            <span>12:42</span>
                            <span>42:15</span>
                          </div>
                        </div>

                        <div className="flex justify-center items-center gap-10">
                          <Volume2 size={20} className="text-white/30" />
                          <Pause size={32} className="text-white" fill="white" />
                          <SkipForward size={20} className="text-white/30" />
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Heritage Section */}
        <section className="py-32 bg-white text-apple-black relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-apple-gray hidden lg:block skew-x-[-12deg] translate-x-40" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <AnimatedSection>
                  <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-amber-700 mb-8">
                    <History size={14} />
                    Gharana Legacy
                  </div>
                  <h2 className="text-6xl font-bold tracking-tighter mb-10 leading-tight">
                    Rooted in
                    <br />
                    the oral tradition.
                  </h2>
                  <p className="text-xl text-apple-darkGray font-medium leading-relaxed mb-12">
                    Jaipur-Atrauli Gharana is known for its complex, yet fluid raag-vistar. Our lineage traces back through masters who treated music not as entertainment, but as a spiritual ascent.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-10">
                    <div>
                      <h4 className="text-3xl font-black text-apple-black mb-2">25+</h4>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Years of Riyaz</p>
                    </div>
                    <div>
                      <h4 className="text-3xl font-black text-apple-black mb-2">3</h4>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Global Archive Labels</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              <AnimatedSection delay={200} animationType="scale">
                <div className="aspect-[4/3] rounded-[48px] overflow-hidden shadow-2xl relative group">
                  <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale transition-all duration-[2000ms] group-hover:grayscale-0 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-apple-black/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-10 left-10 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 mb-2">Perspective</p>
                    <p className="text-2xl font-bold tracking-tight">"Tradition is not the worship of ashes, but the preservation of fire."</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Discography Grid */}
        <section className="py-32 bg-apple-gray text-apple-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <AnimatedSection>
                <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">Archive.</h2>
                <p className="text-lg text-apple-darkGray font-medium max-w-xl mx-auto">Studio recordings and curated live performances spanning two decades.</p>
              </AnimatedSection>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {albums.map((album, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div className="group bg-white rounded-[48px] p-10 flex flex-col sm:flex-row gap-10 hover:shadow-2xl transition-all duration-700 border border-transparent hover:border-white">
                    <div className="w-full sm:w-48 aspect-square rounded-[32px] overflow-hidden shadow-lg flex-shrink-0">
                      <img src={album.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-6">
                        <span className="px-3 py-1 bg-apple-gray rounded-full text-[10px] font-bold text-apple-darkGray uppercase tracking-widest">{album.year}</span>
                        <Disc size={20} className="text-amber-500 opacity-20 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h3 className="text-2xl font-bold text-apple-black mb-2 tracking-tight">{album.title}</h3>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700 mb-6">{album.label}</p>
                      <p className="text-sm text-apple-darkGray font-medium leading-relaxed mb-8">{album.description}</p>
                      <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-amber-700 group-hover:gap-4 transition-all">
                        Track List ({album.tracks}) <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* AI Studio Workflow */}
        <section className="py-32 bg-apple-black text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-amber-500/10 text-amber-500 text-[11px] font-bold uppercase tracking-[0.3em] mb-10 border border-amber-500/20">
                    <Zap size={16} className="fill-amber-500" />
                    Studio Intelligence
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-10 leading-[0.95]">
                    The Modern
                    <br />
                    Gurukul.
                  </h2>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                    Classical music requires discipline. Our proprietary AI agent manages the logistics of learning, from automated practice trackers (Riyaz-Log) to milestone-based curriculum mapping.
                  </p>
                  
                  <div className="space-y-8">
                    {[
                      { t: 'Riyaz Analysis', d: 'Automated feedback on pitch stability and alaap progression.' },
                      { t: 'Heritage Archive', d: 'Intelligent search through centuries of gharana compositions.' },
                      { t: 'Smart Onboarding', d: 'Zero-friction student intake and guru-shishya matching.' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 border-l-2 border-amber-900 pl-6 hover:border-amber-500 transition-colors">
                        <div>
                          <h4 className="font-bold text-white text-sm uppercase tracking-[0.2em] mb-1">{item.t}</h4>
                          <p className="text-xs text-slate-500 font-medium">{item.d}</p>
                        </div>
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

        {/* Final CTA */}
        <section className="py-40 bg-white relative overflow-hidden text-center">
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-apple-black">
            <AnimatedSection animationType="scale">
              <Star size={48} className="mx-auto text-amber-500 mb-12 fill-amber-500" />
              <h2 className="text-6xl lg:text-[100px] font-bold tracking-tighter mb-12 leading-[0.85]">
                Become the 
                <br />
                instrument.
              </h2>
              <p className="text-2xl text-apple-darkGray font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                Applications for the 2025 Guru-Shishya cycle are now open. We seek students with a capacity for deep listening and relentless riyaz.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <button className="px-14 py-6 bg-apple-black text-white font-bold rounded-full text-xl shadow-2xl hover:bg-amber-600 transition-all active:scale-95">
                  Apply for Enrollment
                </button>
                <button className="text-lg font-bold text-apple-darkGray hover:text-amber-700 transition-colors flex items-center gap-2">
                  View Public Calendar <ChevronRight size={20} />
                </button>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Subtle Tanpura String visual */}
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-amber-500/10 to-transparent" />
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-amber-500/10 to-transparent" />
          <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-amber-500/10 to-transparent" />
        </section>

      </div>
    </MockLayout>
  );
}
