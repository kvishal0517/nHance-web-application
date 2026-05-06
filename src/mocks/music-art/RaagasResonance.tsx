import { Mic2, BookOpen, Music, Play, Star, Clock, Users, ChevronRight } from 'lucide-react';
import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import type { AgentWorkflow } from '../../types';

const MIDNIGHT_BLUE = '#0D1B2A';
const GOLD = '#D4AF37';
const GOLD_MUTED = '#B8941F';
const SURFACE = '#111E2E';
const SURFACE_2 = '#162234';

const workflow: AgentWorkflow = {
  title: 'Student Onboarding & Practice Tracker',
  nodes: [
    { id: '1', label: 'New Student Inquiry', description: 'A prospective student submits interest via the website form.', automated: false, x: 20, y: 40 },
    { id: '2', label: 'Send Welcome Pack', description: 'AI sends a personalised welcome email with course overview and Gurukul philosophy PDF.', automated: true, x: 200, y: 40 },
    { id: '3', label: 'Schedule Trial Class', description: 'Agent checks calendar availability and books a complimentary 30-minute session.', automated: true, x: 380, y: 40 },
    { id: '4', label: 'Post-Lesson Practice Note', description: 'After each lesson, AI generates a tailored riyaz (practice) note for the student.', automated: true, x: 560, y: 40 },
    { id: '5', label: '30-Day Progress Report', description: 'AI compiles lesson notes into a structured monthly progress report for the student.', automated: true, x: 200, y: 160 },
    { id: '6', label: 'Fee Reminder', description: 'Automated, politely worded fee reminder sent 3 days before the monthly due date.', automated: true, x: 380, y: 160 },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
    { from: '5', to: '6' },
  ],
};

const albums = [
  {
    title: 'Prahar — The Turning Hours',
    year: '2022',
    label: 'Bandish Records',
    description: 'A full-cycle exploration of time-bound raags — from Bhairav at dawn to Yaman at dusk. Eight compositions, zero compromise.',
    tracks: 8,
  },
  {
    title: 'Shringaar',
    year: '2019',
    label: 'ITC SRA Archive',
    description: 'Devotion rendered as longing. Five extended khayal compositions in raags of the romantic canon — Kedar, Bhimpalasi, Kafi, Bageshri, Tilak Kamod.',
    tracks: 5,
  },
  {
    title: 'Ustad Ki Yaad Mein',
    year: '2016',
    label: 'Self-Released',
    description: 'A tribute album to Guru Pandit Raghunath Prasanna. Performed live at Sawai Gandharva, Pune, in one unbroken sitting.',
    tracks: 3,
  },
];

const performances = [
  { venue: 'Sawai Gandharva Bhimsen Mahotsav', city: 'Pune', year: '2023', raag: 'Raag Puriya Dhanashri', duration: '3h 20m' },
  { venue: 'Dover Lane Music Conference', city: 'Kolkata', year: '2022', raag: 'Raag Darbari Kanada', duration: '2h 45m' },
  { venue: 'ITC Sangeet Research Academy', city: 'Kolkata', year: '2021', raag: 'Raag Yaman Kalyan', duration: '1h 50m' },
  { venue: 'Saptak Annual Festival', city: 'Ahmedabad', year: '2020', raag: 'Raag Bhairav', duration: '2h 10m' },
];

const courses = [
  {
    level: 'Foundation',
    subtitle: 'The Grammar of the Raga',
    duration: '6 months',
    sessions: '2× per week',
    desc: 'Swaras, alankars, and the mental architecture of a raag. For students with no prior classical training.',
    price: '₹4,000 / month',
  },
  {
    level: 'Intermediate',
    subtitle: 'Voice, Breath, and Bandish',
    duration: '12 months',
    sessions: '3× per week',
    desc: 'Bada khayal and chota khayal in the Jaipur-Atrauli style. Students must have completed Foundation or equivalent.',
    price: '₹6,500 / month',
  },
  {
    level: 'Advanced Gurukul',
    subtitle: 'Riyaz as a Way of Life',
    duration: 'Ongoing',
    sessions: '4–5× per week',
    desc: 'By invitation only. Deep immersion in the oral tradition — repertoire, performance practice, and guru-shishya transmission.',
    price: 'On enquiry',
  },
];

