import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import type { AgentWorkflow } from '../../types';
import {
  Leaf,
  Sun,
  Moon,
  Wind,
  Heart,
  Calendar,
  MapPin,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

const sand = '#E8D5B7';
const green = '#1A3C34';
const greenMid = '#2D5A4F';
const greenLight = '#3D7A6D';
const warmWhite = '#FAF7F2';
const textDark = '#1C2B26';
const textMid = '#4A6B60';
const textLight = '#7A9E95';
const borderColor = '#D4C4A8';

const bookingWorkflow: AgentWorkflow = {
  title: 'Retreat Booking & Guest Journey Agent',
  nodes: [
    {
      id: '1',
      label: 'Guest Books Retreat',
      description: 'Guest selects a retreat and completes the booking — deposit payment confirms the spot.',
      automated: false,
      x: 20,
      y: 40,
    },
    {
      id: '2',
      label: 'Send Pre-Arrival Guide',
      description: 'Automated welcome email with packing list, travel directions, dietary guidance, and what to expect.',
      automated: true,
      x: 200,
      y: 40,
    },
    {
      id: '3',
      label: 'Pre-Retreat Questionnaire',
      description: 'AI-powered questionnaire gathers health history, yoga experience, and intentions for the retreat.',
      automated: true,
      x: 380,
      y: 40,
    },
    {
      id: '4',
      label: 'Post-Retreat Resource Pack',
      description: 'After the retreat, guests receive a curated home practice guide, recordings, and community access.',
      automated: true,
      x: 560,
      y: 40,
    },
    {
      id: '5',
      label: 'Waitlist Notification',
      description: 'When a spot opens on a full retreat, waitlisted guests are notified automatically within minutes.',
      automated: true,
      x: 200,
      y: 160,
    },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '1', to: '5' },
  ],
};

const classes = [
  {
    style: 'Vinyasa Flow',
    icon: Wind,
    description: 'Breath-linked movement that builds heat, strength, and presence. Suitable for all levels.',
    times: ['Mon / Wed / Fri — 7:00 AM', 'Tue / Thu — 6:30 PM', 'Sat — 8:00 AM'],
    level: 'All Levels',
    duration: '75 min',
  },
  {
    style: 'Yin Yoga',
    icon: Moon,
    description: 'Long-held floor postures that release deep connective tissue and cultivate inner stillness.',
    times: ['Mon / Wed — 7:30 PM', 'Sun — 9:30 AM'],
    level: 'All Levels',
    duration: '90 min',
  },
  {
    style: 'Pranayama',
    icon: Leaf,
    description: 'Ancient breath practices — Nadi Shodhana, Kapalabhati, Bhramari — for nervous system regulation.',
    times: ['Tue / Thu — 6:30 AM', 'Sat — 7:00 AM'],
    level: 'Beginner-friendly',
    duration: '60 min',
  },
  {
    style: 'Guided Meditation',
    icon: Sun,
    description: 'Structured sitting practice drawing on Vipassana and Yoga Nidra traditions.',
    times: ['Daily — 6:00 AM', 'Fri — 8:00 PM (Community sit)'],
    level: 'All welcome',
    duration: '45 min',
  },
];

const retreats = [
  {
    title: 'Silence & Stillness — Coorg Retreat',
    subtitle: '5 Days · 4 Nights · Coorg, Karnataka',
    dates: 'July 18–22, 2026',
    spotsLeft: 4,
    totalSpots: 12,
    price: '₹38,000',
    priceNote: 'per person, all-inclusive',
    description: 'Five days of silence, supported by morning yoga, pranayama, guided meditation, forest walks, and sattvic meals prepared fresh each day. No phones after 7 PM.',
    includes: ['Daily yoga & meditation', 'Forest walks', 'Sattvic meals', 'Private accommodation', 'Pre & post retreat support'],
    featured: true,
  },
  {
    title: 'Coastal Reset — Gokarna Weekend',
    subtitle: '3 Days · 2 Nights · Gokarna, Karnataka',
    dates: 'August 8–10, 2026',
    spotsLeft: 7,
    totalSpots: 10,
    price: '₹18,000',
    priceNote: 'per person, all-inclusive',
    description: 'A short but deep immersion by the sea. Beach walks, twice-daily practice, breathwork, and one full day of silence. An accessible entry point to retreat life.',
    includes: ['Beach yoga twice daily', 'Breathwork session', 'Silent full-day', 'Meals & accommodation', 'Post-retreat practice guide'],
    featured: false,
  },
];

