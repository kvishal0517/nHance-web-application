import { UtensilsCrossed, Star, Clock, Users, MapPin, Phone, ChevronRight, Flame } from 'lucide-react';
import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import type { AgentWorkflow } from '../../types';

const TERRACOTTA = '#3D1E0C';
const TERRACOTTA_DARK = '#2A1508';
const SAFFRON = '#D4A574';
const SAFFRON_MUTED = '#B88A58';
const SURFACE = '#4A2510';
const SURFACE_2 = '#311608';

const workflow: AgentWorkflow = {
  title: 'Reservation & Guest Experience Agent',
  nodes: [
    { id: '1', label: 'Reservation Booked', description: 'Guest completes a reservation via the website, phone, or OpenTable integration.', automated: false, x: 20, y: 40 },
    { id: '2', label: 'Send Confirmation', description: 'Instant personalised email confirmation with directions, dress code, and parking details.', automated: true, x: 200, y: 40 },
    { id: '3', label: 'Occasion Flag to Staff', description: 'If an occasion (birthday, anniversary) is noted, the agent alerts front-of-house with a preparation checklist.', automated: true, x: 380, y: 40 },
    { id: '4', label: 'Day-of Reminder', description: 'A warm SMS reminder is sent on the day with a link to update guest count or dietary requirements.', automated: true, x: 560, y: 40 },
    { id: '5', label: 'Post-Dining Review Request', description: 'Two hours after the reservation slot, the agent sends a Google and Zomato review request.', automated: true, x: 200, y: 160 },
    { id: '6', label: 'Negative Review Alert', description: 'If a 1–2 star review is detected, the manager is alerted within 5 minutes for rapid response.', automated: true, x: 380, y: 160 },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
    { from: '5', to: '6' },
  ],
};

const dishes = [
  {
    name: 'Laal Maas',
    origin: 'Rajput Royal Kitchens, 15th c.',
    region: 'Rajasthan',
    desc: 'Whole mathania chillies, slow-rendered mutton, and two days of patience. The version served here follows a handwritten recipe from a Jodhpur haveli.',
    badge: 'Chef\'s Signature',
  },
  {
    name: 'Dal Bukhara',
    origin: 'Bukhara, ITC Maurya, 1977',
    region: 'North India',
    desc: 'Black urad dal, cooked overnight on a dying flame, finished with a single stroke of white butter. Unchanged since 1977 and for good reason.',
    badge: 'Heritage Recipe',
  },
  {
    name: 'Malabar Prawn Moilee',
    origin: 'Syrian Christian Coast, Kerala',
    region: 'Kerala',
    desc: 'Tiger prawns from Cochin, turmeric-tinted coconut milk, green chillies, and the restraint to do nothing more. A dish that knows exactly what it is.',
    badge: 'Coastal Special',
  },
  {
    name: 'Dum Biryani — Hyderabadi',
    origin: 'Nizam\'s Court, 18th c.',
    region: 'Hyderabad',
    desc: 'Aged basmati, twice-marinated lamb, saffron milk, and kewra water. The handi is sealed at the table. What emerges is either luck or skill — after 22 years, it is skill.',
    badge: 'House Speciality',
  },
  {
    name: 'Raan-e-Makhani',
    origin: 'Mughal Court, 16th c.',
    region: 'Delhi',
    desc: 'A full leg of lamb, marinated for 48 hours in papaya and spice, roasted in a wood-fired tandoor, served on a platter made for sharing. Serves 3–4. Must be pre-ordered.',
    badge: 'Pre-Order Only',
  },
  {
    name: 'Mishti Doi & Rasgulla',
    origin: 'Patisseries of Calcutta',
    region: 'Bengal',
    desc: 'Set in terracotta matkas, the mishti doi carries the slight ferment that no refrigerated dairy can replicate. Served alongside single-day rasgullas from the kitchen.',
    badge: 'Dessert',
  },
];

const timings = [
  { day: 'Tuesday – Thursday', lunch: '12:00 – 15:00', dinner: '19:00 – 23:00' },
  { day: 'Friday – Saturday', lunch: '12:00 – 15:30', dinner: '19:00 – 23:30' },
  { day: 'Sunday', lunch: '12:00 – 16:00', dinner: '19:00 – 22:30' },
];