export default function RaagasResonance() {
  return (
    <MockLayout projectName="Raagas & Resonance" accentColor={GOLD} categoryId="music-art">
      {/* Hero */}
      <section
        style={{ background: `linear-gradient(160deg, ${MIDNIGHT_BLUE} 0%, #0A1520 60%, #070E18 100%)` }}
        className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      >
        {/* Decorative radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 70% 40%, ${GOLD}18 0%, transparent 70%)`,
          }}
        />
        {/* Tanpura string lines */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          {[15, 30, 45, 60, 75].map((pct) => (
            <div
              key={pct}
              className="absolute top-0 bottom-0 w-px"
              style={{ left: `${pct}%`, background: `linear-gradient(to bottom, transparent, ${GOLD}, transparent)` }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-24 pt-40">
          <p className="text-xs uppercase tracking-[0.35em] mb-6" style={{ color: GOLD }}>
            Hindustani Classical Vocalist — Jaipur-Atrauli Gharana
          </p>
          <h1 className="text-5xl sm:text-7xl font-serif font-light text-white leading-tight mb-6">
            Raagas &<br />
            <span style={{ color: GOLD }}>Resonance</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
            Twenty-five years in the oral tradition. Every note is a conversation between the present moment and
            centuries of accumulated listening.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              className="flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ backgroundColor: GOLD, color: MIDNIGHT_BLUE }}
            >
              <Play size={16} />
              Listen — Raag Bhairavi
            </button>
            <button
              className="flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold border transition-colors hover:bg-white/5"
              style={{ borderColor: `${GOLD}60`, color: GOLD }}
            >
              Enquire About Teaching
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Atmospheric image placeholder */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-20"
          style={{
            background: `radial-gradient(ellipse at center, ${GOLD}40, transparent 70%)`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: `linear-gradient(to top, ${MIDNIGHT_BLUE}, transparent)` }}
        />
      </section>

      {/* Discography */}
      <section style={{ backgroundColor: MIDNIGHT_BLUE }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Music size={18} style={{ color: GOLD }} />
            <p className="text-xs uppercase tracking-widest" style={{ color: GOLD }}>Discography</p>
          </div>
          <h2 className="text-3xl font-serif text-white mb-12">Three Recordings. Each a Season.</h2>
          <div className="space-y-6">
            {albums.map((album, i) => (
              <div
                key={i}
                className="group flex flex-col sm:flex-row gap-6 p-6 rounded-lg border transition-colors"
                style={{ backgroundColor: SURFACE, borderColor: `${GOLD}20` }}
              >
                {/* Album art placeholder */}
                <div
                  className="flex-shrink-0 w-20 h-20 rounded flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${GOLD}30, ${GOLD}10)`, border: `1px solid ${GOLD}30` }}
                >
                  <Music size={28} style={{ color: GOLD }} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-lg font-serif text-white">{album.title}</h3>
                    <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: `${GOLD}15`, color: GOLD }}>
                      {album.year}
                    </span>
                  </div>
                  <p className="text-xs mb-3" style={{ color: GOLD_MUTED }}>{album.label} · {album.tracks} compositions</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{album.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Archive */}
      <section style={{ backgroundColor: '#080F18' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Star size={18} style={{ color: GOLD }} />
            <p className="text-xs uppercase tracking-widest" style={{ color: GOLD }}>Performance Archive</p>
          </div>
          <h2 className="text-3xl font-serif text-white mb-12">India's Foremost Stages</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {performances.map((perf, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border"
                style={{ backgroundColor: SURFACE, borderColor: `${GOLD}20` }}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-base font-semibold text-white leading-snug">{perf.venue}</h3>
                  <span className="flex-shrink-0 text-xs" style={{ color: GOLD }}>{perf.year}</span>
                </div>
                <p className="text-xs text-gray-500 mb-3">{perf.city}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Mic2 size={12} style={{ color: GOLD }} />
                    {perf.raag}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} style={{ color: GOLD }} />
                    {perf.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching */}
      <section style={{ backgroundColor: MIDNIGHT_BLUE }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen size={18} style={{ color: GOLD }} />
            <p className="text-xs uppercase tracking-widest" style={{ color: GOLD }}>Teaching</p>
          </div>
          <h2 className="text-3xl font-serif text-white mb-4">The Gurukul Path</h2>
          <p className="text-gray-400 mb-12 max-w-xl leading-relaxed">
            Classical music is not a skill — it is a practice. Every student begins the same way: with a single sur
            held until it is truly known.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border flex flex-col"
                style={{
                  backgroundColor: SURFACE_2,
                  borderColor: i === 2 ? GOLD : `${GOLD}25`,
                  boxShadow: i === 2 ? `0 0 24px ${GOLD}20` : 'none',
                }}
              >
                {i === 2 && (
                  <span className="text-xs uppercase tracking-widest mb-4 self-start px-2 py-1 rounded" style={{ backgroundColor: `${GOLD}20`, color: GOLD }}>
                    By Invitation
                  </span>
                )}
                <h3 className="text-lg font-serif text-white mb-1">{course.level}</h3>
                <p className="text-xs mb-4" style={{ color: GOLD }}>{course.subtitle}</p>
                <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-5">{course.desc}</p>
                <div className="space-y-2 text-xs text-gray-500 mb-5">
                  <div className="flex items-center gap-2">
                    <Clock size={12} style={{ color: GOLD }} />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={12} style={{ color: GOLD }} />
                    {course.sessions}
                  </div>
                </div>
                <div className="pt-4 border-t" style={{ borderColor: `${GOLD}20` }}>
                  <p className="text-sm font-semibold" style={{ color: GOLD }}>{course.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agent Workflow */}
      <section style={{ backgroundColor: '#070E18' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Star size={18} style={{ color: GOLD }} />
            <p className="text-xs uppercase tracking-widest" style={{ color: GOLD }}>AI-Powered Studio Management</p>
          </div>
          <h2 className="text-3xl font-serif text-white mb-4">
            Your Teaching Studio, Automated
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl leading-relaxed">
            From the moment a student submits an inquiry to their monthly progress report — the administrative work
            runs itself so you can stay in the music.
          </p>
          <div
            className="p-6 sm:p-10 rounded-xl border"
            style={{ backgroundColor: SURFACE, borderColor: `${GOLD}20` }}
          >
            <AgentFlowChart workflow={workflow} />
          </div>
        </div>
      </section>
    </MockLayout>
  );
}
