import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import { AnimatedSection } from '../../components/AnimatedSection';
import type { AgentWorkflow } from '../../types';
import {
  Award,
  ExternalLink,
  ChevronRight,
  Zap,
  Fingerprint,
  PenTool,
  ArrowRight
} from 'lucide-react';

const accentRed = '#DC2626';

const researchWorkflow: AgentWorkflow = {
  title: 'Research & Source Management Agent',
  nodes: [
    { id: '1', label: 'Start Investigation', description: 'Journalist initiates a new investigation by defining scope and beat.', automated: false, x: 20, y: 40 },
    { id: '2', label: 'Compile Briefing Doc', description: 'AI aggregates public records, past coverage, and court filings.', automated: true, x: 200, y: 40 },
    { id: '3', label: 'Daily Intel Digest', description: 'Automated daily digest of relevant developments and new sources.', automated: true, x: 380, y: 40 },
    { id: '4', label: 'Source Verification', description: 'AI cross-references claims with known data points and metadata.', automated: true, x: 560, y: 40 },
    { id: '5', label: 'Track Publication Impact', description: 'Monitors pickups, citations, and policy responses globally.', automated: true, x: 380, y: 160 },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
  ],
};

const articles = [
  {
    title: 'The Shadow Contracts: Defence Procurement Under Scrutiny',
    publication: 'The Wire',
    topic: 'Governance',
    year: '2024',
    excerpt: 'An 18-month investigation into single-source contracts worth ₹34,000 crore that never faced parliamentary scrutiny.',
    image: 'https://images.unsplash.com/photo-1589232390626-74930190562e?auto=format&fit=crop&q=80&w=800',
    featured: true
  },
  {
    title: 'Toxic Silence: Industrial Pollution in the Ganga Basin',
    publication: 'Scroll.in',
    topic: 'Environment',
    year: '2024',
    excerpt: 'Field reporting from seven districts reveals how effluent data has been systematically falsified.',
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=800',
    featured: false
  },
  {
    title: 'Inside the Algorithm: How Ads Exploit Caste Data',
    publication: 'The Caravan',
    topic: 'Politics',
    year: '2023',
    excerpt: 'A data-driven exposé showing how micro-targeting correlates with communal violence spikes.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    featured: false
  },
];

