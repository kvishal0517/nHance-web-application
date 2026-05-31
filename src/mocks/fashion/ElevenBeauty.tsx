import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import { AnimatedSection } from '../../components/AnimatedSection';
import type { AgentWorkflow } from '../../types';
import {
  Sparkles,
  Camera,
  Star,
  Heart,
  Droplets,
  ShieldCheck,
  Leaf,
  ArrowRight,
  Zap,
  Eye,
  CheckCircle2
} from 'lucide-react';

const ROSE_GOLD = '#E19898';

const skinWorkflow: AgentWorkflow = {
  title: 'AI Skin Analysis & Routine Builder',
  nodes: [
    { id: '1', label: 'Selfie Upload', description: 'User takes a high-res photo in natural light for skin texture analysis.', automated: false, x: 20, y: 40 },
    { id: '2', label: 'Texture Mapping', description: 'AI identifies hydration levels, pore size, and sensitivity markers.', automated: true, x: 200, y: 40 },
    { id: '3', label: 'Ingredient Match', description: 'Matches skin profile against 50,000+ cosmetic formulations.', automated: true, x: 380, y: 40 },
    { id: '4', label: 'Routine Design', description: 'Generates a 3-step personalized AM/PM routine.', automated: true, x: 560, y: 40 },
    { id: '5', label: 'Product Bundle', description: 'Automatically populates cart with the perfect starter kit.', automated: true, x: 380, y: 160 },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
  ],
};

const valueProps = [
  { i: Leaf, t: '100% Vegan', d: 'Every ingredient is plant-based, ethical, and traceable to its source.' },
  { i: Droplets, t: 'Molecular Prep', d: 'Advanced micro-encapsulation ensures active ingredients reach deep layers.' },
  { i: ShieldCheck, t: 'Derm Verified', d: 'Clinically tested on all skin types to ensure hypoallergenic performance.' },
  { i: CheckCircle2, t: 'Zero Waste', d: 'Refillable packaging and water-free lab protocols for minimal impact.' },
];

