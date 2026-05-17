import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import { AnimatedSection } from '../../components/AnimatedSection';
import type { AgentWorkflow } from '../../types';
import {
  FileText,
  Building2,
  ClipboardCheck,
  ArrowLeftRight,
  ArrowRight,
  Download,
  AlertCircle,
  BookOpen,
  Factory,
  Stethoscope,
  ShoppingBag,
  Code,
  Bell,
  Shield,
  Zap,
  TrendingUp,
  FileCheck,
  Award
} from 'lucide-react';

const blue = '#1E4D8C';

const complianceWorkflow: AgentWorkflow = {
  title: 'Statutory Compliance & Deadline Guard',
  nodes: [
    { id: '1', label: 'Statutory Pulse', description: 'Agent monitors MCA, CBDT, and GSTN portals for new notifications.', automated: true, x: 20, y: 40 },
    { id: '2', label: 'Deadline Mapping', description: 'AI maps deadlines to the specific client roster based on business type.', automated: true, x: 200, y: 40 },
    { id: '3', label: 'T-30 Checklist', description: 'Automated document checklist dispatched 30 days before filing.', automated: true, x: 380, y: 40 },
    { id: '4', label: 'Auto-Reconciliation', description: 'AI cross-references client uploads with bank statements and invoices.', automated: true, x: 560, y: 40 },
    { id: '5', label: 'Filing Summary', description: 'On completion, a structured tax-impact report is auto-generated for the client.', automated: true, x: 380, y: 160 },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
  ],
};

const deadlines = [
  { date: 'Jun 15', task: 'Advance Tax — Q1 Instalment', category: 'Income Tax', status: 'Upcoming' },
  { date: 'Jun 20', task: 'GSTR-3B Filing — May 2025', category: 'GST', status: 'Action Required' },
  { date: 'Jul 31', task: 'ITR Filing — Individuals', category: 'Income Tax', status: 'Planned' },
  { date: 'Sep 30', task: 'Tax Audit Report — 44AB', category: 'Audit', status: 'Planned' },
];

