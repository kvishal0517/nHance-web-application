import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import type { AgentWorkflow } from '../../types';
import {
  FileText,
  Building2,
  ClipboardCheck,
  ArrowLeftRight,
  Lightbulb,
  ArrowRight,
  Download,
  Calendar,
  AlertCircle,
  CheckCircle2,
  BookOpen,
  Factory,
  Stethoscope,
  ShoppingBag,
  Code,
  Bell,
  Clock,
  Shield,
} from 'lucide-react';

const blue = '#1E4D8C';
const blueDark = '#163A6A';
const blueLight = '#2563EB';

const complianceWorkflow: AgentWorkflow = {
  title: 'Compliance Deadline & Client Communication Agent',
  nodes: [
    {
      id: '1',
      label: 'Compliance Calendar',
      description: 'Master compliance calendar synced with CBDT, GSTN, and MCA statutory deadlines.',
      automated: true,
      x: 20,
      y: 40,
    },
    {
      id: '2',
      label: '30-Day Reminder',
      description: 'Clients are notified 30 days before each deadline with a checklist of required documents.',
      automated: true,
      x: 200,
      y: 40,
    },
    {
      id: '3',
      label: '7-Day Reminder',
      description: 'Urgent follow-up sent 7 days out. Escalates to phone call if no response within 48 hours.',
      automated: true,
      x: 380,
      y: 40,
    },
    {
      id: '4',
      label: 'Document Collection',
      description: 'Secure document upload portal link sent to client for required compliance documents.',
      automated: true,
      x: 560,
      y: 40,
    },
    {
      id: '5',
      label: 'Post-Filing Confirmation',
      description: 'Once filing is complete, acknowledgement and filing summary auto-sent to client.',
      automated: true,
      x: 200,
      y: 160,
    },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
  ],
};

const services = [
  {
    icon: FileText,
    title: 'GST Filing & Advisory',
    description: 'Monthly, quarterly, and annual GST returns (GSTR-1, 3B, 9). Reconciliation, ITC optimization, and department liaison.',
    tags: ['GSTR-1', 'GSTR-3B', 'GSTR-9', 'ITC Audit'],
  },
  {
    icon: Building2,
    title: 'Company Incorporation',
    description: 'Private limited, LLP, OPC, and Section 8 company registrations. End-to-end MCA filings, DSC, and DIN.',
    tags: ['Pvt Ltd', 'LLP', 'OPC', 'MCA Filing'],
  },
  {
    icon: ClipboardCheck,
    title: 'Statutory Audit',
    description: 'Companies Act 2013 compliant audit, tax audit under 44AB, and internal audit for process improvement.',
    tags: ['Tax Audit', 'Statutory Audit', 'Internal Audit'],
  },
  {
    icon: ArrowLeftRight,
    title: 'Transfer Pricing',
    description: 'TP documentation, Form 3CEB, benchmarking studies, and APA applications for MNC subsidiaries.',
    tags: ['Form 3CEB', 'Benchmarking', 'APA'],
  },
  {
    icon: Lightbulb,
    title: 'Startup Advisory',
    description: 'DPIIT recognition, Startup India benefits, ESOP structuring, due diligence support, and fundraise documentation.',
    tags: ['DPIIT', 'ESOP', 'Due Diligence'],
  },
];

const industries = [
  { icon: Factory, name: 'Manufacturing', detail: 'GST, customs, and cost audit expertise' },
  { icon: Code, name: 'Technology & SaaS', detail: 'ESOP, transfer pricing, and overseas subsidiaries' },
  { icon: Stethoscope, name: 'Healthcare', detail: 'Clinical establishment act and pharma compliance' },
  { icon: ShoppingBag, name: 'Retail & E-commerce', detail: 'Multi-state GST, marketplace TCS/TDS compliance' },
];

const complianceDeadlines = [
  { date: 'Jun 15', task: 'Advance Tax — Q1 Instalment', category: 'Income Tax', urgency: 'medium' },
  { date: 'Jun 20', task: 'GSTR-3B Filing — May 2025', category: 'GST', urgency: 'high' },
  { date: 'Jun 11', task: 'GSTR-1 — May 2025 (Monthly)', category: 'GST', urgency: 'high' },
  { date: 'Jun 30', task: 'LUT Renewal for FY 2025–26', category: 'GST', urgency: 'medium' },
  { date: 'Jul 31', task: 'ITR Filing — Individuals', category: 'Income Tax', urgency: 'low' },
  { date: 'Sep 30', task: 'Tax Audit Report — 44AB', category: 'Audit', urgency: 'low' },
];

