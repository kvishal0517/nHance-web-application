import { Heart, Activity, Zap, AlertCircle, Phone, MapPin, Clock, Star, ChevronRight, CheckCircle } from 'lucide-react';
import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import type { AgentWorkflow } from '../../types';

const ACCENT = '#2D6A4F';
const ACCENT_LIGHT = '#E8F5EE';
const ACCENT_MID = '#52976E';

const workflow: AgentWorkflow = {
  title: 'Patient Pre-Consultation Agent',
  nodes: [
    {
      id: '1',
      label: 'Books Appointment',
      description: 'Patient schedules a consultation via the online portal or phone.',
      automated: false,
      x: 20,
      y: 40,
    },
    {
      id: '2',
      label: 'Pre-Visit Form',
      description: 'AI automatically sends a health questionnaire for the patient to complete before the visit.',
      automated: true,
      x: 200,
      y: 40,
    },
    {
      id: '3',
      label: '24h Reminder',
      description: 'AI sends a personalised appointment reminder with preparation instructions 24 hours prior.',
      automated: true,
      x: 380,
      y: 40,
    },
    {
      id: '4',
      label: 'Post-Visit Summary',
      description: 'AI generates and emails a structured visit summary and care plan to the patient.',
      automated: true,
      x: 560,
      y: 40,
    },
    {
      id: '5',
      label: 'Renewal Check',
      description: 'AI monitors upcoming prescription expiry dates and flags renewals proactively.',
      automated: true,
      x: 200,
      y: 160,
    },
    {
      id: '6',
      label: 'Flag to Doctor',
      description: 'Critical or time-sensitive items are escalated to Dr. Menon with a brief summary.',
      automated: true,
      x: 380,
      y: 160,
    },
    {
      id: '7',
      label: '30-Day Follow-up',
      description: 'AI sends a 30-day check-in message to assess recovery and schedule follow-up if needed.',
      automated: true,
      x: 560,
      y: 160,
    },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '5', to: '6' },
    { from: '4', to: '7' },
  ],
};

const conditions = [
  {
    icon: Heart,
    title: 'Coronary Heart Disease',
    description: 'Comprehensive evaluation and long-term management of coronary artery disease, angina, and atherosclerosis.',
  },
  {
    icon: Activity,
    title: 'Arrhythmia',
    description: 'Diagnosis and treatment of irregular heart rhythms including atrial fibrillation and ventricular tachycardia.',
  },
  {
    icon: AlertCircle,
    title: 'Hypertension',
    description: 'Evidence-based blood pressure management tailored to each patient\'s lifestyle and comorbidities.',
  },
  {
    icon: Zap,
    title: 'Heart Failure',
    description: 'Specialised care for systolic and diastolic heart failure with multidisciplinary coordination.',
  },
];

const procedures = [
  {
    title: 'Coronary Angioplasty',
    description: 'Minimally invasive procedure to open blocked or narrowed coronary arteries and restore blood flow.',
    duration: '1–2 hours',
  },
  {
    title: 'Echocardiography',
    description: 'High-resolution ultrasound imaging of the heart to assess structure, valves, and pumping function.',
    duration: '30–45 min',
  },
  {
    title: 'Pacemaker Implantation',
    description: 'Surgical placement of a cardiac pacemaker to regulate slow or irregular heartbeats.',
    duration: '1–2 hours',
  },
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    age: 58,
    text: 'Dr. Menon took the time to explain every aspect of my diagnosis in plain language. After my angioplasty, I felt genuinely cared for — not just treated. My recovery has been remarkable.',
    rating: 5,
  },
  {
    name: 'Sunita Agarwal',
    age: 64,
    text: 'I was terrified when I was referred for heart failure management. Dr. Menon\'s calm, thorough approach gave me confidence. Two years on, I\'m living a full, active life again.',
    rating: 5,
  },
];

