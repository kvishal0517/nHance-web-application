import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import type { AgentWorkflow } from '../../types';
import {
  Award,
  Mic,
  Mail,
  ExternalLink,
  ChevronRight,
  FileText,
  Globe,
  Twitter,
  Linkedin,
} from 'lucide-react';

const accentRed = '#DC2626';
const darkBg = '#111111';
const darkCard = '#1A1A1A';
const darkBorder = '#2A2A2A';

const researchWorkflow: AgentWorkflow = {
  title: 'Research & Source Management Agent',
  nodes: [
    {
      id: '1',
      label: 'Start Investigation',
      description: 'Journalist initiates a new investigation by defining scope, beat, and key questions.',
      automated: false,
      x: 20,
      y: 40,
    },
    {
      id: '2',
      label: 'Compile Briefing Doc',
      description: 'AI aggregates public records, past coverage, and court filings into a structured briefing document.',
      automated: true,
      x: 200,
      y: 40,
    },
    {
      id: '3',
      label: 'Daily News Digest',
      description: 'Automated daily digest of relevant developments, new sources, and breaking angles delivered each morning.',
      automated: true,
      x: 380,
      y: 40,
    },
    {
      id: '4',
      label: 'Schedule Interview',
      description: 'AI drafts outreach emails to sources and manages scheduling across time zones.',
      automated: true,
      x: 560,
      y: 40,
    },
    {
      id: '5',
      label: 'Track Publication Impact',
      description: 'Post-publication agent monitors pickups, citations, policy responses, and reader engagement.',
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

const articles = [
  {
    title: 'The Shadow Contracts: How Defence Procurement Bypasses Parliament',
    publication: 'The Wire',
    topic: 'Defence & Governance',
    year: '2024',
    excerpt: 'An 18-month investigation into single-source contracts worth ₹34,000 crore that never faced parliamentary scrutiny.',
    featured: true,
  },
  {
    title: 'Toxic Silence: Industrial Pollution in the Upper Ganga Basin',
    publication: 'Scroll.in',
    topic: 'Environment',
    year: '2024',
    excerpt: 'Field reporting from seven districts reveals how effluent data has been systematically falsified.',
    featured: false,
  },
  {
    title: 'Inside the Algorithm: How Election Ads Exploit Caste Data',
    publication: 'The Caravan',
    topic: 'Technology & Politics',
    year: '2023',
    excerpt: 'A data-driven exposé showing how micro-targeting on social platforms correlates with communal violence spikes.',
    featured: false,
  },
  {
    title: 'The Agrarian Silence: Three Seasons with Vidarbha Farmers',
    publication: 'Outlook India',
    topic: 'Agriculture',
    year: '2023',
    excerpt: 'Longitudinal field reporting that reframed the national conversation on farm loan waiver outcomes.',
    featured: false,
  },
  {
    title: 'Digital Arrest: Inside India\'s Surge of Cybercrime Extortion',
    publication: 'Mint',
    topic: 'Technology & Crime',
    year: '2022',
    excerpt: 'Undercover reporting traced a ₹900 crore extortion network operating across four states.',
    featured: false,
  },
  {
    title: 'Emergency Powers, Permanent Consequences: J&K Four Years On',
    publication: 'The Hindu',
    topic: 'Civil Liberties',
    year: '2022',
    excerpt: 'Ground reporting from 40 interviews documents the lasting economic and civic impact of Article 370 abrogation.',
    featured: false,
  },
];

const awards = [
  {
    name: 'Ramnath Goenka Excellence in Journalism Award',
    category: 'Investigative Reporting',
    year: '2024',
    org: 'Indian Express Group',
  },
  {
    name: 'Red Ink Award',
    category: 'Environmental Journalism',
    year: '2023',
    org: 'Mumbai Press Club',
  },
  {
    name: 'Chameli Devi Jain Award',
    category: 'Outstanding Woman Media Person (Jury Special)',
    year: '2022',
    org: 'Media Foundation',
  },
];

const panels = [
  { event: 'Editors Guild Annual Conclave', topic: 'Source Protection in the Digital Age', year: '2024' },
  { event: 'Global Investigative Journalism Conference', topic: 'Data Journalism in South Asia', year: '2024' },
  { event: 'IIM Ahmedabad Leadership Summit', topic: 'Media, Power and Accountability', year: '2023' },
];

export default function SiddharthJournalist() {
  return (
    <MockLayout projectName="Siddharth Rao — Journalist" accentColor={accentRed} categoryId="media">

      {/* Hero */}
      <section style={{ backgroundColor: darkBg, borderBottom: `1px solid ${darkBorder}` }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1">
              {/* Masthead rule */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1" style={{ backgroundColor: accentRed }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accentRed }}>
                  Investigative Journalist
                </span>
                <div className="h-px flex-1" style={{ backgroundColor: accentRed }} />
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight mb-2">
                Siddharth
              </h1>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-6"
                style={{ color: accentRed }}
              >
                Rao
              </h1>

              <p className="text-lg text-gray-400 mb-3 max-w-xl leading-relaxed">
                Fifteen years on the frontlines of Indian democracy — defence, environment, electoral politics, and civil liberties.
                Published in The Wire, The Hindu, The Caravan, Scroll, Mint and Outlook.
              </p>

              <p className="text-sm text-gray-600 uppercase tracking-widest font-semibold mb-8">
                Mumbai — New Delhi — On Assignment
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: accentRed }}
                >
                  <Mail size={15} />
                  Contact for Assignments
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-bold border border-gray-700 text-gray-300 hover:border-gray-500 transition-colors"
                >
                  <FileText size={15} />
                  Download Press Kit
                </a>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <a href="#" className="text-gray-600 hover:text-gray-300 transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-300 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-300 transition-colors">
                  <Globe size={18} />
                </a>
              </div>
            </div>

            {/* Byline card */}
            <div className="flex-shrink-0 w-full lg:w-72">
              <div
                className="rounded-lg p-6 border"
                style={{ backgroundColor: darkCard, borderColor: darkBorder }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: accentRed }}
                >
                  Current Beat
                </p>
                <ul className="space-y-2.5 text-sm text-gray-300">
                  {['National Security & Defence Procurement', 'Electoral Finance & Accountability', 'Environmental Regulation', 'Surveillance & Digital Rights', 'Agrarian Crisis'].map((beat) => (
                    <li key={beat} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: accentRed }} />
                      {beat}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t" style={{ borderColor: darkBorder }}>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-3">Published In</p>
                  <div className="flex flex-wrap gap-2">
                    {['The Wire', 'The Hindu', 'The Caravan', 'Scroll.in', 'Mint', 'Outlook'].map((pub) => (
                      <span
                        key={pub}
                        className="text-xs px-2 py-1 rounded border text-gray-400"
                        style={{ borderColor: darkBorder }}
                      >
                        {pub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Archive */}
      <section style={{ backgroundColor: '#0D0D0D' }} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: accentRed }}>
                Recent Work
              </p>
              <h2 className="text-3xl font-black text-white">Writing Archive</h2>
            </div>
            <a
              href="#"
              className="hidden sm:flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              Full Archive <ChevronRight size={14} />
            </a>
          </div>

          {/* Featured article */}
          {articles.filter((a) => a.featured).map((article, i) => (
            <div
              key={i}
              className="rounded-lg p-6 mb-4 border-l-4 cursor-pointer group"
              style={{ backgroundColor: darkCard, borderLeftColor: accentRed, borderTop: `1px solid ${darkBorder}`, borderRight: `1px solid ${darkBorder}`, borderBottom: `1px solid ${darkBorder}` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded"
                  style={{ backgroundColor: `${accentRed}20`, color: accentRed }}
                >
                  Featured
                </span>
                <span className="text-xs text-gray-600">{article.publication} · {article.topic} · {article.year}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{article.excerpt}</p>
              <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: accentRed }}>
                Read Investigation <ExternalLink size={13} />
              </a>
            </div>
          ))}

          {/* Archive grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {articles.filter((a) => !a.featured).map((article, i) => (
              <div
                key={i}
                className="rounded-lg p-5 border cursor-pointer group hover:border-gray-600 transition-colors"
                style={{ backgroundColor: darkCard, borderColor: darkBorder }}
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-xs text-gray-600 uppercase tracking-wider">{article.publication}</span>
                  <span className="text-gray-700">·</span>
                  <span className="text-xs" style={{ color: accentRed }}>{article.topic}</span>
                  <span className="text-gray-700 ml-auto">'{article.year.slice(2)}</span>
                </div>
                <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-gray-200 transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{article.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section style={{ backgroundColor: darkBg, borderTop: `1px solid ${darkBorder}`, borderBottom: `1px solid ${darkBorder}` }} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: accentRed }}>
              Recognition
            </p>
            <h2 className="text-3xl font-black text-white">Awards & Honours</h2>
          </div>
          <div className="space-y-4">
            {awards.map((award, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-5 rounded-lg border"
                style={{ backgroundColor: darkCard, borderColor: darkBorder }}
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: `${accentRed}20` }}
                >
                  <Award size={18} style={{ color: accentRed }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white">{award.name}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">{award.category} — {award.org}</p>
                </div>
                <span className="text-sm font-bold text-gray-600">{award.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking & Panels */}
      <section style={{ backgroundColor: '#0D0D0D' }} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: accentRed }}>
                Appearances
              </p>
              <h2 className="text-3xl font-black text-white mb-6">Speaking & Panels</h2>
              <div className="space-y-3">
                {panels.map((panel, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg border"
                    style={{ backgroundColor: darkCard, borderColor: darkBorder }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-white text-sm">{panel.event}</p>
                        <p className="text-xs text-gray-500 mt-1 flex items-center gap-1.5">
                          <Mic size={11} style={{ color: accentRed }} />
                          {panel.topic}
                        </p>
                      </div>
                      <span className="text-xs text-gray-600 flex-shrink-0">{panel.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0 lg:w-72">
              <div
                className="rounded-lg p-6 border"
                style={{ backgroundColor: darkCard, borderColor: `${accentRed}40`, borderLeftWidth: 3, borderLeftColor: accentRed }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accentRed }}>
                  Panel Inquiries
                </p>
                <p className="text-sm text-gray-400 mb-5 leading-relaxed">
                  Available for keynotes, panel discussions, and masterclasses on investigative methodology, media law, and accountability journalism.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 rounded text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: accentRed }}
                >
                  <Mail size={15} />
                  Send Speaking Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Workflow */}
      <section style={{ backgroundColor: darkBg, borderTop: `1px solid ${darkBorder}` }} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accentRed }}>
              Powered by AI
            </p>
            <h2 className="text-3xl font-black text-white">Research & Source Management</h2>
            <p className="text-gray-600 mt-2 max-w-xl mx-auto text-sm">
              An AI agent handles briefing compilation, daily news monitoring, and post-publication impact tracking — so the reporting stays human.
            </p>
          </div>
          <div
            className="rounded-lg p-6 lg:p-10 border"
            style={{ backgroundColor: darkCard, borderColor: darkBorder }}
          >
            <AgentFlowChart workflow={researchWorkflow} />
          </div>
        </div>
      </section>

    </MockLayout>
  );
}