export default function VivekCAFirm() {
  return (
    <MockLayout projectName="Vivek & Associates — CA Firm" accentColor={blue} categoryId="finance">
      <div className="bg-white text-slate-900 selection:bg-blue-50 overflow-hidden font-sans">
        
        {/* Authoritative Hero */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-50">
          {/* Technical Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#1E4D8C_1px,transparent_1px)] [background-size:20px_20px]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-8">
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white text-blue-800 text-[11px] font-bold uppercase tracking-[0.25em] mb-12 shadow-sm border border-slate-100">
                    <Shield size={14} className="text-blue-600" />
                    Chartered Accountants · Est. 2006 · Mumbai · Bangalore
                  </div>

                  <h1 className="text-7xl lg:text-[110px] font-black leading-[0.9] tracking-tighter mb-10 text-slate-900">
                    Full-spectrum 
                    <br />
                    <span className="text-blue-700 italic">Integrity.</span>
                  </h1>

                  <p className="text-2xl lg:text-3xl text-slate-500 max-w-2xl mb-16 font-medium leading-relaxed">
                    Statutory audit, tax advisory, and startup compliance delivered with clinical precision. We handle the technical depth, so you can focus on growth.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-8 items-center">
                    <button className="px-14 py-6 bg-blue-800 text-white font-bold rounded-xl text-lg shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center gap-3">
                      Secure Consultation
                      <ArrowRight size={20} />
                    </button>
                    <button className="text-lg font-bold text-slate-400 hover:text-blue-800 transition-colors border-b-2 border-transparent hover:border-blue-800 pb-1">
                      2025 Compliance Calendar
                    </button>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>

          {/* Verification Strip */}
          <div className="absolute bottom-12 right-12 hidden lg:flex flex-col gap-6 text-right">
            <div className="flex items-center gap-4 justify-end">
              <div>
                <p className="text-3xl font-black text-slate-900 tracking-tight">200+</p>
                <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Active Retainers</p>
              </div>
              <FileCheck size={32} className="text-blue-600 opacity-20" />
            </div>
            <div className="flex items-center gap-4 justify-end">
              <div>
                <p className="text-3xl font-black text-slate-900 tracking-tight">18yr</p>
                <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Institutional Tenure</p>
              </div>
              <TrendingUp size={32} className="text-blue-600 opacity-20" />
            </div>
          </div>
        </section>

        {/* Practice Areas Grid */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <AnimatedSection>
                <p className="text-blue-700 font-bold uppercase tracking-[0.4em] text-[11px] mb-6">Expertise</p>
                <h2 className="text-6xl font-black tracking-tighter">Practices.</h2>
              </AnimatedSection>
              <button className="hidden sm:flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-blue-800 border-b-2 border-blue-800 pb-1">
                View All Services <ArrowRight size={16} />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { i: FileText, t: 'GST Advisory', d: 'Filing, reconciliation, and ITC optimization.' },
                { i: Building2, t: 'Incorporation', d: 'Start-to-finish company & LLP registration.' },
                { i: ClipboardCheck, t: 'Statutory Audit', d: 'Act compliant audit and tax reporting.' },
                { i: ArrowLeftRight, t: 'Transfer Pricing', d: 'MNC compliance and benchmarking studies.' },
              ].map((s, i) => (
                <AnimatedSection key={i} delay={i * 100} animationType="scale">
                  <div className="group bg-slate-50 rounded-[40px] p-10 hover:bg-blue-800 hover:shadow-2xl transition-all duration-700 border border-slate-100 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-10 group-hover:bg-blue-700 transition-all shadow-sm">
                      <s.i size={24} className="text-blue-800 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-white transition-colors">{s.t}</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed flex-1 group-hover:text-blue-100 transition-colors">{s.d}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Calendar - Interactive Table Visual */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <AnimatedSection>
                <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6">Stay Ahead.</h2>
                <p className="text-xl text-slate-500 font-medium max-w-xl mx-auto">Critical statutory deadlines for FY 2025–26. We ensure zero penalties, every time.</p>
              </AnimatedSection>
            </div>

            <div className="bg-white rounded-[48px] border border-slate-200 shadow-xl overflow-hidden">
              <div className="grid grid-cols-4 bg-slate-900 p-8 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-white/5">
                <span>Due Date</span>
                <span className="col-span-2">Task</span>
                <span className="text-right">Priority</span>
              </div>
              <div className="divide-y divide-slate-100">
                {deadlines.map((d, i) => (
                  <div key={i} className="grid grid-cols-4 p-8 items-center group hover:bg-slate-50 transition-colors">
                    <div className="flex flex-col">
                      <span className="text-lg font-black text-slate-900">{d.date}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">2025</span>
                    </div>
                    <div className="col-span-2">
                      <p className="text-base font-bold text-slate-900 mb-1">{d.task}</p>
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[9px] font-black uppercase tracking-widest">{d.category}</span>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                        d.status === 'Action Required' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-700'
                      }`}>
                        <AlertCircle size={10} />
                        {d.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-8 bg-slate-50 text-center">
                <button className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-800 hover:gap-4 transition-all flex items-center justify-center gap-2 mx-auto">
                  Sync with Calendar <Download size={14} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Compliance Workflow */}
        <section className="py-32 bg-blue-900 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <AnimatedSection delay={200} animationType="scale">
                <div className="p-10 rounded-[64px] bg-white shadow-2xl border border-white/10 overflow-hidden">
                  <AgentFlowChart workflow={complianceWorkflow} />
                </div>
              </AnimatedSection>
              <div>
                <AnimatedSection animationType="blur">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 text-blue-300 text-[11px] font-bold uppercase tracking-[0.25em] mb-10 border border-white/10">
                    <Zap size={16} className="fill-blue-400" />
                    Compliance Intelligence
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-10 leading-[0.95]">
                    Zero missed 
                    <br />
                    deadlines.
                  </h2>
                  <p className="text-xl text-blue-100/60 font-medium leading-relaxed mb-12">
                    Regulatory compliance shouldn't be a source of stress. Our proprietary deadline guard agent monitors the statutory pulse of MCA and Income Tax portals, auto-mapping deadlines to your business type and proactively collecting required documentation.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 group hover:bg-white hover:text-blue-900 transition-all duration-500">
                      <Bell size={24} className="text-blue-400 mb-6 group-hover:text-blue-900" />
                      <h4 className="font-black text-sm uppercase tracking-widest mb-2">Proactive Alerts</h4>
                      <p className="text-xs text-blue-200/60 group-hover:text-blue-800 font-medium">T-30 day automated checklists.</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 group hover:bg-white hover:text-blue-900 transition-all duration-500">
                      <FileCheck size={24} className="text-blue-400 mb-6 group-hover:text-blue-900" />
                      <h4 className="font-black text-sm uppercase tracking-widest mb-2">Impact Audit</h4>
                      <p className="text-xs text-blue-200/60 group-hover:text-blue-800 font-medium">Instant post-filing tax summaries.</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Strip */}
        <div className="bg-white py-24 border-y border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-16">
              {[
                { i: Factory, l: 'Manufacturing' },
                { i: Code, l: 'Tech & SaaS' },
                { i: Stethoscope, l: 'Healthcare' },
                { i: ShoppingBag, l: 'E-commerce' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <item.i size={24} className="text-slate-200 group-hover:text-blue-800 transition-colors" />
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-slate-900 transition-colors">{item.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <section className="py-40 bg-[#FAF9F6] relative overflow-hidden text-center text-slate-900">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <AnimatedSection animationType="scale">
              <Award size={48} className="mx-auto text-blue-800 mb-12" />
              <h2 className="text-6xl lg:text-[100px] font-black tracking-tighter mb-12 leading-[0.85]">
                Precision in 
                <br />
                the numbers.
              </h2>
              <p className="text-2xl text-slate-500 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                Currently taking on new H2 retainers for statutory audit and GST advisory. Secure your business's financial foundation today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <button className="px-14 py-6 bg-blue-800 text-white font-bold rounded-xl text-xl shadow-2xl hover:scale-105 transition-all active:scale-95">
                  Book Initial Audit
                </button>
                <button className="text-lg font-bold text-slate-400 hover:text-blue-800 transition-colors flex items-center gap-2">
                  View Resource Library <BookOpen size={24} />
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </div>
    </MockLayout>
  );
}
