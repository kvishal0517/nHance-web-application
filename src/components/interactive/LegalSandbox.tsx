import { useState } from 'react';
import { 
  Scale, 
  FileText, 
  ShieldCheck, 
  Download, 
  ArrowRight, 
  Check, 
  AlertCircle, 
  HeartHandshake, 
  ClipboardList,
  Sparkles,
  Users
} from 'lucide-react';

interface LegalSandboxProps {
  projectName: string;
}

export function LegalSandbox({ projectName }: LegalSandboxProps) {
  const isMehra = projectName.toLowerCase().includes('mehra') || projectName.toLowerCase().includes('nair') || projectName.toLowerCase().includes('corporate');

  // NDA State
  const [startupName, setStartupName] = useState('Acme Technologies');
  const [receivingParty, setReceivingParty] = useState('Global Ventures Inc.');
  const [purpose, setPurpose] = useState('Exploring a strategic SaaS partnership and technical integration');
  const [governingLaw, setGoverningLaw] = useState('State of Delaware');
  const [confidentialityTerm, setConfidentialityTerm] = useState('5 Years');
  const [ndaGenerated, setNdaGenerated] = useState(false);
  const [signedName, setSignedName] = useState('');
  const [signed, setSigned] = useState(false);

  // Mediation State
  const [disputeDuration, setDisputeDuration] = useState<'months' | 'years'>('months');
  const [communicationScore, setCommunicationScore] = useState<number>(3); // 1 to 5
  const [cooperationWillingness, setCooperationWillingness] = useState<number>(4); // 1 to 5
  const [assetComplexity, setAssetComplexity] = useState<'low' | 'medium' | 'high'>('medium');
  const [childrenInvolved, setChildrenInvolved] = useState<boolean>(true);
  const [assessmentCalculated, setAssessmentCalculated] = useState(false);

  // NDA Content Generator
  const generateNDAText = () => {
    return `MUTUAL NON-DISCLOSURE AGREEMENT

This Mutual Non-Disclosure Agreement (the "Agreement") is entered into by and between ${startupName || "[Disclosing Party]"} ("Disclosing Party") and ${receivingParty || "[Receiving Party]"} ("Receiving Party"), effective as of the date of execution.

1. PURPOSE. The parties wish to explore a business opportunity of mutual interest related to: ${purpose || "[State Purpose Here]"} (the "Purpose"). In connection with the Purpose, each party may disclose to the other certain confidential technical and business information.

2. CONFIDENTIAL INFORMATION. "Confidential Information" means any information disclosed by one party ("Disclosing Party") to the other ("Receiving Party") that is marked as confidential or would reasonably be understood to be confidential given the nature of the information.

3. OBLIGATIONS. The Receiving Party agrees:
   (a) To use the Confidential Information solely for the Purpose;
   (b) To maintain the confidentiality of such information with the same degree of care it uses for its own similar information, but no less than reasonable care;
   (c) To restrict disclosure only to employees and advisors who need to know and are bound by confidentiality.

4. TERM & TERMINATION. The confidentiality obligations under this Agreement shall survive and continue for a period of ${confidentialityTerm} from the date of disclosure.

5. GOVERNING LAW. This Agreement shall be governed by and construed in accordance with the laws of the ${governingLaw}, without giving effect to conflicts of law principles.

IN WITNESS WHEREOF, the parties hereto have executed this Mutual Non-Disclosure Agreement.

DISCLOSING PARTY: ${startupName}
RECEIVING PARTY: ${receivingParty}
`;
  };

  // Mediation Score calculation
  const calculateMediationSuitability = () => {
    let score = 0;
    
    // Communication level adds points
    score += communicationScore * 10; // Max 50
    // Cooperation willingness adds points
    score += cooperationWillingness * 10; // Max 50
    
    // Disputes lasting years are slightly harder but highly suitable for mediation to avoid court costs
    if (disputeDuration === 'years') {
      score += 10;
    } else {
      score += 15;
    }
    
    // Asset complexity: medium is best, high might need experts but mediation is highly encouraged
    if (assetComplexity === 'low') score += 15;
    else if (assetComplexity === 'medium') score += 20;
    else score += 10;

    // Normalize out of 100
    const finalPercent = Math.min(100, Math.max(20, Math.round((score / 135) * 100)));
    
    let tier: 'high' | 'moderate' | 'litigation' = 'moderate';
    let recommendations: string[] = [];

    if (finalPercent >= 75) {
      tier = 'high';
      recommendations = [
        "Highly suitable for voluntary mediation.",
        "Both parties demonstrate adequate cooperation; mediation could resolve disputes in 4-6 weeks.",
        "Recommend preparing an asset inventory and draft parenting plans (if applicable) before the first session."
      ];
    } else if (finalPercent >= 45) {
      tier = 'moderate';
      recommendations = [
        "Mediation is recommended as a mandatory pre-trial step.",
        "Expect some resistance; a structured mediator will help maintain ground rules.",
        "Recommend 1-on-1 caucus sessions initially to cool down communication friction."
      ];
    } else {
      tier = 'litigation';
      recommendations = [
        "High conflict tier. Direct court-annexed mediation might be required.",
        "High asset complexity or absolute communication breakdown suggests legal representation is critical.",
        "Prepare for formal pre-trial hearings but keep mediation channels open to settle specific issues."
      ];
    }

    return { percent: finalPercent, tier, recommendations };
  };

  const mediationResult = calculateMediationSuitability();

  return (
    <div className="font-sans text-apple-black bg-white rounded-3xl p-6 shadow-xl border border-slate-100 max-w-4xl mx-auto">
      {isMehra ? (
        <div>
          {/* Mehra & Nair Header */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Scale size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-apple-black">Startup Mutual NDA Builder</h3>
              <p className="text-xs text-apple-darkGray font-medium">Generate custom, enforceable legal agreements in real-time.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            {/* Input Form Column */}
            <div className="md:col-span-6 space-y-5">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">Disclosing Party (Your Startup)</label>
                <input
                  type="text"
                  value={startupName}
                  onChange={(e) => setStartupName(e.target.value)}
                  placeholder="e.g., Acme Technologies"
                  className="w-full bg-apple-gray border border-slate-200/60 rounded-xl px-4 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">Receiving Party</label>
                <input
                  type="text"
                  value={receivingParty}
                  onChange={(e) => setReceivingParty(e.target.value)}
                  placeholder="e.g., Global Ventures Inc."
                  className="w-full bg-apple-gray border border-slate-200/60 rounded-xl px-4 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">Purpose of Disclosure</label>
                <textarea
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  placeholder="e.g., Exploring a strategic partnership..."
                  rows={2}
                  className="w-full bg-apple-gray border border-slate-200/60 rounded-xl px-4 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">Governing Law</label>
                  <select
                    value={governingLaw}
                    onChange={(e) => setGoverningLaw(e.target.value)}
                    className="w-full bg-apple-gray border border-slate-200/60 rounded-xl px-4 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  >
                    <option value="State of Delaware">State of Delaware</option>
                    <option value="State of California">State of California</option>
                    <option value="State of New York">State of New York</option>
                    <option value="Republic of India">Republic of India</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">Confidentiality Term</label>
                  <select
                    value={confidentialityTerm}
                    onChange={(e) => setConfidentialityTerm(e.target.value)}
                    className="w-full bg-apple-gray border border-slate-200/60 rounded-xl px-4 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  >
                    <option value="2 Years">2 Years</option>
                    <option value="3 Years">3 Years</option>
                    <option value="5 Years">5 Years</option>
                    <option value="7 Years">7 Years</option>
                    <option value="Indefinite">Indefinite</option>
                  </select>
                </div>
              </div>

              {!ndaGenerated ? (
                <button
                  onClick={() => setNdaGenerated(true)}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mt-4 shadow-lg shadow-indigo-600/20 active:scale-[0.98]"
                >
                  <Sparkles size={16} />
                  Compile Legal Draft
                </button>
              ) : (
                <div className="p-4 bg-indigo-50/70 border border-indigo-100 rounded-2xl space-y-4">
                  <div className="flex items-start gap-2.5 text-indigo-800">
                    <ShieldCheck size={18} className="mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold">Draft Compiled Successfully</h4>
                      <p className="text-[11px] opacity-90 mt-0.5">The Mutual NDA is structured using industry-standard startup clauses under {governingLaw}.</p>
                    </div>
                  </div>

                  {!signed ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={signedName}
                        onChange={(e) => setSignedName(e.target.value)}
                        placeholder="Type Full Name to Sign Digitally"
                        className="w-full bg-white border border-indigo-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <button
                        onClick={() => {
                          if (signedName.trim()) setSigned(true);
                        }}
                        disabled={!signedName.trim()}
                        className="w-full bg-apple-black hover:bg-slate-800 disabled:opacity-50 text-white font-bold py-2 rounded-lg text-xs transition-all flex items-center justify-center gap-2"
                      >
                        Sign & Stamp Agreement
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-2 rounded-xl text-xs font-bold">
                        <Check size={16} />
                        Signed digitally by {signedName}
                      </div>
                      <button
                        onClick={() => {
                          const element = document.createElement("a");
                          const file = new Blob([generateNDAText()], {type: 'text/plain'});
                          element.href = URL.createObjectURL(file);
                          element.download = `${startupName.replace(/\s+/g, "_")}_Mutual_NDA.txt`;
                          document.body.appendChild(element);
                          element.click();
                          document.body.removeChild(element);
                        }}
                        className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2 rounded-lg text-xs transition-all flex items-center justify-center gap-2 border border-slate-200"
                      >
                        <Download size={14} />
                        Download PDF/TXT Copy
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Document Preview Column */}
            <div className="md:col-span-6 bg-slate-50 border border-slate-200/50 rounded-2xl p-5 flex flex-col h-[400px]">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
                <div className="flex items-center gap-2 text-slate-500">
                  <FileText size={15} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">NDA Live Draft Preview</span>
                </div>
                <div className="flex gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto text-[10px] text-slate-600 font-mono leading-relaxed bg-white border border-slate-200/40 p-4 rounded-xl shadow-inner scrollbar-thin">
                <pre className="whitespace-pre-wrap font-sans">{generateNDAText()}</pre>
                
                {signed && (
                  <div className="mt-8 pt-4 border-t border-dashed border-slate-300 flex justify-between items-center">
                    <div>
                      <p className="text-[8px] uppercase tracking-widest text-slate-400">Verified Stamp</p>
                      <p className="text-[10px] font-bold text-indigo-700 mt-0.5">MEHRA & NAIR DIGI-STAMP</p>
                      <p className="text-[8px] text-slate-400">Hash: SHA256-NDA-{(startupName.length * 943).toString(16).toUpperCase()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[8px] uppercase tracking-widest text-slate-400">Signed Electronically</p>
                      <p className="text-xs font-semibold italic text-slate-800 font-serif border-b border-slate-400 pr-4 mt-0.5">{signedName}</p>
                      <p className="text-[8px] text-slate-400">Date: {new Date().toLocaleDateString()}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Adv Lakshmi Pillai Header */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
              <HeartHandshake size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-apple-black">Mediation Suitability Assessment</h3>
              <p className="text-xs text-apple-darkGray font-medium">Evaluate conflicts for mediation viability over destructive courtroom litigation.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            {/* Input Form Column */}
            <div className="md:col-span-6 space-y-6">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">1. Dispute Duration</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setDisputeDuration('months')}
                    className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all ${
                      disputeDuration === 'months'
                        ? 'bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-600/10'
                        : 'bg-apple-gray hover:bg-slate-200 border-transparent text-slate-600'
                    }`}
                  >
                    Recent (Under 1 Year)
                  </button>
                  <button
                    onClick={() => setDisputeDuration('years')}
                    className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all ${
                      disputeDuration === 'years'
                        ? 'bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-600/10'
                        : 'bg-apple-gray hover:bg-slate-200 border-transparent text-slate-600'
                    }`}
                  >
                    Ongoing (1+ Years)
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">2. Communication Quality</label>
                  <span className="text-xs font-bold text-teal-700">
                    {communicationScore === 1 && "Extreme Hostility"}
                    {communicationScore === 2 && "Strained / Limited"}
                    {communicationScore === 3 && "Neutral / Functional"}
                    {communicationScore === 4 && "Constructive Dialogue"}
                    {communicationScore === 5 && "Highly Cooperative"}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={communicationScore}
                  onChange={(e) => setCommunicationScore(Number(e.target.value))}
                  className="w-full accent-teal-600 bg-slate-100 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[9px] text-slate-400 mt-1.5 font-semibold">
                  <span>Hostile</span>
                  <span>Cooperative</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">3. Willingness to Negotiate</label>
                  <span className="text-xs font-bold text-teal-700">
                    {cooperationWillingness === 1 && "Refusal"}
                    {cooperationWillingness === 2 && "Highly Reluctant"}
                    {cooperationWillingness === 3 && "Open to Listening"}
                    {cooperationWillingness === 4 && "Active Cooperation"}
                    {cooperationWillingness === 5 && "Eager for Resolution"}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={cooperationWillingness}
                  onChange={(e) => setCooperationWillingness(Number(e.target.value))}
                  className="w-full accent-teal-600 bg-slate-100 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[9px] text-slate-400 mt-1.5 font-semibold">
                  <span>No Intent</span>
                  <span>High Intent</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">4. Asset Complexity</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['low', 'medium', 'high'] as const).map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setAssetComplexity(lvl)}
                        className={`py-2 rounded-lg text-xs font-bold border transition-all capitalize ${
                          assetComplexity === lvl
                            ? 'bg-teal-600 text-white border-teal-600'
                            : 'bg-apple-gray hover:bg-slate-200 border-transparent text-slate-600'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">5. Children Involved</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { val: true, lbl: 'Yes' },
                      { val: false, lbl: 'No' }
                    ].map((opt) => (
                      <button
                        key={opt.lbl}
                        onClick={() => setChildrenInvolved(opt.val)}
                        className={`py-2 rounded-lg text-xs font-bold border transition-all ${
                          childrenInvolved === opt.val
                            ? 'bg-teal-600 text-white border-teal-600'
                            : 'bg-apple-gray hover:bg-slate-200 border-transparent text-slate-600'
                        }`}
                      >
                        {opt.lbl}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setAssessmentCalculated(true)}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-teal-600/20 active:scale-[0.98]"
              >
                <ClipboardList size={16} />
                Calculate Mediation Feasibility
              </button>
            </div>

            {/* Results Column */}
            <div className="md:col-span-6 flex flex-col justify-center">
              {!assessmentCalculated ? (
                <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-8 text-center text-slate-500 h-[380px] flex flex-col items-center justify-center">
                  <HeartHandshake size={48} className="text-teal-300 mb-4 animate-pulse" />
                  <h4 className="text-sm font-bold text-slate-800 mb-1.5">Pending Assessment</h4>
                  <p className="text-xs text-slate-500 max-w-xs">Adjust conflict sliders on the left and trigger the analyzer to compute your pre-litigation diagnostic report.</p>
                </div>
              ) : (
                <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 h-[380px] flex flex-col overflow-y-auto">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-4">Mediation Diagnostic Report</h4>
                  
                  {/* Gauge */}
                  <div className="flex items-center gap-5 mb-5 p-4 bg-white border border-slate-200/40 rounded-2xl shadow-sm">
                    <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r="34"
                          stroke="#E2E8F0"
                          strokeWidth="6"
                          fill="transparent"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r="34"
                          stroke="#0D9488"
                          strokeWidth="6"
                          fill="transparent"
                          strokeDasharray={2 * Math.PI * 34}
                          strokeDashoffset={2 * Math.PI * 34 * (1 - mediationResult.percent / 100)}
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <div className="absolute flex flex-col items-center justify-center">
                        <span className="text-lg font-extrabold text-teal-800 leading-none">{mediationResult.percent}%</span>
                        <span className="text-[8px] uppercase font-bold text-slate-400 mt-0.5">Viability</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${
                          mediationResult.tier === 'high' ? 'bg-emerald-500' :
                          mediationResult.tier === 'moderate' ? 'bg-amber-500' : 'bg-rose-500'
                        }`}></span>
                        <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                          {mediationResult.tier === 'high' && "High Suitability"}
                          {mediationResult.tier === 'moderate' && "Moderate Suitability"}
                          {mediationResult.tier === 'litigation' && "Litigation Likely"}
                        </h5>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                        Based on dispute parameters, your case shows{' '}
                        <strong className="text-teal-700 font-semibold">{mediationResult.tier === 'high' ? 'excellent' : mediationResult.tier === 'moderate' ? 'favorable' : 'limited'}</strong> prospects for an out-of-court settlement via mediation.
                      </p>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="flex-1 space-y-3">
                    <h6 className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Action Plan & Next Steps</h6>
                    
                    <ul className="space-y-2">
                      {mediationResult.recommendations.map((rec, idx) => (
                        <li key={idx} className="flex gap-2.5 text-[11px] text-slate-600 leading-relaxed">
                          <span className="w-5 h-5 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shrink-0 font-bold text-[10px]">
                            {idx + 1}
                          </span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>

                    {childrenInvolved && (
                      <div className="p-3 bg-amber-50/70 border border-amber-100 rounded-xl flex gap-2 text-[10px] text-amber-800 mt-3 leading-relaxed">
                        <AlertCircle size={14} className="shrink-0 mt-0.5" />
                        <div>
                          <strong>Child Advocacy Clause:</strong> Recommended setting up a specialized Co-Parenting Joint Arrangement session during mediation to prioritize child wellness guidelines.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
