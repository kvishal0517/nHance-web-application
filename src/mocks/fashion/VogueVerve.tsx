import { useState } from 'react';
import { MockLayout } from '../../components/MockLayout';
import { AnimatedSection } from '../../components/AnimatedSection';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import type { AgentWorkflow } from '../../types';
import {
  ShoppingBag,
  Zap,
  Sparkles,
  Maximize2,
  ChevronRight,
  ShieldCheck,
  Search,
  X,
  Plus,
  Star,
  Heart,
  Filter,
  ArrowDown,
  User
} from 'lucide-react';

const GOLD = '#D4AF37';

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

const collections = [
  { 
    id: 'noir-01',
    brand: 'Vogue Verve Luxe',
    name: 'The Noir Architectural Coat', 
    price: 1890, 
    mrp: 2490,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800',
    category: 'Outerwear',
    rating: 4.8,
    reviews: 124,
    description: 'Sculpted from heavy-gauge Italian wool with a signature architectural shoulder. Each coat is individually numbered and fitted via our AI artisan protocol.',
    details: ['100% Virgin Wool', 'Hand-finished seams', 'Internal tech pocket'],
    gallery: [
        'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1544022613-e87ce7526ed1?auto=format&fit=crop&q=80&w=800'
    ]
  },
  { 
    id: 'silk-01',
    brand: 'Vogue Verve Evening',
    name: 'Genesis Silk Gown', 
    price: 2450, 
    mrp: 3200,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    category: 'Evening',
    rating: 4.9,
    reviews: 86,
    description: 'Pure mulberry silk that flows like liquid metal. Designed using fluid-dynamic simulations to ensure a perfect silhouette during movement.',
    details: ['Mulberry Silk', 'Bias-cut construction', 'Hidden zip closure'],
    gallery: [
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800'
    ]
  },
  { 
    id: 'linen-01',
    brand: 'Vogue Verve Studio',
    name: 'Visionary Linen Suit', 
    price: 1320, 
    mrp: 1800,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=800',
    category: 'Tailoring',
    rating: 4.7,
    reviews: 215,
    description: 'Precision-cut linen for the modern visionary. A breathable yet structured ensemble that adapts to your body temperature.',
    details: ['Belgian Linen', 'Deconstructed shoulder', 'Tapered fit'],
    gallery: [
        'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1594932224011-04664e62678f?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1496217590455-aa63a8350eea?auto=format&fit=crop&q=80&w=800'
    ]
  },
  { 
    id: 'velvet-01',
    brand: 'Vogue Verve Luxe',
    name: 'Velvet Midnight Blazer', 
    price: 1200, 
    mrp: 1500,
    image: 'https://images.unsplash.com/photo-1549062572-544a64fb0c56?auto=format&fit=crop&q=80&w=800',
    category: 'Evening',
    rating: 4.6,
    reviews: 54,
    description: 'Deep-pile velvet with hidden AI-woven structural support. This piece maintains its shape through a full night of gala events.',
    details: ['Silk-Cotton Velvet', 'Corset internal frame', 'Bespoke lining'],
    gallery: [
        'https://images.unsplash.com/photo-1549062572-544a64fb0c56?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'street-01',
    brand: 'Vogue Verve Edge',
    name: 'Holographic Street Bomber',
    price: 450,
    mrp: 800,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800',
    category: 'Streetwear',
    rating: 4.5,
    reviews: 320,
    description: 'Reactive fabric that shifts color based on light intensity. Perfect for the urban explorer.',
    details: ['Reflective Tech-Fabric', 'Water-resistant', 'Internal LED trim ready'],
    gallery: [
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'acc-01',
    brand: 'Vogue Verve Studio',
    name: 'Geometric Clutch',
    price: 290,
    mrp: 450,
    image: 'https://images.unsplash.com/photo-1544022613-e87ce7526ed1?auto=format&fit=crop&q=80&w=800',
    category: 'Accessories',
    rating: 4.9,
    reviews: 12,
    description: '3D printed frame with hand-stretched calfskin leather.',
    details: ['Leather', '3D Printed Frame', 'Magnetic Closure'],
    gallery: [
        'https://images.unsplash.com/photo-1544022613-e87ce7526ed1?auto=format&fit=crop&q=80&w=800'
    ]
  }
];

export default function VogueVerve() {
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedProduct, setSelectedProduct] = useState<typeof collections[0] | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>('');

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
      e.stopPropagation();
      setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const renderHome = () => (
    <>
      {/* Promo Banner Slider (Myntra Style) */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Hero Banner"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto h-full flex flex-col justify-center px-6 lg:px-20">
            <AnimatedSection animationType="blur">
                <p className="text-white text-lg font-bold tracking-widest uppercase mb-4">VOGUE VERVE | END OF SEASON</p>
                <h1 className="text-white text-6xl lg:text-9xl font-black mb-6 leading-tight">40-60% OFF</h1>
                <p className="text-white/80 text-2xl font-medium mb-10 max-w-xl italic">+ EXTRA 10% OFF ON YOUR FIRST AI-FITTING PURCHASE</p>
                <div className="flex gap-4">
                    <button onClick={() => setActiveTab('Collection')} className="px-12 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-[#D4AF37] hover:text-white transition-all">Shop Men</button>
                    <button onClick={() => setActiveTab('Collection')} className="px-12 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-[#D4AF37] hover:text-white transition-all">Shop Women</button>
                </div>
            </AnimatedSection>
        </div>
      </section>

      {/* Brands & Categories (Myntra Style Grid) */}
      <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-6">
              <h2 className="text-3xl font-black uppercase tracking-widest text-slate-400 mb-12 text-center">Shop by Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {[
                      { n: 'Outerwear', i: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=400' },
                      { n: 'Dresses', i: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400' },
                      { n: 'Streetwear', i: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=400' },
                      { n: 'Shirts', i: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=400' },
                      { n: 'Accessories', i: 'https://images.unsplash.com/photo-1544022613-e87ce7526ed1?auto=format&fit=crop&q=80&w=400' },
                      { n: 'Footwear', i: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=400' },
                  ].map((cat, i) => (
                      <AnimatedSection key={i} delay={i * 100} className="group cursor-pointer text-center">
                          <div className="aspect-square rounded-full overflow-hidden mb-4 border-2 border-slate-50 shadow-lg group-hover:scale-105 transition-transform duration-500">
                              <img src={cat.i} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                          </div>
                          <p className="font-bold text-slate-800 uppercase tracking-widest text-xs">{cat.n}</p>
                      </AnimatedSection>
                  ))}
              </div>
          </div>
      </section>

      {/* Deals of the Day (Myntra Style) */}
      <section className="py-20 bg-slate-50">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-black uppercase tracking-tighter text-black">Deals of the Day</h2>
                <button onClick={() => setActiveTab('Collection')} className="text-sm font-bold text-[#D4AF37] flex items-center gap-2">VIEW ALL <ChevronRight size={16} /></button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {collections.slice(0, 4).map((item, i) => (
                    <AnimatedSection key={i} delay={i * 100} className="bg-white p-4 shadow-sm hover:shadow-xl transition-shadow group relative cursor-pointer">
                        <div onClick={() => setSelectedProduct(item)}>
                            <div className="aspect-[3/4] overflow-hidden mb-4 relative">
                                <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute bottom-2 left-2 bg-white/80 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1">
                                    <span className="text-[10px] font-bold text-black">{item.rating}</span>
                                    <Star size={10} className="fill-black text-black" />
                                    <span className="text-[10px] font-medium text-slate-500 border-l border-slate-300 pl-1">{item.reviews}</span>
                                </div>
                                <button onClick={(e) => toggleWishlist(item.id, e)} className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md">
                                    <Heart size={16} className={wishlist.includes(item.id) ? 'fill-red-500 text-red-500' : 'text-slate-400'} />
                                </button>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-black text-black truncate">{item.brand}</p>
                                <p className="text-xs text-slate-500 truncate">{item.name}</p>
                                <div className="flex items-center gap-2 pt-1">
                                    <span className="text-sm font-black text-black">${item.price}</span>
                                    <span className="text-xs text-slate-400 line-through">${item.mrp}</span>
                                    <span className="text-xs text-orange-500 font-bold">({Math.round((1 - item.price/item.mrp) * 100)}% OFF)</span>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
          </div>
      </section>
    </>
  );

  const renderCollection = () => (
    <section className="py-32 bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar Filters (Myntra Style) */}
            <aside className="w-full lg:w-64 shrink-0 hidden lg:block border-r border-slate-100 pr-8">
                <div className="flex items-center justify-between mb-10">
                    <h3 className="text-lg font-black uppercase tracking-widest text-black">Filters</h3>
                    <Filter size={18} />
                </div>
                <div className="space-y-8">
                    <div>
                        <p className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-4">Categories</p>
                        {['Outerwear', 'Evening', 'Tailoring', 'Streetwear', 'Accessories'].map(c => (
                            <label key={c} className="flex items-center gap-3 mb-2 cursor-pointer group">
                                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#D4AF37] focus:ring-[#D4AF37]" />
                                <span className="text-sm text-slate-600 group-hover:text-black transition-colors">{c}</span>
                            </label>
                        ))}
                    </div>
                    <div>
                        <p className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-4">Price Range</p>
                        {['Under $500', '$500 - $1000', '$1000 - $2000', 'Over $2000'].map(p => (
                            <label key={p} className="flex items-center gap-3 mb-2 cursor-pointer group">
                                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#D4AF37] focus:ring-[#D4AF37]" />
                                <span className="text-sm text-slate-600 group-hover:text-black transition-colors">{p}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
                <div className="flex items-center justify-between mb-12 pb-6 border-b border-slate-50">
                    <h2 className="text-2xl font-black text-black">VOGUE VERVE COLLECTION <span className="text-sm font-medium text-slate-400 ml-4 italic">- {collections.length} items</span></h2>
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sort By:</span>
                        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-md text-xs font-bold hover:border-black transition-colors">
                            RELEVANCE <ArrowDown size={14} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                    {collections.map((item, i) => (
                        <AnimatedSection key={i} delay={i * 100} className="bg-white p-2 group relative cursor-pointer">
                            <div onClick={() => setSelectedProduct(item)}>
                                <div className="aspect-[3/4] overflow-hidden mb-4 relative rounded-sm">
                                    <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                                        <span className="text-[10px] font-bold text-black">{item.rating}</span>
                                        <Star size={10} className="fill-black text-black" />
                                        <span className="text-[10px] font-medium text-slate-500 border-l border-slate-300 pl-1">{item.reviews}</span>
                                    </div>
                                    <button onClick={(e) => toggleWishlist(item.id, e)} className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-md">
                                        <Heart size={16} className={wishlist.includes(item.id) ? 'fill-red-500 text-red-500' : 'text-slate-400'} />
                                    </button>
                                    {/* Quick Add (Myntra Style) */}
                                    <div className="absolute inset-x-0 bottom-0 bg-white/95 py-3 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-slate-100">
                                        <button className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] flex items-center justify-center gap-2 mx-auto">
                                            <Plus size={14} /> ADD TO BAG
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-black text-black truncate">{item.brand}</p>
                                    <p className="text-xs text-slate-500 truncate">{item.name}</p>
                                    <div className="flex items-center gap-2 pt-1">
                                        <span className="text-sm font-black text-black">${item.price}</span>
                                        <span className="text-xs text-slate-400 line-through">${item.mrp}</span>
                                        <span className="text-xs text-orange-500 font-bold">({Math.round((1 - item.price/item.mrp) * 100)}% OFF)</span>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );

  return (
    <MockLayout projectName="Vogue Verve — Bespoke Luxury" accentColor={GOLD} categoryId="fashion">
      <div className="bg-white text-black selection:bg-[#D4AF37]/30 font-sans min-h-screen">
        
        {/* Navigation (Myntra Style) */}
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-slate-100 shadow-sm">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <div className="text-3xl font-black tracking-tighter text-black cursor-pointer" onClick={() => setActiveTab('Home')}>
                        V<span className="text-[#D4AF37]">V</span>.
                    </div>
                    <div className="hidden lg:flex items-center gap-8">
                        {['Men', 'Women', 'Collection', 'AI Fitting'].map((tab) => (
                            <button 
                                key={tab}
                                onClick={() => setActiveTab(tab === 'Collection' || tab === 'AI Fitting' ? tab : 'Collection')}
                                className={`text-sm uppercase tracking-widest font-black transition-all border-b-4 ${activeTab === tab ? 'border-[#D4AF37] text-black' : 'border-transparent text-slate-700 hover:text-black hover:border-slate-200'} pb-1`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
                
                <div className="flex-1 max-w-xl mx-12 hidden md:block">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input type="text" placeholder="Search for brands, products and more" className="w-full bg-slate-50 border-transparent rounded-md py-3 pl-12 pr-4 text-xs font-medium focus:bg-white focus:ring-1 focus:ring-slate-200 transition-all outline-none" />
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <div className="flex flex-col items-center cursor-pointer group">
                        <User size={20} className="text-slate-800 group-hover:text-[#D4AF37] transition-colors" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-1">Profile</span>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer group relative">
                        <Heart size={20} className="text-slate-800 group-hover:text-red-500 transition-colors" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-1">Wishlist</span>
                        {wishlist.length > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center">{wishlist.length}</span>}
                    </div>
                    <div className="flex flex-col items-center cursor-pointer group relative">
                        <ShoppingBag size={20} className="text-slate-800 group-hover:text-[#D4AF37] transition-colors" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-1">Bag</span>
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4AF37] text-white text-[8px] font-bold rounded-full flex items-center justify-center">1</span>
                    </div>
                </div>
            </div>
        </nav>

        <main className="pt-20">
          {activeTab === 'Home' && renderHome()}
          {activeTab === 'Collection' && renderCollection()}
          {activeTab === 'Men' && renderCollection()}
          {activeTab === 'Women' && renderCollection()}
          {activeTab === 'AI Fitting' && (
              <section className="py-24 bg-white text-black overflow-hidden min-h-screen relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                  <div className="grid lg:grid-cols-2 gap-32 items-center">
                    <div>
                      <AnimatedSection animationType="blur">
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-50 text-black text-[10px] font-bold uppercase tracking-[0.3em] mb-12 border border-slate-100 shadow-sm">
                          <Sparkles size={14} className="text-[#D4AF37]" />
                          The Digital Atelier Protocol
                        </div>
                        <h2 className="text-7xl lg:text-8xl font-black tracking-tight mb-12 leading-tight">
                          Zero Waste, <br />
                          <span className="text-[#D4AF37] italic">Perfect fit.</span>
                        </h2>
                        <p className="text-xl text-slate-600 font-medium leading-relaxed mb-16 max-w-xl">
                          Luxury fashion is plagued by overproduction. Our AI Fitting Agent ensures we only craft what is meant to be yours. Using 3D photogrammetry, we map your unique frame to our digital pattern archive with sub-millimeter precision.
                        </p>
          
                        <div className="space-y-12">
                          {[
                            { i: Maximize2, t: 'Volumetric Scan', d: 'Capturing 1.2M data points for an exact digital twin.' },
                            { i: Zap, t: 'Kinetic Simulation', d: 'See how fabrics react to your gait and posture in real-time.' },
                            { i: ShieldCheck, t: 'Biometric Security', d: 'Your body data is encrypted and stored locally on your device.' },
                          ].map((feature, i) => (
                            <div key={i} className="flex gap-8 items-start">
                              <div className="w-16 h-16 rounded-[24px] bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 shadow-sm">
                                <feature.i size={24} className="text-[#D4AF37]" />
                              </div>
                              <div>
                                <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-2">{feature.t}</h4>
                                <p className="text-base text-slate-500 leading-relaxed font-medium">{feature.d}</p>
                              </div>
                            </div>
                          ))}
                        </div>
          
                        <button className="mt-20 px-16 py-6 bg-black text-white font-bold uppercase tracking-widest text-sm hover:bg-[#D4AF37] transition-all shadow-xl rounded-full">
                          Initiate Digital Fitting
                        </button>
                      </AnimatedSection>
                    </div>
          
                    <AnimatedSection delay={200} className="relative">
                      <div className="p-12 rounded-[64px] bg-white border border-slate-200 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]">
                        <AgentFlowChart workflow={fittingWorkflow} />
                      </div>
                      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#D4AF37]/10 blur-[120px] rounded-full -z-10 animate-pulse" />
                    </AnimatedSection>
                  </div>
                </div>
              </section>
          )}
          {(activeTab === 'Craft' || activeTab === 'About') && (
              <div className="h-screen flex items-center justify-center bg-white">
                  <AnimatedSection>
                      <h2 className="text-5xl font-black italic text-[#D4AF37] tracking-widest animate-pulse">Coming Soon</h2>
                  </AnimatedSection>
              </div>
          )}
        </main>

        {/* Enhanced Product Modal (Myntra Style Detailed View) */}
        {selectedProduct && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 lg:p-12">
                <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setSelectedProduct(null)} />
                <div className="relative bg-white text-black w-full max-w-7xl rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto">
                    <button onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-black text-black hover:text-white rounded-full flex items-center justify-center transition-all border border-slate-100">
                        <X size={24} />
                    </button>
                    
                    {/* Gallery Side */}
                    <div className="lg:w-[60%] grid grid-cols-2 gap-1 bg-slate-100">
                        {selectedProduct.gallery.map((img, i) => (
                            <div key={i} className={`overflow-hidden ${i === 0 ? 'col-span-2' : 'col-span-1'}`}>
                                <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                            </div>
                        ))}
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-[40%] p-10 lg:p-16 flex flex-col bg-white">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-3xl font-black text-black mb-1">{selectedProduct.brand}</h2>
                                <h3 className="text-xl text-slate-500 font-medium">{selectedProduct.name}</h3>
                            </div>
                            
                            <div className="flex items-center gap-4 py-4 border border-slate-100 rounded-lg px-6 w-fit">
                                <div className="flex items-center gap-1">
                                    <span className="font-black text-lg">{selectedProduct.rating}</span>
                                    <Star size={18} className="fill-[#03a685] text-[#03a685]" />
                                </div>
                                <div className="h-6 w-px bg-slate-200" />
                                <span className="text-slate-500 font-bold">{selectedProduct.reviews} Ratings</span>
                            </div>

                            <div className="h-px bg-slate-100 w-full" />

                            <div className="flex items-center gap-4">
                                <span className="text-3xl font-black text-black">${selectedProduct.price}</span>
                                <span className="text-xl text-slate-400 line-through">MRP ${selectedProduct.mrp}</span>
                                <span className="text-xl text-orange-500 font-black">({Math.round((1 - selectedProduct.price/selectedProduct.mrp) * 100)}% OFF)</span>
                            </div>
                            <p className="text-[#03a685] text-xs font-black uppercase tracking-widest">inclusive of all taxes</p>

                            <div className="space-y-4 pt-6">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-black uppercase tracking-widest">Select Size</h4>
                                    <button className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest">Size Chart &gt;</button>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                                        <button 
                                            key={size} 
                                            onClick={() => setSelectedSize(size)}
                                            className={`w-14 h-14 rounded-full border-2 font-black transition-all ${selectedSize === size ? 'border-[#D4AF37] bg-[#D4AF37] text-white' : 'border-slate-200 text-slate-800 hover:border-black'}`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 pt-10">
                                <button className="flex-1 py-6 bg-[#D4AF37] text-white font-black rounded-lg uppercase tracking-widest flex items-center justify-center gap-4 shadow-xl hover:bg-[#B4942D] transition-all">
                                    <ShoppingBag size={20} /> ADD TO BAG
                                </button>
                                <button onClick={(e) => toggleWishlist(selectedProduct.id, e)} className="px-10 py-6 border-2 border-slate-200 rounded-lg font-black uppercase tracking-widest flex items-center gap-3 hover:border-black transition-all">
                                    <Heart size={20} className={wishlist.includes(selectedProduct.id) ? 'fill-red-500 text-red-500' : 'text-slate-800'} /> WISHLIST
                                </button>
                            </div>

                            <div className="pt-10 space-y-8">
                                <div>
                                    <h4 className="text-sm font-black uppercase tracking-widest mb-4">Product Details</h4>
                                    <p className="text-slate-600 leading-relaxed font-medium">{selectedProduct.description}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-black uppercase tracking-widest mb-4">Material & Care</h4>
                                    <ul className="list-disc list-inside text-slate-600 space-y-2 font-medium">
                                        {selectedProduct.details.map(d => <li key={d}>{d}</li>)}
                                        <li>Machine-wash cold</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}

      </div>
    </MockLayout>
  );
}