const resources = [
  {
    title: 'GST Compliance Checklist 2024–25',
    type: 'PDF Guide',
    pages: '12 pages',
    downloads: '1,200+',
    icon: FileText,
  },
  {
    title: 'Startup India — DPIIT Registration Walkthrough',
    type: 'Step-by-Step Guide',
    pages: '8 pages',
    downloads: '840+',
    icon: Building2,
  },
  {
    title: 'Transfer Pricing Documentation Essentials',
    type: 'Technical Note',
    pages: '15 pages',
    downloads: '560+',
    icon: ArrowLeftRight,
  },
];

const urgencyStyles: Record<string, { bg: string; text: string; label: string }> = {
  high: { bg: '#FEE2E2', text: '#DC2626', label: 'Urgent' },
  medium: { bg: '#FEF3C7', text: '#D97706', label: 'Upcoming' },
  low: { bg: '#DBEAFE', text: '#1D4ED8', label: 'Planned' },
};

export default function VivekCAFirm() {
  return (
    <MockLayout projectName="Vivek & Associates — CA Firm" accentColor={blue} categoryId="finance">
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${blueDark} 0%, ${blue} 60%, ${blueLight} 100%)` }}
      >
        {/* Decorative diagonal lines */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, white 0, white 1px, transparent 0, transparent 8px)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20 mb-8"
              >
                <Shield size={13} />
                Chartered Accountants · ICAI Registered · Est. 2006
              </div>

              <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
                Vivek &amp; Associates
                <br />
                <span className="text-blue-200">CA Firm</span>
              </h1>

              <p className="text-lg text-blue-200 mb-4 leading-relaxed">
                Full-spectrum chartered accountancy services for businesses at every stage. From startup registration to
                statutory audit, transfer pricing to GST — under one roof.
              </p>

              <p className="text-blue-300 text-sm mb-10 flex items-center gap-2">
                <CheckCircle2 size={15} className="flex-shrink-0 text-green-400" />
                Serving 200+ businesses across India. Offices in Bangalore, Chennai & Mumbai.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm bg-white transition-transform hover:scale-105"
                  style={{ color: blue }}
                >
                  Book a Free Consultation
                  <ArrowRight size={16} />
                </button>
                <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm text-white border border-white/30 hover:border-white/60 transition-colors">
                  <Calendar size={16} />
                  See Upcoming Deadlines
                </button>
              </div>
            </div>

            {/* Stats card */}
            <div
              className="rounded-2xl p-7 border bg-white/5 border-white/10"
            >
              <p className="text-xs uppercase tracking-widest text-blue-300 mb-5">Firm at a Glance</p>
              <div className="grid grid-cols-2 gap-5 mb-7">
                {[
                  { value: '200+', label: 'Active Clients' },
                  { value: '18 Yrs', label: 'In Practice' },
                  { value: '12', label: 'Qualified CAs' },
                  { value: '3', label: 'Office Locations' },
                ].map((s, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4">
                    <p className="text-2xl font-black text-white mb-0.5">{s.value}</p>
                    <p className="text-xs text-blue-300">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 pt-5">
                <p className="text-xs text-blue-300 mb-3">Practice Areas</p>
                <div className="flex flex-wrap gap-2">
                  {['GST', 'Income Tax', 'Audit', 'Company Law', 'Transfer Pricing', 'FEMA'].map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest mb-2 font-semibold" style={{ color: blue }}>
              Practice Areas
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-3">Our Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Comprehensive CA services delivered by qualified professionals with deep industry expertise.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <div
                key={i}
                className={`rounded-2xl p-7 border border-gray-100 hover:border-blue-200 transition-all ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${blue}10` }}
                >
                  <service.icon size={22} style={{ color: blue }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold"
                      style={{ backgroundColor: `${blue}08`, color: blue }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest mb-2 font-semibold" style={{ color: blue }}>
              Sector Experience
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-3">Industry Focus</h2>
            <p className="text-gray-500">
              We understand the regulatory nuance of the industries we serve — not just the general rules.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 transition-all group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors"
                  style={{ backgroundColor: `${blue}10` }}
                >
                  <industry.icon size={22} style={{ color: blue }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-gray-500">{industry.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Calendar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs uppercase tracking-widest mb-2 font-semibold" style={{ color: blue }}>
                Stay Ahead
              </p>
              <h2 className="text-3xl font-black text-gray-900">Compliance Deadline Calendar</h2>
              <p className="text-gray-500 mt-2">Key upcoming statutory deadlines for businesses in India.</p>
            </div>
            <button
              className="hidden sm:flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg border transition-colors hover:bg-gray-50"
              style={{ borderColor: `${blue}30`, color: blue }}
            >
              <Calendar size={15} />
              Full Calendar
            </button>
          </div>

          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            {/* Table header */}
            <div
              className="grid grid-cols-4 gap-0 text-xs font-bold uppercase tracking-wider py-3 px-5 border-b border-gray-100"
              style={{ backgroundColor: `${blue}06`, color: blue }}
            >
              <span>Due Date</span>
              <span className="col-span-2">Compliance Task</span>
              <span className="text-right">Status</span>
            </div>

            {complianceDeadlines.map((item, i) => {
              const style = urgencyStyles[item.urgency];
              return (
                <div
                  key={i}
                  className={`grid grid-cols-4 gap-0 items-center py-4 px-5 border-b border-gray-50 hover:bg-gray-50 transition-colors ${i === complianceDeadlines.length - 1 ? 'border-b-0' : ''}`}
                >
                  <div>
                    <p className="text-sm font-bold text-gray-900">{item.date}</p>
                    <p className="text-xs text-gray-400">2025</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm font-semibold text-gray-800">{item.task}</p>
                    <span
                      className="inline-block mt-1 px-2 py-0.5 rounded text-xs font-medium"
                      style={{ backgroundColor: `${blue}10`, color: blue }}
                    >
                      {item.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <span
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: style.bg, color: style.text }}
                    >
                      <AlertCircle size={11} />
                      {style.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-gray-400 mt-3 flex items-center gap-1.5">
            <Clock size={12} />
            Deadlines shown are for general reference. Actual dates may vary — consult your CA for filing-specific guidance.
          </p>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest mb-2 font-semibold" style={{ color: blue }}>
              Free Guides
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-3">Resource Library</h2>
            <p className="text-gray-500">Practical guides written by our team. No sign-up required.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 flex flex-col">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${blue}10` }}
                >
                  <resource.icon size={20} style={{ color: blue }} />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="px-2.5 py-1 rounded-md text-xs font-semibold"
                    style={{ backgroundColor: `${blue}08`, color: blue }}
                  >
                    {resource.type}
                  </span>
                  <span className="text-xs text-gray-400">{resource.pages}</span>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-3 flex-1">{resource.title}</h3>

                <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-100">
                  <span className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Download size={12} />
                    {resource.downloads} downloads
                  </span>
                  <button
                    className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg transition-colors hover:opacity-90"
                    style={{ backgroundColor: `${blue}10`, color: blue }}
                  >
                    <Download size={14} />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: blue }}
            >
              <BookOpen size={15} />
              View All Resources
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* AI Agent Workflow */}
      <section className="py-24" style={{ backgroundColor: blueDark }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs mb-6 text-white border-white/20 bg-white/5"
            >
              <Bell size={12} />
              Zero Missed Deadlines
            </div>
            <h2 className="text-3xl font-black text-white mb-4">
              Automated Compliance Reminders
            </h2>
            <p className="text-blue-300 max-w-xl mx-auto">
              Our AI agent tracks every statutory deadline and proactively communicates with clients — so nothing slips
              through the cracks.
            </p>
          </div>

          <div className="rounded-2xl p-6 lg:p-10 border border-white/8 bg-white/4">
            <AgentFlowChart workflow={complianceWorkflow} />
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mt-10">
            {[
              {
                icon: Bell,
                title: '30-Day Advance Notice',
                detail: 'Clients receive document checklists a full month before each deadline',
              },
              {
                icon: Shield,
                title: 'Zero Penalties',
                detail: 'Automated escalation ensures no client has missed a statutory deadline in 3 years',
              },
              {
                icon: CheckCircle2,
                title: 'Post-Filing Confirmation',
                detail: 'Automatic filing acknowledgements with summary sent to every client',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-white/8 bg-white/4"
              >
                <item.icon size={18} className="mb-3 text-blue-300" />
                <p className="font-bold text-sm text-white mb-1">{item.title}</p>
                <p className="text-xs text-blue-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MockLayout>
  );
}
