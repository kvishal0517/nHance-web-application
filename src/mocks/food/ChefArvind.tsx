import { UtensilsCrossed, Star, Users, Calendar, ChevronRight, Quote } from 'lucide-react';
import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import type { AgentWorkflow } from '../../types';

const RICH_BLACK = '#0A0A0A';
const NEAR_BLACK = '#111111';
const WARM_WHITE = '#F5F5F0';
const OFF_WHITE = '#E8E8E3';
const FOREST = '#2D6A4F';
const FOREST_LIGHT = '#3D8A66';
const TEXT_DIM = '#888880';
const SURFACE = '#161616';
const SURFACE_2 = '#1C1C1C';
const BORDER = '#2A2A2A';

const workflow: AgentWorkflow = {
  title: 'Event Catering Proposal Agent',
  nodes: [
    { id: '1', label: 'Client Inquiry', description: 'Potential client submits an event inquiry with date, guest count, cuisine preferences, and budget range.', automated: false, x: 20, y: 40 },
    { id: '2', label: 'Draft Proposal PDF', description: 'AI assembles a tailored proposal PDF with suggested menus, staffing plan, and a transparent cost breakdown.', automated: true, x: 200, y: 40 },
    { id: '3', label: 'Follow-up if No Response', description: 'If proposal is unopened after 48 hours, the agent sends a polite follow-up with an alternate menu option.', automated: true, x: 380, y: 40 },
    { id: '4', label: 'Create Planning Doc', description: 'On acceptance, a shared planning document is created covering venue logistics, dietary requirements, and timeline.', automated: true, x: 560, y: 40 },
    { id: '5', label: 'Final Headcount Reminder', description: '72 hours before the event, the agent requests final headcount and any last-minute dietary updates.', automated: true, x: 380, y: 160 },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
  ],
};

const experiences = [
  {
    title: 'Intimate Dinners',
    guestRange: '6–16 guests',
    icon: UtensilsCrossed,
    desc: 'A private multi-course tasting menu prepared in your home kitchen. Chef Arvind arrives four hours before service, sources the day\'s produce from local suppliers, and leaves your kitchen cleaner than he found it.',
    detail: 'Menu curated to the occasion. Wine pairing available.',
  },
  {
    title: 'Corporate Offsites',
    guestRange: '20–80 guests',
    icon: Users,
    desc: 'Full-service catering for off-sites, leadership retreats, and product launches. Designed to impress without distracting — the food moves the day forward rather than derailing it.',
    detail: 'Buffet, live stations, and plated formats.',
  },
  {
    title: 'Wedding Catering',
    guestRange: '80–400 guests',
    icon: Star,
    desc: 'Multi-day wedding catering with full event coordination. Chef Arvind has worked with properties from Udaipur to Alibaug. The team travels. Minimum 3-month advance booking.',
    detail: 'Multi-cuisine, multi-course, multi-day.',
  },
  {
    title: 'Cooking Classes',
    guestRange: '4–8 guests',
    icon: Calendar,
    desc: 'Three-hour hands-on sessions in your kitchen or our studio space in Bengaluru. Seasonal menus designed around what is actually at the market. No recipe cards — just technique.',
    detail: 'Vegetarian, coastal, and Mughal editions.',
  },
];

const dishes = [
  {
    name: 'Pork Vindaloo with Rice Congee',
    cuisine: 'Goan',
    desc: 'Three-day brined pork shoulder, Kashmiri chilli, palm feni vinegar, served alongside a slow-cooked congee that quietly does all the work.',
    pairing: 'Pairs with: Chilled Verdejo',
  },
  {
    name: 'Lamb Raan with Saffron Jus',
    cuisine: 'Mughal',
    desc: 'A 48-hour marinated leg of lamb, slow-roasted in a sealed handi. The saffron jus is made from the pan reduction — nothing is wasted.',
    pairing: 'Pairs with: Shiraz or aged Bordeaux',
  },
  {
    name: 'Wild Mushroom & Truffle Kichdi',
    cuisine: 'Contemporary Indian',
    desc: 'Short-grain rice, moong dal, foraged forest mushrooms, and the restraint to use truffle oil only at the very end. An honest dish made decadent.',
    pairing: 'Pairs with: White Burgundy',
  },
  {
    name: 'Mango & Cardamom Semifreddo',
    cuisine: 'Dessert',
    desc: 'Alphonso mango mousse, green cardamom, salted caramel tuile. Made day-of from seasonal fruit. This dish does not appear in summer — only when the mangoes are right.',
    pairing: 'Pairs with: Sauternes or nothing at all',
  },
];