export default function SiddharthJournalist() {
  return (
    <MockLayout projectName="Siddharth Rao — Journalist" accentColor={accentRed} categoryId="media">
      <div className="bg-[#0A0A0A] text-white selection:bg-red-900/30 overflow-hidden">
        
        {/* Authoritative Hero */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=2400" 
              className="w-full h-full object-cover opacity-10 grayscale scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/60 to-[#0A0A0A]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="grid lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-8">
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold uppercase tracking-[0.4em] mb-12">
                    <Fingerprint size={14} className="text-red-600" />
                    Investigative Journalist · Mumbai · New Delhi
                  </div>

                  <h1 className="text-7xl lg:text-[130px] font-black leading-[0.8] tracking-tighter mb-12">
                    Fact is 
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 italic">unforgiving.</span>
                  </h1>

                  <p className="text-2xl lg:text-3xl text-slate-400 max-w-2xl mb-16 font-medium leading-relaxed">
                    Fifteen years on the frontlines of Indian democracy. Reporting on defence, environment, and civil liberties for the world's most credible newsrooms.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-8 items-center">
                    <button className="px-14 py-6 bg-red-600 text-white font-bold rounded-full text-xl shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center gap-3">
                      View Investigations
                      <ArrowRight size={20} />
                    </button>
                    <button className="text-lg font-bold text-slate-400 hover:text-white transition-colors border-b-2 border-transparent hover:border-red-600 pb-1">
                      Press Inquiries
                    </button>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>

          {/* Floating News-style Strip */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-red-600/10 backdrop-blur-xl border-t border-white/5 flex items-center overflow-hidden">
            <div className="whitespace-nowrap flex gap-10 animate-ticker px-6">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="text-[10px] font-black uppercase tracking-widest text-white/40">
                  <span className="text-red-500 mr-4">BREAKING:</span> New Investigation Into Electoral Finance Accountability Just Released · 
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Archive Grid */}
        <section className="py-32 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-24">
              <AnimatedSection>
                <p className="text-[11px] font-bold uppercase tracking-[0.4em] mb-6 text-red-600">The Dossier</p>
                <h2 className="text-6xl font-bold tracking-tighter">Selected Work.</h2>
              </AnimatedSection>
              <button className="hidden sm:flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white border-b-2 border-white pb-1">
                Full Archive <ExternalLink size={16} />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {articles.map((article, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div className="group cursor-pointer">
                    <div className="aspect-[16/9] rounded-[32px] overflow-hidden mb-8 bg-zinc-900 relative shadow-2xl">
                      <img src={article.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
                      <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-red-600 text-white text-[9px] font-bold uppercase tracking-widest">
                        {article.publication}
                      </div>
                    </div>
                    <div className="px-4">
                      <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-3">{article.topic}</p>
                      <h3 className="text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-red-500 transition-colors leading-tight">{article.title}</h3>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-3">{article.excerpt}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Strip */}
        <div className="bg-white py-20 text-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
              {[
                { n: 'Ramnath Goenka Award', c: 'Investigative Reporting', y: '2024' },
                { n: 'Red Ink Award', c: 'Environment Journalism', y: '2023' },
                { n: 'Chameli Devi Jain Award', c: 'Outstanding Media Person', y: '2022' },
              ].map((award, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <Award size={32} className="mb-6 text-red-600 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-black tracking-tight">{award.n}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">{award.c} · {award.y}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Research Workflow */}
        <section className="py-32 bg-[#0A0A0A] text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-red-600/10 text-red-500 text-[11px] font-bold uppercase tracking-[0.25em] mb-10 border border-red-600/20">
                    <Zap size={16} className="fill-red-500" />
                    Neural Investigation
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-10 leading-[0.95]">
                    Human heart,
                    <br />
                    AI engine.
                  </h2>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                    Investigative journalism requires processing mountains of data. Our proprietary AI research agent handles briefing compilation, source verification, and global impact tracking — so the reporting stays deeply human.
                  </p>
                  
                  <div className="space-y-10 border-l border-white/5 pl-10">
                    {[
                      { t: 'RTI Data Mining', d: 'Automated extraction of patterns from municipal records.' },
                      { t: 'Source Anonymity', d: 'End-to-end encrypted briefing vaults for whistleblowers.' },
                      { t: 'Verification Loop', d: 'Cross-referencing claims with multi-continent data points.' },
                    ].map((item, i) => (
                      <div key={i} className="group cursor-default">
                        <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-2 group-hover:text-red-500 transition-colors">{item.t}</h4>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.d}</p>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
              <AnimatedSection delay={200} animationType="scale">
                <div className="p-10 rounded-[64px] bg-white/[0.02] border border-white/5 shadow-inner overflow-hidden backdrop-blur-3xl">
                  <AgentFlowChart workflow={researchWorkflow} />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 bg-white relative overflow-hidden text-center text-black">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <AnimatedSection animationType="scale">
              <PenTool size={48} className="mx-auto text-red-600 mb-12" />
              <h2 className="text-6xl lg:text-[100px] font-bold tracking-tighter mb-12 leading-[0.85]">
                Accountability 
                <br />
                is the beat.
              </h2>
              <p className="text-2xl text-slate-500 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                Currently on assignment. For speaking inquiries, panel discussions, or collaborative investigations, reach out via the secure portal.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <button className="px-14 py-6 bg-black text-white font-bold rounded-full text-xl shadow-2xl hover:scale-105 transition-all active:scale-95">
                  Secure Inquiry
                </button>
                <button className="text-lg font-bold text-slate-500 hover:text-black transition-colors flex items-center gap-2">
                  View Press Kit <ChevronRight size={20} />
                </button>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Subtle Grainy Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />
        </section>

      </div>
    </MockLayout>
  );
}
