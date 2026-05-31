import { useState } from 'react';
import { 
  Shirt, 
  Sparkles, 
  Check, 
  ShoppingBag, 
  Eye, 
  Plus, 
  Trash2, 
  CreditCard,
  Scissors
} from 'lucide-react';

interface FashionSandboxProps {
  projectName: string;
}

interface CartItem {
  id: string;
  name: string;
  category: string;
  color: string;
  price: number;
}

export function FashionSandbox({ projectName }: FashionSandboxProps) {
  const isFashion = projectName.toLowerCase().includes('fashion') || projectName.toLowerCase().includes('eleven-fashion');

  // Eleven Fashion - Fitting Room State
  const [selectedGarment, setSelectedGarment] = useState<'gown' | 'suit' | 'trench'>('suit');
  const [chestSize, setChestSize] = useState<number>(38); // 32 to 46
  const [waistSize, setWaistSize] = useState<number>(32); // 26 to 42
  const [hipsSize, setHipsSize] = useState<number>(40); // 34 to 48
  const [heightSize, setHeightSize] = useState<number>(175); // 150 to 195 cm
  const [fitReserved, setFitReserved] = useState(false);

  // Eleven Beauty - Cosmetics State
  const [selectedCategory, setSelectedCategory] = useState<'lips' | 'eyes'>('lips');
  const [selectedLipColor, setSelectedLipColor] = useState('#B81D24'); // Ruby Crimson
  const [selectedEyeColor, setSelectedEyeColor] = useState('#8A7355'); // Bronze Haze
  const [cart, setCart] = useState<CartItem[]>([]);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const lipShades = [
    { name: 'Ruby Crimson', hex: '#B81D24', price: 2100 },
    { name: 'Velvet Rose', hex: '#E06C75', price: 1850 },
    { name: 'Desert Coral', hex: '#E29578', price: 1950 },
    { name: 'Midnight Berry', hex: '#631D45', price: 2300 }
  ];

  const eyeShades = [
    { name: 'Bronze Haze', hex: '#8A7355', price: 3400 },
    { name: 'Stardust Shimmer', hex: '#D1C4E9', price: 3800 },
    { name: 'Rose Quartz', hex: '#E8A598', price: 3200 },
    { name: 'Emerald Glam', hex: '#1E4D40', price: 3600 }
  ];

  // Cart operations
  const addToCart = (item: { name: string; hex: string; price: number }, type: 'Lips' | 'Eyes') => {
    const newItem: CartItem = {
      id: `${type.toLowerCase()}-${Date.now()}`,
      name: item.name,
      category: type,
      color: item.hex,
      price: item.price
    };
    setCart(prev => [...prev, newItem]);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartSubtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const cartTax = Math.round(cartSubtotal * 0.18); // 18% GST
  const cartTotal = cartSubtotal + cartTax;

  // Garment visual data mapping
  const garmentNames = {
    gown: 'Elegant Evening Gown',
    suit: 'Sharp Bespoke Suit',
    trench: 'Classic Tailored Trench'
  };

  const garmentColors = {
    gown: '#4D1D64',
    suit: '#1E293B',
    trench: '#C6A07E'
  };

  // SVG parameters based on morph calculations
  const waistWidth = waistSize * 1.3;
  const chestWidth = chestSize * 1.5;
  const hipsWidth = hipsSize * 1.55;
  const mannequinScaleY = heightSize / 175;

  return (
    <div className="font-sans text-apple-black bg-white rounded-3xl p-6 shadow-xl border border-slate-100 max-w-4xl mx-auto">
      {isFashion ? (
        <div>
          {/* Eleven Fashion Header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
              <Shirt size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-apple-black">Virtual Fitting Room</h3>
              <p className="text-xs text-apple-darkGray font-medium">Morph body measurements dynamically and preview bespoke garment silhouettes.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            {/* Control Panel Column */}
            <div className="md:col-span-6 space-y-6">
              {/* Garment Selector */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">1. Select Garment Template</label>
                <div className="grid grid-cols-3 gap-2.5">
                  {(['suit', 'gown', 'trench'] as const).map((g) => (
                    <button
                      key={g}
                      onClick={() => {
                        setSelectedGarment(g);
                        setFitReserved(false);
                      }}
                      className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all text-center flex flex-col items-center gap-1.5 ${
                        selectedGarment === g
                          ? 'bg-apple-black text-white border-apple-black shadow-md shadow-black/10'
                          : 'bg-apple-gray hover:bg-slate-200 border-transparent text-slate-600'
                      }`}
                    >
                      <Shirt size={16} />
                      <span className="truncate w-full">{garmentNames[g]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/40">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">2. Tailor Body Dimensions</h4>

                {/* Height Slider */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-slate-600">Mannequin Height</span>
                    <span className="text-slate-800">{heightSize} cm</span>
                  </div>
                  <input
                    type="range"
                    min="150"
                    max="195"
                    value={heightSize}
                    onChange={(e) => {
                      setHeightSize(Number(e.target.value));
                      setFitReserved(false);
                    }}
                    className="w-full accent-apple-black bg-slate-200 h-1.5 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Chest Slider */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-slate-600">Chest Size</span>
                    <span className="text-slate-800">{chestSize} in</span>
                  </div>
                  <input
                    type="range"
                    min="32"
                    max="46"
                    value={chestSize}
                    onChange={(e) => {
                      setChestSize(Number(e.target.value));
                      setFitReserved(false);
                    }}
                    className="w-full accent-apple-black bg-slate-200 h-1.5 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Waist Slider */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-slate-600">Waist Size</span>
                    <span className="text-slate-800">{waistSize} in</span>
                  </div>
                  <input
                    type="range"
                    min="26"
                    max="42"
                    value={waistSize}
                    onChange={(e) => {
                      setWaistSize(Number(e.target.value));
                      setFitReserved(false);
                    }}
                    className="w-full accent-apple-black bg-slate-200 h-1.5 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Hips Slider */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-slate-600">Hips/Glutes Size</span>
                    <span className="text-slate-800">{hipsSize} in</span>
                  </div>
                  <input
                    type="range"
                    min="34"
                    max="48"
                    value={hipsSize}
                    onChange={(e) => {
                      setHipsSize(Number(e.target.value));
                      setFitReserved(false);
                    }}
                    className="w-full accent-apple-black bg-slate-200 h-1.5 rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {!fitReserved ? (
                <button
                  onClick={() => setFitReserved(true)}
                  className="w-full bg-apple-black hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <Scissors size={15} />
                  Lock Bespoke Fitting
                </button>
              ) : (
                <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold">
                    <Check size={16} />
                    Fit Reserved & Sent to Designer Queue
                  </div>
                  <p className="text-[10px] text-slate-500 leading-normal">
                    Measurements of <strong className="text-slate-700">H:{heightSize}cm, C:{chestSize}", W:{waistSize}", H:{hipsSize}"</strong> locked for the <strong className="text-slate-700">{garmentNames[selectedGarment]}</strong>. Our lead master tailor has been notified.
                  </p>
                </div>
              )}
            </div>

            {/* Mannequin Visualizer Column */}
            <div className="md:col-span-6 bg-slate-50 border border-slate-200/50 rounded-2xl p-5 flex flex-col items-center justify-center h-[400px]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Live Morphing SVG Render</span>

              {/* Mannequin Box */}
              <div className="w-full max-w-[200px] h-[320px] bg-white border border-slate-200/60 rounded-2xl flex items-center justify-center shadow-inner relative overflow-hidden">
                <svg
                  viewBox="0 0 200 300"
                  className="w-full h-full p-6 transition-all duration-500 ease-out"
                  style={{ transform: `scaleY(${mannequinScaleY})` }}
                >
                  {/* Backdrop Grid lines */}
                  <line x1="0" y1="50" x2="200" y2="50" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="0" y1="100" x2="200" y2="100" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="0" y1="150" x2="200" y2="150" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="0" y1="200" x2="200" y2="200" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="0" y1="250" x2="200" y2="250" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="100" y1="0" x2="100" y2="300" stroke="#e2e8f0" strokeWidth="0.8" strokeDasharray="4" />

                  {/* Morphing Mannequin Path */}
                  <path
                    d={`
                      M 100,20
                      C 90,20 85,25 80,30
                      L 100 - ${chestWidth}/2.6, 60
                      C 100 - ${chestWidth}/2.6, 80 100 - ${waistWidth}/2.6, 120 100 - ${waistWidth}/2.6, 140
                      C 100 - ${waistWidth}/2.6, 160 100 - ${hipsWidth}/2.6, 175 100 - ${hipsWidth}/2.6, 195
                      L 90, 280
                      L 110, 280
                      L 100 + ${hipsWidth}/2.6, 195
                      C 100 + ${hipsWidth}/2.6, 175 100 + ${waistWidth}/2.6, 160 100 + ${waistWidth}/2.6, 140
                      C 100 + ${waistWidth}/2.6, 120 100 + ${chestWidth}/2.6, 80 100 + ${chestWidth}/2.6, 60
                      L 120, 30
                      C 115, 25 110, 20 100, 20
                      Z
                    `}
                    fill="none"
                    stroke="#CBD5E1"
                    strokeWidth="3"
                    className="transition-all duration-500 ease-out"
                  />

                  {/* Head Oval */}
                  <ellipse cx="100" cy="18" rx="8" ry="10" fill="none" stroke="#CBD5E1" strokeWidth="3" />

                  {/* Morphing Garment Overlay */}
                  <path
                    d={selectedGarment === 'gown' ? `
                      M 80,30
                      L 100 - ${chestWidth}/2.6, 60
                      C 100 - ${chestWidth}/2.6, 90 100 - ${waistWidth}/2.6, 120 100 - ${waistWidth}/2.6, 145
                      C 100 - ${waistWidth}/2.6, 170 100 - ${hipsWidth}/2.4, 200 100 - ${hipsWidth}/2.0, 230
                      L 65, 285
                      L 135, 285
                      L 100 + ${hipsWidth}/2.0, 230
                      C 100 + ${hipsWidth}/2.4, 200 100 + ${waistWidth}/2.6, 170 100 + ${waistWidth}/2.6, 145
                      C 100 + ${waistWidth}/2.6, 120 100 + ${chestWidth}/2.6, 90 100 + ${chestWidth}/2.6, 60
                      L 120, 30
                      Z
                    ` : selectedGarment === 'suit' ? `
                      M 80,30
                      L 100 - ${chestWidth}/2.6, 60
                      C 100 - ${chestWidth}/2.6, 90 100 - ${waistWidth}/2.6, 120 100 - ${waistWidth}/2.6, 145
                      L 100 - ${hipsWidth}/2.6, 195
                      L 88, 275
                      L 97, 275
                      L 100, 190
                      L 103, 275
                      L 112, 275
                      L 100 + ${hipsWidth}/2.6, 195
                      L 100 + ${waistWidth}/2.6, 145
                      C 100 + ${waistWidth}/2.6, 120 100 + ${chestWidth}/2.6, 90 100 + ${chestWidth}/2.6, 60
                      L 120, 30
                      Z
                    ` : `
                      M 78,30
                      L 100 - ${chestWidth}/2.5, 60
                      C 100 - ${chestWidth}/2.5, 90 100 - ${waistWidth}/2.5, 120 100 - ${waistWidth}/2.5, 145
                      C 100 - ${waistWidth}/2.5, 170 100 - ${hipsWidth}/2.3, 200 100 - ${hipsWidth}/2.3, 240
                      L 76, 275
                      L 124, 275
                      C 100 + ${hipsWidth}/2.3, 240 100 + ${hipsWidth}/2.3, 200 100 + ${waistWidth}/2.5, 170
                      C 100 + ${waistWidth}/2.5, 145 100 + ${waistWidth}/2.5, 120 100 + ${chestWidth}/2.5, 90
                      L 122, 30
                      Z
                    `}
                    fill={garmentColors[selectedGarment]}
                    opacity="0.75"
                    className="transition-all duration-500 ease-out"
                  />
                  
                  {/* Subtle styling lines for clothing details */}
                  {selectedGarment === 'suit' && (
                    <>
                      {/* V-neck lapel lines */}
                      <path d="M 85,30 L 100,85 L 115,30" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
                      <line x1="100" y1="85" x2="100" y2="145" stroke="#e2e8f0" strokeWidth="1.5" />
                    </>
                  )}
                  {selectedGarment === 'trench' && (
                    <>
                      {/* Waist sash */}
                      <path d={`M 100 - ${waistWidth}/2.5, 140 L 100 + ${waistWidth}/2.5, 140`} stroke="#78350f" strokeWidth="6" />
                    </>
                  )}
                </svg>

                {/* Info Overlay */}
                <div className="absolute bottom-2 left-2 right-2 bg-slate-900/90 text-white rounded-lg p-2 text-[8px] flex justify-between font-mono leading-none">
                  <span>SCALE: {Math.round(mannequinScaleY * 100)}%</span>
                  <span>ACCENT: {garmentColors[selectedGarment]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Eleven Beauty Header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500">
              <ShoppingBag size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-apple-black">Cosmetics Virtual Try-On</h3>
              <p className="text-xs text-apple-darkGray font-medium">Find perfect lip and eye shadow tones, and simulate a luxury checkout experience.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            {/* Try on controls Column */}
            <div className="md:col-span-6 space-y-5">
              {/* Category Tab */}
              <div className="flex bg-apple-gray p-1 rounded-xl">
                <button
                  onClick={() => setSelectedCategory('lips')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                    selectedCategory === 'lips' ? 'bg-white text-apple-black shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Lip Colors
                </button>
                <button
                  onClick={() => setSelectedCategory('eyes')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                    selectedCategory === 'eyes' ? 'bg-white text-apple-black shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Eye Shadow Palettes
                </button>
              </div>

              {/* Shade Selector Grid */}
              <div className="space-y-3">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">1. Select Shade Tone</label>
                <div className="grid grid-cols-2 gap-3">
                  {(selectedCategory === 'lips' ? lipShades : eyeShades).map((shade) => {
                    const isActive = selectedCategory === 'lips' ? selectedLipColor === shade.hex : selectedEyeColor === shade.hex;
                    return (
                      <div
                        key={shade.name}
                        onClick={() => {
                          if (selectedCategory === 'lips') setSelectedLipColor(shade.hex);
                          else setSelectedEyeColor(shade.hex);
                          setCheckoutComplete(false);
                        }}
                        className={`p-3 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                          isActive ? 'border-apple-black bg-slate-50' : 'border-slate-200/60 bg-white hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="w-5 h-5 rounded-full border border-slate-300/40 shadow-sm shrink-0"
                            style={{ backgroundColor: shade.hex }}
                          ></span>
                          <div className="text-left leading-none">
                            <p className="text-xs font-bold text-slate-800">{shade.name}</p>
                            <p className="text-[9px] text-slate-400 mt-1">₹{shade.price.toLocaleString()}</p>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(shade, selectedCategory === 'lips' ? 'Lips' : 'Eyes');
                          }}
                          className="w-6 h-6 rounded-full bg-apple-black hover:bg-slate-800 text-white flex items-center justify-center transition-all"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Checkout Block */}
              <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-4 flex flex-col max-h-[160px] overflow-y-auto">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Shopping Bag ({cart.length})</span>
                  {cart.length > 0 && (
                    <button onClick={() => setCart([])} className="text-[9px] font-bold text-rose-600 hover:underline">
                      Clear Bag
                    </button>
                  )}
                </div>

                {cart.length === 0 ? (
                  <p className="text-[10px] text-slate-400 text-center py-4">Your cosmetic bag is empty. Click + on shades to add.</p>
                ) : (
                  <div className="space-y-2">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }}></span>
                          <span className="font-semibold text-slate-700">{item.name} <span className="text-[9px] text-slate-400">({item.category})</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-800">₹{item.price.toLocaleString()}</span>
                          <button onClick={() => removeFromCart(item.id)} className="text-slate-400 hover:text-rose-600">
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Avatar Try On & Checkout Details Column */}
            <div className="md:col-span-6 flex flex-col justify-between">
              {/* Face/Avatar Display */}
              <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-4 flex flex-col items-center justify-center h-[210px] relative overflow-hidden">
                <span className="absolute top-2 left-3 text-[9px] font-bold uppercase tracking-wider text-slate-400">Simulated Makeup Face Mapping</span>
                
                {/* SVG Face Try-on representation */}
                <svg viewBox="0 0 100 100" className="w-[120px] h-[120px] mt-2">
                  {/* Face Outline */}
                  <path
                    d="M 50,15 C 25,15 25,60 30,75 C 35,88 45,92 50,92 C 55,92 65,88 70,75 C 75,60 75,15 50,15 Z"
                    fill="none"
                    stroke="#CBD5E1"
                    strokeWidth="1.8"
                  />

                  {/* Left Eyebrow */}
                  <path d="M 32,36 C 35,32 40,32 44,35" fill="none" stroke="#64748B" strokeWidth="1.5" />
                  {/* Right Eyebrow */}
                  <path d="M 56,35 C 60,32 65,32 68,36" fill="none" stroke="#64748B" strokeWidth="1.5" />

                  {/* Left Eye Shadow Box */}
                  <ellipse cx="38" cy="42" rx="7" ry="4" fill={selectedEyeColor} opacity="0.45" />
                  {/* Right Eye Shadow Box */}
                  <ellipse cx="62" cy="42" rx="7" ry="4" fill={selectedEyeColor} opacity="0.45" />

                  {/* Left Pupil */}
                  <ellipse cx="38" cy="43" rx="2.5" ry="2.5" fill="#334155" />
                  {/* Right Pupil */}
                  <ellipse cx="62" cy="43" rx="2.5" ry="2.5" fill="#334155" />

                  {/* Nose Outline */}
                  <path d="M 50,48 L 50,66 C 50,68 47,69 48,70" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />

                  {/* Lips - Dynamic Color Try-on */}
                  <path
                    d="M 40,78 C 45,75 48,77 50,78 C 52,77 55,75 60,78 C 55,83 45,83 40,78 Z"
                    fill={selectedLipColor}
                    stroke={selectedLipColor}
                    strokeWidth="0.5"
                    className="transition-all duration-300"
                  />
                  <path
                    d="M 40,78 C 45,80 55,80 60,78 C 54,85 46,85 40,78 Z"
                    fill={selectedLipColor}
                    stroke={selectedLipColor}
                    strokeWidth="0.5"
                    className="transition-all duration-300"
                  />
                </svg>

                <div className="flex gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: selectedLipColor }}></span>
                    <span className="text-[8px] font-mono text-slate-500 uppercase">LIP COLOR</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: selectedEyeColor }}></span>
                    <span className="text-[8px] font-mono text-slate-500 uppercase">EYE SHADOW</span>
                  </div>
                </div>
              </div>

              {/* Checkout details */}
              <div className="h-[140px] mt-4 flex flex-col justify-end">
                {checkoutComplete ? (
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 text-center space-y-1.5 animate-fadeIn">
                    <h5 className="text-xs font-bold text-emerald-800 flex items-center justify-center gap-1">
                      <CreditCard size={14} /> Checkout Completed Successfully
                    </h5>
                    <p className="text-[9px] text-slate-500">Order reference <strong className="text-slate-700">#ELV-{(cartTotal * 13).toString(16).toUpperCase()}</strong> processed. Thank you for shopping with ELEVEN.</p>
                    <button
                      onClick={() => {
                        setCheckoutComplete(false);
                        setCart([]);
                      }}
                      className="text-[9px] font-bold text-emerald-700 hover:underline uppercase tracking-wide block mx-auto"
                    >
                      Shop More
                    </button>
                  </div>
                ) : (
                  <div className="bg-slate-50 border border-slate-200/50 rounded-xl p-3.5 space-y-3">
                    <div className="flex justify-between text-[11px] font-bold text-slate-500">
                      <span>Bag Subtotal: ₹{cartSubtotal.toLocaleString()}</span>
                      <span>GST (18%): ₹{cartTax.toLocaleString()}</span>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-200 pt-2">
                      <div>
                        <span className="text-[9px] text-slate-400 block font-bold uppercase tracking-wider leading-none">Total Value</span>
                        <span className="text-base font-extrabold text-slate-800">₹{cartTotal.toLocaleString()}</span>
                      </div>

                      <button
                        onClick={() => {
                          if (cart.length > 0) setCheckoutComplete(true);
                        }}
                        disabled={cart.length === 0}
                        className="bg-apple-black hover:bg-slate-800 disabled:opacity-50 text-white font-bold py-2 px-6 rounded-xl text-xs transition-all flex items-center gap-1.5 shadow"
                      >
                        <ShoppingBag size={13} />
                        Simulate Checkout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