export default function SattvicSpace() {
  return (
    <MockLayout projectName="Sattvic Space" accentColor={green} categoryId="fitness">

      {/* Hero */}
      <section style={{ backgroundColor: warmWhite, borderBottom: `1px solid ${borderColor}` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="flex-1 text-center lg:text-left">
              {/* Ornamental divider */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-7">
                <div className="h-px w-10" style={{ backgroundColor: green }} />
                <Leaf size={14} style={{ color: green }} />
                <div className="h-px w-10" style={{ backgroundColor: green }} />
              </div>

              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: greenLight }}
              >
                Yoga · Pranayama · Meditation
              </p>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-4"
                style={{ color: textDark, fontStyle: 'italic' }}
              >
                Sattvic
              </h1>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-6"
                style={{ color: green }}
              >
                Space
              </h1>

              <p
                className="text-base leading-relaxed mb-4 max-w-xl"
                style={{ color: textMid }}
              >
                A studio and retreat centre rooted in classical yoga, held in the Kannada countryside spirit. Every class, every retreat, every breath is an invitation to come home to yourself.
              </p>
              <p className="text-sm mb-8" style={{ color: textLight }}>
                Indiranagar, Bengaluru · Retreats across Karnataka
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <button
                  className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold text-white rounded-full transition-opacity hover:opacity-90"
                  style={{ backgroundColor: green }}
                >
                  View Class Schedule
                  <ArrowRight size={15} />
                </button>
                <button
                  className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded-full border"
                  style={{ borderColor: green, color: green, backgroundColor: 'transparent' }}
                >
                  Explore Retreats
                </button>
              </div>
            </div>

            {/* Serene card stack */}
            <div className="flex-shrink-0 w-full lg:w-80">
              <div
                className="rounded-3xl p-7 border"
                style={{ backgroundColor: sand, borderColor: borderColor }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-5"
                  style={{ color: greenMid }}
                >
                  This Week at Sattvic Space
                </p>
                <div className="space-y-3.5">
                  {[
                    { day: 'Monday', class: 'Vinyasa Flow', time: '7:00 AM' },
                    { day: 'Tuesday', class: 'Pranayama', time: '6:30 AM' },
                    { day: 'Wednesday', class: 'Yin Yoga', time: '7:30 PM' },
                    { day: 'Friday', class: 'Guided Meditation', time: '8:00 PM (Community Sit)' },
                    { day: 'Saturday', class: 'Vinyasa Flow', time: '8:00 AM' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2.5 px-3 rounded-xl"
                      style={{ backgroundColor: i === 0 ? `${green}15` : 'rgba(255,255,255,0.5)' }}
                    >
                      <div>
                        <p className="text-xs font-bold" style={{ color: textDark }}>{item.day}</p>
                        <p className="text-xs" style={{ color: textMid }}>{item.class}</p>
                      </div>
                      <span
                        className="text-xs font-semibold"
                        style={{ color: i === 0 ? green : textLight }}
                      >
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  className="w-full mt-5 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: green }}
                >
                  Book a Class
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section style={{ backgroundColor: warmWhite }} className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: greenLight }}>
              Weekly Schedule
            </p>
            <h2 className="text-3xl font-black" style={{ color: textDark }}>Class Styles</h2>
            <p className="mt-2 text-sm" style={{ color: textMid }}>
              Every class is a drop-in or bookable in advance. First class is always free.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {classes.map((cls, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 border flex gap-5"
                style={{ backgroundColor: i % 2 === 0 ? sand : warmWhite, borderColor: borderColor }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: `${green}15` }}
                >
                  <cls.icon size={18} style={{ color: green }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1.5">
                    <h3 className="font-black text-base" style={{ color: textDark }}>{cls.style}</h3>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full ml-2"
                      style={{ backgroundColor: `${green}12`, color: greenMid }}
                    >
                      {cls.duration}
                    </span>
                  </div>
                  <p className="text-xs mb-3 leading-relaxed" style={{ color: textMid }}>{cls.description}</p>
                  <div className="space-y-1">
                    {cls.times.map((t) => (
                      <p key={t} className="text-xs flex items-center gap-1.5" style={{ color: textLight }}>
                        <Clock size={11} style={{ color: green }} />
                        {t}
                      </p>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 mt-3">
                    <Users size={11} style={{ color: greenLight }} />
                    <span className="text-xs" style={{ color: textLight }}>{cls.level}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retreats */}
      <section style={{ backgroundColor: green }} className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: sand }}>
              Upcoming Retreats
            </p>
            <h2 className="text-3xl font-black text-white">Go Deeper</h2>
            <p className="mt-2 text-sm" style={{ color: `${sand}AA` }}>
              Immersions designed to reset the nervous system and return you to yourself.
            </p>
          </div>

          <div className="space-y-5">
            {retreats.map((retreat, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 lg:p-8"
                style={{
                  backgroundColor: retreat.featured ? 'rgba(232,213,183,0.12)' : 'rgba(255,255,255,0.06)',
                  border: `1px solid ${retreat.featured ? `${sand}40` : 'rgba(255,255,255,0.1)'}`,
                }}
              >
                <div className="flex flex-col lg:flex-row gap-7">
                  <div className="flex-1">
                    {retreat.featured && (
                      <div
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
                        style={{ backgroundColor: `${sand}20`, color: sand }}
                      >
                        <Sparkles size={11} />
                        Next Retreat
                      </div>
                    )}
                    <h3 className="text-xl font-black text-white mb-0.5">{retreat.title}</h3>
                    <p className="text-sm mb-1" style={{ color: `${sand}AA` }}>{retreat.subtitle}</p>
                    <div className="flex items-center gap-4 mb-4 text-xs" style={{ color: `${sand}80` }}>
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {retreat.dates}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={11} />
                        {retreat.spotsLeft} of {retreat.totalSpots} spots left
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(232,213,183,0.8)' }}>
                      {retreat.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {retreat.includes.map((item) => (
                        <span
                          key={item}
                          className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-full"
                          style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: `${sand}CC` }}
                        >
                          <CheckCircle size={10} style={{ color: sand }} />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-shrink-0 lg:w-56 flex flex-col justify-between">
                    <div
                      className="rounded-xl p-5 mb-4"
                      style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                    >
                      <p className="text-3xl font-black text-white mb-0.5">{retreat.price}</p>
                      <p className="text-xs" style={{ color: `${sand}80` }}>{retreat.priceNote}</p>
                      <div className="mt-3 w-full rounded-full h-1.5" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                        <div
                          className="h-1.5 rounded-full"
                          style={{
                            backgroundColor: sand,
                            width: `${((retreat.totalSpots - retreat.spotsLeft) / retreat.totalSpots) * 100}%`,
                          }}
                        />
                      </div>
                      <p className="text-xs mt-1.5" style={{ color: `${sand}80` }}>
                        {retreat.totalSpots - retreat.spotsLeft}/{retreat.totalSpots} booked
                      </p>
                    </div>
                    <button
                      className="w-full py-3 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: greenLight }}
                    >
                      Reserve a Spot <ChevronRight size={14} className="inline" />
                    </button>
                    <button
                      className="w-full mt-2 py-2.5 rounded-full text-sm font-semibold border"
                      style={{ borderColor: `${sand}40`, color: `${sand}CC`, backgroundColor: 'transparent' }}
                    >
                      Join Waitlist
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Training */}
      <section style={{ backgroundColor: sand }} className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-10">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: greenLight }}>
                Teacher Training
              </p>
              <h2 className="text-3xl font-black mb-3" style={{ color: textDark }}>200-Hour YTT</h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: textMid }}>
                A Yoga Alliance-registered 200-hour Teacher Training rooted in classical Hatha and Vinyasa traditions. Small cohorts (max 16), taught over three months in Bengaluru with two immersive residential weekends in Coorg.
              </p>
              <ul className="space-y-2.5 mb-6">
                {[
                  'Yoga philosophy & history (Yoga Sutras, Bhagavad Gita)',
                  'Anatomy & physiology for yoga teachers',
                  'Sequencing, cueing, and hands-on assists',
                  'Pranayama & meditation methodology',
                  'Practicum: observed teaching hours',
                  'Yoga Alliance RYT-200 certification',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: textDark }}>
                    <Heart size={13} className="flex-shrink-0 mt-0.5" style={{ color: green }} fill={green} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <button
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: green }}
                >
                  Apply for 2026 Cohort
                </button>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: green }}
                >
                  Download Curriculum <ChevronRight size={14} />
                </a>
              </div>
            </div>

            <div className="flex-shrink-0 lg:w-72 w-full">
              <div
                className="rounded-2xl p-6 border"
                style={{ backgroundColor: warmWhite, borderColor: borderColor }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: greenLight }}>
                  2026 Cohort
                </p>
                <div className="space-y-3.5 text-sm">
                  {[
                    { label: 'Duration', value: '3 months (Jan–Mar 2026)' },
                    { label: 'Format', value: 'Weekends + 2 residentials' },
                    { label: 'Cohort Size', value: 'Max 16 students' },
                    { label: 'Investment', value: '₹95,000 all-inclusive' },
                    { label: 'Certification', value: 'Yoga Alliance RYT-200' },
                  ].map((detail) => (
                    <div key={detail.label} className="flex items-start justify-between gap-3">
                      <span className="text-xs font-semibold" style={{ color: textLight }}>{detail.label}</span>
                      <span className="text-xs font-bold text-right" style={{ color: textDark }}>{detail.value}</span>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-5 pt-4 border-t text-center"
                  style={{ borderColor: borderColor }}
                >
                  <p className="text-xs" style={{ color: textMid }}>
                    <MapPin size={11} className="inline mr-1" style={{ color: green }} />
                    Indiranagar, Bengaluru + Coorg
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Workflow */}
      <section style={{ backgroundColor: warmWhite, borderTop: `1px solid ${borderColor}` }} className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: green }} />
              <Sparkles size={14} style={{ color: green }} />
              <div className="h-px w-8" style={{ backgroundColor: green }} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: greenLight }}>
              Thoughtfully Automated
            </p>
            <h2 className="text-3xl font-black mb-2" style={{ color: textDark }}>The Guest Journey</h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: textMid }}>
              From the moment a guest books a retreat, our AI agent ensures every touchpoint is warm, timely, and personal — so teachers can focus on teaching.
            </p>
          </div>

          <div
            className="rounded-2xl p-6 lg:p-10 border"
            style={{ backgroundColor: sand, borderColor: borderColor }}
          >
            <AgentFlowChart workflow={bookingWorkflow} />
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mt-8">
            {[
              {
                icon: Heart,
                title: 'Human-first Automation',
                desc: 'Every automated message is written with care — nothing generic, nothing cold.',
              },
              {
                icon: Leaf,
                title: 'Pre-Retreat Care',
                desc: 'Guests arrive prepared, nourished by information and already in the retreat mindset.',
              },
              {
                icon: Sun,
                title: 'Journey Beyond the Retreat',
                desc: 'Post-retreat resources keep the practice alive long after guests return home.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl p-5 border text-center"
                style={{ backgroundColor: warmWhite, borderColor: borderColor }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: `${green}12` }}
                >
                  <item.icon size={16} style={{ color: green }} />
                </div>
                <p className="text-sm font-bold mb-1" style={{ color: textDark }}>{item.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: textMid }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </MockLayout>
  );
}
