import { useState } from 'react';
import { 
  FileText, 
  Search, 
  Lock, 
  Unlock, 
  CreditCard, 
  CheckCircle, 
  ShieldCheck, 
  Newspaper,
  ChevronRight,
  Eye,
  AlertCircle
} from 'lucide-react';

interface MediaSandboxProps {
  projectName: string;
}

export function MediaSandbox({ projectName }: MediaSandboxProps) {
  const isSiddharth = projectName.toLowerCase().includes('siddharth');

  // Siddharth State
  const [activeDossier, setActiveDossier] = useState<number>(0);
  const [revealedWords, setRevealedWords] = useState<Record<string, boolean>>({});

  // District Lens State
  const [selectedTier, setSelectedTier] = useState<'monthly' | 'yearly' | 'patron'>('monthly');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [paySuccess, setPaySuccess] = useState(false);

  // Siddharth Dossier Database
  const dossiers = [
    {
      id: 104,
      title: 'Offshore Ledger #22A',
      desc: 'Shell companies linked to steel conglomerate acquisitions.',
      content: [
        'On Oct 12, shell company ',
        '[REDACTED: Aether Holdings Ltd]',
        ' wired a total sum of ',
        '[REDACTED: $14.2 Million]',
        ' to Swiss Bank accounts under ',
        '[REDACTED: Trustee Vivek Mehta].',
        ' This directly coincided with a policy change regarding state steel allocations.'
      ]
    },
    {
      id: 118,
      title: 'Himalayan Mining Audit',
      desc: 'Confidential environmental clearance bypass reports.',
      content: [
        'An inspection team noted that ',
        '[REDACTED: Apex Green Energy Inc]',
        ' cleared over ',
        '[REDACTED: 450 Hectares]',
        ' of ecological buffer forest zone in Dehradun. The local forest inspector, ',
        '[REDACTED: Mr. S.K. Joshi],',
        ' was reported to have cleared the survey without mandatory physical review.'
      ]
    }
  ];

  const handleRevealWord = (word: string) => {
    setRevealedWords(prev => ({ ...prev, [word]: true }));
  };

  // Card formatting
  const handleCardNumberChange = (val: string) => {
    const formatted = val.replace(/\D/g, '').substring(0, 16).replace(/(.{4})/g, '$1 ').trim();
    setCardNumber(formatted);
  };

  const handleExpiryChange = (val: string) => {
    const formatted = val.replace(/\D/g, '').substring(0, 4).replace(/(.{2})/, '$1/').trim();
    setCardExpiry(formatted);
  };

  return (
    <div className="font-sans text-apple-black bg-white rounded-3xl p-6 shadow-xl border border-slate-100 max-w-4xl mx-auto">
      {isSiddharth ? (
        <div>
          {/* Siddharth Investigative Archive Explorer */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-800 border border-slate-200">
              <Search size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-apple-black">Investigative Dossier Archive Explorer</h3>
              <p className="text-xs text-apple-darkGray font-medium">Click on black redacted bars inside state audits to reveal classified leaks and financial details.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            {/* Folder Index Sidebar */}
            <div className="md:col-span-4 space-y-3">
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Leak Vault Index</span>
              {dossiers.map((dos, index) => (
                <div
                  key={dos.id}
                  onClick={() => {
                    setActiveDossier(index);
                    setRevealedWords({});
                  }}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                    activeDossier === index
                      ? 'border-red-600 bg-red-50/10 shadow-sm'
                      : 'border-slate-100 hover:border-slate-200 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-extrabold uppercase text-red-600">Dossier #{dos.id}</span>
                    <FileText size={14} className="text-slate-400" />
                  </div>
                  <h4 className="text-xs font-bold text-apple-black mt-1">{dos.title}</h4>
                  <p className="text-[10px] text-slate-400 font-semibold mt-0.5 leading-normal">{dos.desc}</p>
                </div>
              ))}
            </div>

            {/* Dossier Viewer */}
            <div className="md:col-span-8 bg-apple-gray rounded-3xl p-6 border border-slate-200/40 min-h-[220px] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-200 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Classified Decryptor</span>
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-red-500 flex items-center gap-1">
                    <Eye size={12} />
                    Secure Sandbox
                  </span>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-black text-apple-black">{dossiers[activeDossier].title} Transcript</h4>
                  <div className="text-xs font-medium text-slate-700 leading-[1.8] bg-white rounded-2xl p-5 border border-slate-100/50">
                    {dossiers[activeDossier].content.map((part, i) => {
                      if (part.startsWith('[REDACTED:')) {
                        const word = part.replace('[REDACTED: ', '').replace(']', '');
                        const isRevealed = revealedWords[word];
                        return (
                          <span
                            key={i}
                            onClick={() => handleRevealWord(word)}
                            className={`cursor-pointer inline-block mx-1 font-mono transition-all px-1.5 py-0.5 rounded text-[11px] ${
                              isRevealed
                                ? 'bg-amber-100 text-amber-900 border border-amber-200'
                                : 'bg-apple-black hover:bg-slate-800 text-transparent select-none'
                            }`}
                            title="Click to reveal details"
                          >
                            {isRevealed ? word : 'XXXXXXXXXXXXXX'}
                          </span>
                        );
                      }
                      return <span key={i}>{part}</span>;
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-6 text-[10px] text-slate-400 font-semibold leading-normal flex items-start gap-2">
                <AlertCircle size={14} className="text-slate-400 mt-0.5 shrink-0" />
                <span>*Legal notice: The above text highlights synthesized cases representing standard investigative flows for demonstrating portfolio systems. Click all black highlights to read the contents.</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* District Lens Premium Supporter Paywall */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
              <Newspaper size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-apple-black">Digital Newspaper Subscription Paywall</h3>
              <p className="text-xs text-apple-darkGray font-medium">Bypass paywall blocks by selecting a simulated contribution tier and executing Stripe credit card tests.</p>
            </div>
          </div>

          {!paySuccess ? (
            <div className="grid md:grid-cols-12 gap-8">
              {/* Paywall Tier Configurator */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2.5">1. Select Patronage Tier</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'monthly', label: 'Monthly Care', val: '₹150', dur: 'mo' },
                      { id: 'yearly', label: 'Annual Ally', val: '₹1,200', dur: 'yr' },
                      { id: 'patron', label: 'News Patron', val: '₹5,000', dur: 'yr' }
                    ].map(tier => (
                      <button
                        key={tier.id}
                        onClick={() => setSelectedTier(tier.id as any)}
                        className={`p-3.5 rounded-2xl border transition-all text-left flex flex-col justify-between ${
                          selectedTier === tier.id
                            ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/10'
                            : 'bg-apple-gray border-transparent text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        <p className="text-[10px] font-black uppercase tracking-wider">{tier.label}</p>
                        <div className="mt-4">
                          <span className="text-base font-black">{tier.val}</span>
                          <span className="text-[9px] opacity-60">/{tier.dur}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated Stripe Credit Card Inputs */}
                <div className="space-y-4 bg-slate-25 rounded-3xl p-5 border border-slate-100">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">2. Secure Card Checkout</span>
                    <ShieldCheck size={16} className="text-emerald-500" />
                  </div>

                  <div>
                    <label className="text-[9px] font-black uppercase text-slate-400 block mb-1">Card Number</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="4242 4242 4242 4242"
                        value={cardNumber}
                        onChange={(e) => handleCardNumberChange(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                      <CreditCard size={14} className="text-slate-400 absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] font-black uppercase text-slate-400 block mb-1">Expiry</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={cardExpiry}
                        onChange={(e) => handleExpiryChange(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-black uppercase text-slate-400 block mb-1">CVC</label>
                      <input
                        type="password"
                        placeholder="123"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value.substring(0, 3))}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Checkout billing Card */}
              <div className="md:col-span-5 bg-apple-gray rounded-3xl p-6 border border-slate-200/40 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-1">Stripe Checkout</span>
                  <h4 className="text-sm font-extrabold text-apple-black mb-4">Summary Specifications</h4>

                  <div className="space-y-3.5 text-xs font-semibold text-slate-500">
                    <div className="flex justify-between items-center">
                      <span>Subscription Tier</span>
                      <span className="text-apple-black capitalize">{selectedTier}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Gateway Processing</span>
                      <span className="text-apple-black">₹0 (Zero Charges)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => {
                      if (cardNumber.length >= 19 && cardExpiry.length >= 5 && cardCvc.length >= 3) {
                        setPaySuccess(true);
                      }
                    }}
                    disabled={cardNumber.length < 19 || cardExpiry.length < 5 || cardCvc.length < 3}
                    className="w-full py-4 bg-blue-600 disabled:opacity-40 text-white font-bold rounded-2xl text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                  >
                    Pay & Unlock Article
                    <ChevronRight size={14} />
                  </button>
                  <p className="text-[8px] text-center text-slate-400 font-semibold mt-2">
                    *Enter "4242 4242 4242 4242" standard test numbers to trigger checkups.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Success Paywall bypassed
            <div className="text-center py-6 max-w-xl mx-auto animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-500 flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-black text-apple-black mb-1">Subscription Activated!</h3>
              <p className="text-xs text-slate-500 font-medium mb-6">
                Thank you for funding local reader-supported journalism.
              </p>

              <div className="bg-slate-25 rounded-3xl p-6 border border-slate-100 text-left space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-bold text-apple-black">The District Lens Premium</h4>
                  <span className="text-[9px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-100/50 px-2 py-0.5 rounded-md">District Patron</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                  "In a major policy resolution yesterday, the municipal council finalized over ₹18 Crores in budget allocations targeting city ecological forest parks, direct solar panel installations for municipal centers, and comprehensive drainage audits."
                </p>
                <div className="bg-white p-3 rounded-xl border border-slate-100 flex items-center justify-between text-[10px] font-bold text-emerald-700">
                  <span className="flex items-center gap-1">
                    <Unlock size={14} className="text-emerald-500" />
                    Bypassed paywall successfully!
                  </span>
                  <span>Supporter ID: DL-PAT-{Math.floor(Math.random() * 90000 + 10000)}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setPaySuccess(false);
                  setCardNumber('');
                  setCardExpiry('');
                  setCardCvc('');
                }}
                className="px-8 py-3 bg-apple-black text-white hover:bg-slate-800 text-xs font-bold rounded-xl uppercase tracking-widest transition-all"
              >
                Reset Paywall
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
