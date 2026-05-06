import { Grid2x2 as Grid, Layers, Users, MessageSquare, ChevronRight, ArrowUpRight } from 'lucide-react';
import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import type { AgentWorkflow } from '../../types';

const BLACK = '#111111';
const NEAR_WHITE = '#FAFAFA';
const LIGHT_GRAY = '#F2F2F2';
const MID_GRAY = '#E0E0E0';
const TEXT_SECONDARY = '#555555';
const TEXT_TERTIARY = '#888888';

const workflow: AgentWorkflow = {
  title: 'Commission Intake & Project Management',
  nodes: [
    { id: '1', label: 'Client Submits Brief', description: 'Client fills in the commission brief form with wall dimensions, theme, and timeline.', automated: false, x: 20, y: 40 },
    { id: '2', label: 'Send Questionnaire', description: 'AI sends a detailed design questionnaire to capture brand palette, references, and mood board links.', automated: true, x: 200, y: 40 },
    { id: '3', label: 'Create Project Folder', description: 'Agent creates a shared Google Drive folder with all briefs, contracts, and reference assets organised.', automated: true, x: 380, y: 40 },
    { id: '4', label: 'Milestone Delivery', description: 'At each milestone (sketch, colour rough, final), AI notifies the client and requests sign-off.', automated: true, x: 560, y: 40 },
    { id: '5', label: 'Auto-Invoice', description: 'Upon milestone approval, the system auto-generates and emails the stage invoice via Razorpay.', automated: true, x: 380, y: 160 },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
  ],
};

const projects = [
  {
    title: 'The Origin Wall',
    client: 'Bengaluru International Airport — Terminal 2',
    size: '18m × 6m',
    medium: 'Exterior latex, UV-resistant pigment',
    desc: 'A floor-to-ceiling narrative of Karnataka\'s textile heritage: weaving communities, loom geometries, and the movement of indigo across the Deccan. Commissioned as the terminal\'s permanent landmark artwork.',
    tags: ['Public Art', 'Heritage', 'Exterior'],
  },
  {
    title: 'Quiet Riot',
    client: 'Bombay Bicycle Club, Mumbai',
    size: '8m × 4m',
    medium: 'Interior acrylic on skim-coat plaster',
    desc: 'A study in controlled chaos — geometric forms that fracture and rebuild across three walls of a 200-seat café. The commission challenged Kaavya to make the art invisible and omnipresent simultaneously.',
    tags: ['Hospitality', 'Interior', 'Abstract'],
  },
  {
    title: 'Anima Botanica',
    client: 'Clinikally HQ, Gurugram',
    size: '12m × 3m',
    medium: 'Botanical ink on primed drywall',
    desc: 'A continuous mural tracing the medicinal plant lineage of an Ayurvedic skincare brand. Scientific illustration meets decorative art — every leaf was hand-researched from herbarium archives.',
    tags: ['Brand', 'Illustration', 'Office'],
  },
  {
    title: 'Watershed',
    client: 'Jal Jeevan Mission — Rajasthan',
    size: '40m total (6 installations)',
    medium: 'Weatherproof exterior paint',
    desc: 'Six murals across six villages documenting local water conservation traditions. Each artwork was co-designed with the community — residents appear as the protagonists of their own landscape.',
    tags: ['Social Impact', 'Community', 'Exterior'],
  },
];

const services = [
  {
    icon: Layers,
    title: 'Mural Commissions',
    desc: 'End-to-end — concept, material specification, surface preparation, and installation. Domestic, hospitality, and public sector. Minimum wall area 6m².',
  },
  {
    icon: Grid,
    title: 'Brand Illustration',
    desc: 'Visual identity systems, packaging illustration, and branded environments for companies that want a point of view, not clip art. Retainer and project rates available.',
  },
  {
    icon: Users,
    title: 'Workshops',
    desc: 'Two-day mural foundation workshops for designers, interior architects, and brand teams. Studio-based in Bengaluru. Max 8 participants. Next cohort: March 2025.',
  },
];

const steps = [
  { number: '01', title: 'Brief Submission', desc: 'You fill the commission form with wall specs, location, and what you want the space to feel like.' },
  { number: '02', title: 'Concept Presentation', desc: 'Two concept directions — mood board, colour palette, compositional sketch — within 10 working days.' },
  { number: '03', title: 'Execution', desc: 'Approved concept goes into production. Progress shared via a shared project folder at each milestone.' },
  { number: '04', title: 'Handover', desc: 'Final documentation, care guide, and certificate of authenticity. Walls last 15–20 years. Guaranteed.' },
];