export default function CopperHandi() {
  return (
    <MockLayout projectName="The Copper Handi" accentColor={SAFFRON} categoryId="food">
      {/* Hero */}
      <section
        style={{ background: `linear-gradient(160deg, ${TERRACOTTA} 0%, ${TERRACOTTA_DARK} 100%)` }}
        className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      >
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute border rounded-full"
              style={{
                width: `${(i + 1) * 120}px`,
                height: `${(i + 1) * 120}px`,
                borderColor: SAFFRON,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </div>

        {/* Atmospheric glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 50% 60% at 65% 35%, ${SAFFRON}25 0%, transparent 65%)` }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-28 pt-40">
          <div className="flex items-center gap-3 mb-8">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={14} fill={SAFFRON} style={{ color: SAFFRON }} />
            ))}
            <span className="text-xs tracking-widest ml-2" style={{ color: SAFFRON }}>
              Fine Dining · Heritage Indian Cuisine
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-serif font-light text-white leading-tight mb-6">
            The<br />
            <span style={{ color: SAFFRON }}>Copper Handi</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-xl mb-10 leading-relaxed">
            Two decades of serving India's forgotten table — the food eaten at darbars, in coastal kitchens, and
            on long train journeys before the world homogenised. Heritage recipes, intact.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              className="flex items-center gap-2 px-8 py-4 rounded text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ backgroundColor: SAFFRON, color: TERRACOTTA_DARK }}
            >
              <UtensilsCrossed size={16} />
              Reserve a Table
            </button>
            <button
              className="flex items-center gap-2 px-8 py-4 rounded text-sm font-semibold border transition-colors hover:bg-white/5"
              style={{ borderColor: `${SAFFRON}50`, color: SAFFRON }}
            >
              View Menu
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: `linear-gradient(to top, ${TERRACOTTA_DARK}, transparent)` }}
        />
      </section>

      {/* Menu Highlights */}
      <section style={{ backgroundColor: TERRACOTTA_DARK }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Flame size={18} style={{ color: SAFFRON }} />
            <p className="text-xs uppercase tracking-widest" style={{ color: SAFFRON }}>Menu Highlights</p>
          </div>
          <h2 className="text-3xl font-serif text-white mb-4">Six Dishes. Six Civilisations.</h2>
          <p className="text-gray-400 mb-12 max-w-xl leading-relaxed">
            Every recipe on our menu carries a provenance note — where it originated, who ate it, and what has
            changed (or hasn't) in the centuries since.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {dishes.map((dish, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border"
                style={{ backgroundColor: SURFACE, borderColor: `${SAFFRON}20` }}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-serif text-white">{dish.name}</h3>
                  <span
                    className="flex-shrink-0 text-xs px-2 py-1 rounded whitespace-nowrap"
                    style={{ backgroundColor: `${SAFFRON}20`, color: SAFFRON }}
                  >
                    {dish.badge}
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-3 text-xs" style={{ color: SAFFRON_MUTED }}>
                  <span className="flex items-center gap-1">
                    <MapPin size={11} />
                    {dish.region}
                  </span>
                  <span>{dish.origin}</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{dish.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef's Story */}
      <section style={{ backgroundColor: SURFACE_2 }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div
            className="aspect-[3/4] rounded-lg flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${SURFACE}, ${TERRACOTTA})`, border: `1px solid ${SAFFRON}20` }}
          >
            <div className="text-center" style={{ color: SAFFRON }}>
              <UtensilsCrossed size={48} className="mx-auto mb-4 opacity-30" />
              <p className="text-xs opacity-50">Chef Photograph</p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: SAFFRON }}>The Kitchen</p>
            <h2 className="text-3xl font-serif text-white mb-6">Chef Mohan Krishnaswamy</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
              <p>
                Mohan spent his first decade in professional kitchens not cooking — but travelling. Rajasthan. Bengal.
                Coorg. The Konkan coast. He was looking for the recipes that had not yet been gentrified, the ones
                still made by the people they were invented for.
              </p>
              <p>
                He opened The Copper Handi in 2003 with one principle: every dish must have a provenance. If the
                kitchen cannot explain where a recipe came from, it will not appear on the menu.
              </p>
              <p>
                Twenty-two years later, that principle is still the only marketing strategy we need.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[['22', 'Years Open'], ['6', 'States Represented'], ['140+', 'Recipes Documented']].map(([num, label]) => (
                <div key={label} className="p-4 rounded-lg" style={{ backgroundColor: SURFACE, border: `1px solid ${SAFFRON}15` }}>
                  <p className="text-2xl font-serif mb-1" style={{ color: SAFFRON }}>{num}</p>
                  <p className="text-xs text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reservations */}
      <section style={{ backgroundColor: TERRACOTTA_DARK }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Timings */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Clock size={18} style={{ color: SAFFRON }} />
              <p className="text-xs uppercase tracking-widest" style={{ color: SAFFRON }}>Reservations</p>
            </div>
            <h2 className="text-3xl font-serif text-white mb-8">Book Your Table</h2>
            <div className="space-y-4 mb-8">
              {timings.map((t, i) => (
                <div key={i} className="p-4 rounded-lg border" style={{ backgroundColor: SURFACE, borderColor: `${SAFFRON}20` }}>
                  <p className="text-sm font-semibold text-white mb-2">{t.day}</p>
                  <div className="flex gap-6 text-xs text-gray-400">
                    <span>Lunch: {t.lunch}</span>
                    <span>Dinner: {t.dinner}</span>
                  </div>
                </div>
              ))}
              <p className="text-xs text-gray-500">Closed Mondays. Reservations recommended for dinner.</p>
            </div>
            <button
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded font-semibold text-sm transition-opacity hover:opacity-80"
              style={{ backgroundColor: SAFFRON, color: TERRACOTTA_DARK }}
            >
              <UtensilsCrossed size={16} />
              Make a Reservation
            </button>
          </div>

          {/* Private Dining */}
          <div
            className="p-8 rounded-lg border"
            style={{ backgroundColor: SURFACE, borderColor: `${SAFFRON}30` }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Users size={18} style={{ color: SAFFRON }} />
              <p className="text-xs uppercase tracking-widest" style={{ color: SAFFRON }}>Private Dining</p>
            </div>
            <h3 className="text-2xl font-serif text-white mb-4">The Darbar Room</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              A private dining room for up to 18 guests — available for family celebrations, corporate dinners, and
              tasting events. A dedicated kitchen team, a bespoke multi-course menu, and a sommelier on hand.
            </p>
            <ul className="space-y-3 mb-8">
              {['Seats 8–18 guests', 'Bespoke menu — 5 or 7 courses', 'Paired wine or cocktail service', 'AV equipment available', 'Minimum spend applies'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: SAFFRON }} />
                  {item}
                </li>
              ))}
            </ul>
            <button
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-semibold border transition-colors hover:bg-white/5"
              style={{ borderColor: SAFFRON, color: SAFFRON }}
            >
              <Phone size={14} />
              Enquire About Private Dining
            </button>
          </div>
        </div>
      </section>

      {/* AI Agent Workflow */}
      <section style={{ backgroundColor: SURFACE_2 }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Star size={18} style={{ color: SAFFRON }} />
            <p className="text-xs uppercase tracking-widest" style={{ color: SAFFRON }}>AI-Powered Guest Experience</p>
          </div>
          <h2 className="text-3xl font-serif text-white mb-4">
            Every Guest Feels Remembered
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl leading-relaxed">
            From reservation confirmation to post-dining review management — an intelligent agent handles
            the guest journey so your team can focus on hospitality.
          </p>
          <div
            className="p-6 sm:p-10 rounded-xl border"
            style={{ backgroundColor: SURFACE, borderColor: `${SAFFRON}20` }}
          >
            <AgentFlowChart workflow={workflow} />
          </div>
        </div>
      </section>
    </MockLayout>
  );
}
