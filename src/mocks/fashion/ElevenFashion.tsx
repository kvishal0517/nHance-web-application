import { useState } from 'react';
import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import { AnimatedSection } from '../../components/AnimatedSection';
import type { AgentWorkflow } from '../../types';
import {
  Zap,
  Maximize2,
  ShieldCheck,
  Globe,
  ArrowRight,
  Shirt,
  Palette,
  Truck
} from 'lucide-react';

const GOLD = '#D4AF37';

const colors = [
  { name: 'Royal Gold', hex: '#D4AF37', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800' },
  { name: 'Obsidian Black', hex: '#111111', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800' },
  { name: 'Crimson Velvet', hex: '#8B1A1A', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800' },
  { name: 'Emerald Silk', hex: '#2D6A4F', image: 'https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?auto=format&fit=crop&q=80&w=800' },
];


const fittingWorkflow: AgentWorkflow = {
  title: 'AI Virtual Tailor & Fitting Agent',
  nodes: [
    { id: '1', label: 'Visual Scan', description: 'User uploads a 360-degree video or photo for precise body measurement extraction.', automated: false, x: 20, y: 40 },
    { id: '2', label: 'Size Prediction', description: 'AI calculates exact measurements with 99.8% accuracy against brand patterns.', automated: true, x: 200, y: 40 },
    { id: '3', label: 'Virtual Draping', description: 'Real-time 3D simulation of how the fabric falls on the user\'s specific frame.', automated: true, x: 380, y: 40 },
    { id: '4', label: 'Style Match', description: 'Agent suggests modifications (hem length, sleeve style) based on user preference.', automated: true, x: 560, y: 40 },
    { id: '5', label: 'Crafting Queue', description: 'Final specs sent directly to the artisan workshop for bespoke creation.', automated: true, x: 380, y: 160 },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
  ],
};

const features = [
  { i: Shirt, t: 'Bespoke Fit', d: 'Every garment is tailored to your specific measurements using AI photogrammetry.' },
  { i: Palette, t: 'Color Science', d: 'Predictive color matching that complements your skin tone and personal palette.' },
  { i: Truck, t: 'On-Demand Craft', d: 'We only produce what you order, reducing waste and ensuring zero inventory footprint.' },
  { i: Globe, t: 'Traceable Source', d: 'Scan your label to see the exact origin of the organic silk or wool used in your piece.' },
];

export default function ElevenFashion() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedMaterial, setSelectedMaterial] = useState('Organic Silk');
  const [selectedFit, setSelectedFit] = useState('Tailored (Digital Scan)');

  return (
    <MockLayout projectName="ELEVEN — Premium Fashion" accentColor={GOLD} categoryId="fashion">
      <div className="bg-[#0A0A0A] text-white selection:bg-[#D4AF37]/30 overflow-hidden font-serif">
        
        {/* Cinematic Hero */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-10">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover opacity-60"
              alt="ELEVEN Fashion"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0A0A0A]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <AnimatedSection animationType="blur">
              <img src="/Brand Image.png" alt="ELEVEN Logo" className="h-16 mb-8 brightness-0 invert opacity-80" onError={(e) => e.currentTarget.style.display = 'none'} />
              <span className="inline-block text-[#D4AF37] font-medium tracking-[0.5em] uppercase text-xs mb-8">
                Est. 2026 — Future of Couture
              </span>
              <h1 className="text-7xl lg:text-[140px] font-light leading-[0.85] tracking-tighter mb-12">
                ELEVEN <br /> 
                <span className="italic">Intelligence.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 max-w-xl mb-16 font-light leading-relaxed">
                Experience the world's first AI-integrated luxury house. Clothes that don't just fit—they belong to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-8">
                <button className="px-12 py-5 bg-white text-black font-medium hover:bg-[#D4AF37] hover:text-white transition-all duration-500 uppercase tracking-widest text-sm">
                  Start Virtual Fitting
                </button>
                <button className="px-12 py-5 border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-500 uppercase tracking-widest text-sm">
                  Explore Collection
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Sections Grid */}
        <section className="py-32 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
              <AnimatedSection>
                <p className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-[11px] mb-6">The Series 01</p>
                <h2 className="text-6xl font-light tracking-tight">Couture.</h2>
              </AnimatedSection>
              <p className="text-lg text-slate-500 max-w-sm font-medium font-sans italic">"We don't believe in seasons. We believe in pieces that live as long as you do."</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {features.map((f, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div className="group bg-white/5 backdrop-blur-sm rounded-[48px] p-10 hover:shadow-2xl transition-all duration-700 border border-white/10 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-[24px] bg-[#D4AF37]/10 flex items-center justify-center mb-10 group-hover:bg-[#D4AF37] transition-all duration-500">
                      <f.i size={28} className="text-[#D4AF37] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-light text-white mb-4 tracking-tight group-hover:text-[#D4AF37] transition-colors">{f.t}</h3>
                    <p className="text-sm text-slate-400 font-sans leading-relaxed flex-1">{f.d}</p>
                    <button className="mt-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#D4AF37] group-hover:gap-4 transition-all">
                      Learn More <ArrowRight size={14} />
                    </button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* High-Resolution Product Showcase */}
        <section className="py-32 bg-white text-black relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <AnimatedSection animationType="blur">
                  <h2 className="text-6xl font-light tracking-tight mb-8 leading-tight">
                    Crafted for <br />
                    <span className="italic">Impact.</span>
                  </h2>
                  <p className="text-lg text-slate-600 font-sans leading-relaxed mb-12">
                    Every ELEVEN piece starts as a digital twin. We simulate fabric drape, weight, and movement before a single thread is spun.
                  </p>
                  <div className="grid grid-cols-2 gap-12">
                    <div>
                      <p className="text-4xl font-light mb-2">100%</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">Organic Sourcing</p>
                    </div>
                    <div>
                      <p className="text-4xl font-light mb-2">0.1mm</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">Cutting Precision</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              <div className="bg-[#0A0A0A] text-white p-8 rounded-[40px] border border-white/10 shadow-2xl flex flex-col gap-6 font-sans">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">Couture Customizer</span>
                    <h3 className="text-xl font-light text-white">Interactive Preview</h3>
                  </div>
                  <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-slate-300 font-bold flex items-center gap-1">
                    <Zap size={10} className="text-[#D4AF37]" /> Active Twin
                  </span>
                </div>

                {/* Simulated Canvas Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full border border-white/5 bg-slate-900 group">
                  <img
                    src={selectedColor.image}
                    alt={selectedColor.name}
                    className="w-full h-full object-cover transition-all duration-700 ease-out scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Active Formulation</p>
                      <h4 className="text-xs font-semibold">{selectedColor.name} &bull; {selectedMaterial}</h4>
                    </div>
                    <span className="text-[9px] text-[#D4AF37] font-black uppercase tracking-widest bg-[#D4AF37]/15 px-2 py-0.5 rounded border border-[#D4AF37]/20">
                      {selectedFit}
                    </span>
                  </div>
                </div>

                {/* Option Toggles */}
                <div className="space-y-4">
                  {/* Colors */}
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-2">1. Select Shade</span>
                    <div className="flex gap-3">
                      {colors.map((c) => {
                        const isSelected = selectedColor.name === c.name;
                        return (
                          <button
                            key={c.name}
                            onClick={() => setSelectedColor(c)}
                            className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                              isSelected ? 'border-[#D4AF37] scale-110 shadow-lg shadow-[#D4AF37]/20' : 'border-transparent hover:scale-105'
                            }`}
                            style={{ backgroundColor: c.hex }}
                            title={c.name}
                          >
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white ring-1 ring-black/50" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Materials */}
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-2">2. Fabric Compound</span>
                    <div className="flex gap-2 flex-wrap">
                      {['Organic Silk', 'Tuscan Cashmere', 'Alpaca Wool'].map((m) => {
                        const isSelected = selectedMaterial === m;
                        return (
                          <button
                            key={m}
                            onClick={() => setSelectedMaterial(m)}
                            className={`px-3 py-1 rounded-xl text-[10px] font-bold border transition-all ${
                              isSelected 
                                ? 'bg-[#D4AF37] text-black border-[#D4AF37]' 
                                : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                            }`}
                          >
                            {m}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Fits */}
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-2">3. Fit Specification</span>
                    <div className="flex gap-2">
                      {['Tailored (Digital Scan)', 'Slim Silhouette', 'Classic Comfort'].map((f) => {
                        const isSelected = selectedFit === f;
                        return (
                          <button
                            key={f}
                            onClick={() => setSelectedFit(f)}
                            className={`flex-1 py-1 rounded-xl text-[9px] font-bold border transition-all ${
                              isSelected 
                                ? 'bg-white text-black border-white' 
                                : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10'
                            }`}
                          >
                            {f}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Fitting Workflow */}
        <section className="py-32 bg-black text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1">
                 <AnimatedSection delay={200} animationType="scale">
                  <div className="p-10 rounded-[64px] bg-white/5 border border-white/10 shadow-2xl overflow-hidden">
                    <AgentFlowChart workflow={fittingWorkflow} />
                  </div>
                </AnimatedSection>
              </div>
              <div className="order-1 lg:order-2">
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.25em] mb-10 border border-[#D4AF37]/20">
                    <Zap size={16} className="fill-[#D4AF37]" />
                    Atelier Intelligence
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-light tracking-tight mb-10 leading-[0.95]">
                    Precision
                    <br />
                    on Autopilot.
                  </h2>
                  <p className="text-xl text-slate-400 font-sans leading-relaxed mb-12">
                    Our AI Fitting Agent eliminates the guesswork of luxury shopping. Using advanced photogrammetry, we create a precise digital twin of your frame, allowing you to see exactly how fabrics drape before crafting begins.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      { i: Maximize2, t: 'Volumetric Scan', d: 'Capturing 1.2M data points for an exact digital twin.' },
                      { i: ShieldCheck, t: 'Biometric Security', d: 'Your body data is encrypted and stored locally on your device.' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-start">
                        <item.i size={20} className="text-[#D4AF37] mt-1" />
                        <div>
                          <h4 className="font-bold text-white text-sm uppercase tracking-widest">{item.t}</h4>
                          <p className="text-xs text-slate-500 font-sans leading-relaxed">{item.d}</p>
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
        <section className="py-40 bg-[#0A0A0A] relative overflow-hidden text-center text-white border-t border-white/5">
          <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1549062572-544a64fb0c56?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover grayscale" alt="Footer Background" />
          </div>
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <AnimatedSection animationType="scale">
              <h2 className="text-6xl lg:text-[100px] font-light tracking-tighter mb-12 leading-[0.85]">
                The future
                <br />
                suits you.
              </h2>
              <p className="text-2xl text-slate-400 font-sans mb-16 max-w-2xl mx-auto leading-relaxed italic">
                Limited to 50 new clients per month. Secure your digital artisan slot today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <button className="px-14 py-6 bg-white text-black font-bold uppercase tracking-widest text-sm shadow-2xl hover:bg-[#D4AF37] hover:text-white transition-all">
                  Apply for Membership
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </div>
    </MockLayout>
  );
}
