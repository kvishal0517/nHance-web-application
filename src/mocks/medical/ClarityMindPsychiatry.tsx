import { Heart, Users, Baby, Pill, ChevronRight, Star, Smile, Moon, Sun, Wind, Zap, CheckCircle } from 'lucide-react';
import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import type { AgentWorkflow } from '../../types';

const SAGE = '#A8C5A0';
const OFF_WHITE = '#F5F0EB';
const PEACH = '#E8A598';
const SAGE_DARK = '#6E9E65';
const SAGE_DEEPER = '#4A7A42';
const WARM_BROWN = '#7A6055';

const workflow: AgentWorkflow = {
  title: 'Intake & Care Coordination Agent',
  nodes: [
    {
      id: '1',
      label: 'New Patient Inquiry',
      description: 'A prospective patient reaches out via the website contact form or phone.',
      automated: false,
      x: 20,
      y: 40,
    },
    {
      id: '2',
      label: 'Match to Therapist',
      description: 'AI analyses the patient\'s concerns and availability to recommend the best-fit therapist.',
      automated: true,
      x: 200,
      y: 40,
    },
    {
      id: '3',
      label: 'Send Intake Paperwork',
      description: 'Secure digital intake forms and consent documents are dispatched automatically.',
      automated: true,
      x: 380,
      y: 40,
    },
    {
      id: '4',
      label: 'Missed Session Check-in',
      description: 'If a session is missed without notice, AI sends a compassionate check-in message.',
      automated: true,
      x: 560,
      y: 40,
    },
    {
      id: '5',
      label: 'Weekly Admin Digest',
      description: 'Clinicians receive a weekly AI-generated digest of upcoming sessions and care notes.',
      automated: true,
      x: 380,
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

const therapists = [
  {
    name: 'Dr. Ananya Krishnan',
    credentials: 'PhD Clinical Psychology',
    focus: 'Anxiety, Trauma & EMDR',
    bio: 'With 14 years of experience, Ananya brings evidence-based approaches to complex trauma and anxiety disorders. She trained at NIMHANS and holds advanced EMDR certification.',
    initials: 'AK',
    color: SAGE,
  },
  {
    name: 'Mr. Rohan Desai',
    credentials: 'MA Counselling Psychology',
    focus: 'Relationships & Life Transitions',
    bio: 'Rohan specialises in relationship therapy and major life transitions. His integrative approach blends CBT with mindfulness and acceptance-based strategies.',
    initials: 'RD',
    color: PEACH,
  },
  {
    name: 'Dr. Meena Subramaniam',
    credentials: 'MD Psychiatry',
    focus: 'Medication Management & Mood Disorders',
    bio: 'A consultant psychiatrist with expertise in mood disorders and ADHD. Dr. Subramaniam believes in holistic treatment combining medication when needed with therapeutic support.',
    initials: 'MS',
    color: '#C5B8E8',
  },
];

const services = [
  {
    icon: Heart,
    title: 'Individual Therapy',
    description: 'One-on-one sessions tailored to your unique needs, goals, and pace. Available in-person and via secure video.',
    color: PEACH,
  },
  {
    icon: Users,
    title: 'Couples Counselling',
    description: 'Rebuild communication and connection. We work with couples navigating conflict, intimacy issues, and life transitions.',
    color: SAGE,
  },
  {
    icon: Baby,
    title: 'Child Psychiatry',
    description: 'Compassionate assessment and support for children aged 5–17 experiencing emotional, behavioural, or developmental challenges.',
    color: '#B8D4E8',
  },
  {
    icon: Pill,
    title: 'Medication Management',
    description: 'Careful, evidence-led psychiatric medication evaluation and ongoing review — always in partnership with therapy.',
    color: '#E8D4B8',
  },
];

const quizQuestions = [
  { icon: Moon, q: 'Over the past 2 weeks, how often have you had trouble falling or staying asleep?' },
  { icon: Wind, q: 'Have you experienced periods of unexplained worry or tension that are hard to control?' },
  { icon: Sun, q: 'How often have you felt little pleasure or interest in things you usually enjoy?' },
  { icon: Smile, q: 'Have you felt more irritable, restless, or on edge than usual?' },
  { icon: Zap, q: 'How much have these feelings impacted your work, relationships, or daily activities?' },
];

const options = ['Not at all', 'Several days', 'More than half', 'Nearly every day'];

export default function ClarityMindPsychiatry() {
  return (
    <MockLayout projectName="ClarityMind Psychiatry" accentColor={SAGE_DARK} categoryId="medical">
      <div style={{ backgroundColor: OFF_WHITE }} className="text-gray-800">

        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden py-24 lg:py-32"
          style={{ background: `linear-gradient(135deg, ${OFF_WHITE} 0%, #EDE7E0 60%, #E3D8D0 100%)` }}
        >
          {/* Soft blob decorations */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-30 pointer-events-none"
            style={{ backgroundColor: SAGE }}
          />
          <div
            className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-20 pointer-events-none"
            style={{ backgroundColor: PEACH }}
          />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full mb-8"
              style={{ backgroundColor: `${SAGE}40`, color: SAGE_DEEPER }}
            >
              <Heart size={14} />
              A safe, confidential space — always
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: '#3D2E28' }}>
              You deserve to
              <span
                className="block"
                style={{ color: SAGE_DEEPER }}
              >
                feel well.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              ClarityMind is a warm, inclusive psychiatry and counselling clinic. We meet you where you are —
              without judgement, without labels, and without rush.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-8 py-4 rounded-2xl text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-md"
                style={{ backgroundColor: SAGE_DARK }}
              >
                Book a Free Discovery Call
              </button>
              <button
                className="px-8 py-4 rounded-2xl font-semibold text-lg border-2 transition-colors hover:bg-white/50"
                style={{ borderColor: SAGE_DARK, color: SAGE_DARK }}
              >
                Take the Self-Assessment
              </button>
            </div>

            {/* Reassurance chips */}
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {[
                'Completely Confidential',
                'No Referral Needed',
                'Video & In-Person',
                'Sliding Scale Fees',
              ].map((chip) => (
                <span
                  key={chip}
                  className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-white/70 text-gray-600 border border-white"
                >
                  <CheckCircle size={13} style={{ color: SAGE_DARK }} />
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Therapist Bios ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3" style={{ color: '#3D2E28' }}>Meet Your Care Team</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Experienced, empathetic clinicians who genuinely believe in the power of good mental health care.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {therapists.map(({ name, credentials, focus, bio, initials, color }) => (
                <div
                  key={name}
                  className="rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
                  style={{ backgroundColor: OFF_WHITE }}
                >
                  {/* Avatar */}
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mb-6"
                    style={{ backgroundColor: color }}
                  >
                    {initials}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-0.5">{name}</h3>
                  <p className="text-sm font-medium mb-1" style={{ color: SAGE_DEEPER }}>{credentials}</p>
                  <p className="text-xs text-gray-400 mb-4 font-medium uppercase tracking-wide">{focus}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{bio}</p>
                  <button
                    className="mt-6 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                    style={{ color: SAGE_DARK }}
                  >
                    Book with {name.split(' ')[1]} <ChevronRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-20" style={{ backgroundColor: '#EDE7E0' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3" style={{ color: '#3D2E28' }}>How We Can Help</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                A full spectrum of mental health services — all under one compassionate roof.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map(({ icon: Icon, title, description, color }) => (
                <div
                  key={title}
                  className="bg-white rounded-3xl p-7 hover:shadow-md transition-shadow"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${color}40` }}
                  >
                    <Icon size={24} style={{ color: WARM_BROWN }} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                  <button
                    className="mt-5 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                    style={{ color: SAGE_DARK }}
                  >
                    Learn more <ChevronRight size={13} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Self-Assessment Quiz Teaser ── */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-4"
                style={{ backgroundColor: `${PEACH}40`, color: WARM_BROWN }}
              >
                <Smile size={12} />
                Free · Anonymous · Takes 2 minutes
              </div>
              <h2 className="text-3xl font-bold mb-3" style={{ color: '#3D2E28' }}>Not sure where to start?</h2>
              <p className="text-gray-500">
                Answer a few questions to get a personalised sense of whether professional support might help.
              </p>
            </div>

            <div
              className="rounded-3xl p-8 border-2"
              style={{ backgroundColor: OFF_WHITE, borderColor: `${SAGE}60` }}
            >
              <div className="space-y-6">
                {quizQuestions.map(({ icon: Icon, q }, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${SAGE}40` }}
                      >
                        <Icon size={14} style={{ color: SAGE_DEEPER }} />
                      </div>
                      <p className="text-sm font-medium text-gray-700 leading-relaxed">{q}</p>
                    </div>
                    <div className="ml-11 flex flex-wrap gap-2">
                      {options.map((opt) => (
                        <button
                          key={opt}
                          className="text-xs px-3 py-1.5 rounded-full border border-gray-200 bg-white text-gray-500 hover:border-current hover:text-current transition-colors cursor-default"
                          style={{ '--tw-text-opacity': 1 } as React.CSSProperties}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.borderColor = SAGE_DARK;
                            (e.currentTarget as HTMLButtonElement).style.color = SAGE_DARK;
                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = `${SAGE}20`;
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.borderColor = '';
                            (e.currentTarget as HTMLButtonElement).style.color = '';
                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '';
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button
                  className="w-full sm:w-auto px-8 py-3.5 rounded-2xl text-white font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: SAGE_DARK }}
                >
                  See My Results →
                </button>
                <p className="text-xs text-gray-400 mt-3">
                  This is not a clinical diagnosis. Results are completely confidential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonials strip ── */}
        <section className="py-16" style={{ backgroundColor: `${SAGE}25` }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-6">
              {[
                {
                  text: '"I was nervous about starting therapy but the team made me feel completely at ease from day one."',
                  name: 'Preethi S.',
                  stars: 5,
                },
                {
                  text: '"The couples counselling literally saved our marriage. We communicate so differently now."',
                  name: 'Arjun & Kavitha',
                  stars: 5,
                },
                {
                  text: '"Dr. Subramaniam explained my medication options patiently and checked in regularly. I finally feel stable."',
                  name: 'Ravi M.',
                  stars: 5,
                },
              ].map(({ text, name, stars }) => (
                <div key={name} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: stars }).map((_, i) => (
                      <Star key={i} size={14} fill={SAGE_DARK} stroke="none" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed italic mb-4">{text}</p>
                  <p className="text-sm font-semibold text-gray-800">— {name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI Workflow ── */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-4"
                style={{ backgroundColor: `${SAGE_DARK}30`, color: '#86EFAC' }}
              >
                <Zap size={12} />
                Powered by AI Automation
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Seamless Intake, Zero Admin Stress</h2>
              <p className="text-gray-400 max-w-lg mx-auto text-sm">
                From first enquiry to ongoing care, our AI coordination agent handles paperwork and scheduling so
                our therapists focus on what matters — you.
              </p>
            </div>
            <AgentFlowChart workflow={workflow} />
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-20" style={{ backgroundColor: OFF_WHITE }}>
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#3D2E28' }}>
              Taking the first step is the hardest part.
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              We'll take the rest from there. All enquiries are responded to within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-8 py-4 rounded-2xl text-white font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: SAGE_DARK }}
              >
                Book a Free Discovery Call
              </button>
              <button
                className="px-8 py-4 rounded-2xl font-semibold border-2 transition-colors hover:bg-white/50"
                style={{ borderColor: SAGE_DARK, color: SAGE_DARK }}
              >
                Send Us a Message
              </button>
            </div>
          </div>
        </section>

      </div>
    </MockLayout>
  );
}
