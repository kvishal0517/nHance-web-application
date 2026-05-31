import { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  Music, 
  Paintbrush, 
  Calculator, 
  CheckCircle, 
  ChevronRight, 
  Sparkles,
  Layers,
  Clock,
  Coins
} from 'lucide-react';

interface MusicArtSandboxProps {
  projectName: string;
}

export function MusicArtSandbox({ projectName }: MusicArtSandboxProps) {
  const isRaagas = projectName.toLowerCase().includes('raagas');

  // Raagas State
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedRaga, setSelectedRaga] = useState('Raag Yaman');
  const [tempo, setTempo] = useState<number>(80);
  const [volume, setVolume] = useState<number>(70);
  const [visualizerBars, setVisualizerBars] = useState<number[]>(Array(24).fill(10));

  // Studio Kaavya State
  const [width, setWidth] = useState<number>(12);
  const [height, setHeight] = useState<number>(8);
  const [medium, setMedium] = useState<'acrylic' | 'spray' | 'gold' | 'mosaic'>('acrylic');
  const [complexity, setComplexity] = useState<'minimal' | 'abstract' | 'photorealistic'>('abstract');
  const [requestedQuote, setRequestedQuote] = useState(false);

  // Raagas visualizer loop
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setVisualizerBars(Array(24).fill(0).map(() => Math.floor(Math.random() * 32) + 8));
      }, 150);
    } else {
      setVisualizerBars(Array(24).fill(10));
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Raagas Data
  const ragasData: Record<string, { timeOfDay: string, mood: string, scale: string }> = {
    'Raag Yaman': { timeOfDay: 'Evening (First Quarter)', mood: 'Peaceful, Devotional', scale: 'Kalyan Thaat' },
    'Raag Bhairavi': { timeOfDay: 'Morning (Dawn)', mood: 'Compassionate, Deeply Emotional', scale: 'Bhairavi Thaat' },
    'Raag Darbari': { timeOfDay: 'Late Night', mood: 'Solemn, Majestic, Royal', scale: 'Asavari Thaat' }
  };

  // Studio Kaavya Calculation
  const baseRatePerSqft = {
    acrylic: 450,
    spray: 600,
    gold: 1500,
    mosaic: 2200
  };

  const complexityMultiplier = {
    minimal: 0.8,
    abstract: 1.0,
    photorealistic: 1.6
  };

  const sqft = width * height;
  const rawCost = sqft * baseRatePerSqft[medium] * complexityMultiplier[complexity];
  const finalCost = Math.round(rawCost);
  const materialCost = Math.round(finalCost * 0.25);
  const laborCost = Math.round(finalCost * 0.75);
  const completionDays = Math.round((sqft / 20) * (complexity === 'minimal' ? 0.7 : complexity === 'abstract' ? 1.0 : 1.8) + 3);

  return (
    <div className="font-sans text-apple-black bg-white rounded-3xl p-6 shadow-xl border border-slate-100 max-w-4xl mx-auto">
      {isRaagas ? (
        <div>
          {/* Raagas Classical Vocalist Player */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
              <Music size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-apple-black">Classical Audio Raga Lounge</h3>
              <p className="text-xs text-apple-darkGray font-medium">Explore synthesized compositions, tune performance tempos, and view visual frequencies.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Vinyl Player Column */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-48 h-48 rounded-full bg-apple-black flex items-center justify-center shadow-2xl border-4 border-slate-800">
                {/* Vinyl Grooves */}
                <div className="absolute inset-2 border border-slate-700/60 rounded-full" />
                <div className="absolute inset-6 border border-slate-700/40 rounded-full" />
                <div className="absolute inset-10 border border-slate-700/20 rounded-full" />
                
                {/* Center Label */}
                <div className="w-16 h-16 rounded-full bg-amber-500 border border-amber-600 flex items-center justify-center shadow-inner relative">
                  <div className="w-3 h-3 rounded-full bg-apple-black" />
                </div>
                
                {/* Rotation Animation */}
                {isPlaying && (
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-500/20 animate-spin-slow" />
                )}
              </div>

              {/* Player Controls */}
              <div className="flex gap-4 mt-8 items-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-white transition-all shadow-lg ${
                    isPlaying 
                      ? 'bg-amber-600 hover:bg-amber-700 hover:scale-105' 
                      : 'bg-apple-black hover:bg-slate-800 hover:scale-105'
                  }`}
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                </button>
              </div>
            </div>

            {/* Config details / Soundwaves */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2.5">Select Raag Composition</label>
                <div className="grid grid-cols-3 gap-2.5">
                  {Object.keys(ragasData).map(raga => (
                    <button
                      key={raga}
                      onClick={() => setSelectedRaga(raga)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                        selectedRaga === raga
                          ? 'bg-amber-500 text-apple-black border-amber-500'
                          : 'bg-apple-gray border-transparent text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {raga}
                    </button>
                  ))}
                </div>
              </div>

              {/* Raga info card */}
              <div className="bg-slate-25 rounded-2xl p-4.5 border border-slate-100 grid grid-cols-2 gap-4 text-xs font-semibold text-slate-600">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block">Performance Hour</span>
                  <span className="text-apple-black mt-0.5 block">{ragasData[selectedRaga].timeOfDay}</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block">Aesthetic Mood</span>
                  <span className="text-apple-black mt-0.5 block">{ragasData[selectedRaga].mood}</span>
                </div>
                <div className="col-span-2 pt-2.5 border-t border-slate-100 flex justify-between items-center">
                  <span>Parent Thaat scale</span>
                  <span className="font-extrabold text-amber-600">{ragasData[selectedRaga].scale}</span>
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                    <span>Performance Tempo (Laya)</span>
                    <span className="text-apple-black">{tempo} BPM</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="180"
                    value={tempo}
                    onChange={(e) => setTempo(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                    <span>Acoustic Output</span>
                    <span className="text-apple-black">{volume}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>
              </div>

              {/* Waveform Visualizer */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Live Synthetic Frequency Fading</label>
                <div className="h-12 bg-apple-black rounded-2xl flex items-center justify-between px-6 overflow-hidden relative">
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,#ffffff_5px,transparent_5px)]" />
                  {visualizerBars.map((val, index) => (
                    <div 
                      key={index} 
                      className="w-1 bg-amber-500 rounded-full transition-all duration-150"
                      style={{ height: `${val}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Studio Kaavya Art Commission Estimator */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-800 border border-slate-200">
              <Paintbrush size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-apple-black">Bespoke Mural Commission Calculator</h3>
              <p className="text-xs text-apple-darkGray font-medium">Input custom wall dimensions and mediums to get instant budget metrics & blueprints.</p>
            </div>
          </div>

          {!requestedQuote ? (
            <div className="grid md:grid-cols-12 gap-8">
              {/* Parameter Settings */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">1. Wall Dimensions (Feet)</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase mb-1 block">Width</span>
                      <div className="flex items-center bg-apple-gray rounded-xl px-3.5 py-2">
                        <input
                          type="number"
                          value={width}
                          onChange={(e) => setWidth(Math.max(1, Number(e.target.value)))}
                          className="w-full bg-transparent text-xs font-bold focus:outline-none text-apple-black"
                        />
                        <span className="text-[10px] font-black text-slate-400 ml-2">FT</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase mb-1 block">Height</span>
                      <div className="flex items-center bg-apple-gray rounded-xl px-3.5 py-2">
                        <input
                          type="number"
                          value={height}
                          onChange={(e) => setHeight(Math.max(1, Number(e.target.value)))}
                          className="w-full bg-transparent text-xs font-bold focus:outline-none text-apple-black"
                        />
                        <span className="text-[10px] font-black text-slate-400 ml-2">FT</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">2. Mural Medium Style</label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { id: 'acrylic', label: 'Acrylic on Plaster' },
                      { id: 'spray', label: 'Urban Spray Paint' },
                      { id: 'gold', label: '24k Gold Leaf Gild' },
                      { id: 'mosaic', label: 'Mixed Material Mosaic' }
                    ].map(m => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setMedium(m.id as any)}
                        className={`py-3 px-4 rounded-xl text-[11px] font-bold transition-all border text-left flex justify-between items-center ${
                          medium === m.id
                            ? 'bg-apple-black text-white border-apple-black shadow-md shadow-black/10'
                            : 'bg-apple-gray border-transparent text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {m.label}
                        {medium === m.id && <Sparkles size={12} className="text-amber-400" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">3. Composition Complexity</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'minimal', label: 'Minimalist' },
                      { id: 'abstract', label: 'Abstract Texture' },
                      { id: 'photorealistic', label: 'Photorealism' }
                    ].map(c => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setComplexity(c.id as any)}
                        className={`py-2.5 px-2 rounded-xl text-[10px] font-bold transition-all border text-center ${
                          complexity === c.id
                            ? 'bg-slate-200 text-apple-black border-slate-400'
                            : 'bg-apple-gray border-transparent text-slate-500 hover:bg-slate-200'
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Estimate Summary */}
              <div className="md:col-span-5 bg-apple-gray rounded-3xl p-6 border border-slate-200/40 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-1">Commission Quote</span>
                  <h4 className="text-sm font-extrabold text-apple-black mb-4">Financial & Scheduling Breakdown</h4>

                  <div className="space-y-3.5 mb-6">
                    <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
                      <span>Total Area</span>
                      <span className="font-semibold text-apple-black">{sqft} Sq. Ft</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
                      <span>Timeline Duration</span>
                      <span className="font-semibold text-apple-black flex items-center gap-1">
                        <Clock size={12} />
                        ~{completionDays} Work Days
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
                      <span>Estimated Materials</span>
                      <span className="font-semibold text-apple-black">₹{materialCost.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-200/60 pt-4 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Final Design Estimate</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-apple-black">₹{finalCost.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => setRequestedQuote(true)}
                    className="w-full py-4 bg-apple-black text-white hover:bg-slate-800 font-bold rounded-2xl text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                  >
                    Generate Blueprint Specs
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // Success Blueprint Display
            <div className="text-center py-6 max-w-xl mx-auto animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-500 flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-black text-apple-black mb-1">Blueprint Specifications Created!</h3>
              <p className="text-xs text-slate-500 font-medium mb-6">
                Your custom commission metrics have been drafted. Here is the physical development workflow.
              </p>

              <div className="bg-[#1D1D1F] text-white rounded-3xl p-6 border border-slate-800 text-left space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[8px] font-black uppercase tracking-widest text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-md">Art Blueprint</span>
                    <h4 className="text-base font-bold mt-1.5 uppercase tracking-wide">Mural Spec Sheet</h4>
                  </div>
                  <span className="text-[11px] font-black text-slate-400">{sqft} SQFT &bull; {completionDays} DAYS</span>
                </div>

                <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-slate-800 text-xs">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <Layers size={16} className="text-amber-500 mb-2" />
                    <span className="text-[8px] font-bold text-slate-400 uppercase block mb-0.5">Style</span>
                    <span className="font-semibold">{complexity === 'minimal' ? 'Minimal' : complexity === 'abstract' ? 'Abstract' : 'Photoreal'}</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <Coins size={16} className="text-amber-500 mb-2" />
                    <span className="text-[8px] font-bold text-slate-400 uppercase block mb-0.5">Base Rate</span>
                    <span className="font-semibold">₹{baseRatePerSqft[medium]}/sqft</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <Clock size={16} className="text-amber-500 mb-2" />
                    <span className="text-[8px] font-bold text-slate-400 uppercase block mb-0.5">Labor Allocation</span>
                    <span className="font-semibold">₹{laborCost.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">Scheduled Installation Flow</h5>
                  <div className="space-y-2 text-[11px] text-slate-300">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>Phase 1: Surface Priming & Plaster Prep (Days 1–2)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>Phase 2: Projector Grid Outline & Base Paint (Days 3–{Math.round(completionDays*0.4)})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>Phase 3: Fine Detailing & Varnish Protective Seal (Last 2 Days)</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setRequestedQuote(false)}
                className="px-8 py-3 bg-apple-black text-white hover:bg-slate-800 text-xs font-bold rounded-xl uppercase tracking-widest transition-all"
              >
                Recalculate Specs
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
