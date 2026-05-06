import { MockLayout } from '../../components/MockLayout';
import { AgentFlowChart } from '../../components/AgentFlowChart';
import type { AgentWorkflow } from '../../types';
import {
  Heart,
  Home,
  Shield,
  Users,
  FileText,
  Handshake,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

const TEAL = '#2A9D8F';
const TEAL_LIGHT = '#E0F4F2';
const TEAL_MID = '#38B2A3';
const ROSE = '#E07A8A';
const BG_WARM = '#F0F9F8';
const BG_WHITE = '#FFFFFF';

const supportWorkflow: AgentWorkflow = {
  title: 'Client Support & Case Update Agent',
  nodes: [
    {
      id: '1',
      label: 'New Client Inquiry',
      description: 'A new client reaches out via the website, phone, or referral with a family law matter.',
      automated: false,
      x: 20,
      y: 40,
    },
    {
      id: '2',
      label: 'Send Acknowledgment',
      description: 'AI instantly sends a warm acknowledgment email with intake form and what to expect next.',
      automated: true,
      x: 200,
      y: 40,
    },
    {
      id: '3',
      label: 'Weekly Case Update',
      description: 'Every Monday, AI compiles a concise case status update and emails it to the client.',
      automated: true,
      x: 380,
      y: 40,
    },
    {
      id: '4',
      label: 'Court Date Reminder',
      description: 'AI sends a 7-day and 24-hour reminder before any court hearing, with a preparation checklist.',
      automated: true,
      x: 560,
      y: 40,
    },
    {
      id: '5',
      label: 'Post-Resolution Archive',
      description: 'Upon matter closure, AI generates a final summary, archives all documents, and sends a feedback survey.',
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

const services = [
  {
    icon: Heart,
    title: 'Divorce & Separation',
    description: 'Mutual consent and contested divorce proceedings handled with sensitivity and strategic clarity.',
    color: ROSE,
  },
  {
    icon: Users,
    title: 'Child Custody',
    description: 'Custody, visitation, and parenting plan negotiations centred on the best interests of your child.',
    color: TEAL,
  },
  {
    icon: Shield,
    title: 'Domestic Violence',
    description: 'Emergency protective orders, shelter guidance, and comprehensive safety planning.',
    color: '#E07A5F',
  },
  {
    icon: Home,
    title: 'Property Disputes',
    description: 'Matrimonial property division, streedhan recovery, and real estate settlement agreements.',
    color: TEAL,
  },
  {
    icon: FileText,
    title: 'Wills & Succession',
    description: 'Will drafting, legal heirship certificates, and succession planning for family assets.',
    color: ROSE,
  },
  {
    icon: Handshake,
    title: 'Mediation',
    description: 'SAMA-certified family mediator helping parties reach durable agreements outside the courtroom.',
    color: TEAL_MID,
  },
];

const faqs = [
  {
    q: 'How long does a mutual consent divorce take in India?',
    a: 'A mutual consent divorce typically takes 6 to 18 months under Section 13B of the Hindu Marriage Act, which includes a mandatory 6-month cooling-off period (though this can be waived by the court in certain circumstances). The timeline depends on the complexity of asset division and child-related matters.',
  },
  {
    q: 'What is the difference between mediation and litigation?',
    a: 'Mediation is a voluntary, confidential process where a neutral mediator helps both parties reach a mutually acceptable agreement. It is faster, less expensive, less adversarial, and preserves relationships better than court litigation — making it especially valuable when children are involved.',
  },
  {
    q: 'Can I get a protection order quickly if I am in danger?',
    a: 'Yes. Under the Protection of Women from Domestic Violence Act, 2005, a Magistrate can issue an emergency protection order on the same day as the application in urgent situations. We assist clients in filing these applications with 24-hour responsiveness.',
  },
  {
    q: 'Do you offer consultations before I decide to hire you?',
    a: 'Yes. Adv. Lakshmi Pillai offers a confidential 30-minute initial consultation (in-person or online) at a nominal fee of ₹500. This gives you a clear understanding of your legal position and options before making any commitment.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl overflow-hidden border transition-all cursor-pointer"
      style={{ borderColor: open ? TEAL : '#E2E8F0', backgroundColor: BG_WHITE }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between p-5 gap-4">
        <span className="font-semibold text-gray-800 leading-snug">{q}</span>
        <span className="flex-shrink-0" style={{ color: TEAL }}>
          {open ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </span>
      </div>
      {open && (
        <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t" style={{ borderColor: TEAL_LIGHT }}>
          <div className="pt-4">{a}</div>
        </div>
      )}
    </div>
  );
}

export default function LakshmiFamilyLaw() {
  return (
    <MockLayout projectName="Adv. Lakshmi Pillai — Family Law" accentColor={TEAL} categoryId="legal">
      <div style={{ backgroundColor: BG_WARM, color: '#1F2937' }}>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: BG_WHITE }}>
          {/* Warm wave decoration */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-20">
              <path d="M0,60 C360,100 1080,20 1440,60 L1440,100 L0,100 Z" fill={BG_WARM} />
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <div
                  className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full mb-6"
                  style={{ backgroundColor: TEAL_LIGHT, color: TEAL }}
                >
                  <Handshake size={14} />
                  Family Law & Mediation · 16 Years Experience
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  Your next chapter
                  <br />
                  begins with{' '}
                  <span style={{ color: TEAL }}>clarity.</span>
                </h1>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                  Adv. Lakshmi Pillai guides individuals and families through life's most difficult legal moments
                  with empathy, honesty, and strategic skill.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <button
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-white font-semibold transition-opacity hover:opacity-90"
                    style={{ backgroundColor: TEAL }}
                  >
                    Book a Consultation
                    <ChevronRight size={17} />
                  </button>
                  <button
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold border-2 transition-colors hover:bg-teal-50"
                    style={{ borderColor: TEAL, color: TEAL }}
                  >
                    <Phone size={16} />
                    Call Now
                  </button>
                </div>

                <div className="flex flex-wrap gap-5 text-sm text-gray-500">
                  {['High Court of Kerala', 'SAMA Certified Mediator', 'Legal Aid Panel Member', '800+ Families Helped'].map((b) => (
                    <span key={b} className="flex items-center gap-1.5">
                      <CheckCircle size={14} style={{ color: TEAL }} />
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: profile card */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-72">
                  <div
                    className="w-full rounded-3xl p-8 flex flex-col items-center text-center"
                    style={{ background: `linear-gradient(160deg, ${TEAL_LIGHT} 0%, #C8EDE9 100%)` }}
                  >
                    <div
                      className="w-28 h-28 rounded-full flex items-center justify-center text-4xl font-bold text-white mb-4"
                      style={{ backgroundColor: TEAL }}
                    >
                      LP
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Adv. Lakshmi Pillai</h3>
                    <p className="text-sm mt-1 mb-3" style={{ color: TEAL }}>B.L.S., LL.B (Hons) · MGA Mediation</p>
                    <div className="flex gap-0.5 mb-2">
                      {[1,2,3,4,5].map((s) => (
                        <Star key={s} size={14} fill={ROSE} stroke="none" />
                      ))}
                    </div>
                    <p className="text-xs text-gray-500">4.9 · 220 client reviews</p>

                    <div
                      className="mt-6 w-full rounded-2xl p-4 text-left"
                      style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
                    >
                      <p className="text-xs text-gray-500 mb-1">Next Available Slot</p>
                      <p className="font-semibold text-gray-800 text-sm">Thursday, 8 May 2025</p>
                      <p className="text-xs text-gray-400 mt-0.5">Ernakulam, Kochi / Video Call</p>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div
                    className="absolute -top-3 -right-3 rounded-2xl px-4 py-3 text-white text-center shadow-lg"
                    style={{ backgroundColor: ROSE }}
                  >
                    <p className="text-xs font-semibold opacity-90">Consultation</p>
                    <p className="text-lg font-black">₹500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-24" style={{ backgroundColor: BG_WARM }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: TEAL }}>
                Areas of Practice
              </p>
              <h2 className="text-3xl font-bold text-gray-900">How We Help</h2>
              <p className="text-gray-500 mt-3 max-w-lg mx-auto">
                From protective orders to estate planning, we handle every dimension of family law with care.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(({ icon: Icon, title, description, color }) => (
                <div
                  key={title}
                  className="rounded-2xl p-6 bg-white border border-gray-100 hover:shadow-md transition-shadow group"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${color}18` }}
                  >
                    <Icon size={22} style={{ color }} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Mediation ── */}
        <section className="py-24" style={{ backgroundColor: BG_WHITE }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: TEAL }}>
                  A Better Path
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-5">Why Choose Mediation?</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Court battles can take years, cost lakhs, and leave both parties — and especially children —
                  emotionally drained. Mediation offers a structured, private space to reach agreements that
                  courts would often impose anyway, at a fraction of the time and cost.
                </p>
                <div className="space-y-4">
                  {[
                    { label: 'Faster Resolution', detail: '3–6 months vs. 3–7 years in court', color: TEAL },
                    { label: 'Confidential', detail: 'No public record — your family\'s privacy is protected', color: ROSE },
                    { label: 'Child-Centred', detail: 'Agreements built around your children\'s needs, not legal leverage', color: TEAL_MID },
                    { label: 'Cost-Effective', detail: 'Typically 60–80% less expensive than contested litigation', color: TEAL },
                  ].map(({ label, detail, color }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${color}18` }}
                      >
                        <CheckCircle size={14} style={{ color }} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">{label} — </span>
                        <span className="text-gray-500 text-sm">{detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '75%', label: 'Matters Settled in Mediation', sub: 'Without going to trial' },
                  { value: '4.5 mo', label: 'Avg. Mediation Duration', sub: 'vs. 4+ years in court' },
                  { value: '800+', label: 'Families Supported', sub: 'Since 2009' },
                  { value: '16 yrs', label: 'Experience', sub: 'High Court of Kerala' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl p-6 text-center"
                    style={{ backgroundColor: TEAL_LIGHT }}
                  >
                    <p className="text-3xl font-black mb-1" style={{ color: TEAL }}>{stat.value}</p>
                    <p className="text-sm font-semibold text-gray-800 leading-tight">{stat.label}</p>
                    <p className="text-xs text-gray-400 mt-1">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24" style={{ backgroundColor: BG_WARM }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: TEAL }}>
                Common Questions
              </p>
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked</h2>
              <p className="text-gray-500 mt-3">
                Honest answers to the questions clients most commonly ask before their first consultation.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── AI Agent Workflow ── */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
                style={{ backgroundColor: `${TEAL}30`, color: '#6EE7E4' }}
              >
                <Zap size={12} />
                Powered by AI Automation
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Always Informed. Never Wondering.</h2>
              <p className="text-gray-400 max-w-lg mx-auto text-sm">
                Our AI support agent ensures clients always know what's happening with their case — no chasing,
                no anxiety, just clear communication at every stage.
              </p>
            </div>

            <AgentFlowChart workflow={supportWorkflow} />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20" style={{ backgroundColor: BG_WHITE }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              You don't have to face this alone.
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              The first conversation is always confidential. There's no pressure, no commitment —
              just clarity on where you stand and what your options are.
            </p>
            <button
              className="px-8 py-4 rounded-2xl font-bold text-white text-base mb-8 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: TEAL }}
            >
              Book Your ₹500 Consultation
            </button>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <a href="#" className="flex items-center gap-2 hover:text-gray-800 transition-colors">
                <Phone size={15} style={{ color: TEAL }} />
                +91 94470 12345
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-gray-800 transition-colors">
                <Mail size={15} style={{ color: TEAL }} />
                lakshmi@pillailawoffice.in
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={15} style={{ color: TEAL }} />
                MG Road, Ernakulam, Kochi
              </span>
            </div>
          </div>
        </section>

      </div>
    </MockLayout>
  );
}
