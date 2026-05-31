import { useState } from 'react';
import { 
  Palette, 
  MessageSquare, 
  CheckCircle, 
  ChevronRight, 
  Sparkles, 
  Layers, 
  Send,
  Sliders,
  DollarSign,
  Maximize2
} from 'lucide-react';

interface CreativesSandboxProps {
  projectName: string;
}

interface CommentPin {
  id: number;
  x: number;
  y: number;
  text: string;
  response: string;
}

export function CreativesSandbox({ projectName }: CreativesSandboxProps) {
  const isAanya = projectName.toLowerCase().includes('aanya');

  // Aanya State
  const [pins, setPins] = useState<CommentPin[]>([
    { id: 1, x: 25, y: 35, text: 'Can we adjust this typeface to feel more geometric?', response: 'Aanya: Agreed! I will swap this for SF Pro Rounded or a sleek customized geometric sans.' },
    { id: 2, x: 75, y: 65, text: 'The golden secondary tone is a bit too subtle here.', response: 'Aanya: I will boost the saturation and metallic shine values in the vector export.' }
  ]);
  const [commentText, setCommentText] = useState('');
  const [activePinId, setActivePinId] = useState<number | null>(null);

  // Wunderkind State
  const [audience, setAudience] = useState<string>('Tech Startups');
  const [adjective, setAdjective] = useState<'sleek' | 'playful' | 'brutalist'>('sleek');
  const [deliverable, setDeliverable] = useState<string>('Brand Identity Logo');
  const [budget, setBudget] = useState<number>(350000);
  const [proposalSuccess, setProposalSuccess] = useState(false);

  // Aanya handle canvas click to add new pin
  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    
    // Auto-generate ID
    const newId = pins.length + 1;
    const newPin: CommentPin = {
      id: newId,
      x,
      y,
      text: 'Draft Comment... Type on the panel below to finalize.',
      response: 'Waiting for feedback...'
    };
    
    setPins([...pins, newPin]);
    setActivePinId(newId);
  };

  const handleUpdateActivePinText = () => {
    if (activePinId !== null && commentText.trim() !== '') {
      setPins(prev => prev.map(pin => {
        if (pin.id === activePinId) {
          return {
            ...pin,
            text: commentText,
            response: 'Aanya: Got it! I will review the vector draft and incorporate these revisions in the next export cycle.'
          };
        }
        return pin;
      }));
      setCommentText('');
    }
  };

  return (
    <div className="font-sans text-apple-black bg-white rounded-3xl p-6 shadow-xl border border-slate-100 max-w-4xl mx-auto">
      {isAanya ? (
        <div>
          {/* Aanya Verma Collaborative Canvas */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-800 border border-slate-200">
              <Palette size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-apple-black">Live Collaborative Review Canvas</h3>
              <p className="text-xs text-apple-darkGray font-medium">Click anywhere on the visual vector logo draft card below to drop annotation pins and trigger designer responses.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            {/* Visual vector canvas card */}
            <div className="md:col-span-7">
              <div 
                onClick={handleCanvasClick}
                className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-50 to-slate-200 border-2 border-dashed border-slate-300 flex items-center justify-center cursor-crosshair overflow-hidden group select-none shadow-sm"
              >
                <div className="absolute inset-0 opacity-[0.02] bg-[repeating-linear-gradient(0deg,transparent,transparent_8px,#000_10px,transparent_10px)]" />
                <div className="text-center p-6">
                  {/* Mock elegant logo graphic */}
                  <div className="w-16 h-16 rounded-full bg-apple-black mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-white font-serif text-2xl italic tracking-tighter">A</span>
                  </div>
                  <h4 className="text-lg font-bold text-apple-black uppercase tracking-widest font-serif">A A N Y A &bull; V</h4>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest mt-1">Branding draft v2.1</p>
                </div>

                {/* Pins */}
                {pins.map(pin => (
                  <div
                    key={pin.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePinId(pin.id);
                    }}
                    className={`absolute w-7 h-7 rounded-full flex items-center justify-center text-xs font-black transition-all cursor-pointer shadow-md ${
                      activePinId === pin.id
                        ? 'bg-amber-500 text-apple-black scale-110 z-20 border-2 border-white'
                        : 'bg-apple-black text-white hover:scale-105 z-10'
                    }`}
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  >
                    {pin.id}
                  </div>
                ))}
              </div>
            </div>

            {/* Comment Drawer Sidebar */}
            <div className="md:col-span-5 bg-apple-gray rounded-3xl p-6 border border-slate-200/40 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center pb-2.5 border-b border-slate-200/60 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Collaboration Panel</span>
                  <span className="text-[9px] font-extrabold text-[#D4AF37] uppercase flex items-center gap-1">
                    <Sparkles size={11} />
                    Figma-style Comments
                  </span>
                </div>

                {activePinId !== null ? (
                  <div className="space-y-4">
                    <div className="p-3.5 bg-white rounded-2xl border border-slate-100 space-y-3.5 shadow-sm text-xs">
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-0.5">Pin #{activePinId} Comment</span>
                        <p className="font-semibold text-apple-black italic">"{pins.find(p => p.id === activePinId)?.text}"</p>
                      </div>
                      <div className="pt-2.5 border-t border-slate-100 flex items-start gap-2 text-[11px] font-semibold text-amber-600 bg-amber-50/20 p-2 rounded-xl">
                        <MessageSquare size={13} className="shrink-0 mt-0.5" />
                        <p className="leading-relaxed">{pins.find(p => p.id === activePinId)?.response}</p>
                      </div>
                    </div>

                    <div>
                      <label className="text-[9px] font-black uppercase text-slate-400 block mb-1">Add Feedback Text</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="e.g. Increase logo size..."
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-amber-500"
                        />
                        <button
                          onClick={handleUpdateActivePinText}
                          className="p-3 bg-apple-black text-white hover:bg-slate-800 rounded-xl transition-all"
                        >
                          <Send size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-slate-400">
                    <MessageSquare size={32} className="mx-auto mb-2 text-slate-300 animate-pulse" />
                    <p className="text-xs font-bold leading-normal">Click anywhere on the left brand image draft to leave real-time feedback pins.</p>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex justify-between text-[9px] font-bold text-slate-400 uppercase">
                <span>Pins dropped: {pins.length}</span>
                <span>Active: {activePinId ? `Pin #${activePinId}` : 'None'}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Wunderkind Studio Creative Brief & Proposal Builder */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-600">
              <Layers size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-apple-black">Strategic Creative Brief & Proposal Builder</h3>
              <p className="text-xs text-apple-darkGray font-medium">Draft complete creative briefs, lock budget ranges, and assemble customized agency proposals.</p>
            </div>
          </div>

          {!proposalSuccess ? (
            <div className="grid md:grid-cols-12 gap-8">
              {/* Questionnaire Form */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2.5">1. Target Audience Demographic</label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {['Tech Startups', 'Luxury Consumers', 'Health & Wellness', 'Gen-Z Consumers'].map(aud => (
                      <button
                        key={aud}
                        onClick={() => setAudience(aud)}
                        className={`py-3 px-4 rounded-xl text-xs font-bold transition-all border text-left ${
                          audience === aud
                            ? 'bg-[#C75B39] border-[#C75B39] text-white'
                            : 'bg-apple-gray border-transparent text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {aud}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">2. Brand Adjective Tone</label>
                    <div className="flex gap-2">
                      {[
                        { id: 'sleek', label: 'Sleek' },
                        { id: 'playful', label: 'Playful' },
                        { id: 'brutalist', label: 'Brutalist' }
                      ].map(adj => (
                        <button
                          key={adj.id}
                          type="button"
                          onClick={() => setAdjective(adj.id as any)}
                          className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all text-center flex-1 ${
                            adjective === adj.id
                              ? 'bg-apple-black text-white border-apple-black'
                              : 'bg-apple-gray border-transparent text-slate-600'
                          }`}
                        >
                          {adj.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">3. Primary Deliverable</label>
                    <select
                      value={deliverable}
                      onChange={(e) => setDeliverable(e.target.value)}
                      className="w-full bg-apple-gray border border-transparent rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white focus:border-[#C75B39] appearance-none"
                    >
                      <option>Brand Identity Logo</option>
                      <option>Web Experience UI/UX</option>
                      <option>Premium Packaging</option>
                      <option>Complete Launch Campaign</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">4. Allocated Budget</label>
                    <span className="text-sm font-extrabold text-[#C75B39]">₹{(budget / 100000).toFixed(1)} Lakhs</span>
                  </div>
                  <input
                    type="range"
                    min="150000"
                    max="1500000"
                    step="50000"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#C75B39]"
                  />
                </div>
              </div>

              {/* Estimate Summary Sidebar */}
              <div className="md:col-span-5 bg-apple-gray rounded-3xl p-6 border border-slate-200/40 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-1">Proposal Architect</span>
                  <h4 className="text-sm font-extrabold text-apple-black mb-4">Strategic Proposal Setup</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Custom proposals merge your budget specs with target audience trends to yield precise design timelines.
                  </p>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => setProposalSuccess(true)}
                    className="w-full py-4 bg-[#C75B39] hover:bg-amber-700 text-white font-bold rounded-2xl text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                  >
                    Generate Proposal Draft
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // Success Proposal Layout
            <div className="text-center py-6 max-w-xl mx-auto animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-500 flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-black text-apple-black mb-1">Proposal Blueprint Created</h3>
              <p className="text-xs text-slate-500 font-medium mb-6">
                Your strategic creative brief has been drafted. Review delivery milestones.
              </p>

              <div className="bg-[#1A1A1A] text-white rounded-3xl p-7 text-left space-y-5 shadow-2xl relative border-t-4 border-[#C75B39]">
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <div>
                    <span className="text-[8px] font-black uppercase tracking-widest text-[#C75B39] bg-[#C75B39]/10 px-2.5 py-0.5 rounded">Studio Wunderkind Proposal</span>
                    <h4 className="text-base font-bold mt-1.5 uppercase tracking-wide">Brand Strategic Brief</h4>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400">Budget: ₹{budget.toLocaleString('en-IN')}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-300">
                  <div>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500 block mb-0.5">Focus Demographic</span>
                    <span className="text-white">{audience}</span>
                  </div>
                  <div>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500 block mb-0.5">Core Adjective Tone</span>
                    <span className="text-white capitalize">{adjective} Aesthetic</span>
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-xs text-slate-300 space-y-2">
                  <h5 className="text-[9px] font-extrabold uppercase text-[#C75B39] tracking-wider mb-2">Scope & Timeline Milestones</h5>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C75B39] shrink-0" />
                    <span>Deliverable: {deliverable} (High fidelity vectors)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C75B39] shrink-0" />
                    <span>Phase 1: Moodboard alignment & Discovery (Days 1–5)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C75B39] shrink-0" />
                    <span>Phase 2: Draft concept exports & Revisions (Days 6–18)</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setProposalSuccess(false)}
                className="mt-6 px-8 py-3 bg-apple-black text-white hover:bg-slate-800 text-xs font-bold rounded-xl uppercase tracking-widest transition-all"
              >
                Recreate Proposal
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
