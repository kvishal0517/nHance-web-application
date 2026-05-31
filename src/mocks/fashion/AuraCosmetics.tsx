import { useState } from 'react';
import { MockLayout } from '../../components/MockLayout';
import { AnimatedSection } from '../../components/AnimatedSection';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import type { AgentWorkflow } from '../../types';
import {
  Camera,
  Search,
  ShoppingBag,
  Star,
  Heart,
  User,
  X,
  Plus,
  Filter,
  ArrowDown,
  Play
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

const categories = [
  { name: 'Face', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=600' },
  { name: 'Eyes', image: 'https://images.unsplash.com/photo-1548610762-7c6abc94c031?auto=format&fit=crop&q=80&w=600' },
  { name: 'Lips', image: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37?auto=format&fit=crop&q=80&w=600' },
  { name: 'Skincare', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600' },
  { name: 'Body', image: 'https://images.unsplash.com/photo-1552048544-62e0c761e0f7?auto=format&fit=crop&q=80&w=600' },
  { name: 'Fragrance', image: 'https://images.unsplash.com/photo-1594035910387-547835066bb4?auto=format&fit=crop&q=80&w=600' },
];

const products = [
    { 
        id: 'p1', 
        brand: 'Aura Professionals',
        name: 'Velvet Lip Suede', 
        price: 34, 
        mrp: 45,
        image: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37?auto=format&fit=crop&q=80&w=800', 
        cat: 'Lips', 
        rating: 4.8,
        reviews: 1240,
        desc: 'A revolutionary matte lipstick that feels like air. Our hyper-pigmented formula is infused with micro-hydrators.',
        ingredients: ['Hyaluronic Acid', 'Rosehip Oil', 'Vitamin E'],
        shades: ['#E19898', '#8B1A1A', '#D47575', '#A14D4D'],
        gallery: [
            'https://images.unsplash.com/photo-1586776977607-310e9c725c37?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1591360236480-4ed861025fa1?auto=format&fit=crop&q=80&w=800'
        ]
    },
    { 
        id: 'p2', 
        brand: 'Aura Skin Lab',
        name: '15% Vitamin C Glow Serum', 
        price: 58, 
        mrp: 75,
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=800', 
        cat: 'Skincare', 
        rating: 4.9,
        reviews: 2100,
        desc: 'Unlock your most radiant skin yet. This powerful serum refined skin texture and brightens dark spots.',
        ingredients: ['15% Vitamin C', 'Ferulic Acid', 'Green Tea'],
        gallery: [
            'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800'
        ]
    },
    { 
        id: 'p3', 
        brand: 'Aura Eyes',
        name: 'Precision Ink Liner', 
        price: 26, 
        mrp: 35,
        image: 'https://images.unsplash.com/photo-1583241475880-083f8d5a4da0?auto=format&fit=crop&q=80&w=800', 
        cat: 'Eyes', 
        rating: 4.7,
        reviews: 890,
        desc: 'Define your gaze with surgical accuracy. Smudge-proof formula that lasts all day.',
        ingredients: ['Carbon Black', 'Aloe Vera'],
        gallery: [
            'https://images.unsplash.com/photo-1583241475880-083f8d5a4da0?auto=format&fit=crop&q=80&w=800'
        ]
    },
    { 
        id: 'p4', 
        brand: 'Aura Refresh',
        name: 'Rosewater Hydra Mist', 
        price: 22, 
        mrp: 30,
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800', 
        cat: 'Skincare', 
        rating: 4.6,
        reviews: 3200,
        desc: 'A cooling embrace for tired skin. electrolyte-rich mineral water for instant hydration.',
        ingredients: ['Rose Water', 'Glycerin'],
        gallery: [
            'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800'
        ]
    }
];

export default function AuraCosmetics() {
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [selectedShade, setSelectedShade] = useState<string>('');

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
      e.stopPropagation();
      setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const renderHome = () => (
    <>
      {/* Beauty Promo Banner (Myntra Style) */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-[#FDFCFB]">
        <div className="absolute inset-0">
            <img 
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=2000" 
                className="w-full h-full object-cover"
                alt="Beauty Banner"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FDFCFB]/90 via-[#FDFCFB]/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto h-full flex flex-col justify-center px-6 lg:px-20">
            <AnimatedSection animationType="blur">
              <span className="text-black font-black uppercase tracking-[0.3em] text-xs mb-4 block">AURA BEAUTY FESTIVAL</span>
              <h1 className="text-6xl lg:text-9xl font-black leading-[0.85] tracking-tighter mb-8 max-w-3xl text-black">
                UP TO <br />
                <span className="text-[#E19898]">50% OFF.</span>
              </h1>
              <p className="text-xl text-slate-700 max-w-lg mb-10 font-bold italic">
                + FREE AI SKIN CONSULTATION WITH EVERY ORDER
              </p>
              <div className="flex gap-4">
                <button onClick={() => setActiveTab('Shop')} className="px-12 py-5 bg-black text-white font-black rounded-full hover:bg-[#E19898] transition-all uppercase tracking-widest text-sm shadow-xl">Shop Makeup</button>
                <button onClick={() => setActiveTab('Shop')} className="px-12 py-5 border-2 border-black text-black font-black rounded-full hover:bg-black hover:text-white transition-all uppercase tracking-widest text-sm">Shop Skincare</button>
              </div>
            </AnimatedSection>
          </div>
      </section>

      {/* Brands We Love (Myntra Style) */}
      <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-6">
              <h2 className="text-2xl font-black uppercase tracking-widest text-slate-300 mb-12 text-center">Top Categories</h2>
              <div className="flex overflow-x-auto gap-8 pb-8 scrollbar-hide lg:justify-center px-4">
                  {categories.map((cat, i) => (
                      <AnimatedSection key={i} delay={i * 100} className="shrink-0 text-center group cursor-pointer">
                          <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden mb-4 border-4 border-slate-50 shadow-xl group-hover:scale-105 transition-all">
                              <img src={cat.image} className="w-full h-full object-cover" alt={cat.name} />
                          </div>
                          <p className="font-black text-[10px] uppercase tracking-widest text-slate-800">{cat.name}</p>
                      </AnimatedSection>
                  ))}
              </div>
          </div>
      </section>

      {/* Recommended for You (Myntra Style) */}
      <section className="py-20 bg-slate-50">
          <div className="max-w-[1440px] mx-auto px-6">
              <div className="flex items-center justify-between mb-12">
                  <h2 className="text-3xl font-black text-black">MUST-HAVES</h2>
                  <button onClick={() => setActiveTab('Shop')} className="text-xs font-black text-[#E19898] border-b-2 border-[#E19898] pb-1">EXPLORE ALL</button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {products.map((item, i) => (
                      <AnimatedSection key={i} delay={i * 100} className="bg-white p-4 shadow-sm hover:shadow-2xl transition-all cursor-pointer relative group">
                          <div onClick={() => setSelectedProduct(item)}>
                              <div className="aspect-square overflow-hidden mb-4 relative rounded-xl">
                                  <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-md px-2 py-1 rounded flex items-center gap-1">
                                      <span className="text-[10px] font-bold text-black">{item.rating}</span>
                                      <Star size={10} className="fill-black text-black" />
                                      <span className="text-[10px] font-medium text-slate-400 border-l pl-1">({item.reviews > 1000 ? (item.reviews/1000).toFixed(1)+'k' : item.reviews})</span>
                                  </div>
                                  <button onClick={(e) => toggleWishlist(item.id, e)} className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">
                                      <Heart size={16} className={wishlist.includes(item.id) ? 'fill-red-500 text-red-500' : 'text-slate-400'} />
                                  </button>
                              </div>
                              <p className="font-black text-sm text-black truncate">{item.brand}</p>
                              <p className="text-xs text-slate-500 truncate">{item.name}</p>
                              <div className="flex items-center gap-2 mt-1">
                                  <span className="font-black text-sm text-black">${item.price}</span>
                                  <span className="text-xs text-slate-400 line-through">${item.mrp}</span>
                                  <span className="text-[10px] text-orange-500 font-black">({Math.round((1 - item.price/item.mrp) * 100)}% OFF)</span>
                              </div>
                          </div>
                      </AnimatedSection>
                  ))}
              </div>
          </div>
      </section>
    </>
  );

  const renderShop = () => (
    <section className="py-32 bg-white min-h-screen">
        <div className="max-w-[1440px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Sidebar (Myntra Beauty Style) */}
                <aside className="w-full lg:w-64 shrink-0 hidden lg:block">
                    <div className="flex items-center justify-between mb-8 pb-4 border-b">
                        <h3 className="text-sm font-black uppercase tracking-widest">Filters</h3>
                        <Filter size={16} />
                    </div>
                    <div className="space-y-10">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Categories</p>
                            {['Makeup', 'Skincare', 'Bath & Body', 'Fragrance', 'Tools'].map(c => (
                                <label key={c} className="flex items-center gap-3 mb-3 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#E19898] focus:ring-[#E19898]" />
                                    <span className="text-xs font-bold text-slate-600">{c}</span>
                                </label>
                            ))}
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Skin Type</p>
                            {['All Types', 'Dry', 'Oily', 'Sensitive', 'Combination'].map(c => (
                                <label key={c} className="flex items-center gap-3 mb-3 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#E19898] focus:ring-[#E19898]" />
                                    <span className="text-xs font-bold text-slate-600">{c}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Grid */}
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-2xl font-black text-black uppercase tracking-tighter">Beauty Store <span className="text-xs font-medium text-slate-400 normal-case ml-4 italic">- Showing {products.length * 3} items</span></h2>
                        <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-[10px] font-black tracking-widest">SORT: NEWEST <ArrowDown size={12} /></button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
                        {[...products, ...products, ...products].map((item, i) => (
                            <AnimatedSection key={i} delay={(i % 4) * 100}>
                                <div className="group cursor-pointer" onClick={() => setSelectedProduct(item)}>
                                    <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden bg-slate-50 mb-4 shadow-sm">
                                        <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                                        <div className="absolute inset-x-0 bottom-0 bg-white/95 py-4 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <button className="text-[10px] font-black uppercase tracking-widest text-[#E19898] flex items-center justify-center gap-2 mx-auto">
                                                <Plus size={14} /> QUICK ADD
                                            </button>
                                        </div>
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button onClick={(e) => toggleWishlist(item.id, e)} className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                                                <Heart size={18} className={wishlist.includes(item.id) ? 'fill-red-500 text-red-500' : 'text-slate-400'} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-black text-black text-sm truncate">{item.brand}</p>
                                        <p className="text-[11px] text-slate-500 truncate font-medium">{item.name}</p>
                                        <div className="flex items-center gap-2">
                                            <span className="font-black text-sm text-black">${item.price}</span>
                                            <span className="text-[10px] text-slate-400 line-through font-bold">${item.mrp}</span>
                                            <span className="text-[10px] text-[#E19898] font-black">({Math.round((1 - item.price/item.mrp) * 100)}% OFF)</span>
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
    <MockLayout projectName="Aura Cosmetics — AI Beauty" accentColor={ROSE_GOLD} categoryId="fashion">
      <div className="bg-white text-[#1A1A1A] selection:bg-[#E19898]/20 font-sans min-h-screen">
        
        {/* Navigation (Myntra Beauty Style) */}
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-slate-100 py-4 px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="text-3xl font-black tracking-tighter text-black cursor-pointer" onClick={() => setActiveTab('Home')}>
                AURA<span className="text-[#E19898]">.</span>
            </div>
            <div className="hidden lg:flex items-center gap-10">
              {['Makeup', 'Skincare', 'Shop', 'AI Analysis'].map(tab => (
                  <button 
                    key={tab} 
                    onClick={() => setActiveTab(tab === 'AI Analysis' ? 'AI Analysis' : 'Shop')}
                    className={`text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'text-[#E19898] border-b-2 border-[#E19898]' : 'text-slate-600 hover:text-black'} pb-1`}
                  >
                      {tab}
                  </button>
              ))}
            </div>
          </div>

          <div className="flex-1 max-w-lg mx-12 hidden md:block">
              <div className="relative">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="text" placeholder="Search for brands, categories, trends..." className="w-full bg-slate-50 rounded-full py-3 pl-12 pr-6 text-xs font-bold outline-none focus:ring-1 focus:ring-slate-200" />
              </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center cursor-pointer group">
                <User size={20} className="group-hover:text-[#E19898] transition-colors" />
                <span className="text-[9px] font-black uppercase tracking-widest mt-1">Profile</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer group relative">
                <Heart size={20} className="group-hover:text-red-500 transition-colors" />
                <span className="text-[9px] font-black uppercase tracking-widest mt-1">Wishlist</span>
                {wishlist.length > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center">{wishlist.length}</span>}
            </div>
            <div className="flex flex-col items-center cursor-pointer group relative">
              <ShoppingBag size={20} className="group-hover:text-[#E19898] transition-colors" />
              <span className="text-[9px] font-black uppercase tracking-widest mt-1">Bag</span>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#E19898] text-white text-[8px] font-bold rounded-full flex items-center justify-center font-black">2</span>
            </div>
          </div>
        </nav>

        <main className="pt-20">
            {activeTab === 'Home' && renderHome()}
            {activeTab === 'Shop' && renderShop()}
            {activeTab === 'AI Analysis' && (
                <section className="py-24 bg-black text-white">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                        <div className="grid lg:grid-cols-2 gap-24 items-center">
                            <div>
                                <AnimatedSection animationType="blur">
                                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 text-[#E19898] text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-white/10">
                                    <Camera size={14} />
                                    Aura Virtual Concierge
                                </div>
                                <h2 className="text-6xl font-black tracking-tighter mb-8 leading-none">The Science of Your Skin.</h2>
                                <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                                    Stop guessing. Our AI Concierge uses clinical computer vision to map your skin profile and match you with products that actually work.
                                </p>
                                <button className="px-12 py-5 bg-white text-black font-black rounded-full hover:bg-[#E19898] hover:text-white transition-all duration-500 uppercase tracking-widest text-sm shadow-2xl">
                                    Start AI Analysis
                                </button>
                                </AnimatedSection>
                            </div>
                            <AnimatedSection delay={200}>
                                <div className="p-10 rounded-[48px] bg-white text-black shadow-[0_0_80px_rgba(225,152,152,0.2)]">
                                    <AgentFlowChart workflow={skinWorkflow} />
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>
            )}
        </main>

        {/* Enhanced Product Modal (Myntra Style Detailed View) */}
        {selectedProduct && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 lg:p-12">
                <div className="absolute inset-0 bg-white/98 backdrop-blur-xl" onClick={() => setSelectedProduct(null)} />
                <div className="relative bg-[#FAFAFA] text-black w-full max-w-7xl rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-[0_80px_160px_-40px_rgba(225,152,152,0.3)] animate-scale-in max-h-[95vh] overflow-y-auto">
                    <button onClick={() => setSelectedProduct(null)} className="absolute top-10 right-10 z-10 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#E19898] transition-all">
                        <X size={24} />
                    </button>
                    
                    {/* Gallery */}
                    <div className="lg:w-[55%] flex flex-col lg:flex-row bg-white border-r">
                        <div className="lg:w-24 border-r bg-slate-50 p-4 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto">
                            {selectedProduct.gallery.map((img, i) => (
                                <button key={i} className="w-16 h-16 shrink-0 rounded-lg overflow-hidden border-2 border-[#E19898]">
                                    <img src={img} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                        <div className="flex-1 bg-white relative">
                             <img src={selectedProduct.image} className="w-full h-full object-cover" />
                             <div className="absolute bottom-10 left-10 flex gap-4">
                                <button className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg"><Play size={20} className="text-black" /></button>
                                <span className="px-4 py-2 bg-black/80 backdrop-blur-md text-white text-[10px] font-black rounded-full flex items-center uppercase tracking-widest">Watch How to Apply</span>
                             </div>
                        </div>
                    </div>

                    {/* Details Side */}
                    <div className="lg:w-[45%] p-10 lg:p-20 flex flex-col bg-white">
                        <div className="mb-10">
                            <h2 className="text-4xl font-black text-black mb-1">{selectedProduct.brand}</h2>
                            <p className="text-2xl font-bold text-slate-400">{selectedProduct.name}</p>
                        </div>
                        
                        <div className="flex items-center gap-4 py-4 px-6 border rounded-xl w-fit mb-10">
                            <div className="flex items-center gap-1">
                                <span className="font-black text-xl">{selectedProduct.rating}</span>
                                <Star size={20} className="fill-[#03a685] text-[#03a685]" />
                            </div>
                            <div className="h-6 w-px bg-slate-200" />
                            <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">{selectedProduct.reviews} Ratings</span>
                        </div>

                        <div className="h-px bg-slate-100 w-full mb-10" />

                        <div className="flex items-center gap-6 mb-2">
                            <span className="text-4xl font-black text-black">${selectedProduct.price}</span>
                            <span className="text-2xl text-slate-300 line-through font-bold">MRP ${selectedProduct.mrp}</span>
                            <span className="text-2xl text-orange-500 font-black">({Math.round((1 - selectedProduct.price/selectedProduct.mrp) * 100)}% OFF)</span>
                        </div>
                        <p className="text-[#03a685] font-black uppercase text-[10px] tracking-[0.2em] mb-12">Inclusive of all taxes</p>

                        {selectedProduct.shades && (
                            <div className="mb-12">
                                <h4 className="text-xs font-black uppercase tracking-widest mb-6">Select Shade</h4>
                                <div className="flex gap-4">
                                    {selectedProduct.shades.map(s => (
                                        <button 
                                            key={s} 
                                            onClick={() => setSelectedShade(s)}
                                            className={`w-10 h-10 rounded-full border-4 transition-all ${selectedShade === s ? 'border-black scale-110' : 'border-transparent'}`}
                                            style={{ backgroundColor: s }}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="flex gap-6 mt-auto">
                            <button className="flex-1 py-7 bg-[#ff3f6c] text-white font-black rounded-xl uppercase tracking-[0.2em] text-sm hover:bg-[#d43157] transition-all flex items-center justify-center gap-4 shadow-xl">
                                <ShoppingBag size={20} /> ADD TO BAG
                            </button>
                            <button onClick={(e) => toggleWishlist(selectedProduct.id, e)} className="px-10 py-7 border-2 border-slate-200 rounded-xl font-black uppercase tracking-[0.2em] text-sm flex items-center gap-3 hover:border-black transition-all">
                                <Heart size={20} className={wishlist.includes(selectedProduct.id) ? 'fill-[#ff3f6c] text-[#ff3f6c]' : 'text-black'} />
                            </button>
                        </div>

                        <div className="mt-16 space-y-12">
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Product Story</h4>
                                <p className="text-lg text-slate-600 font-medium leading-relaxed">{selectedProduct.desc}</p>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Ingredients</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProduct.ingredients.map(ing => (
                                        <span key={ing} className="px-4 py-2 bg-slate-50 rounded-lg text-[11px] font-bold border">{ing}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* Final CTA (Myntra Club Style) */}
        <section className="py-40 bg-white text-center border-t border-slate-100">
          <div className="max-w-[1440px] mx-auto px-6">
            <AnimatedSection>
              <h2 className="text-5xl lg:text-8xl font-black tracking-tighter mb-12 text-black leading-none uppercase">JOIN AURA INSIDER<span className="text-[#E19898]">.</span></h2>
              <p className="text-xl text-slate-500 font-bold mb-16 max-w-2xl mx-auto uppercase tracking-widest">
                EARN POINTS ON EVERY PURCHASE. REDEEM FOR EXCLUSIVE AI REVIEWS.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <input 
                  type="email" 
                  placeholder="ENTER MOBILE OR EMAIL" 
                  className="px-8 py-5 bg-slate-50 border border-slate-200 rounded-lg w-full max-w-md focus:outline-none focus:ring-2 focus:ring-[#E19898] transition-all font-black text-xs tracking-widest uppercase"
                />
                <button className="px-14 py-5 bg-black text-white font-black rounded-lg hover:bg-[#E19898] transition-all uppercase tracking-widest text-sm shadow-2xl">
                    JOIN NOW
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </div>
    </MockLayout>
  );
}