const testimonials = [
  {
    quote: 'Arvind cooked for our daughter\'s wedding in Udaipur — 280 guests across three days. We had exactly zero problems. The food was exceptional and the team was invisible in the best possible way.',
    author: 'Sunanda & Rajan Mehta',
    context: 'Wedding — The Oberoi Udaivilas, Udaipur',
  },
  {
    quote: 'We\'ve done five off-sites with Chef Arvind. At this point, it\'s not optional — it\'s part of how we design the event. The food is a reason people actually engage rather than check their phones.',
    author: 'Karthik Subramaniam',
    context: 'CTO — Bangalore-based SaaS company',
  },
];

export default function ChefArvind() {
  return (
    <MockLayout projectName="Chef Arvind Krishnan" accentColor={FOREST} categoryId="food">
      {/* Hero */}
      <section
        style={{ backgroundColor: RICH_BLACK }}
        className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      >
        {/* Subtle green glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 45% 55% at 75% 30%, ${FOREST}20 0%, transparent 60%)` }}
        />

        {/* Horizontal rule lines — tasting menu aesthetic */}
        <div className="absolute top-0 bottom-0 left-0 pointer-events-none flex flex-col justify-evenly w-full opacity-5">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-full h-px" style={{ backgroundColor: WARM_WHITE }} />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-28 pt-40">
          <p className="text-xs uppercase tracking-[0.4em] mb-6" style={{ color: FOREST_LIGHT }}>
            Private Chef & Event Caterer — Bengaluru / Pan-India
          </p>
          <h1 className="text-5xl sm:text-7xl font-serif font-light leading-tight mb-2" style={{ color: WARM_WHITE }}>
            Chef Arvind
          </h1>
          <h1 className="text-5xl sm:text-7xl font-serif font-light leading-tight mb-8" style={{ color: WARM_WHITE }}>
            <span style={{ color: FOREST_LIGHT }}>Krishnan</span>
          </h1>
          <div className="w-16 h-px mb-8" style={{ backgroundColor: FOREST }} />
          <p className="text-lg max-w-xl mb-10 leading-relaxed" style={{ color: TEXT_DIM }}>
            Seventeen years in professional kitchens. A decade as a private chef. The kind of food that makes
            guests put down their phones and look at each other.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              className="flex items-center gap-2 px-8 py-4 rounded text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ backgroundColor: FOREST, color: WARM_WHITE }}
            >
              <Calendar size={16} />
              Enquire About an Event
            </button>
            <button
              className="flex items-center gap-2 px-8 py-4 rounded text-sm font-semibold border transition-colors hover:bg-white/5"
              style={{ borderColor: BORDER, color: TEXT_DIM }}
            >
              View Menus
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{ background: `linear-gradient(to top, ${RICH_BLACK}, transparent)` }}
        />
      </section>

      {/* Experiences */}
      <section style={{ backgroundColor: NEAR_BLACK }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <UtensilsCrossed size={18} style={{ color: FOREST_LIGHT }} />
            <p className="text-xs uppercase tracking-widest" style={{ color: FOREST_LIGHT }}>Experiences</p>
          </div>
          <h2 className="text-3xl font-serif mb-16" style={{ color: WARM_WHITE }}>
            Four Ways to Work Together
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="p-8 rounded-lg border flex flex-col"
                style={{ backgroundColor: SURFACE, borderColor: BORDER }}
              >
                <div className="flex items-start justify-between mb-5">
                  <exp.icon size={20} style={{ color: FOREST_LIGHT }} />
                  <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: `${FOREST}20`, color: FOREST_LIGHT }}>
                    {exp.guestRange}
                  </span>
                </div>
                <h3 className="text-xl font-serif mb-3" style={{ color: WARM_WHITE }}>{exp.title}</h3>
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: TEXT_DIM }}>{exp.desc}</p>
                <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: BORDER }}>
                  <p className="text-xs" style={{ color: FOREST_LIGHT }}>{exp.detail}</p>
                  <ChevronRight size={14} style={{ color: TEXT_DIM }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section style={{ backgroundColor: RICH_BLACK }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Star size={18} style={{ color: FOREST_LIGHT }} />
            <p className="text-xs uppercase tracking-widest" style={{ color: FOREST_LIGHT }}>Signature Dishes</p>
          </div>
          <h2 className="text-3xl font-serif mb-4" style={{ color: WARM_WHITE }}>A Sample of the Repertoire</h2>
          <p className="text-sm mb-14 max-w-xl leading-relaxed" style={{ color: TEXT_DIM }}>
            Every menu is built to the event, the season, and the guest list. These are recurring signatures —
            the dishes guests request again.
          </p>
          <div className="space-y-0">
            {dishes.map((dish, i) => (
              <div
                key={i}
                className="grid md:grid-cols-[2fr_3fr] gap-6 py-8 border-t"
                style={{ borderColor: BORDER }}
              >
                <div>
                  <span className="text-xs uppercase tracking-widest mb-2 block" style={{ color: FOREST_LIGHT }}>
                    {dish.cuisine}
                  </span>
                  <h3 className="text-xl font-serif" style={{ color: WARM_WHITE }}>{dish.name}</h3>
                </div>
                <div>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: TEXT_DIM }}>{dish.desc}</p>
                  <p className="text-xs" style={{ color: FOREST }}>{dish.pairing}</p>
                </div>
              </div>
            ))}
            <div className="py-4 border-t" style={{ borderColor: BORDER }} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: SURFACE_2 }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Quote size={18} style={{ color: FOREST_LIGHT }} />
            <p className="text-xs uppercase tracking-widest" style={{ color: FOREST_LIGHT }}>Testimonials</p>
          </div>
          <h2 className="text-3xl font-serif mb-14" style={{ color: WARM_WHITE }}>
            What Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-8 rounded-lg border"
                style={{ backgroundColor: SURFACE, borderColor: BORDER }}
              >
                <Quote size={24} className="mb-5" style={{ color: FOREST }} />
                <p className="text-sm leading-relaxed mb-6 italic" style={{ color: OFF_WHITE }}>"{t.quote}"</p>
                <div className="border-t pt-5" style={{ borderColor: BORDER }}>
                  <p className="text-sm font-semibold" style={{ color: WARM_WHITE }}>{t.author}</p>
                  <p className="text-xs mt-1" style={{ color: TEXT_DIM }}>{t.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agent Workflow */}
      <section style={{ backgroundColor: NEAR_BLACK }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Calendar size={18} style={{ color: FOREST_LIGHT }} />
            <p className="text-xs uppercase tracking-widest" style={{ color: FOREST_LIGHT }}>AI-Powered Operations</p>
          </div>
          <h2 className="text-3xl font-serif mb-4" style={{ color: WARM_WHITE }}>
            From Inquiry to Plate, Automated
          </h2>
          <p className="text-sm leading-relaxed mb-12 max-w-xl" style={{ color: TEXT_DIM }}>
            Every client inquiry triggers a structured proposal workflow — tailored PDFs, intelligent follow-ups,
            and event planning documents generated automatically.
          </p>
          <div
            className="p-6 sm:p-10 rounded-xl border"
            style={{ backgroundColor: SURFACE, borderColor: BORDER }}
          >
            <AgentFlowChart workflow={workflow} />
          </div>
        </div>
      </section>
    </MockLayout>
  );
}