export default function ElevenBeauty() {
  return (
    <MockLayout projectName="ELEVEN — Beauty Store" accentColor={ROSE_GOLD} categoryId="fashion">
      <div className="bg-white text-[#1A1A1A] selection:bg-[#E19898]/20 overflow-hidden font-sans">
        
        {/* High-Impact Hero */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-10">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover"
              alt="ELEVEN Beauty"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <AnimatedSection animationType="blur">
              <img src="/Brand Image.png" alt="ELEVEN Logo" className="h-16 mb-8 opacity-80" onError={(e) => e.currentTarget.style.display = 'none'} />
              <span className="inline-flex items-center gap-2 text-black font-black uppercase tracking-[0.3em] text-xs mb-8 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-black/5">
                <Sparkles size={12} className="text-[#E19898]" /> The Science of Glow
              </span>
              <h1 className="text-7xl lg:text-[120px] font-black leading-[0.85] tracking-tighter mb-8 max-w-3xl text-black">
                Beauty <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E19898] to-[#D4A5A5]">Unfiltered.</span>
              </h1>
              <p className="text-2xl text-slate-700 max-w-lg mb-12 font-medium leading-relaxed">
                Precision-engineered cosmetics for the modern soul. AI-driven matching meets botanical excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-14 py-6 bg-black text-white font-black rounded-full hover:bg-[#E19898] transition-all duration-500 flex items-center justify-center gap-3 text-lg shadow-xl">
                  Shop Collection
                  <ArrowRight size={24} />
                </button>
                <button className="px-14 py-6 bg-white text-black font-black rounded-full border border-slate-200 hover:bg-slate-50 transition-all duration-500 flex items-center justify-center gap-3 text-lg">
                  AI Shade Finder
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Brand Values Grid */}
        <section className="py-32 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <AnimatedSection>
                <p className="text-[#E19898] font-bold uppercase tracking-[0.4em] text-[11px] mb-6">Our Philosophy</p>
                <h2 className="text-6xl font-black tracking-tighter text-black">Values.</h2>
              </AnimatedSection>
              <p className="text-lg text-slate-500 max-w-sm font-medium italic">"Beauty is a byproduct of health, ethics, and precision technology."</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {valueProps.map((v, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div className="group bg-[#FAFAFA] rounded-[48px] p-10 hover:shadow-2xl transition-all duration-700 border border-slate-100 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-[24px] bg-white flex items-center justify-center mb-10 group-hover:bg-[#E19898] transition-all duration-500 shadow-sm border border-slate-50">
                      <v.i size={28} className="text-[#E19898] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-black text-black mb-4 tracking-tight group-hover:text-[#E19898] transition-colors">{v.t}</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed flex-1">{v.d}</p>
                    <button className="mt-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#E19898] group-hover:gap-4 transition-all">
                      Protocol Details <ArrowRight size={14} />
                    </button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Product Visual Showcase */}
        <section className="py-32 bg-[#FAFAFA] text-black relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="grid grid-cols-2 gap-6 order-2 lg:order-1">
                <AnimatedSection delay={200} className="rounded-[48px] overflow-hidden aspect-square shadow-2xl border-4 border-white">
                  <img src="https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=800" alt="Serum" className="w-full h-full object-cover" />
                </AnimatedSection>
                <AnimatedSection delay={400} className="rounded-[48px] overflow-hidden aspect-square translate-y-12 shadow-2xl border-4 border-white">
                  <img src="https://images.unsplash.com/photo-1586776977607-310e9c725c37?auto=format&fit=crop&q=80&w=800" alt="Lipstick" className="w-full h-full object-cover" />
                </AnimatedSection>
              </div>
              <div className="order-1 lg:order-2">
                <AnimatedSection animationType="blur">
                  <h2 className="text-6xl font-black tracking-tighter mb-8 leading-[0.9]">
                    Skin <br />
                    <span className="text-[#E19898]">Intelligence.</span>
                  </h2>
                  <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12">
                    Every ELEVEN formulation is mapped to thousands of data points representing diverse skin textures, climates, and lifestyle stressors.
                  </p>
                  <div className="space-y-8">
                      <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-sm">
                              <Star size={20} className="text-[#E19898]" />
                          </div>
                          <p className="font-black uppercase tracking-widest text-xs">4.9/5 Clinical Rating</p>
                      </div>
                      <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-sm">
                              <Heart size={20} className="text-[#E19898]" />
                          </div>
                          <p className="font-black uppercase tracking-widest text-xs">100% Cruelty Free</p>
                      </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* AI Concierge Workflow */}
        <section className="py-32 bg-black text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 text-[#E19898] text-[11px] font-bold uppercase tracking-[0.25em] mb-10 border border-white/10">
                    <Camera size={16} />
                    Aura Virtual Concierge
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-10 leading-[0.95]">
                    Personalized
                    <br />
                    on Autopilot.
                  </h2>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                    Stop guessing. Our AI Concierge uses clinical computer vision to map your skin profile and match you with products that actually work.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      { i: Zap, t: 'Shade Matching', d: '99.2% accuracy in predicting your skin tone from a simple selfie.' },
                      { i: Eye, t: 'Texture Mapping', d: 'Identifies pore size and hydration levels in real-time.' },
                      { i: Star, t: 'Routine Builder', d: 'Automatically generates a 3-step AM/PM regime for your profile.' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-start">
                        <item.i size={20} className="text-[#E19898] mt-1" />
                        <div>
                          <h4 className="font-black text-white text-sm uppercase tracking-widest">{item.t}</h4>
                          <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
              <AnimatedSection delay={200} animationType="scale">
                <div className="p-10 rounded-[64px] bg-white border border-white/10 shadow-[0_0_80px_rgba(225,152,152,0.2)] overflow-hidden">
                  <AgentFlowChart workflow={skinWorkflow} />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 bg-[#FAFAFA] relative overflow-hidden text-center text-[#1A1A1A] border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <AnimatedSection animationType="scale">
              <h2 className="text-6xl lg:text-[100px] font-black tracking-tighter mb-12 leading-[0.85]">
                Join the 
                <br />
                Aura Club.
              </h2>
              <p className="text-2xl text-slate-500 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                Get early access to drops, personalized routine tips, and 15% off your first order.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <button className="px-14 py-6 bg-black text-white font-black rounded-full text-lg shadow-2xl hover:bg-[#E19898] transition-all uppercase tracking-widest">
                  Sign Up Now
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </div>
    </MockLayout>
  );
}