export default function DrPriyaCardiologist() {
  return (
    <MockLayout projectName="Dr. Priya Menon — Cardiologist" accentColor={ACCENT} categoryId="medical">
      <div className="bg-white text-gray-800">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-white border-b border-gray-100">
          {/* ECG decorative SVG */}
          <div className="absolute inset-0 pointer-events-none select-none opacity-[0.06]">
            <svg viewBox="0 0 1200 200" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
              <polyline
                fill="none"
                stroke="#2D6A4F"
                strokeWidth="3"
                points="
                  0,100 100,100 130,100 140,30 155,170 170,30 185,170 200,100
                  260,100 290,100 300,10  315,190 330,10  345,190 360,100
                  420,100 450,100 460,20  475,180 490,20  505,180 520,100
                  580,100 610,100 620,15  635,185 650,15  665,185 680,100
                  740,100 770,100 780,25  795,175 810,25  825,175 840,100
                  900,100 930,100 940,20  955,180 970,20  985,180 1000,100
                  1060,100 1090,100 1100,30 1115,170 1130,30 1145,170 1160,100 1200,100
                "
              />
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: credentials */}
              <div>
                <div
                  className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full mb-6"
                  style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                >
                  <Activity size={14} />
                  Interventional Cardiologist · 22 Years Experience
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  Dr. Priya Menon
                  <span className="block text-2xl lg:text-3xl font-normal mt-2" style={{ color: ACCENT }}>
                    MD, DM (Cardiology) · FRCP (London)
                  </span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Senior Consultant Cardiologist at Apollo Hospitals, Chennai. Specialising in interventional
                  cardiology, heart failure management, and preventive cardiac care for over two decades.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <button
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-base transition-opacity hover:opacity-90"
                    style={{ backgroundColor: ACCENT }}
                  >
                    Book a Consultation
                    <ChevronRight size={18} />
                  </button>
                  <button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 font-semibold text-base transition-colors hover:bg-gray-50" style={{ borderColor: ACCENT, color: ACCENT }}>
                    <Phone size={16} />
                    Call the Clinic
                  </button>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-4">
                  {['Apollo Hospitals', 'AIIMS Delhi Alumni', 'FRCP London', '4,200+ Procedures'].map((badge) => (
                    <span key={badge} className="flex items-center gap-1.5 text-sm text-gray-500">
                      <CheckCircle size={14} style={{ color: ACCENT }} />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: profile card */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-72 lg:w-80">
                  <div
                    className="w-full aspect-[3/4] rounded-2xl flex items-end p-6"
                    style={{ background: `linear-gradient(160deg, ${ACCENT_LIGHT} 0%, #C6E4D4 100%)` }}
                  >
                    {/* Placeholder silhouette */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <div
                          className="w-40 h-40 rounded-full flex items-center justify-center text-6xl font-bold"
                          style={{ backgroundColor: `${ACCENT}20`, color: ACCENT }}
                        >
                          PM
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10 bg-white rounded-xl p-4 w-full shadow-md">
                      <p className="text-xs text-gray-500 mb-1">Next Available</p>
                      <p className="font-semibold text-gray-800">Wednesday, 7 May 2025</p>
                      <p className="text-sm text-gray-500 mt-0.5">Apollo Hospital, Chennai</p>
                    </div>
                  </div>
                  {/* Floating stat */}
                  <div
                    className="absolute -top-4 -right-4 rounded-2xl p-4 text-white shadow-lg"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <p className="text-2xl font-bold">4.9</p>
                    <div className="flex gap-0.5 mt-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={10} fill="white" stroke="none" />
                      ))}
                    </div>
                    <p className="text-xs opacity-80 mt-0.5">340 reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Clinic info strip ── */}
        <div style={{ backgroundColor: ACCENT }} className="py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8 text-white text-sm">
              <span className="flex items-center gap-2">
                <MapPin size={15} />
                Apollo Hospital, Greams Road, Chennai
              </span>
              <span className="flex items-center gap-2">
                <Clock size={15} />
                Mon – Sat: 9 AM – 5 PM
              </span>
              <span className="flex items-center gap-2">
                <Phone size={15} />
                044-2829 6000
              </span>
            </div>
          </div>
        </div>

        {/* ── Conditions Treated ── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Conditions Treated</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Comprehensive cardiac care from accurate diagnosis through to long-term management.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {conditions.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors"
                    style={{ backgroundColor: ACCENT_LIGHT }}
                  >
                    <Icon size={22} style={{ color: ACCENT }} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Procedures ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Key Procedures</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Performed at accredited facilities with the highest standards of patient safety.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {procedures.map(({ title, description, duration }, i) => (
                <div
                  key={title}
                  className="rounded-2xl p-8 relative overflow-hidden"
                  style={{ backgroundColor: ACCENT_LIGHT }}
                >
                  <div
                    className="absolute top-4 right-4 text-xs font-medium px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: ACCENT }}
                  >
                    {duration}
                  </div>
                  <div
                    className="text-4xl font-bold mb-4 opacity-10 select-none"
                    style={{ color: ACCENT }}
                  >
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
                  <button
                    className="mt-6 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                    style={{ color: ACCENT }}
                  >
                    Learn more <ChevronRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">What Patients Say</h2>
              <p className="text-gray-500">Real stories from real patients.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map(({ name, age, text, rating }) => (
                <div key={name} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star key={i} size={16} fill={ACCENT} stroke="none" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic">"{text}"</p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                      style={{ backgroundColor: ACCENT_MID }}
                    >
                      {name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{name}</p>
                      <p className="text-xs text-gray-400">Patient, age {age}</p>
                    </div>
                  </div>
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
                style={{ backgroundColor: `${ACCENT}30`, color: '#6EE7B7' }}
              >
                <Zap size={12} />
                Powered by AI Automation
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Smart Patient Journey</h2>
              <p className="text-gray-400 max-w-lg mx-auto text-sm">
                From the moment a patient books, an intelligent agent handles reminders, follow-ups, and prescription
                renewals — so Dr. Menon can focus entirely on care.
              </p>
            </div>
            <AgentFlowChart workflow={workflow} />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to take charge of your heart health?</h2>
            <p className="text-gray-500 mb-8">
              Consultations are available in-person and via telehealth. Referral letters welcome.
            </p>
            <button
              className="px-8 py-4 rounded-xl text-white font-semibold text-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: ACCENT }}
            >
              Book Your Consultation
            </button>
          </div>
        </section>

      </div>
    </MockLayout>
  );
}