export default function StudioKaavya() {
  return (
    <MockLayout projectName="Studio Kaavya" accentColor={BLACK} categoryId="music-art">
      {/* Hero */}
      <section style={{ backgroundColor: NEAR_WHITE }} className="pt-16 pb-0 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="pt-12 pb-10">
            <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: TEXT_TERTIARY }}>
              Mural Artist & Illustrator — Bengaluru
            </p>
            <h1 className="text-5xl sm:text-8xl font-serif font-light leading-none mb-6" style={{ color: BLACK }}>
              Studio<br />Kaavya
            </h1>
            <p className="text-lg max-w-lg leading-relaxed" style={{ color: TEXT_SECONDARY }}>
              Walls that mean something. Public murals, brand environments, and illustration work for clients
              who understand that surfaces are not neutral.
            </p>
          </div>

          {/* Hero project grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pb-2">
            {[
              { label: 'Origin Wall', ratio: 'aspect-[3/2]' },
              { label: 'Quiet Riot', ratio: 'aspect-[3/4]' },
              { label: 'Anima Botanica', ratio: 'aspect-[3/4]' },
              { label: 'Watershed', ratio: 'aspect-[3/2]' },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.ratio} rounded relative overflow-hidden group cursor-pointer`}
                style={{
                  backgroundColor: [MID_GRAY, '#D8D8D8', '#CACACA', '#DEDEDE'][i],
                }}
              >
                <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: `${BLACK}80` }}>
                  <span className="text-white text-xs font-medium">{item.label}</span>
                </div>
                {/* Decorative art-like shapes */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div
                    className="w-3/4 h-3/4 rounded-sm"
                    style={{ border: `2px solid ${BLACK}`, transform: `rotate(${[12, -8, 15, -5][i]}deg)` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section style={{ backgroundColor: NEAR_WHITE }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: TEXT_TERTIARY }}>Work</p>
              <h2 className="text-4xl font-serif font-light" style={{ color: BLACK }}>Selected Projects</h2>
            </div>
            <button
              className="hidden sm:flex items-center gap-1 text-sm underline underline-offset-4"
              style={{ color: TEXT_SECONDARY }}
            >
              View all <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="space-y-20">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-2 gap-10 items-start ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
              >
                {/* Image placeholder */}
                <div
                  className="aspect-[4/3] rounded flex items-center justify-center"
                  style={{ backgroundColor: [MID_GRAY, '#D8D8D8', '#CACACA', '#DEDEDE'][i] }}
                >
                  <div className="text-center" style={{ color: TEXT_TERTIARY }}>
                    <Grid size={32} className="mx-auto mb-2 opacity-40" />
                    <p className="text-xs">{project.size}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="py-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded border"
                        style={{ borderColor: MID_GRAY, color: TEXT_TERTIARY }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-serif font-light mb-2" style={{ color: BLACK }}>{project.title}</h3>
                  <p className="text-xs mb-4" style={{ color: TEXT_TERTIARY }}>{project.client}</p>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: TEXT_SECONDARY }}>{project.desc}</p>
                  <div className="text-xs space-y-1" style={{ color: TEXT_TERTIARY }}>
                    <p><span style={{ color: BLACK }}>Scale:</span> {project.size}</p>
                    <p><span style={{ color: BLACK }}>Medium:</span> {project.medium}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ backgroundColor: LIGHT_GRAY }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: TEXT_TERTIARY }}>Services</p>
          <h2 className="text-4xl font-serif font-light mb-16" style={{ color: BLACK }}>What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="pt-8 border-t" style={{ borderColor: MID_GRAY }}>
                <service.icon size={24} className="mb-5" style={{ color: BLACK }} />
                <h3 className="text-xl font-serif font-light mb-3" style={{ color: BLACK }}>{service.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_SECONDARY }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Process */}
      <section style={{ backgroundColor: NEAR_WHITE }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: TEXT_TERTIARY }}>Process</p>
          <h2 className="text-4xl font-serif font-light mb-16" style={{ color: BLACK }}>How a Commission Works</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number}>
                <p className="text-5xl font-serif font-light mb-4" style={{ color: MID_GRAY }}>{step.number}</p>
                <h3 className="text-lg font-medium mb-3" style={{ color: BLACK }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_SECONDARY }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-col sm:flex-row gap-4">
            <button
              className="flex items-center gap-2 px-8 py-4 rounded text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ backgroundColor: BLACK, color: NEAR_WHITE }}
            >
              <MessageSquare size={16} />
              Submit a Commission Brief
            </button>
            <button
              className="flex items-center gap-2 px-8 py-4 rounded text-sm font-semibold border transition-colors hover:bg-gray-50"
              style={{ borderColor: MID_GRAY, color: TEXT_SECONDARY }}
            >
              Download Portfolio PDF
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* AI Agent Workflow */}
      <section style={{ backgroundColor: LIGHT_GRAY }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: TEXT_TERTIARY }}>
            Built-In AI Agent
          </p>
          <h2 className="text-4xl font-serif font-light mb-4" style={{ color: BLACK }}>
            Commission Management, Automated
          </h2>
          <p className="text-sm leading-relaxed mb-12 max-w-xl" style={{ color: TEXT_SECONDARY }}>
            Every commission triggers a structured workflow — from intake questionnaire to milestone invoicing.
            No chasing emails. No missed sign-offs.
          </p>
          <div
            className="p-6 sm:p-10 rounded-xl border"
            style={{ backgroundColor: '#FFFFFF', borderColor: MID_GRAY }}
          >
            <AgentFlowChart workflow={workflow} />
          </div>
        </div>
      </section>
    </MockLayout>
  );
}
