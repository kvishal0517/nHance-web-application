import { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  Coins, 
  CheckCircle, 
  ChevronRight, 
  Sparkles, 
  DollarSign, 
  ShieldCheck,
  Briefcase,
  FileText
} from 'lucide-react';

interface FinanceSandboxProps {
  projectName: string;
}

export function FinanceSandbox({ projectName }: FinanceSandboxProps) {
  const isCornerstone = projectName.toLowerCase().includes('cornerstone');

  // Cornerstone State
  const [monthlySip, setMonthlySip] = useState<number>(15000);
  const [returnRate, setReturnRate] = useState<number>(12);
  const [years, setYears] = useState<number>(15);

  // Vivek CA State
  const [turnover, setTurnover] = useState<number>(4500000);
  const [expenses, setExpenses] = useState<number>(1500000);
  const [isItSector, setIsItSector] = useState<boolean>(true);
  const [taxCalculated, setTaxCalculated] = useState(false);

  // Cornerstone Calculations
  const P = monthlySip;
  const r = (returnRate / 100) / 12;
  const n = years * 12;
  
  // SIP formula: M = P * [ ( (1 + r)^n - 1 ) / r ] * (1 + r)
  const totalFutureWealth = Math.round(
    P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
  );
  
  const totalInvested = P * n;
  const totalGained = totalFutureWealth - totalInvested;

  // Vivek CA Calculations
  const rawRevenue = turnover;
  const rawExpenses = expenses;
  const netProfit = rawRevenue - rawExpenses;
  const gstLiability = Math.round(rawRevenue * 0.18);
  const inputTaxCredit = Math.round(rawExpenses * 0.18 * 0.8); // 80% expenses are GST eligible
  const netGstPayable = Math.round(Math.max(0, gstLiability - inputTaxCredit));
  
  // Tax Slab calculation
  const corporateTax = Math.round(netProfit * 0.25);
  const optimizedTax = Math.round(netProfit * 0.15); // under dynamic CA advice
  const savedTaxValue = corporateTax - optimizedTax;

  return (
    <div className="font-sans text-apple-black bg-white rounded-3xl p-6 shadow-xl border border-slate-100 max-w-4xl mx-auto">
      {isCornerstone ? (
        <div>
          {/* Cornerstone Wealth Growth Calculator */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
              <TrendingUp size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-apple-black">SIP & Compound Wealth Growth Estimator</h3>
              <p className="text-xs text-apple-darkGray font-medium">Drag investment metrics and interest rates to watch compound returns grow over 30 years.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            {/* Sliders Form Side */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Monthly Contribution (SIP)</label>
                  <span className="text-sm font-extrabold text-apple-black">₹{monthlySip.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="25000"
                  value={monthlySip}
                  onChange={(e) => setMonthlySip(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Expected Annual Returns (%)</label>
                  <span className="text-sm font-extrabold text-amber-600">{returnRate}% CAGR</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="25"
                  step="1"
                  value={returnRate}
                  onChange={(e) => setReturnRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Time Horizon (Years)</label>
                  <span className="text-sm font-extrabold text-apple-black">{years} Years</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              {/* Progress bar visual comparison */}
              <div className="space-y-3 bg-slate-25 rounded-2xl p-5 border border-slate-100 text-xs">
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Total Principal Invested</span>
                  <span className="font-semibold text-apple-black">₹{totalInvested.toLocaleString('en-IN')}</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden flex">
                  <div className="h-full bg-apple-black" style={{ width: `${(totalInvested / totalFutureWealth) * 100}%` }} />
                  <div className="h-full bg-amber-500" style={{ width: `${(totalGained / totalFutureWealth) * 100}%` }} />
                </div>
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Interest Wealth Earned</span>
                  <span className="font-semibold text-amber-600">₹{totalGained.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            {/* Calculations Card Side */}
            <div className="md:col-span-5 bg-apple-gray rounded-3xl p-6 border border-slate-200/40 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-1">Growth Forecast</span>
                <h4 className="text-sm font-extrabold text-apple-black mb-4">Cornerstone Wealth projection</h4>

                <div className="space-y-3.5 mb-6">
                  <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
                    <span>Invested Capital</span>
                    <span className="font-semibold text-apple-black">₹{totalInvested.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
                    <span>Interest Yielded</span>
                    <span className="font-semibold text-amber-600">₹{totalGained.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="border-t border-slate-200/60 pt-4 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Expected Asset Value</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-apple-black">₹{totalFutureWealth.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => alert('Wealth projection locked. Connect with a Cornerstone advisor!')}
                  className="w-full py-4 bg-apple-black text-white hover:bg-amber-500 hover:text-apple-black font-bold rounded-2xl text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  Lock Advisory Proposal
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Vivek CA GST & Tax Liability Calculator */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
              <Coins size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-apple-black">GST & Tax Liability Estimator</h3>
              <p className="text-xs text-apple-darkGray font-medium">Input startup revenues and operating metrics to draft estimated tax bills and review optimization plans.</p>
            </div>
          </div>

          {!taxCalculated ? (
            <div className="grid md:grid-cols-12 gap-8">
              {/* Form entries */}
              <div className="md:col-span-7 space-y-5">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Annual Startup Turnover</label>
                  <div className="flex items-center bg-apple-gray rounded-xl px-3.5 py-2.5">
                    <span className="text-slate-400 text-xs font-bold mr-2">₹</span>
                    <input
                      type="number"
                      value={turnover}
                      onChange={(e) => setTurnover(Math.max(1, Number(e.target.value)))}
                      className="w-full bg-transparent text-xs font-bold focus:outline-none text-apple-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Operating Deductible Expenses</label>
                  <div className="flex items-center bg-apple-gray rounded-xl px-3.5 py-2.5">
                    <span className="text-slate-400 text-xs font-bold mr-2">₹</span>
                    <input
                      type="number"
                      value={expenses}
                      onChange={(e) => setExpenses(Math.max(1, Number(e.target.value)))}
                      className="w-full bg-transparent text-xs font-bold focus:outline-none text-apple-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Business Category Track</label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { id: true, label: 'Tech & IT Services', desc: 'SEZ & GST export credits' },
                      { id: false, label: 'Manufacturing & Retail', desc: 'Standard ITC claims' }
                    ].map(categ => (
                      <button
                        key={categ.label}
                        type="button"
                        onClick={() => setIsItSector(categ.id)}
                        className={`p-3.5 rounded-xl text-left border transition-all ${
                          isItSector === categ.id
                            ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                            : 'bg-apple-gray border-transparent text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        <p className="text-xs font-extrabold">{categ.label}</p>
                        <p className="text-[9px] opacity-60 mt-0.5 font-semibold">{categ.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Estimate Summary Sidebar */}
              <div className="md:col-span-5 bg-apple-gray rounded-3xl p-6 border border-slate-200/40 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-1">Tax Estimator</span>
                  <h4 className="text-sm font-extrabold text-apple-black mb-4">Tax Optimization Setup</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Calculations are modeled under standard corporate slab regulations. Optimized tax targets assume dynamic deduction routing.
                  </p>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => setTaxCalculated(true)}
                    className="w-full py-4 bg-blue-600 text-white hover:bg-blue-700 font-bold rounded-2xl text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                  >
                    Draft Tax Optimization Blueprint
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // Success optimization draft
            <div className="text-center py-6 max-w-xl mx-auto animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-500 flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-black text-apple-black mb-1">Tax Assessment Form Created</h3>
              <p className="text-xs text-slate-500 font-medium mb-6">
                Here are the projected tax savings designed dynamically under Vivek & Associates.
              </p>

              <div className="bg-[#1E4D8C] text-white rounded-3xl p-6 text-left space-y-4 border border-blue-900 shadow-2xl relative">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <div>
                    <span className="text-[8px] font-black uppercase tracking-widest text-[#90CDF4] bg-[#90CDF4]/10 px-2.5 py-0.5 rounded">Vivek & Associates CA</span>
                    <h4 className="text-base font-bold mt-1.5 uppercase tracking-wide">Liability Spec Sheet</h4>
                  </div>
                  <span className="text-[11px] font-extrabold text-slate-300">Turnover: ₹{turnover.toLocaleString('en-IN')}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-300">
                  <div>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-slate-400 block mb-0.5">Net GST Payable</span>
                    <span className="text-white">₹{netGstPayable.toLocaleString('en-IN')}</span>
                  </div>
                  <div>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-slate-400 block mb-0.5">Input Tax Credit (ITC)</span>
                    <span className="text-white">₹{inputTaxCredit.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 space-y-2.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300">Standard Corporate Tax</span>
                    <span className="font-semibold text-slate-200">₹{corporateTax.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-b border-white/5 pb-2.5">
                    <span className="text-slate-300">Optimized Tax (CA strategy)</span>
                    <span className="font-extrabold text-lime-400">₹{optimizedTax.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-bold text-lime-400 pt-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck size={14} />
                      Projected Tax Saved
                    </span>
                    <span>₹{savedTaxValue.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setTaxCalculated(false)}
                className="mt-6 px-8 py-3 bg-apple-black text-white hover:bg-slate-800 text-xs font-bold rounded-xl uppercase tracking-widest transition-all"
              >
                Recalculate Assessment
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
